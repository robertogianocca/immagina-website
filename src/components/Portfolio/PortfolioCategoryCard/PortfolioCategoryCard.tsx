// CATEGORY CARD

"use client";
import Link from "next/link";
import Image from "next/image";
import H2 from "@/components/Fonts/H2";
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
        className="w-full h-full relative flex flex-col  bg-stone-50 text-slate-600 p-6 shadow-xl hover:shadow-slate-400 "
      >
        <H2>{titleUp}</H2>
        <p className="text-sm text-slate-500 pb-4">{description}</p>
        <div className="">
          <Image src={cover} width={3000} height={2000} alt="Category Cover" />
        </div>
      </motion.div>
    </Link>
  );
};

export default PortfolioCategoryCard;
