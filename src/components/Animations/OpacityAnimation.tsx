"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function OpacityAnimation({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: delay }}
    >
      {children}
    </motion.div>
  );
}
