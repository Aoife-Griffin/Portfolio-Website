"use client";

import { motion } from "framer-motion";

export default function HoneycombParticle({
  className = "",
}: {
  className?: string;
}) {
  return (
    <motion.div
      className={`absolute text-yellow-400 opacity-20 text-5xl ${className}`}
      animate={{
        y: [0, -40, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      ⬡
    </motion.div>
  );
}