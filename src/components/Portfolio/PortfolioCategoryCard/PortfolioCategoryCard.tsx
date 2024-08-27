// CATEGORY CARD

"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface PortfolioCategoryCardProps {
  title: string;
  description: string;
  cover: string;
}

const PortfolioCategoryCard = ({ title, description, cover }: PortfolioCategoryCardProps) => {
  // First letter upperCase
  const titleUp = title[0].toUpperCase() + title.slice(1);

  return (
    <Link href={title.includes(" ") ? title.replace(" ", "-") : `/${title}`}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full relative flex flex-col p-6 bg-zinc-50 shadow-2xl shadow-slate-400 hover:shadow-slate-500 "
      >
        <div className="absolute left-0 top-0 pr-1 w-0 h-0 border-l-[28px] border-b-[28px] border-b-transparent border-t-transparent border-l-red-600"></div>
        <h3 className="font-courier font-bold text-sky-800 text-xl pb-3">{titleUp}</h3>
        <p className="text-sm text-slate-500 pb-4">{description}</p>
        <div>
          <Image src={cover} width={3000} height={2000} alt="Category Cover" />
        </div>
      </motion.div>
    </Link>
  );
};

export default PortfolioCategoryCard;
