// MAIN CARD

"use client";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

interface MainCardProps {
  title: string;
  cover: string;
  logo: string;
  titleColor: string;
}

export default function MainCard({
  title = "empty",
  cover = "/empty",
  logo = "empty",
  titleColor = "",
}: MainCardProps) {
  return (
    <Link href={`/${title}`}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1.06 }}
        transition={{ duration: 0.5 }}
        className="group w-full relative flex flex-col bg-zinc-50 p-2 lg:p-6 shadow-xl shadow-slate-400 hover:shadow-slate-500 transition-shadow"
      >
        <div className="flex flex-col lg:flex-row pb-8">
          <Image src={logo} width={210} height={210} alt="Logo IMMAGINA" />
          <h3 className={`font-courier text-2xl lg:pl-5 mb-[-9px] ${titleColor}`}>{title}</h3>
        </div>
        <div className="group-hover:saturate-[1.1]">
          <Image src={cover} width={3000} height={2000} alt="Category Cover" />
        </div>
      </motion.div>
    </Link>
  );
}
