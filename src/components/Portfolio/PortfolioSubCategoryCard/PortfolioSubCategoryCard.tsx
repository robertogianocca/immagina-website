// SUBCATEGORY CARD

"use client";
import Image from "next/image";
import Link from "next/link";
import H2 from "@/components/Fonts/H2";
import { motion } from "framer-motion";

interface PortfolioSubCategoryCardProps {
  title: any;
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
  // Card title: Change the first letter and first letter after a space to upperCase
  title = title.split(" ");
  title = title.map((item: string, index: number) => {
    return item[0].toUpperCase() + item.slice(1);
  });
  title = title.join(" ");

  // Clean title to Link
  let titleToLink = title.replace("'s", "");
  titleToLink = titleToLink.replace(" ", "-");
  titleToLink = titleToLink.toLowerCase();

  return (
    <Link href={`/${categoriesFromPath.join("/")}/${titleToLink}`}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full relative flex flex-col  bg-zinc-50 text-slate-600 p-6 shadow-xl hover:shadow-slate-400"
      >
        <H2>{title}</H2>
        <p className="text-sm pb-4">{description}</p>
        <div className="">
          <Image src={cover} width={3000} height={2000} alt="Category Cover" />
        </div>
      </motion.div>
    </Link>
  );
}
