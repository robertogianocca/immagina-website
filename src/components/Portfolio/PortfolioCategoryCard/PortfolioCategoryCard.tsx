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
        className="w-full h-full relative flex flex-col p-6 bg-zinc-50 shadow-2xl hover:shadow-slate-400 "
      >
        <h3 className="text-xl pb-3">{titleUp}</h3>
        <p className="text-sm text-slate-500 pb-4">{description}</p>
        <div className="">
          <Image src={cover} width={3000} height={2000} alt="Category Cover" />
        </div>
      </motion.div>
    </Link>
  );
};

export default PortfolioCategoryCard;
