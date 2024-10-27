// CATEGORY CARD

"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface PortfolioCategoryCardProps {
  title: any;
  shortDescription: any;
  cover: string;
  transformedCategoriesFromPath: string[] | string;
  addClass: string;
}

export default function PortfolioCategoryCard({
  title = "empty",
  shortDescription = "empty",
  cover = "/empty",
  transformedCategoriesFromPath,
  addClass,
}: PortfolioCategoryCardProps) {
  const usePathName = usePathname();
  const path = usePathName.split("/")[1];

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

  const hrefLink = Array.isArray(transformedCategoriesFromPath)
    ? `/${path}/${transformedCategoriesFromPath.join("/")}/${titleToLink}`
    : `/${path}/${transformedCategoriesFromPath}`;

  return (
    <Link href={hrefLink}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1.06 }}
        transition={{ duration: 0.5 }}
        className="group w-full h-full relative flex flex-row lg:flex-col p-2 lg:p-6 bg-zinc-50  shadow-xl shadow-slate-400 hover:shadow-slate-500 transition-shadow"
      >
        <div
          className={`absolute left-0 top-0 pr-1 w-0 h-0 border-l-[28px] border-b-[28px] border-b-transparent border-t-transparent ${addClass}`}
        ></div>
        <h3 className="font-courier font-bold text-lg xl:text-xl pl-4 xl:pl-0 pb-3 w-[900px]">
          {title}
        </h3>
        <p
          className="hidden xl:block text-xs xl:text-xs pb-4 font-semibold opacity-85"
          dangerouslySetInnerHTML={{ __html: shortDescription }}
        />
        <div className="group-hover:saturate-[1.1]">
          <Image src={cover} width={600} height={600} alt="Category Cover" />
        </div>
      </motion.div>
    </Link>
  );
}
