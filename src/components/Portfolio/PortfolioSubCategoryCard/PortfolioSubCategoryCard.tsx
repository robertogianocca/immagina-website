// SUBCATEGORY CARD

"use client";
import Image from "next/image";
import Link from "next/link";
import H2 from "@/components/Fonts/H2";
import { motion } from "framer-motion";

interface PortfolioSubCategoryCardProps {
  title: string;
  description: string;
  cover: string;
  categoriesFromPath: any;
}

export default function PortfolioSubCategoryCard({
  title,
  description,
  cover,
  categoriesFromPath,
}: PortfolioSubCategoryCardProps) {
  const titleUp = title[0].toUpperCase() + title.slice(1);
  const titleReplaced = title.replace("'s", "");

  return (
    <Link href={`/${categoriesFromPath.join("/")}/${titleReplaced.replace(" ", "-")}`}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full relative flex flex-col  bg-zinc-50 text-slate-600 p-6 shadow-xl hover:shadow-slate-400"
      >
        <H2>{titleUp}</H2>
        <p className="text-sm pb-4">{description}</p>
        <div className="">
          <Image src={cover} width={3000} height={2000} alt="Category Cover" />
        </div>
      </motion.div>
    </Link>
  );
}
