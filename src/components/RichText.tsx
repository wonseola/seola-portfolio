import React from "react";
import { FaApple, FaGooglePlay, FaGlobe } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BODY_ICONS } from "../data/bodyIcons";

/**
 * 프로젝트 body에 쓰는 아주 작은 마크다운 렌더러.
 * 지원: **굵게**, `코드`, [텍스트](링크), "- "로 시작하는 불릿, 빈 줄 = 문단 구분.
 * 그 이상은 일부러 지원하지 않는다 — body는 문서가 아니라 소개글이라서.
 */

const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

/**
 * 링크 앞 아이콘은 주소를 보고 고른다. 본문에 이모지를 박아두면
 * 기기마다 모양이 달라지고, 링크를 옮길 때 이모지가 따라오지 않는다.
 */
function iconFor(href: string) {
  if (href.includes("apps.apple.com")) return FaApple;
  if (href.includes("play.google.com")) return FaGooglePlay;
  if (href.includes("github.com")) return FaGithub;
  return FaGlobe;
}

function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  return text.split(TOKEN).map((part, i) => {
    const key = `${keyPrefix}-${i}`;

    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={key} className="font-semibold text-text">
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
      return (
        <code
          key={key}
          className="rounded-md border border-border bg-sunken px-1.5 py-0.5 font-mono text-[0.85em] text-text-hi"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      const Icon = iconFor(link[2]);
      return (
        <a
          key={key}
          href={link[2]}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-baseline gap-1.5 font-medium text-text-hi underline decoration-border-strong decoration-[1.5px] underline-offset-[5px] transition-colors hover:text-accent-orange hover:decoration-accent-orange"
        >
          <Icon className="size-[0.95em] shrink-0 translate-y-[0.1em]" aria-hidden />
          {link[1]}
        </a>
      );
    }

    return <React.Fragment key={key}>{part}</React.Fragment>;
  });
}

export default function RichText({
  text,
  className = "",
  rtl = false,
}: {
  text: string;
  className?: string;
  rtl?: boolean;
}) {
  // 빈 줄 기준으로 블록을 나눈다.
  const blocks = text.trim().split(/\n\s*\n/);

  return (
    <div
      className={`space-y-4 break-keep leading-relaxed text-subtext ${
        rtl ? "text-right" : "text-left"
      } ${className}`}
      dir={rtl ? "rtl" : undefined}
    >
      {blocks.map((block, bi) => {
        const lines = block.split("\n").filter((l) => l.trim().length > 0);

        // 한 블록 안에 설명 문장과 불릿이 섞여 있는 경우가 많아서,
        // 연속된 불릿 줄만 묶어 <ul>로 만들고 나머지는 문단으로 둔다.
        const runs: { list: boolean; lines: string[] }[] = [];
        for (const line of lines) {
          const isItem = line.trim().startsWith("- ");
          const last = runs[runs.length - 1];
          if (last && last.list === isItem) last.lines.push(line);
          else runs.push({ list: isItem, lines: [line] });
        }

        return (
          <div key={bi} className="space-y-2">
            {runs.map((run, ri) =>
              run.list ? (
                <ul key={ri} className="space-y-2 py-1">
                  {run.lines.map((line, li) => (
                    <li key={li} className="flex gap-2.5">
                      <span
                        className="mt-[0.62em] h-1.5 w-1.5 shrink-0 rounded-full bg-border-strong"
                        aria-hidden
                      />
                      <span>
                        {renderInline(line.trim().slice(2), `${bi}-${ri}-${li}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                (() => {
                  // 문단 맨 앞 이모지 마커는 lucide 아이콘으로 바꿔 단다.
                  // 기기마다 이모지 모양이 달라지는 걸 피하고, 아이콘이
                  // 본문 왼쪽에 걸려서 문단 시작이 눈에 잘 들어온다.
                  const text = run.lines.join("\n");
                  const hit = Object.keys(BODY_ICONS).find((e) =>
                    text.startsWith(e)
                  );
                  if (!hit)
                    return (
                      <p key={ri} className="whitespace-pre-line">
                        {renderInline(text, `${bi}-${ri}`)}
                      </p>
                    );
                  const Icon = BODY_ICONS[hit];
                  return (
                    <p key={ri} className="flex gap-2.5 whitespace-pre-line">
                      <Icon
                        className="mt-[0.28em] size-[1.05em] shrink-0 text-muted"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                      <span>
                        {renderInline(
                          text.slice(hit.length).trimStart(),
                          `${bi}-${ri}`
                        )}
                      </span>
                    </p>
                  );
                })()
              )
            )}
          </div>
        );
      })}
    </div>
  );
}
