import Link from "next/link";
import HamburgerIcon from "@/components/HamburgerIcon/HamburgerIcon";
import Triangle from "@/components/Icons/Triangle";
import Button from "@/components/Buttons/Button";
import { FaArrowLeft } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function PortfolioTitleNavigation({
  categoriesFromPath,
  transformedCategoriesFromPath,
  categoryBefore,
  pathList,
  currentCategory,
  currentCategoryDescription,
  subCategoryList,
  categoryColors,
  subCategoryColors,
  hamburgerColors,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const subcategoryMenu = subCategoryList.map((item, index) => {
    let itemLink = item.replace("'s", "");
    itemLink = itemLink.replace(" ", "-");
    // titleToLink = titleToLink.toLowerCase();
    console.log(itemLink);

    item = item.split(" ");
    item = item.map((item: string, index: number) => {
      return item[0].toUpperCase() + item.slice(1);
    });
    item = item.join(" ");
    return (
      <li
        key={index}
        className={`flex flex-row mb-4 font-courier text-sky-800 font-semibold text-xl  ${categoryColors}`}
      >
        <Triangle addClass={subCategoryColors} />
        <Link href={`/${categoriesFromPath.join("/")}/${itemLink}`}>{item}</Link>
      </li>
    );
  });

  const usePathName = usePathname();
  const path = usePathName.split("/")[1];

  return (
    <>
      <div className="flex flex-col gap-2 col-span-1 sm:col-span-2 lg:col-span-1">
        <div className="flex gap-4 items-center">
          {/* ---------- BACK BUTTON ---------- */}
          <Link
            href={`/${
              categoriesFromPath.length == 1 ? path : path + "/" + categoryBefore.join("/")
            }`}
          >
            <Button addClass="p-2">
              <FaArrowLeft size={25} />
            </Button>
          </Link>
          <Link href={`/${path}`}>
            <Button addClass="p-2">
              <TiHome size={25} />
            </Button>
          </Link>
          <div className="flex flex-row lg:flex-col 2xl:flex-row gap-4 lg:gap-1">
            <h3 className="text-base font-courier text-sky-800 font-bold">
              <Link href={`/${path}`} className="hover:text-red-600 mr-2">
                portfolio
              </Link>
            </h3>
            {pathList}
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-row">
            <div className="pt-[7.5px] pr-1">
              <Triangle addClass={categoryColors} />
            </div>
            {/* ---------- CATEGORY TITLE ---------- */}
            <h1 className="text-3xl xl:text-4xl font-courier font-bold text-sky-800 mr-3">
              {currentCategory}
            </h1>
            {/* ---------- HAMBURGER SUBMENU ---------- */}
            <div
              className={`xl:hidden h-full p-1 mt-[-2px] ${
                isOpen ? "bg-zinc-300 rounded-full" : ""
              }`}
              onClick={toggleMenu}
            >
              <HamburgerIcon addClass={hamburgerColors} />
            </div>
          </div>
        </div>
      </div>
      {/* ---------- SUBCATEGORY MENU AND DESCRIPTION MOBILE ---------- */}
      <div
        className={`flex flex-col grow min-h-[calc(100vh-230px)] bg-zinc-200 col-span-2 lg:row-start-2 lg:col-span-3 xl:col-span-2 static w-full lg:w-[60%] sm:w-[80%] md:w-full top-[230px] z-49  ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className=" pb-4">
          <p
            className="text-sm text-sky-800 font-semibold"
            dangerouslySetInnerHTML={{ __html: currentCategoryDescription }}
          />
        </div>
        <ul>{subcategoryMenu}</ul>
      </div>
    </>
  );
}
