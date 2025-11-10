import React from "react";
const GLITCH_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*+-_=:;<>/?";
import Section from "../components/Section";
import Container from "../components/Container";
import avatarFile from "../assets/12.jpeg";
// import { Download } from "lucide-react";
import { PROFILE } from "../data/links";
import TypingEffect from "../components/TypingEffect";
import { useLang } from "../context/LangContext";

// const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

function useGlitchCycle(messages: string[], dwellMs = 2000, scrambleMs = 450) {
  const [idx, setIdx] = React.useState(0);
  const [text, setText] = React.useState(messages[0] ?? "");

  React.useEffect(() => {
    const artLines = [
      `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡔⠑⢄⠀⠀⢀⠔⢢⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⡠⠓⠊⠉⠉⠉⠉⠐⠺⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⠋⠀⠀⠀⠀⢖⡆⠀⠀⠀⠈⢲⠈⢱⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡖⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠱⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢧⠤⠤⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠉⢒⠆⠀⢀⡄⠀⠀⠀⠀⠀⠘⣄⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡌⠀⢰⠁⠀⢀⠄⠀⠀⠀⠀⠘⡄⣀⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣀⣀⠀⠇⠀⠈⠒⠒⠁⠀⠀⠀⠀⠀⠀⠘⡄⡜⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⡌⠀⠀⠓⠓⠒⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢄⢀⢀⡀⠀⠀⠀⠀
⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠒⠧⡀⠀⠀⠀
⠀⠀⠀⠀⠘⢄⣀⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠜⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`,
    ];

    console.log(
      "%c" + artLines.join("\n"),
      "color: #7466cc; font-weight: bold;"
    );
  }, []);

  React.useEffect(() => {
    if (!messages.length) return;
    let raf: number | null = null;
    let dwellTimer: number | null = null;

    const startScramble = () => {
      const from = messages[idx] ?? "";
      const to = messages[(idx + 1) % messages.length] ?? "";
      const maxLen = Math.max(from.length, to.length);
      if (scrambleMs <= 0) {
        // No scramble: immediately switch to next text after dwell
        setText(to);
        setIdx((i) => (i + 1) % messages.length);
        schedule();
        return;
      }
      const start = performance.now();

      const step = (now: number) => {
        const t = Math.min(1, (now - start) / scrambleMs);
        const reveal = Math.floor(t * maxLen);
        let out = "";
        for (let i = 0; i < maxLen; i++) {
          if (i < reveal) {
            out += to[i] ?? " ";
          } else {
            out +=
              GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          }
        }
        setText(out);
        if (t < 1) {
          raf = requestAnimationFrame(step);
        } else {
          setIdx((i) => (i + 1) % messages.length);
          setText(to);
          schedule();
        }
      };

      raf = requestAnimationFrame(step);
    };

    const schedule = () => {
      dwellTimer = window.setTimeout(startScramble, dwellMs);
    };

    // initialize current text and schedule first scramble
    setText(messages[idx] ?? "");
    schedule();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (dwellTimer) clearTimeout(dwellTimer);
    };
  }, [idx, messages, dwellMs, scrambleMs]);

  return { text };
}

function useIsMdUp() {
  const [md, setMd] = React.useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(min-width: 768px)").matches;
  });
  React.useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => setMd(e.matches);
    mql.addEventListener?.("change", handler);
    // Safari fallback
    mql.addListener?.(handler);
    return () => {
      mql.removeEventListener?.("change", handler);
      mql.removeListener?.(handler);
    };
  }, []);
  return md;
}

