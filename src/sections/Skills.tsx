import React, { useMemo, useState } from "react";
import Section from "../components/Section";
import Container from "../components/Container";
import { CORE_STACK, SKILL_GROUPS, SKILLS_COPY } from "../data/skills";
import type { SkillLevel } from "../data/skills";
import { PROJECTS } from "../data/projects";
import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";

const ACCENT_HEX: Record<string, string> = {
  "accent-blue": "#7b6fd4",
  "accent-green": "#d44d6e",
  "accent-yellow": "#e09020",
  "accent-orange": "#e0603a",
  "accent-purple": "#c46fd4",
  "accent-cyan": "#3ab5a0",
};

const LEVEL_STYLE: Record<SkillLevel, { fill: number; weight: string }> = {
  core: { fill: 0.14, weight: "font-semibold" },
  strong: { fill: 0.07, weight: "font-medium" },
  working: { fill: 0, weight: "font-normal" },
};

function hexToRgba(hex: string, alpha: number) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}

export default function Skills() {
  const { lang } = useLang();
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
      if (found) return { skill: found, accent: ACCENT_HEX[g.accent] };
    }
    return null;
  }, [active]);

  const linkedProjects = useMemo(
    () =>
      (activeSkill?.skill.used ?? []).filter((slug) => projectTitles.has(slug)),
    [activeSkill, projectTitles]
  );

  return (
    <Section id="skills" className="py-12 md:py-20">
      <Container>
        {/* Heading */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {SKILLS_COPY.title[lang] ?? SKILLS_COPY.title.en}
          </h2>
          <p
            className={`max-w-2xl text-sm leading-relaxed text-subtext ${
              lang === "ar" ? "text-right" : "text-left"
            }`}
          >
            {SKILLS_COPY.subtitle[lang] ?? SKILLS_COPY.subtitle.en}
          </p>
        </div>

        {/* Core stack — the loud row */}
        <div className="mt-8">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-subtext">
              {SKILLS_COPY.coreLabel[lang] ?? SKILLS_COPY.coreLabel.en}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_STACK.map((s, i) => {
              const hex = Object.values(ACCENT_HEX)[i % 6];
              return (
                <div
                  key={s.name}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-panel p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
                  style={{ borderColor: hexToRgba(hex, 0.35) }}
                >
                  {/* gradient wash */}
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
                    style={{ background: hex }}
                    aria-hidden
                  />
                  <div className="relative">
                    <p
                      className="text-base font-semibold tracking-tight"
                      style={{ color: hex }}
                    >
                      {s.name}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-subtext">
                      {s.note[lang] ?? s.note.en}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-10 flex flex-wrap items-center gap-4 text-[11px] text-subtext">
          {(["core", "strong", "working"] as SkillLevel[]).map((lv) => (
            <span key={lv} className="inline-flex items-center gap-1.5">
              <span
                className="inline-block h-3 w-3 rounded-full border"
                style={{
                  borderColor: "#c46fd4",
                  background: hexToRgba("#c46fd4", LEVEL_STYLE[lv].fill * 3),
                }}
                aria-hidden
              />
              {SKILLS_COPY.legend[lv][lang] ?? SKILLS_COPY.legend[lv].en}
            </span>
          ))}
        </div>

        {/* Groups */}
        <div className="mt-4 grid gap-5 md:grid-cols-2">
          {SKILL_GROUPS.map((g) => {
            const hex = ACCENT_HEX[g.accent];
            return (
              <div
                key={g.id}
                className="group relative overflow-hidden rounded-3xl border border-border bg-panel p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm md:p-6"
                onMouseLeave={() => setActive(null)}
              >
                {/* corner glow */}
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: hex }}
                  aria-hidden
                />

                <div className="relative flex items-start gap-3">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border text-lg"
                    style={{
                      borderColor: hexToRgba(hex, 0.4),
                      background: hexToRgba(hex, 0.08),
                    }}
                    aria-hidden
                  >
                    {g.icon}
                  </span>
                  <div className="min-w-0">
                    <h3
                      className="text-base font-semibold tracking-tight"
                      style={{ color: hex }}
                    >
                      {g.label[lang] ?? g.label.en}
                    </h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-subtext">
                      {g.caption[lang] ?? g.caption.en}
                    </p>
                  </div>
                  <span className="ml-auto shrink-0 rounded-full border border-border px-2 py-0.5 text-[10px] text-subtext">
                    {g.skills.length}
                  </span>
                </div>

                <div className="relative mt-4 flex flex-wrap gap-2">
                  {g.skills.map((s) => {
                    const st = LEVEL_STYLE[s.level];
                    const isActive = active === s.name;
                    return (
                      <button
                        key={s.name}
                        type="button"
                        onMouseEnter={() => setActive(s.name)}
                        onFocus={() => setActive(s.name)}
                        onClick={() => setActive(s.name)}
                        aria-expanded={isActive}
                        className={`rounded-full border px-2.5 py-1 text-[11px] leading-none transition-all duration-200 ${st.weight} ${
                          isActive ? "-translate-y-0.5" : ""
                        }`}
                        style={{
                          borderColor: hexToRgba(hex, s.level === "working" ? 0.3 : 0.55),
                          color: hex,
                          background: hexToRgba(hex, isActive ? 0.2 : st.fill),
                          boxShadow: isActive
                            ? `0 4px 14px ${hexToRgba(hex, 0.3)}`
                            : "none",
                        }}
                      >
                        {s.name}
                      </button>
                    );
                  })}
                </div>

                {/* Related projects for the hovered/tapped skill */}
                {activeSkill && g.skills.some((s) => s.name === active) ? (
                  <div className="relative mt-4 rounded-2xl border border-border bg-bg/60 p-3">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-subtext">
                      {lang === "ko"
                        ? "이 스킬을 쓴 프로젝트"
                        : lang === "tr"
                        ? "Bu yeteneği kullanan projeler"
                        : lang === "ar"
                        ? "مشاريع تستخدم هذه المهارة"
                        : "Projects using this"}
                    </p>
                    {linkedProjects.length ? (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {linkedProjects.map((slug) => (
                          <Link
                            key={slug}
                            to={`/projects/${slug}`}
                            className="rounded-full border border-border bg-panel px-2.5 py-1 text-[11px] text-subtext transition-colors hover:border-accent-purple hover:text-accent-purple"
                          >
                            {projectTitles.get(slug)}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-2 text-[11px] text-subtext">
                        {lang === "ko"
                          ? "특정 프로젝트에 묶이지 않고 작업 전반에 쓰고 있어요"
                          : lang === "tr"
                          ? "Tek bir projeye bağlı değil, işin geneline yayılıyor"
                          : lang === "ar"
                          ? "ليست مرتبطة بمشروع بعينه، بل تمتد عبر العمل كله"
                          : "Not tied to one project — it runs through all of the work"}
                      </p>
                    )}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
