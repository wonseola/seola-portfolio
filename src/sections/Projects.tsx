import React, { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "../components/Section";
import Container from "../components/Container";
import { PROJECTS, type Project } from "../data/projects";
import { Link } from "react-router-dom";
import {
  Github,
  ExternalLink,
  ImageOff,
  X,
  Boxes,
  Gamepad2,
  CircuitBoard,
  PenTool,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";
import { useLang, type Lang } from "../context/LangContext";

const withBase = (path?: string) =>
  path ? `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}` : undefined;

const optimizeCloudinary = (url: string, width: number) =>
  url.includes("res.cloudinary.com")
    ? url.replace("/upload/", `/upload/f_auto,q_auto,w_${width}/`)
    : url;

const getBase = (src?: string, width = 800) => {
  if (!src) return undefined;
  const trimmed = src.trim();
  if (trimmed.startsWith("http")) return optimizeCloudinary(trimmed, width);
  return withBase(trimmed);
};

// thumb이 없는 프로젝트가 14개다. 대부분 gallery는 채워져 있으니 첫 장을 빌려 쓴다.
const coverOf = (p: Project) => p.thumb ?? p.gallery?.[0];

type GroupKey = "products" | "games" | "hardware" | "design" | "experiments";

const GROUP_ORDER: GroupKey[] = [
  "products",
  "games",
  "hardware",
  "design",
  "experiments",
];

/** 분류마다 아이콘 하나씩. 색은 유지하되 모양이 뜻을 먼저 전한다. */
const GROUP_ICON: Record<GroupKey, { Icon: LucideIcon; color: string }> = {
  products: { Icon: Boxes, color: "#a8566a" },
  games: { Icon: Gamepad2, color: "#5b6bb0" },
  hardware: { Icon: CircuitBoard, color: "#a67c2c" },
  design: { Icon: PenTool, color: "#87609b" },
  experiments: { Icon: FlaskConical, color: "#3f8a7d" },
};

const GROUP_LABELS: Record<GroupKey, Record<Lang, string>> = {
  products: { ko: "서비스", en: "Products", tr: "Ürünler", ar: "منتجات" },
  games: { ko: "게임", en: "Games", tr: "Oyunlar", ar: "ألعاب" },
  hardware: {
    ko: "하드웨어 · 로보틱스",
    en: "Hardware & robotics",
    tr: "Donanım ve robotik",
    ar: "عتاد وروبوتات",
  },
  design: {
    ko: "디자인 · 기획",
    en: "Design & docs",
    tr: "Tasarım ve dokümanlar",
    ar: "تصميم ووثائق",
  },
  experiments: {
    ko: "실습 · 습작",
    en: "Experiments",
    tr: "Denemeler",
    ar: "تجارب",
  },
};

const COPY = {
  heading: {
    ko: "만든 것들",
    en: "What I've built",
    tr: "Yaptıklarım",
    ar: "ما بنيته",
  },
  live: { ko: "운영 중", en: "Live", tr: "Yayında", ar: "قيد التشغيل" },
  noImage: { ko: "이미지 없음", en: "No image", tr: "Görsel yok", ar: "لا صورة" },
  archive: { ko: "분류별", en: "By category", tr: "Kategoriye göre", ar: "حسب الفئة" },
  clear: { ko: "필터 해제", en: "Clear filter", tr: "Filtreyi kaldır", ar: "إزالة المرشّح" },
} satisfies Record<string, Record<Lang, string>>;

const countLabel = (n: number, lang: Lang) => (lang === "ko" ? `${n}개` : `${n}`);

/** area와 status를 묶어서 사람이 읽는 분류로 바꾼다. Study는 area보다 우선한다. */
const groupOf = (p: Project): GroupKey => {
  if (p.status === "Study") return "experiments";
  if (p.area === "Game") return "games";
  if (p.area === "ROS/Arduino") return "hardware";
  if (p.area === "Other") return "design";
  return "products";
};

const isLive = (p: Project) => Boolean(p.active) || p.status === "Active";

const MONO = "font-mono text-[13px] font-medium";

function LiveTag({ lang, soft = false }: { lang: Lang; soft?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 ${MONO} text-accent-cyan ${
        soft ? "rounded-full bg-teal-soft px-2.5 py-1.5" : ""
      }`}
    >
      <span className="size-1.5 rounded-full bg-accent-cyan" aria-hidden />
      {COPY.live[lang]}
    </span>
  );
}

/**
 * 스택 칩 = 필터. 카드 전체가 링크가 아니라 제목만 링크이므로
 * 칩은 형제 노드에 놓인 평범한 button이다.
 */
function StackChip({
  tag,
  active,
  onSelect,
  size = "sm",
}: {
  tag: string;
  active: boolean;
  onSelect: (tag: string) => void;
  size?: "sm" | "md";
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={() => onSelect(tag)}
      className={`font-mono font-medium leading-none transition-colors duration-200 ${
        size === "md"
          ? "rounded-lg px-3 py-2.5 text-[13px]"
          : "rounded-md px-2.5 py-2 text-xs"
      } ${
        active
          ? "border border-text bg-text text-panel"
          : "border border-border bg-panel text-subtext hover:border-accent-blue hover:text-accent-blue"
      }`}
    >
      {tag}
    </button>
  );
}

function Cover({
  src,
  alt,
  width,
  className,
  lang,
  zoomOnGroup = false,
}: {
  src?: string;
  alt: string;
  width: number;
  className: string;
  lang: Lang;
  /** 카드 전체가 클릭 대상인 곳에서는 이미지가 아니라 그룹 호버에 반응해야 한다 */
  zoomOnGroup?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);

  if (!src) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed border-border-dash bg-bg ${className}`}
      >
        <ImageOff className="size-4 text-border-strong" aria-hidden />
        <span className="font-mono text-[10px] font-medium text-muted">
          {COPY.noImage[lang]}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`relative isolate overflow-hidden rounded-xl border border-border bg-sunken ${className}`}
    >
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-sunken" aria-hidden />
      )}
      <img
        src={getBase(src, width)}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        // 세로로 긴 폰 스크린샷은 가운데를 자르면 배경만 남는다.
        // 위를 기준으로 잘라야 헤더/HUD 같은 식별 가능한 부분이 보인다.
        // 확대는 이미지 안쪽에서만 일어나 바깥 radius가 안 깨진다.
        className={`h-full w-full object-cover object-top transition-[opacity,transform] duration-500 ease-out ${
          loaded ? "opacity-100" : "opacity-0"
        } ${
          zoomOnGroup
            ? "motion-safe:group-hover:scale-[1.04]"
            : "motion-safe:hover:scale-[1.04]"
        }`}
      />
    </div>
  );
}

