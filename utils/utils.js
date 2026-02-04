"use client";
import { motion } from "framer-motion";

export function Typewriter({ text, play }) {
  const letters = Array.from(text);

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.04 }
    }
  };

  const child = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate={play ? "visible" : "hidden"}
    >
      {letters.map((char, index) => (
        <motion.span key={index} variants={child}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
