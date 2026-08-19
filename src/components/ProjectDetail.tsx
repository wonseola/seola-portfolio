import React, { useMemo, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Section from "../components/Section";
import { PROJECTS } from "../data/projects";
import { ArrowLeft, ExternalLink, Github, CalendarDays, UserRound } from "lucide-react";
import { useLang } from "../context/LangContext";
import RichText from "./RichText";

const withBase = (path?: string) =>
  path ? `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}` : undefined;

const optimizeCloudinary = (url: string, width = 1200) =>
  url.includes("res.cloudinary.com")
    ? url.replace("/upload/", `/upload/f_auto,q_auto,w_${width}/`)
    : url;

const getBase = (src?: string) => {
  if (!src) return undefined;
  const trimmed = src.trim();
  if (trimmed.startsWith("http")) return optimizeCloudinary(trimmed);
  return withBase(trimmed);
};
// Helper function to extract YouTube video ID from URL or return ID if already provided
const getYouTubeVideoId = (input: string): string => {
  // If it's already a video ID (11 characters, alphanumeric + hyphens/underscores)
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) {
    return input;
  }

  // Extract from various YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = input.match(pattern);
    if (match) return match[1];
  }

  return input; // Return as-is if no pattern matches
};

const METRIC_COLORS = [
  "#a8566a",
  "#5b6bb0",
  "#a67c2c",
  "#3f8a7d",
  "#87609b",
  "#b06040",
];

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = useMemo(() => PROJECTS.find((p) => p.slug === slug), [slug]);
  const { lang } = useLang();
  const navigate = useNavigate();
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; type: "image" | "video" } | null>(null);

  const TAG_CLASSES = [
    "border-accent-blue text-accent-blue",
    "border-accent-green text-accent-green",
    "border-accent-yellow text-accent-yellow",
    "border-accent-orange text-accent-orange",
    "border-accent-purple text-accent-purple",
    "border-accent-cyan text-accent-cyan",
  ];

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const goBack = () => {
    navigate(-1);
  };

  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!project) {
    return (
      <Section id="project-detail-not-found">
        <Container>
          <p className="text-subtext">Project not found.</p>
          <Link
            to="/"
            className="mt-4 inline-flex items-center gap-1 text-accent-yellow hover:text-accent-yellow hover:underline"
          >
            <ArrowLeft className="size-4" /> Back to home
          </Link>
        </Container>
      </Section>
    );
  }

  return (
    <>
    {lightbox && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={() => setLightbox(null)}
      >
        {lightbox.type === "video" ? (
          <video
            src={lightbox.src}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
            controls
            autoPlay
            muted
            playsInline
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <img
            src={lightbox.src}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        )}
        <button
          className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl leading-none"
          onClick={() => setLightbox(null)}
        >✕</button>
      </div>
    )}
    <Section
      id={`project-detail-${slug ?? "unknown"}`}
      className="relative py-12 md:py-20"
    >
      <Container>
        {/* mouse glow under content */}
        <div className="pointer-events-none fixed inset-0 z-0">
          <div
            className="absolute h-[560px] w-[560px] rounded-full blur-3xl"
            style={{
              top: pos.y,
              left: pos.x,
              transform: "translate(-50%, -50%)",
              background: `radial-gradient(600px, rgba(212,77,110,0.1), transparent 80%)`,
            }}
          />
        </div>

        <div className="relative z-10 rounded-3xl border border-border bg-panel p-5 md:p-8">
          <div className="mb-6">
            <button
              onClick={goBack}
              className="group inline-flex items-center gap-1 rounded-2xl border border-border px-4 py-2 text-sm font-medium text-text transition-colors text-accent-white hover:text-accent-yellow hover:border-accent-yellow"
            >
              <ArrowLeft className="size-4" /> Back
            </button>
          </div>

          {/* Header row */}
          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {project.title[lang]}
              </h1>

              {/* Tags */}
              {project.tags?.length && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((t, i) => (
                    <span
                      key={t}
                      className={`rounded-full border ${
                        TAG_CLASSES[i % TAG_CLASSES.length]
                      } bg-bg px-2.5 py-1 text-[11px]`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Top-right links: Live / Code */}
            <div className="mb-3 flex items-center gap-4 md:absolute md:right-8 md:top-8 md:mt-0 ">
              {project.links?.link && (
                <a
                  href={project.links.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 rounded-2xl border border-border px-4 py-2 text-sm font-medium text-text transition-colors text-accent-white hover:text-accent-yellow hover:border-accent-yellow"
                >
                  Live{" "}
                  <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              )}
              {project.links?.code && (
                <a
                  href={project.links.code}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 rounded-2xl border border-border px-4 py-2 text-sm font-medium text-text transition-colors text-accent-white hover:text-accent-yellow hover:border-accent-yellow"
                >
                  Code{" "}
                  <Github className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              )}
            </div>
          </div>

          {/* Hero media */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-panel">
            {project.youtubeVideo ? (
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                    project.youtubeVideo
                  )}`}
                  title={`${project.title} video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : project.mainVideo ? (
              <video
                className="h-[340px] sm:h-[420px] md:h-[500px] w-full object-contain"
                muted
                playsInline
                controls
                preload="metadata"
                poster={project.thumb ? getBase(project.thumb) : undefined}
                src={getBase(project.mainVideo)}
              />
            ) : project.thumb ? (
              <div className="relative h-[340px] overflow-hidden sm:h-[420px] md:h-[500px]">
                {!heroLoaded && (
                  <div className="absolute inset-0 bg-bg animate-pulse rounded-2xl" />
                )}
                {/* 세로로 긴 폰 스크린샷은 object-contain 하면 양옆이 텅 빈다.
                    같은 이미지를 크게 흐려서 뒤에 깔아 여백을 메운다. */}
                <img
                  aria-hidden
                  src={getBase(project.thumb)}
                  alt=""
                  className={`absolute inset-0 h-full w-full scale-110 object-cover blur-2xl transition-opacity duration-500 ${
                    heroLoaded ? "opacity-40" : "opacity-0"
                  }`}
                />
                <img
                  className={`relative h-full w-full object-contain transition-opacity duration-300 ${
                    heroLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  src={getBase(project.thumb)}
                  alt={`${project.title[lang] ?? project.title.en} hero`}
                  onLoad={() => setHeroLoaded(true)}
                />
              </div>
            ) : (
              <div className="flex h-[340px] items-center justify-center text-subtext">
                No preview
              </div>
            )}
          </div>

          {/* Metrics — the loud numbers under the hero */}
          {project.metrics?.length ? (
            <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {project.metrics.map((m, i) => {
                const hex = METRIC_COLORS[i % METRIC_COLORS.length];
                return (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-bg/60 p-4 transition-all duration-300 hover:-translate-y-0.5"
                    style={{ borderColor: `${hex}55` }}
                  >
                    <div
                      className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
                      style={{ background: hex }}
                      aria-hidden
                    />
                    <p
                      className="relative text-2xl font-semibold tracking-tight"
                      style={{ color: hex }}
                    >
                      {m.value}
                    </p>
                    <p className="relative mt-1 text-[11px] leading-snug text-subtext">
                      {m.label[lang] ?? m.label.en}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : null}

          {/* Period / Role */}
          {(project.period || project.role) && (
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-subtext">
              {project.period && (
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-4 text-accent-yellow" />
                  {project.period}
                </span>
              )}
              {project.role && (
                <span className="inline-flex items-center gap-1.5">
                  <UserRound className="size-4 text-accent-cyan" />
                  {project.role[lang] ?? project.role.en}
                </span>
              )}
            </div>
          )}

          {/* Body */}
          {project.body?.[lang] && (
            <RichText
              className="mt-7"
              text={project.body[lang]}
              rtl={lang === "ar"}
            />
          )}

          {/* Stack breakdown */}
          {project.stack?.length ? (
            <div className="mt-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-subtext">
                {lang === "ko"
                  ? "기술 스택"
                  : lang === "tr"
                  ? "Teknoloji Yığını"
                  : lang === "ar"
                  ? "التقنيات المستخدمة"
                  : "Tech stack"}
              </h2>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {project.stack.map((s, i) => {
                  const hex = METRIC_COLORS[i % METRIC_COLORS.length];
                  return (
                    <div
                      key={i}
                      className="rounded-2xl border border-border bg-bg/50 p-4"
                    >
                      <p
                        className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: hex }}
                      >
                        {s.group[lang] ?? s.group.en}
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {s.items.map((it) => (
                          <span
                            key={it}
                            className="rounded-lg border border-border bg-panel px-2 py-1 text-[11px] text-subtext"
                          >
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}

          {/* Gallery (masonry) */}
          {project.gallery?.length ? (
            <div
              className={`mt-8 columns-1 gap-4 [column-fill:balance] ${
                project.galleryLayout === "wide"
                  ? "lg:columns-2"
                  : "sm:columns-2 lg:columns-3"
              }`}
            >
              {project.gallery.map((g, idx) => {
                const isVideo =
                  g.endsWith(".mp4") ||
                  g.endsWith(".webm") ||
                  g.endsWith(".mov");
                const isImage =
                  g.endsWith(".jpg") ||
                  g.endsWith(".jpeg") ||
                  g.endsWith(".png") ||
                  g.endsWith(".gif") ||
                  g.endsWith(".webp") ||
                  g.endsWith(".svg");
                const commonClass =
                  "mb-4 w-full rounded-2xl border border-border bg-bg/50 object-cover hover:opacity-90 transition-opacity";
                return isVideo ? (
                  <div
                    key={idx}
                    className="group relative inline-block w-full break-inside-avoid cursor-pointer"
                    onClick={() => setLightbox({ src: getBase(g)!, type: "video" })}
                  >
                    <video
                      src={getBase(g)}
                      className={`${commonClass} pointer-events-none`}
                      muted
                      playsInline
                      preload="none"
                      poster={project.thumb ? getBase(project.thumb) : undefined}
                    />
                    {/* dim overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    {/* play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/20 backdrop-blur-md shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                        <svg className="h-7 w-7 translate-x-0.5 text-white drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    {/* video badge */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-white/90">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      VIDEO
                    </div>
                  </div>
                ) : (
                  <div
                    key={idx}
                    className="inline-block w-full break-inside-avoid cursor-zoom-in"
                    onClick={() => setLightbox({ src: getBase(g)!, type: "image" })}
                  >
                    <img
                      src={getBase(g)}
                      className={commonClass}
                      alt={`${project.title} gallery ${idx + 1}`}
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
    </>
  );
}
