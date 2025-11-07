import { motion } from "framer-motion";

export default function DinoLogo() {
  return (
    <motion.svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-12 text-current"
    >
      <motion.path
        d="M20 40 Q16 28, 26 22 Q32 20, 40 26 Q44 30, 42 38 Q40 46, 32 46 Q26 46, 20 40 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        animate={{ rotate: [0, 2, -2, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{ originX: "32px", originY: "40px" }}
      />
      <circle cx="35" cy="32" r="1.5" fill="currentColor" />
      <motion.path
        d="M20 40 Q12 36, 10 30"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        animate={{ rotate: [0, 6, -4, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        style={{ originX: "20px", originY: "38px" }}
      />
    </motion.svg>
  );
}
