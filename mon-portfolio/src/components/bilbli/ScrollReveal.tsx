import { motion } from "framer-motion";
import type { ReactNode } from "react"; // Ajoute "type" ici

interface ScrollRevealProps {
  children: ReactNode;
  variant?: "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight";
  delay?: number;
}

export const ScrollReveal = ({ children, variant = "fadeUp", delay = 0 }: ScrollRevealProps) => {
  const variants = {
    fadeUp: { opacity: 0, y: 30 },
    fadeDown: { opacity: 0, y: -30 },
    fadeLeft: { opacity: 0, x: -30 },
    fadeRight: { opacity: 0, x: 30 },
  };

  return (
    <motion.div
      initial={variants[variant]}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};