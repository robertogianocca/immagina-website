// MAIN CARD

"use client";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

interface MainCardProps {
  title: string;
  description: string;
  cover: string;
  logo: string;
  titleColor: string;
}

export default function MainCard({
  title = "empty",
  description = "empty",
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
        <div className="flex flex-row lg:flex-col gap-x-3 lg:gap-x-0 justify-between lg:justify-normal">
          {/* ---------- TESTI ---------- */}
          <div className="flex flex-col w-[900px] lg:w-full">
            {/* ---------- LOGO, TITOLO ---------- */}
            <div className="flex flex-col lg:flex-row lg:mb-6 lg:mt-[-10px]">
              <Image src={logo} width={210} height={210} alt="Logo IMMAGINA" />
              <h3
                className={`font-courier text-lg lg:text-2xl lg:pl-3 mt-2 lg:mt-3 mb-6 lg:mb-0 ${titleColor}`}
              >
                {title}
              </h3>
            </div>
            {/* ---------- DESCRIZIONE ---------- */}
            <p className={`text-xs lg:text-sm lg:mb-3 ${titleColor}`}>{description}</p>
          </div>
          {/* ---------- IMMAGINE ---------- */}
          <div className="group-hover:saturate-[1.1]">
            <Image src={cover} width={800} height={800} alt="Category Cover" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
