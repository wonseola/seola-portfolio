import React, { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "../components/Section";
import Container from "../components/Container";
import { PROJECTS, type Project } from "../data/projects";
import { PROJECT_ICONS } from "../data/projectIcons";
import { Link } from "react-router-dom";
import {
  ImageOff,
  X,
  Boxes,
  Gamepad2,
  CircuitBoard,
  PenTool,
  FlaskConical,
  Star,
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

type GroupKey =
  | "selected"
  | "products"
  | "games"
  | "hardware"
  | "design"
  | "experiments";

const GROUP_ORDER: GroupKey[] = [
  // 대표작을 맨 앞 묶음으로. 목록 밖으로 빼지 않아서 필터·개수가 어긋나지 않는다.
  "selected",
  "products",
  "games",
  "hardware",
  "design",
  "experiments",
];

/** 분류마다 아이콘 하나씩. 색은 유지하되 모양이 뜻을 먼저 전한다. */
const GROUP_ICON: Record<GroupKey, { Icon: LucideIcon; color: string }> = {
  selected: { Icon: Star, color: "#b06040" },
  products: { Icon: Boxes, color: "#a8566a" },
  games: { Icon: Gamepad2, color: "#5b6bb0" },
  hardware: { Icon: CircuitBoard, color: "#a67c2c" },
  design: { Icon: PenTool, color: "#87609b" },
  experiments: { Icon: FlaskConical, color: "#3f8a7d" },
};

const GROUP_LABELS: Record<GroupKey, Record<Lang, string>> = {
  selected: {
    ko: "대표작",
    en: "Selected work",
    ja: "代表作",
    ar: "أعمال مختارة",
  },
  products: { ko: "서비스", en: "Products", ja: "サービス", ar: "منتجات" },
  games: { ko: "게임", en: "Games", ja: "ゲーム", ar: "ألعاب" },
  hardware: {
    ko: "하드웨어 · 로보틱스",
    en: "Hardware & robotics",
    ja: "ハードウェア・ロボティクス",
    ar: "عتاد وروبوتات",
  },
  design: {
    ko: "디자인 · 기획",
    en: "Design & docs",
    ja: "デザイン・企画",
    ar: "تصميم ووثائق",
  },
  experiments: {
    ko: "실습 · 습작",
    en: "Experiments",
    ja: "実習・習作",
    ar: "تجارب",
  },
};

const COPY = {
  live: { ko: "운영 중", en: "Live", ja: "運用中", ar: "قيد التشغيل" },
  noImage: { ko: "이미지 없음", en: "No image", ja: "画像なし", ar: "لا صورة" },
  archive: { ko: "분류별", en: "By category", ja: "カテゴリ別", ar: "حسب الفئة" },
  clear: { ko: "필터 해제", en: "Clear filter", ja: "フィルター解除", ar: "إزالة المرشّح" },
} satisfies Record<string, Record<Lang, string>>;

const countLabel = (n: number, lang: Lang) => (lang === "ko" ? `${n}개` : `${n}`);

/** area와 status를 묶어서 사람이 읽는 분류로 바꾼다. Study는 area보다 우선한다. */
const groupOf = (p: Project): GroupKey => {
  if (p.weight === 3) return "selected";
  if (p.status === "Study") return "experiments";
  if (p.area === "Game") return "games";
  if (p.area === "ROS/Arduino") return "hardware";
  if (p.area === "Other") return "design";
  return "products";
};

const isLive = (p: Project) => Boolean(p.active) || p.status === "Active";

const MONO = "font-mono text-[13px] font-medium";

/** 프로젝트 식별 마크. 로고가 있으면 로고, 없으면 lucide 아이콘.
    썸네일과 별개로 제목 옆에 브랜드를 한 번 더 얹는 용도. */
function ProjectMark({ p, size }: { p: Project; size: number }) {
  if (p.logo)
    return (
      <img
        src={`/logo/${p.logo}`}
        alt=""
        loading="lazy"
        style={{ width: size, height: size }}
        className="shrink-0 rounded-[5px] object-contain"
      />
    );

  const Icon = PROJECT_ICONS[p.slug];
  if (Icon)
    return (
      <Icon
        style={{ width: size * 0.8, height: size * 0.8 }}
        className="shrink-0 text-muted"
        strokeWidth={1.75}
        aria-hidden
      />
    );
  return null;
}

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
  // 대표작은 목록에서 빼내지 않고, 같은 줄 구조를 한 단계 키워서 눈에 먼저 들어오게 한다.
  // 따로 떼어두면 필터가 걸릴 때 위아래가 어긋나서 몇 개가 걸린 건지 알 수 없었다.
  const big = p.weight === 3;
  const title = p.title[lang] ?? p.title.en;
  // 칩 순서는 항상 데이터 그대로. 필터를 걸면 해당 칩을 맨 앞으로 당기던
  // 동작이 있었는데, 누를 때마다 칩이 자리를 옮겨서 오히려 헷갈렸다.
  const tags = (p.tags ?? []).slice(0, 6);

  return (
    // 호버는 배경과 테두리만. scale·translate 없음.
    <div
      className={`group relative grid gap-4 rounded-2xl border border-transparent p-4 transition-[background-color,border-color] duration-200 hover:border-border hover:bg-panel sm:gap-[22px] ${
        big
          ? "grid-cols-[128px_minmax(0,1fr)] sm:grid-cols-[210px_minmax(0,1fr)]"
          : "grid-cols-[96px_minmax(0,1fr)] sm:grid-cols-[132px_minmax(0,1fr)]"
      }`}
    >
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
        className={big ? "h-[92px] w-full sm:h-[136px]" : "h-[72px] w-full sm:h-24"}
      />

      <div className="flex min-w-0 flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2.5">
          <ProjectMark p={p} size={big ? 24 : 20} />
          <span
            className={`break-keep font-semibold leading-snug tracking-[-0.02em] text-text transition-colors group-hover:text-accent-blue ${
              big ? "text-lg sm:text-2xl" : "text-base sm:text-xl"
            }`}
          >
            {title}
          </span>
          {isLive(p) && <LiveTag lang={lang} />}
        </div>

        {/* break-keep: 한국어는 기본값이 글자 단위로 잘려서 "4자리만"이
            "4자 / 리만"처럼 갈라진다. 단어 경계에서만 줄을 넘긴다. */}
        <p
          className={`max-w-[68ch] break-keep leading-[1.6] text-subtext ${
            big ? "text-base sm:text-[17px]" : "line-clamp-2 text-[15px] sm:text-base"
          }`}
        >
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

  const { groups, shown } = useMemo(() => {
    const matches = (p: Project) =>
      !activeStack || (p.tags ?? []).includes(activeStack);

    // 대표작을 위에 따로 떼어두던 구조를 버렸다. 목록과 따로 놀아서
    // 필터를 걸면 위아래 개수가 어긋났고, 같은 프로젝트를 두 모양으로
    // 관리해야 했다. 지금은 전부 한 목록이고 대표작만 줄을 크게 잡는다.
    const grouped = GROUP_ORDER.map((key) => ({
      key,
      items: PROJECTS.filter((p) => groupOf(p) === key && matches(p)).sort(
        (a, b) => (b.weight ?? 1) - (a.weight ?? 1)
      ),
    })).filter((g) => g.items.length > 0);

    return {
      groups: grouped,
      shown: grouped.reduce((n, g) => n + g.items.length, 0),
    };
  }, [activeStack]);

  return (
    <Section id="projects" className="py-0">
      <div className="pt-16 md:pt-24">
        <Container>
          <Reveal reduceMotion={reduceMotion}>
            <div className="flex flex-wrap items-end justify-between gap-8 pb-7">
              <div className="flex flex-col gap-3.5">
                {/* 라벨이 곧 섹션 제목이다. 아래에 큰 글씨로 같은 말을 한 번 더
                    쓰고 있었는데, 중복이라 지우고 h2를 이쪽으로 옮겼다. */}
                <h2 className="font-mono text-[13px] font-medium tracking-[0.16em] text-accent-green">
                  01 — PROJECTS
                </h2>
              </div>
              <div className="flex shrink-0 items-baseline gap-2.5">
                <span className="text-5xl font-bold leading-none tracking-[-0.04em] text-text">
                  {PROJECTS.length}
                </span>
                <span className="font-mono text-sm font-medium text-subtext">
                  PROJECTS
                </span>
              </div>
            </div>
          </Reveal>

        </Container>
      </div>

      {/* 대표작을 따로 떼어놓지 않으니 층을 나눌 이유도 없어졌다.
          배경색과 제목을 걷어내고 목록 하나로 이어지게 둔다. */}
      <div className="pb-14 pt-4 md:pb-16">
        <Container>
          {/* 전체 개수는 위 헤더의 "23 PROJECTS"가 이미 말하고 있다.
              여기엔 필터가 걸렸을 때만, 해제 버튼을 겸해서 띄운다. */}
          {activeStack && (
            <Reveal reduceMotion={reduceMotion}>
              <div className="flex flex-wrap items-baseline justify-end gap-6 pb-2">
                <button
                  type="button"
                  onClick={() => setActiveStack(null)}
                  className="inline-flex items-center gap-2 rounded-full border border-text bg-text px-3.5 py-2 font-mono text-[13px] font-medium text-panel transition-colors hover:bg-text-hi"
                >
                  {activeStack} · {countLabel(shown, lang)}
                  <X className="size-3.5" />
                </button>
              </div>
            </Reveal>
          )}

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
