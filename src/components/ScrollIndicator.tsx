import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

interface ScrollIndicatorProps {
  targetId?: string;
}

export default function ScrollIndicator({ targetId = "projects" }: ScrollIndicatorProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-8 left-1/2 z-20 -translate-x-1/2 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ChevronDown
        size={28}
        className="text-subtext animate-bounce cursor-pointer hover:text-accent-green transition-colors duration-200"
        onClick={handleClick}
      />
    </div>
  );
}
