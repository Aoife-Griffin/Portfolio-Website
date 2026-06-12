"use client";

import { motion } from "framer-motion";
/// Creating an animation wrapper
export default function AnimatedSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
    >
      {children}
    </motion.div>
  );
}