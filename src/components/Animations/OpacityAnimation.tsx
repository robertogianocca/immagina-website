"use client";
import { motion } from "framer-motion";

export default function OpacityAnimation({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <motion.div
      className="flex w-full items-center justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
