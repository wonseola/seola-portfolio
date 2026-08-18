import React, { useMemo, useState, useEffect } from "react";
import Section from "../components/Section";
import Container from "../components/Container";
import { PROJECTS } from "../data/projects";
import { Link } from "react-router-dom";
import { Github, ExternalLink, Star } from "lucide-react";
import { useLang } from "../context/LangContext";

const withBase = (path?: string) =>
  path ? `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}` : undefined;

const optimizeCloudinary = (url: string, width = 800) =>
  url.includes("res.cloudinary.com")
    ? url.replace("/upload/", `/upload/f_auto,q_auto,w_${width}/`)
    : url;

const getBase = (src?: string) => {
  if (!src) return undefined;
  const trimmed = src.trim();
  if (trimmed.startsWith("http")) return optimizeCloudinary(trimmed);
  return withBase(trimmed);
};

function Preview({ title, thumb }: { title: string; thumb?: string }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-bg">
      {thumb ? (
        <div className="relative">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-panel animate-pulse h-44 md:h-48" />
          )}
          <img
            // 세로로 긴 폰 스크린샷은 가운데를 자르면 배경만 남는다.
            // 위를 기준으로 잘라야 헤더/HUD 같은 식별 가능한 부분이 보인다.
            className={`h-44 w-full object-cover object-top md:h-48 transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            src={getBase(thumb)}
            alt={title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />
        </div>
      ) : (
        <div className="flex h-44 w-full items-center justify-center text-subtext md:h-48">
          No preview
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const { lang } = useLang();

  type FilterValue = "All" | "React" | "Game" | "AI" | "ROS/Arduino" | "Other";

  type Filter = {
    label: string;
    value: FilterValue;
    color?: string;
    hoverColor?: string;
  };
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");

  const filters: Filter[] = [
    {
      value: "All",
      label: "All",
      color: "var(--color-accent-yellow)",
      hoverColor: "#e09020",
    },
    {
      value: "React",
      label: "React",
      color: "var(--color-accent-green)",
      hoverColor: "#d44d6e",
    },
    {
      value: "Game",
      label: "Game",
      color: "var(--color-accent-cyan)",
      hoverColor: "#3ab5a0",
    },
    {
      value: "AI",
      label: "AI",
      color: "var(--color-accent-blue)",
      hoverColor: "#7b6fd4",
    },
    {
      value: "ROS/Arduino",
      label: "ROS/Arduino",
      color: "var(--color-accent-orange)",
      hoverColor: "#e0603a",
    },
    {
      value: "Other",
      label: "Other",
      color: "var(--color-accent-purple)",
      hoverColor: "#c46fd4",
    },
  ];

  const items = useMemo(() => {
    const pool =
      activeFilter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.area === activeFilter);
    // featured를 항상 앞으로. 나머지는 원래 순서 유지.
    return [...pool].sort(
      (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
    );
  }, [activeFilter]);

  const displayedItems = useMemo(() => {
    if (showAll) return items;
    return items.slice(0, 6);
  }, [items, showAll]);

  // const hasMoreItems = items.length > 6;

  // Reset showAll when filter changes
  useEffect(() => {
    setShowAll(true);
  }, [activeFilter]);

  {
    return (
      <Section id="projects" className="py-12 md:py-20">
        <Container>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Projects
            </h2>

            {/* Filter buttons */}
            <div
              className="flex flex-wrap items-center gap-3"
              onMouseLeave={() => setHoveredFilter(null)}
            >
              {filters.map((filter) => {
                const isHighlighted =
                  activeFilter === filter.value ||
                  hoveredFilter === filter.value;

                return (
                  <button
                    key={filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                    onMouseEnter={() => setHoveredFilter(filter.value)}
                    onMouseLeave={() => setHoveredFilter(null)}
                    className="rounded-xl border px-3 py-1.5 text-sm transition-all duration-300 ease-out"
                    style={{
                      borderColor: isHighlighted ? filter.color : "#f0d4db",
                      color: isHighlighted ? filter.color : "#6b4a52",
                    }}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayedItems.map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-panel transition-all hover:border-accent-yellow hover:shadow-sm hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative pt-4 px-4">
                  <Preview
                    title={p.title[lang] ?? p.title["en"]}
                    thumb={p.thumb}
                  />
                  {p.featured && (
                    <span className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full border border-accent-yellow/60 bg-panel/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-yellow backdrop-blur">
                      <Star className="size-3 fill-current" />
                      Featured
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  {/* Title */}
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-base font-medium text-accent-white transition-all">
                      {p.title[lang]}
                    </h3>
                    {p.period && (
                      <span className="ml-auto shrink-0 text-[11px] text-subtext">
                        {p.period}
                      </span>
                    )}
                  </div>

                  <div className="flex-grow">
                    {/* Blurb */}
                    <p className="mt-2 text-sm leading-relaxed text-subtext">
                      {p.blurb[lang]}
                    </p>

                    {/* Tags */}
                    {p.tags?.length ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tags.map((t, i) => {
                          const accents = [
                            "border-accent-purple text-accent-purple",
                            "border-accent-green text-accent-green",
                            "border-accent-orange text-accent-orange",
                            "border-accent-yellow text-accent-yellow",
                            "border-accent-blue text-accent-blue",
                            "border-accent-cyan text-accent-cyan",
                          ];
                          const style = accents[i % accents.length];
                          return (
                            <span
                              key={t}
                              className={`rounded-full border px-2.5 py-1 text-[11px] ${style} bg-bg`}
                            >
                              {t}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>

                  {/* Buttons/Active indicator - anchored to bottom */}
                  {(p.links?.link ||
                    p.links?.code ||
                    p.active ||
                    p.status === "In Progress") && (
                    <div className="mt-4 flex items-center gap-4 items-center">
                      {p.links?.link && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(p.links?.link, "_blank", "noreferrer");
                          }}
                          className="group inline-flex items-center gap-1 rounded-2xl border border-border px-4 py-2 text-sm font-medium text-text transition-colors text-accent-white hover:text-accent-purple hover:border-accent-purple cursor-pointer"
                        >
                          Link{" "}
                          <ExternalLink className="size-4 transition-transform" />
                        </button>
                      )}
                      {p.links?.code && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(p.links?.code, "_blank", "noreferrer");
                          }}
                          className="group inline-flex items-center gap-1 rounded-2xl border border-border px-4 py-2 text-sm font-medium text-text transition-colors text-accent-white hover:text-accent-purple hover:border-accent-purple cursor-pointer"
                        >
                          Code{" "}
                          <Github className="size-4 transition-transform" />
                        </button>
                      )}

                      {(p.active || p.status === "Active") && (
                        <span className="ml-auto inline-flex items-center gap-2 text-sm font-medium text-emerald-400 px-2">
                          <span className="relative inline-flex h-2.5 w-2.5">
                            <span
                              className="absolute inset-0 rounded-full bg-emerald-400 opacity-100 shadow-[0_0_12px_3px_rgba(16,185,129,0.9)]"
                              aria-hidden
                            />
                            <span
                              className="absolute inset-0 rounded-full bg-emerald-400/80 blur-[4px] animate-[pulse_1.5s_ease-in-out_infinite]"
                              aria-hidden
                            />
                          </span>
                          Active
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* See More Button */}
          {/* {hasMoreItems && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group inline-flex items-center gap-2 rounded-2xl border border-border px-6 py-3 text-sm font-medium text-accent-white transition-all hover:border-accent-purple hover:text-accent-purple hover:shadow-sm"
              >
                {showAll ? "Show Less" : "See More"}
                {showAll ? (
                  <ChevronUp className="size-4 transition-transform duration-200" />
                ) : (
                  <ChevronDown className="size-4 transition-transform duration-200" />
                )}
              </button>
            </div>
          )} */}
        </Container>
      </Section>
    );
  }
}
