"use client";
import { motion } from "framer-motion";
// import { useEffect } from "react";
// import { useState } from "react";

export default function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Mouse circle
  // const [position, setPosition] = useState({ x: 0, y: 0 });
  // useEffect(() => {
  //   const updatePosition = (e) => {
  //     setPosition({ x: e.clientX, y: e.clientY });
  //   };

  //   window.addEventListener("mousemove", updatePosition);

  //   return () => {
  //     window.removeEventListener("mousemove", updatePosition);
  //   };
  // }, []);

  return (
    <motion.main
      className="min-h-space mt-[60px] px-4 lg:px-6 xl:pl-14 xl:pr-24 bg-zinc-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Mouse circle
      <div
        className="fixed w-[100px] h-[100px] bg-red-500 rounded-full pointer-events-none mix-blend-exclusion transform -translate-x-1/2 -translate-y-1/2 z-50"
        style={{ top: `${position.y}px`,left: `${position.x}px` }}
      /> */}
      {children}
    </motion.main>
  );
}
