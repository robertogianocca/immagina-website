// VIDEO SUBCATEGORY CARD

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface VideoSubCategoryCardProps {
  title: any;
  shortDescription: any;
  description: string;
  cover: string;
}

export default function VideoSubCategoryCard({
  key,
  title,
  shortDescription,
  description,
  cover,
}: VideoSubCategoryCardProps) {
  return (
    <Link href={`/video/${title}`}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full relative flex flex-col  bg-zinc-50 text-slate-600 p-6 shadow-xl hover:shadow-slate-400"
      >
        <h2>{title}</h2>
        <p className="text-sm pb-4" dangerouslySetInnerHTML={{ __html: shortDescription }} />
        {/* <div className="">
          <Image src={cover} width={3000} height={2000} alt="Category Cover" />
        </div> */}
      </motion.div>
    </Link>
  );
}
