import React from "react";

/**
 * 프로젝트 body에 쓰는 아주 작은 마크다운 렌더러.
 * 지원: **굵게**, `코드`, [텍스트](링크), "- "로 시작하는 불릿, 빈 줄 = 문단 구분.
 * 그 이상은 일부러 지원하지 않는다 — body는 문서가 아니라 소개글이라서.
 */

const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

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
          className="rounded-md border border-border bg-bg px-1.5 py-0.5 font-mono text-[0.85em] text-accent-purple"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      return (
        <a
          key={key}
          href={link[2]}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-accent-purple underline decoration-accent-purple/40 underline-offset-4 transition-colors hover:decoration-accent-purple"
        >
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
      className={`space-y-4 leading-relaxed text-subtext ${
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
                        className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-purple"
                        aria-hidden
                      />
                      <span>
                        {renderInline(line.trim().slice(2), `${bi}-${ri}-${li}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p key={ri} className="whitespace-pre-line">
                  {renderInline(run.lines.join("\n"), `${bi}-${ri}`)}
                </p>
              )
            )}
          </div>
        );
      })}
    </div>
  );
}