function explodePage() {
  const elements = document.querySelectorAll<HTMLElement>(
    "p, h1, h2, h3, li, img, a, button, span"
  );

  elements.forEach((el) => {
    let count = 0;
    const maxCount = 3;

    const animate = () => {
      if (count >= maxCount) {
        el.style.transition = "transform 0.01s ease-in-out";
        el.style.transform = "translate(0,0) rotate(0deg)";
        return;
      }

      const x = (Math.random() - 0.5) * 600;
      const y = -(Math.random() * 200 + 50);
      const r = (Math.random() - 0.5) * 720;

      el.style.transition = "transform 0.1s ease-out";
      el.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;

      setTimeout(() => {
        const finalY = Math.random() * (window.innerHeight - 100);
        const finalR = (Math.random() - 0.5) * 720;
        el.style.transition = "transform 0.7s ease-in-out";
        el.style.transform = `translate(${x}px, ${finalY}px) rotate(${finalR}deg)`;

        count++;
        setTimeout(animate, 300);
      }, 500);
    };

    animate();
  });
}

export default function About() {
  const isMdUp = useIsMdUp();
  const [avatarLoaded, setAvatarLoaded] = React.useState(false);
  const { lang } = useLang();
  const profile = PROFILE;

  const messages = profile.statusMessages[lang];
  const { text } = useGlitchCycle(messages, 2000, isMdUp ? 450 : 0);

  return (
    <Section id="about">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-5 md:items-center md:gap-12 md:py-5">
          <div className="md:col-span-3">
            <div className="flex gap-20">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {PROFILE.name[lang]}
              </h1>
              <button
                onClick={explodePage}
                className="mt-6 px-4 py-2 text-white rounded-lg hover:bg-blue-600 transition"
              >
                💙
              </button>
            </div>
            <p
              className={`mt-2 text-xl lg:text-2xl text-accent-blue ${
                lang === "ar" ? "text-right" : "text-left"
              }`}
            >
              <TypingEffect words={profile.titles[lang]} />
            </p>

            <p
              className={`mt-6 max-w-2xl leading-relaxed text-subtext whitespace-pre-line ${
                lang === "ar" ? "text-right" : "text-left"
              }`}
            >
              {profile.tagline[lang]}
            </p>
            {/* 
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={resumeHref}
                target="_blank"
                rel="noreferrer"
                className={`resume-button inline-flex items-center gap-2 rounded-2xl border border-border bg-panel px-4 py-2 text-sm text-accent-white transition-colors hover:border-accent-blue hover:text-accent-blue`}
              >
                Resume
                <Download className="size-4" />
              </a>
            </div> */}
          </div>

          <div className="group rounded-3xl border border-border bg-panel md:col-span-2 transition-all hover:border-accent-blue hover:shadow-sm hover:-translate-y-1">
            <div className="p-6">
              <div className="relative">
                {!avatarLoaded && (
                  <div className="w-full aspect-square rounded-2xl bg-panel animate-pulse" />
                )}
                <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl">
                  <img
                    src={avatarFile}
                    alt="Headshot"
                    className={`w-full h-[130%] object-cover transition-opacity duration-300 ${
                      avatarLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setAvatarLoaded(true)}
                    onError={() => setAvatarLoaded(true)}
                  />
                </div>
              </div>
              <div
                className={`mt-4 text-sm text-subtext flex items-center gap-2 ${
                  lang === "ar" ? "text-right" : "text-left"
                }`}
              >
                <span className="font-medium whitespace-nowrap">
                  {lang === "ko"
                    ? "요즘 하는 일:"
                    : lang === "tr"
                    ? "Şu aralar neyle uğraşıyorum:"
                    : lang === "ar"
                    ? "ما أعمل عليه حالياً:"
                    : "what I'm up to:"}
                </span>

                <div className="relative flex-1 h-6">
                  {/* Desktop/Tablet: standard (glitchy scramble is enabled via scrambleMs on md+) */}
                  <span className="hidden md:block leading-6 font-semibold text-accent-blue font-mono">
                    {text}
                  </span>
                  {/* Mobile: gentle fade only (no scramble) */}
                  <span className="md:hidden leading-6 font-semibold text-accent-blue font-mono mobile-fade">
                    {text}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
