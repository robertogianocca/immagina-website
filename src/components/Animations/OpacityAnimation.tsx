"use client";
import { motion } from "framer-motion";

export default function OpacityAnimation({
  children,
  addClass,
}: {
  children: React.ReactNode;
  addClass: string;
}) {
  return (
    <motion.div
      className={addClass}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
