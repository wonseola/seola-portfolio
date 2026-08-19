import React, { useMemo, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Section from "../components/Section";
import Container from "../components/Container";
import { SKILL_GROUPS, SKILLS_COPY } from "../data/skills";
import type { SkillLevel } from "../data/skills";
import { PROJECTS } from "../data/projects";
import { Link } from "react-router-dom";
import {
  X,
  AppWindow,
  Database,
  Smartphone,
  Cloud,
  ShieldCheck,
  TrendingUp,
  Gamepad2,
  BrainCircuit,
  CircuitBoard,
  PenTool,
  type LucideIcon,
} from "lucide-react";
import { useLang, type Lang } from "../context/LangContext";

const ACCENT_HEX: Record<string, string> = {
  "accent-blue": "#5b6bb0",
  "accent-green": "#a8566a",
  "accent-yellow": "#a67c2c",
  "accent-orange": "#b06040",
  "accent-purple": "#87609b",
  "accent-cyan": "#3f8a7d",
};

/**
 * 숙련도를 색이 아니라 칩의 무게로 표현한다.
 * 주력은 꽉 찬 검정, 능숙은 옅은 판, 경험은 점선 — 색을 안 써서
 * 분류 점 색과 충돌하지 않는다.
 */
const LEVEL_CHIP: Record<SkillLevel, string> = {
  core: "border border-text bg-text text-panel hover:bg-text-hi hover:border-text-hi",
  strong: "border border-border bg-hairline text-text hover:border-border-strong",
  working:
    "border border-dashed border-border-dash bg-transparent text-subtext hover:border-muted hover:text-text",
};

const LEVEL_ORDER: SkillLevel[] = ["core", "strong", "working"];

/** 그룹 id → 아이콘. 이모지보다 선이 가늘어서 제목 옆에서 안 튄다. */
const GROUP_ICON: Record<string, LucideIcon> = {
  frontend: AppWindow,
  backend: Database,
  mobile: Smartphone,
  infra: Cloud,
  quality: ShieldCheck,
  growth: TrendingUp,
  game: Gamepad2,
  ai: BrainCircuit,
  hardware: CircuitBoard,
  design: PenTool,
};

const COPY = {
  heading: {
    ko: "할 수 있는 것",
    en: "What I can do",
    tr: "Yapabildiklerim",
    ar: "ما أستطيع فعله",
  },
  usedIn: {
    ko: "이 스킬을 쓴 프로젝트",
    en: "Projects using this",
    tr: "Bu yeteneği kullanan projeler",
    ar: "مشاريع تستخدم هذه المهارة",
  },
  noProject: {
    ko: "특정 프로젝트에 묶이지 않고 작업 전반에 쓰고 있어요",
    en: "Not tied to one project — it runs through all of the work",
    tr: "Tek bir projeye bağlı değil, işin geneline yayılıyor",
    ar: "ليست مرتبطة بمشروع بعينه، بل تمتد عبر العمل كله",
  },
  close: { ko: "닫기", en: "Close", tr: "Kapat", ar: "إغلاق" },
} satisfies Record<string, Record<Lang, string>>;

const countLabel = (n: number, lang: Lang) => (lang === "ko" ? `${n}개` : `${n}`);

export default function Skills() {
  const { lang } = useLang();
  const reduceMotion = Boolean(useReducedMotion());
  const [active, setActive] = useState<string | null>(null);

  const projectTitles = useMemo(() => {
    const map = new Map<string, string>();
    PROJECTS.forEach((p) => map.set(p.slug, p.title[lang] ?? p.title.en));
    return map;
  }, [lang]);

  const activeSkill = useMemo(() => {
    if (!active) return null;
    for (const g of SKILL_GROUPS) {
      const found = g.skills.find((s) => s.name === active);
      if (found) return found;
    }
    return null;
  }, [active]);

  const linkedProjects = useMemo(
    () => (activeSkill?.used ?? []).filter((slug) => projectTitles.has(slug)),
    [activeSkill, projectTitles]
  );

  const totalSkills = useMemo(
    () => SKILL_GROUPS.reduce((n, g) => n + g.skills.length, 0),
    []
  );

  return (
    <Section id="skills" className="py-16 md:py-24">
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-wrap items-end justify-between gap-8 pb-9">
            <div className="flex flex-col gap-3.5">
              <span className="font-mono text-[13px] font-medium tracking-[0.16em] text-accent-blue">
                02 — SKILLS
              </span>
              <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-text md:text-[52px]">
                {COPY.heading[lang]}
              </h2>
              <p className="max-w-[46ch] text-[17px] leading-relaxed text-subtext">
                {SKILLS_COPY.subtitle[lang] ?? SKILLS_COPY.subtitle.en}
              </p>
            </div>

            <div className="flex shrink-0 items-baseline gap-2.5">
              <span className="text-5xl font-bold leading-none tracking-[-0.04em] text-text">
                {totalSkills}
              </span>
              <span className="font-mono text-sm font-medium text-subtext">
                SKILLS
              </span>
            </div>
          </div>
        </motion.div>

        {/* 카드를 버리고 프로젝트 아카이브와 같은 목록 구조로.
            테두리·패딩이 사라지고 높이를 맞출 일도 없어서 빈 공간이 안 생긴다. */}
        {SKILL_GROUPS.map((g, gi) => {
          const dot = ACCENT_HEX[g.accent];
          const openHere = g.skills.some((s) => s.name === active);

          return (
            <motion.div
              key={g.id}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: reduceMotion ? 0 : Math.min(gi * 0.04, 0.2),
              }}
              className="grid gap-3 border-t border-border py-4 md:grid-cols-[232px_minmax(0,1fr)] md:gap-8"
            >
              <div className="flex flex-col gap-2 self-start md:sticky md:top-6">
                <div className="flex items-center gap-2.5">
                  {(() => {
                    const Icon = GROUP_ICON[g.id] ?? AppWindow;
                    return (
                      <Icon
                        className="size-[18px] shrink-0"
                        style={{ color: dot }}
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    );
                  })()}
                  <span className="text-lg font-semibold tracking-[-0.02em] text-text">
                    {g.label[lang] ?? g.label.en}
                  </span>
                  <span className="font-mono text-[13px] font-medium text-subtext">
                    {countLabel(g.skills.length, lang)}
                  </span>
                </div>
                <p className="ps-7 text-[13px] leading-relaxed text-subtext">
                  {g.caption[lang] ?? g.caption.en}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {/* 숙련도를 칩 모양으로만 암시하면 매번 범례를 찾아봐야 한다.
                    줄 앞에 라벨을 직접 박아서 해석이 필요 없게 만든다. */}
                <div className="flex flex-col gap-1.5">
                  {LEVEL_ORDER.map((lv) => {
                    const items = g.skills.filter((s) => s.level === lv);
                    if (items.length === 0) return null;

                    return (
                      <div
                        key={lv}
                        className="grid grid-cols-[44px_minmax(0,1fr)] items-start gap-2"
                      >
                        <span className="pt-1.5 font-mono text-[11px] font-medium tracking-wide text-muted">
                          {SKILLS_COPY.legend[lv][lang] ??
                            SKILLS_COPY.legend[lv].en}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {items.map((s) => (
                            <button
                              key={s.name}
                              type="button"
                              aria-pressed={active === s.name}
                              onClick={() =>
                                setActive((cur) =>
                                  cur === s.name ? null : s.name
                                )
                              }
                              className={`rounded-md px-2.5 py-1.5 font-mono text-[13px] font-medium leading-none transition-colors duration-200 ${
                                LEVEL_CHIP[s.level]
                              } ${
                                active === s.name
                                  ? "ring-2 ring-accent-blue ring-offset-2 ring-offset-bg"
                                  : ""
                              }`}
                            >
                              {s.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <AnimatePresence initial={false}>
                  {openHere && (
                    <motion.div
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-2.5 rounded-2xl border border-border bg-panel p-5">
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-mono text-xs font-medium tracking-[0.1em] text-subtext">
                            {COPY.usedIn[lang]} — {active}
                          </span>
                          <button
                            type="button"
                            onClick={() => setActive(null)}
                            className="inline-flex items-center gap-1 font-mono text-xs font-medium text-subtext transition-colors hover:text-text"
                          >
                            {COPY.close[lang]} <X className="size-3" />
                          </button>
                        </div>

                        {linkedProjects.length ? (
                          <div className="flex flex-wrap gap-2">
                            {linkedProjects.map((slug) => (
                              <Link
                                key={slug}
                                to={`/projects/${slug}`}
                                className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg px-3 py-2 text-sm font-medium text-text transition-colors hover:border-accent-blue hover:text-accent-blue"
                              >
                                <span
                                  className="size-1.5 shrink-0 rounded-full"
                                  style={{ backgroundColor: dot }}
                                  aria-hidden
                                />
                                {projectTitles.get(slug)}
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <p className="text-[13px] leading-relaxed text-subtext">
                            {COPY.noProject[lang]}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </Container>
    </Section>
  );
}
