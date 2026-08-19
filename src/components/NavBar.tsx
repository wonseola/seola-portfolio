import React, { useMemo, useState } from "react";
import Container from "../components/Container";
import Brandmark from "../components/Brandmark";
import { useScrollSpy } from "../components/useScrollSpy";
import { Menu, X } from "lucide-react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import LangSelect from "./Langselect";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const nav = useMemo(
    () => [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      // { label: "Experience", href: "#experience" },
      // { label: "Education", href: "#education" },
      // { label: "Publications", href: "#publications" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  // Extract section IDs for scrollspy
  const sectionIds = nav.map((item) => item.href.replace("#", ""));
  const activeSection = useScrollSpy(sectionIds, 200);

  const navWithAccents = nav.map((item) => ({
    ...item,
    isActive: activeSection === item.href.replace("#", "") && !hoveredItem,
    isHovered: hoveredItem === item.href,
  }));

  // 활성/호버는 꽉 찬 검정 칩, 나머지는 배경 없는 모노 텍스트.
  // 본문 스택 칩과 같은 규칙이라 화면 전체가 한 언어로 읽힌다.
  const itemClass = (on: boolean) =>
    `rounded-lg px-3 py-2 font-mono text-[13px] font-medium leading-none transition-colors duration-200 ${
      on ? "bg-text text-panel" : "text-subtext hover:bg-hairline hover:text-text"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[rgba(246,244,240,0.85)] backdrop-blur">
      <Container>
        <div className="relative flex h-16 items-center justify-between">
          {/* Left: Name */}
          <a
            href="#top"
            className="group flex items-center gap-2 text-subtext transition-colors hover:text-accent-blue"
            aria-label="Seola Won"
          >
            <Brandmark className="h-6 w-6" />
            {/* <img src="love.png" alt="Seola Won" className="h-8 w-8 " /> */}
            {/* <span className="text-subtext">이름이용?.</span> */}
          </a>

          {/* Center */}
          <nav
            className="absolute left-1/2 -translate-x-1/2 hidden items-center gap-4 md:flex"
            onMouseLeave={() => setHoveredItem(null)}
          >
            {navWithAccents.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onMouseEnter={() => setHoveredItem(n.href)}
                className={itemClass(n.isHovered || n.isActive)}
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* 언어전환 + 소셜 */}

          <div className="hidden md:flex items-center gap-4">
            <LangSelect />
            <a
              href="https://github.com/wonseola"
              target="_blank"
              rel="noreferrer"
              className="text-subtext hover:text-text transition-colors"
            >
              <FaGithub className="size-5" />
            </a>
            {/* <a
              href="https://www.linkedin.com/in/"
              target="_blank"
              rel="noreferrer"
              className="text-subtext hover:text-accent-blue transition-colors"
            >
              <Linkedin className="size-5" />
            </a> */}
            <a
              href="https://www.instagram.com/won_seola"
              target="_blank"
              rel="noreferrer"
              className="text-subtext hover:text-text transition-colors"
            >
              <FaInstagram className="size-5" />
            </a>
          </div>

          {/* 모바일메뉴 */}
          <div className="flex items-center gap-2 md:hidden">
            {/* ✅ 모바일용 LangSelect (국기 버튼) */}
            <LangSelect />

            <button
              onClick={() => setOpen((o) => !o)}
              className="rounded-xl border border-border p-2 transition-colors hover:border-border-strong"
              aria-label="Toggle menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <div
            className="grid gap-2 pb-4 md:hidden"
            onMouseLeave={() => setHoveredItem(null)}
          >
            {navWithAccents.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                onMouseEnter={() => setHoveredItem(n.href)}
                className={itemClass(n.isHovered || n.isActive)}
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </Container>
    </header>
  );
}