function SelectedCard({
  p,
  lang,
  activeStack,
  onSelectStack,
}: {
  p: Project;
  lang: Lang;
  activeStack: string | null;
  onSelectStack: (tag: string) => void;
}) {
  const title = p.title[lang] ?? p.title.en;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[22px] border border-border bg-panel transition-colors duration-200 hover:border-border-strong">
      <Cover
        src={coverOf(p)}
        alt={title}
        width={900}
        lang={lang}
        className="h-56 w-full shrink-0 rounded-none border-0 border-b border-border md:h-[268px]"
      />

      <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2.5">
          {isLive(p) && <LiveTag lang={lang} soft />}
          {p.period && <span className={`${MONO} text-subtext`}>{p.period}</span>}
        </div>

        {/* 카드 전체가 아니라 제목만 링크. 칩을 눌러도 상세로 안 튄다. */}
        <Link
          to={`/projects/${p.slug}`}
          className="text-2xl font-bold leading-tight tracking-[-0.03em] text-text transition-colors hover:text-accent-blue md:text-[30px]"
        >
          {title}
        </Link>

        <p className="max-w-[42ch] text-[17px] leading-[1.65] text-subtext">
          {p.blurb[lang] ?? p.blurb.en}
        </p>

        {p.metrics?.length ? (
          <dl className="mt-auto grid grid-cols-3 gap-3 rounded-2xl bg-sunken p-5">
            {p.metrics.slice(0, 3).map((m) => (
              <div key={m.value} className="flex flex-col gap-1.5">
                <dd className="text-2xl font-bold leading-none tracking-[-0.03em] text-text">
                  {m.value}
                </dd>
                <dt className="text-[13px] leading-snug text-subtext">
                  {m.label[lang] ?? m.label.en}
                </dt>
              </div>
            ))}
          </dl>
        ) : null}

        <div className="flex flex-wrap items-center gap-2">
          {p.tags?.slice(0, 6).map((t) => (
            <StackChip
              key={t}
              tag={t}
              size="md"
              active={activeStack === t}
              onSelect={onSelectStack}
            />
          ))}
          <span className="ms-auto flex shrink-0 items-center gap-2">
            {p.links?.link && (
              <a
                href={p.links.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} — link`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2.5 font-mono text-[13px] font-medium text-subtext transition-colors hover:border-accent-blue hover:text-accent-blue"
              >
                Link <ExternalLink className="size-3.5" />
              </a>
            )}
            {p.links?.code && (
              <a
                href={p.links.code}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} — code`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2.5 font-mono text-[13px] font-medium text-subtext transition-colors hover:border-accent-blue hover:text-accent-blue"
              >
                Code <Github className="size-3.5" />
              </a>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

function ProjectRow({
  p,
  lang,
  activeStack,
  onSelectStack,
}: {
  p: Project;
  lang: Lang;
  activeStack: string | null;
  onSelectStack: (tag: string) => void;
}) {
  const title = p.title[lang] ?? p.title.en;
  const all = p.tags ?? [];
  // 필터가 걸려 있으면 그 스택이 3개 밖으로 밀려도 반드시 보이게 앞으로 당긴다
  const tags =
    activeStack && all.includes(activeStack)
      ? [activeStack, ...all.filter((t) => t !== activeStack)].slice(0, 6)
      : all.slice(0, 6);

  return (
    // 호버는 배경과 테두리만. scale·translate 없음.
    <div className="group relative grid grid-cols-[96px_minmax(0,1fr)] gap-4 rounded-2xl border border-transparent p-4 transition-[background-color,border-color] duration-200 hover:border-border hover:bg-panel sm:grid-cols-[132px_minmax(0,1fr)] sm:gap-[22px]">
      {/* 카드 전체를 덮는 투명 링크. 칩은 아래에서 z-10으로 이 위에 얹어
          링크 안에 버튼이 들어가지 않으면서도 카드 아무 데나 눌러 이동한다. */}
      <Link
        to={`/projects/${p.slug}`}
        aria-label={title}
        className="absolute inset-0 z-[1] rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      />

      <Cover
        src={coverOf(p)}
        alt={title}
        width={320}
        lang={lang}
        zoomOnGroup
        className="h-[72px] w-full sm:h-24"
      />

      <div className="flex min-w-0 flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-base font-semibold leading-snug tracking-[-0.02em] text-text transition-colors group-hover:text-accent-blue sm:text-xl">
            {title}
          </span>
          {isLive(p) && <LiveTag lang={lang} />}
        </div>

        <p className="line-clamp-2 max-w-[68ch] text-[15px] leading-[1.6] text-subtext sm:text-base">
          {p.blurb[lang] ?? p.blurb.en}
        </p>

        {tags.length > 0 && (
          <div className="relative z-[2] flex flex-wrap gap-1.5 pt-0.5">
            {tags.map((t) => (
              <StackChip
                key={t}
                tag={t}
                active={activeStack === t}
                onSelect={onSelectStack}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Reveal({
  children,
  reduceMotion,
  delay = 0,
}: {
  children: React.ReactNode;
  reduceMotion: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: reduceMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  const { lang } = useLang();
  const reduceMotion = Boolean(useReducedMotion());
  const [activeStack, setActiveStack] = useState<string | null>(null);

  const toggleStack = (tag: string) =>
    setActiveStack((cur) => (cur === tag ? null : tag));

  const { selected, groups, shown, archiveTotal } = useMemo(() => {
    const selected = PROJECTS.filter((p) => p.weight === 3);
    const rest = PROJECTS.filter((p) => p.weight !== 3);
    const matches = (p: Project) =>
      !activeStack || (p.tags ?? []).includes(activeStack);

    const grouped = GROUP_ORDER.map((key) => ({
      key,
      items: rest
        .filter((p) => groupOf(p) === key && matches(p))
        .sort((a, b) => (b.weight ?? 1) - (a.weight ?? 1)),
    })).filter((g) => g.items.length > 0);

    return {
      selected,
      groups: grouped,
      shown: grouped.reduce((n, g) => n + g.items.length, 0),
      archiveTotal: rest.length,
    };
  }, [activeStack]);

  return (
    <Section id="projects" className="py-0">
      <div className="pt-16 md:pt-24">
        <Container>
          <Reveal reduceMotion={reduceMotion}>
            <div className="flex flex-wrap items-end justify-between gap-8 border-b border-border pb-7">
              <div className="flex flex-col gap-3.5">
                <span className="font-mono text-[13px] font-medium tracking-[0.16em] text-accent-green">
                  01 — PROJECTS
                </span>
                <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-text md:text-[52px]">
                  {COPY.heading[lang]}
                </h2>
              </div>
              <div className="flex shrink-0 items-baseline gap-2.5">
                <span className="text-6xl font-bold leading-[0.9] tracking-[-0.05em] text-text md:text-[76px]">
                  {PROJECTS.length}
                </span>
                <span className="pb-2 font-mono text-sm font-medium text-subtext">
                  PROJECTS
                </span>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-7 md:grid-cols-2">
            {selected.map((p, i) => (
              <Reveal key={p.slug} reduceMotion={reduceMotion} delay={i * 0.06}>
                <SelectedCard
                  p={p}
                  lang={lang}
                  activeStack={activeStack}
                  onSelectStack={toggleStack}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      {/* 아카이브는 한 톤 내려간 바닥 위에 얹어서 대표 작업과 층을 나눈다 */}
      <div className="mt-16 border-t border-border bg-sunken py-14 md:mt-[72px] md:py-16">
        <Container>
          <Reveal reduceMotion={reduceMotion}>
            <div className="flex flex-wrap items-baseline justify-between gap-6 pb-8">
              <h3 className="text-2xl font-bold tracking-[-0.025em] text-text">
                {COPY.archive[lang]} {countLabel(archiveTotal, lang)}
              </h3>
              {/* 필터 바를 없앴으니 해제 수단은 여기 하나만 남는다 */}
              {activeStack ? (
                <button
                  type="button"
                  onClick={() => setActiveStack(null)}
                  className="inline-flex items-center gap-2 rounded-full border border-text bg-text px-3.5 py-2 font-mono text-[13px] font-medium text-panel transition-colors hover:bg-text-hi"
                >
                  {activeStack} · {countLabel(shown, lang)}
                  <X className="size-3.5" />
                </button>
              ) : (
                <span className="font-mono text-[13px] font-medium text-subtext">
                  {countLabel(shown, lang)}
                </span>
              )}
            </div>
          </Reveal>

          {groups.map((g) => (
            <Reveal key={g.key} reduceMotion={reduceMotion}>
              <div className="grid gap-6 border-t border-border py-7 md:grid-cols-[232px_minmax(0,1fr)] md:gap-8">
                {/* 분류 헤더는 스크롤 동안 붙어 있어서 어느 묶음을 보는지 안 잃는다 */}
                <div className="flex flex-col gap-2.5 self-start md:sticky md:top-6">
                  <div className="flex items-center gap-2.5">
                    {(() => {
                      const { Icon, color } = GROUP_ICON[g.key];
                      return (
                        <Icon
                          className="size-[18px] shrink-0"
                          style={{ color }}
                          strokeWidth={1.75}
                          aria-hidden
                        />
                      );
                    })()}
                    <span className="text-lg font-semibold tracking-[-0.02em] text-text">
                      {GROUP_LABELS[g.key][lang]}
                    </span>
                  </div>
                  <span className="ps-7 font-mono text-[13px] font-medium text-subtext">
                    {countLabel(g.items.length, lang)}
                  </span>
                </div>

                <div className="flex flex-col">
                  {g.items.map((p) => (
                    <ProjectRow
                      key={p.slug}
                      p={p}
                      lang={lang}
                      activeStack={activeStack}
                      onSelectStack={toggleStack}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </div>
    </Section>
  );
}
