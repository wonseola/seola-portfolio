import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLang } from "../context/LangContext";

const LANG_OPTIONS = [
  { code: "ko", label: "🇰🇷 한국어" },
  { code: "en", label: "🇬🇧 English" },
  { code: "tr", label: "🇹🇷 Türkçe" },
  { code: "ar", label: "🇸🇦 العربية" },
] as const;

export default function LangSelect() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen((prev) => !prev);
  const selectLang = (code: string) => {
    setLang(code as never);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between gap-2 w-[170px] rounded-xl border border-border bg-[rgba(255,255,255,0.05)] px-3 py-1.5 text-sm text-accent-white hover:border-accent-cyan transition-colors focus:outline-none"
      >
        <span>{LANG_OPTIONS.find((l) => l.code === lang)?.label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            open ? "rotate-180 text-accent-cyan" : "text-subtext"
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-[110%] w-full rounded-xl border border-border bg-[rgba(31,36,48,0.95)] backdrop-blur-sm shadow-lg z-50">
          {LANG_OPTIONS.map((option) => (
            <button
              key={option.code}
              onClick={() => selectLang(option.code)}
              className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                lang === option.code
                  ? "bg-accent-cyan/10 text-accent-cyan"
                  : "text-accent-white hover:bg-[rgba(255,255,255,0.08)] hover:text-accent-cyan"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
