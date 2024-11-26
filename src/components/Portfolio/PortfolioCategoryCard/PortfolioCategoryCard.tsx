// CATEGORY CARD

"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { transformSync } from "next/dist/build/swc";

interface PortfolioCategoryCardProps {
  title: string;
  shortDescription?: string;
  cover?: string;
  coverAlt?: string;
  transformedCategoriesFromPath: string[] | string;
  addClass: string;
}

export default function PortfolioCategoryCard({
  title = "No title available",
  shortDescription = "No short description available",
  cover = "/images/samples/01.jpg",
  coverAlt = "Category Cover",
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
  const titleToLink = title
    .replace("'s", "")
    .replace(" -", "")
    .replace(" ", "-")
    .replace(" ", "-")
    .toLowerCase();

  console.log(transformedCategoriesFromPath);

  const hrefLink = Array.isArray(transformedCategoriesFromPath)
    ? `/${path}/${transformedCategoriesFromPath.join("/")}/${titleToLink}`
    : `/${path}/${transformedCategoriesFromPath}`;

  return (
    <Link href={hrefLink}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1.06 }}
        transition={{ duration: 0.5 }}
        className="group w-full h-full relative flex flex-col gap-2 lg:gap-y-4 p-4 lg:p-6 bg-zinc-50  shadow-xl shadow-slate-400 hover:shadow-slate-500 transition-shadow"
      >
        <div
          className={`absolute left-0 top-0 pr-1 w-0 h-0 border-l-[28px] border-b-[28px] border-b-transparent border-t-transparent ${addClass}`}
        ></div>
        <h3 className="font-courier font-bold text-lg xl:text-xl">{title}</h3>
        <p
          className="hidden md:block md:min-h-[7rem] lg:min-h-[10rem] xl:min-h-[6rem] text-xs xl:text-xs pb-4 font-semibold opacity-85"
          dangerouslySetInnerHTML={{ __html: shortDescription }}
        />
        <div className="group-hover:saturate-[1.1] flex flex-col gap-2 lg:gap-4">
          <div className="">
            <Image src={cover} width={600} height={600} alt={coverAlt} />
          </div>
          {/* <Image src={cover} width={600} height={600} alt={coverAlt} /> */}
          <p
            className="md:hidden text-[12px] md:text-xs pb-4 font-semibold opacity-85"
            dangerouslySetInnerHTML={{ __html: shortDescription }}
          />
          {/* <p
            className="w-[1000px] md:hidden text-[12px] md:text-xs pb-4 font-semibold opacity-85"
            dangerouslySetInnerHTML={{ __html: shortDescription }}
          /> */}
        </div>
      </motion.div>
    </Link>
  );
}
