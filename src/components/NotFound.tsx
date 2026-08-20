import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// 이 화면만 언어 분기를 두지 않는다.
// URL로 바로 들어오면 LangContext가 항상 기본값(ko)이라 선택한 언어가 반영되지 않고,
// 애니메이션에 박힌 "NOT FOUND" 글자도 영어라 그쪽에 맞추는 편이 덜 어색하다.
const TITLE = "This page doesn't exist.";

export default function NotFound() {
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;

    let anim: { destroy: () => void } | null = null;
    let alive = true;

    // 엔진(168KB)과 애니메이션(32KB)을 이 화면에 들어왔을 때만 받아온다.
    // 메인 번들에 넣기엔 404 하나가 쓰기에 너무 크다.
    Promise.all([
      import("lottie-web/build/player/esm/lottie_light.min.js"),
      import("../assets/not-found.json"),
    ]).then(([lottie, data]) => {
      if (!alive || !box.current) return;

      // 모션 최소화 설정이면 재생하지 않고 첫 프레임만 세워둔다.
      const still = window.matchMedia?.(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      anim = lottie.default.loadAnimation({
        container: box.current,
        renderer: "svg",
        loop: !still,
        autoplay: !still,
        animationData: data.default,
      });
    });

    return () => {
      alive = false;
      anim?.destroy();
    };
  }, []);

  return (
    <section className="flex min-h-[100svh] items-center justify-center px-5 py-16">
      <div className="w-full max-w-xl text-center">
        {/* 애니메이션에 "NOT FOUND" 글자가 이미 들어있어서
            제목으로 반복하지 않고 설명만 붙인다. */}
        <div
          ref={box}
          role="img"
          aria-label={TITLE}
          className="mx-auto aspect-[16/9] w-full max-w-md"
        />

        <h1 className="mt-2 text-xl font-semibold tracking-tight text-text sm:text-2xl">
          {TITLE}
        </h1>
        <p className="mt-2 text-sm text-subtext">
          The address may have changed, or the page was removed.
        </p>

        <Link
          to="/"
          className="group mt-8 inline-flex items-center gap-1.5 rounded-2xl border border-border px-5 py-2.5 text-sm font-medium text-accent-white transition-colors hover:border-accent-yellow hover:text-accent-yellow"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          Back to home
        </Link>
      </div>
    </section>
  );
}
