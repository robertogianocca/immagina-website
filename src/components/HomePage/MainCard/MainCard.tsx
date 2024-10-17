// MAIN CARD

"use client";
import Logo from "@/components/Logo/Logo";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface MainCardProps {
  title: string;
  cover: string;
}

export default function MainCard({ title = "empty", cover = "/empty" }: MainCardProps) {
  return (
    <Link href={`/${title}`}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1.06 }}
        transition={{ duration: 0.5 }}
        className="group w-full relative flex flex-col bg-zinc-50 p-6 shadow-xl shadow-slate-400 hover:shadow-slate-500 transition-shadow"
      >
        <div className="flex items-end pb-8">
          <Logo />
          <h3 className="font-courier text-sky-800 text-2xl pl-5 mb-[-9px]">{title}</h3>
        </div>
        <div className="group-hover:saturate-[1.1]">
          <Image src={cover} width={3000} height={2000} alt="Category Cover" />
        </div>
      </motion.div>
    </Link>
  );
}
