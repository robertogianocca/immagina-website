"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";

export default function Wrapper({ children }) {
  // Mouse circle
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <motion.main
      className="mt-[60px] lg:pl-10 lg:pr-60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Mouse circle
      <div
        className="fixed w-[100px] h-[100px] bg-red-500 rounded-full pointer-events-none mix-blend-exclusion transform -translate-x-1/2 -translate-y-1/2 z-50"
        style={{ top: `${position.y}px`, left: `${position.x}px` }}
      /> */}
      {children}
    </motion.main>
  );
  // return <main className="p-4 lg:p-8 lg:pt-20 lg:pr-60">{children}</main>;
}
