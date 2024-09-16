// PORTFOLIO CONTAINER

"use client";
import Wrapper from "@/components/Wrapper/Wrapper";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import PortfolioGallery from "../PortfolioGallery/PortfolioGallery";
import PortfolioGalleryMobile from "../PortfolioGalleryMobile/PortfolioGalleryMobile";
import PortfolioCategoryCard from "@/components/Portfolio/PortfolioCategoryCard/PortfolioCategoryCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Triangle from "@/components/Icons/Triangle";
import Button from "@/components/Buttons/Button";
import { FaArrowLeft } from "react-icons/fa";
import { TiHome } from "react-icons/ti";

import { useParams } from "next/navigation";
import HamburgerIcon from "@/components/HamburgerIcon/HamburgerIcon";
import { useState } from "react";

export default function PortfolioContainer({ portfolioData, categoriesFromPath }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Transform categoriesFromPath as the objects name, remove "-" (uppercasing after)
  const transformedCategoriesFromPath = categoriesFromPath.map((item: string) => {
    // Exception of "Slava's Snowshow"
    item = item.replace("a-s", "a's-s");
    item = item.replace("-", " ");
    return item;
  });

  // Go through the portfolio object
  transformedCategoriesFromPath.forEach((element: string) => {
    portfolioData = element === undefined ? portfolioData : portfolioData[element];
  });

  // Current Category formatted with space and uppercase
  let currentCategory = transformedCategoriesFromPath[transformedCategoriesFromPath.length - 1];
  currentCategory = currentCategory.split(" ");
  currentCategory = currentCategory.map((item: string, index: number) => {
    return item[0].toUpperCase() + item.slice(1);
  });
  currentCategory = currentCategory.join(" ");

  // Current Catregory description
  const currentCategoryDescription = portfolioData.pictures[0].description;

  // Not Found Page
  if (!portfolioData) {
    notFound();
  }

  // Set subCategories and remove "pictures"
  const subCategoryList = Object.keys(portfolioData);
  if (subCategoryList.includes("pictures") && subCategoryList.length !== 1) {
    let index = subCategoryList.indexOf("pictures");
    if (index !== -1) {
      subCategoryList.splice(index, 1);
    }
  }

  // --------------------------------- PATHS ---------------------------------

  const pathList = categoriesFromPath.slice(0, -1).map((item: string, index: number) => {
    return (
      <Link
        key={index}
        href={`/${categoriesFromPath
          .slice(0, 1 + index)
          .join("/")
          .toLowerCase()}`}
      >
        <div className="flex flex-row">
          <Triangle addClass="border-l-red-600" />
          <h3 className="text-base font-courier text-sky-800 font-bold">
            {categoriesFromPath.slice(0, -1).length - 1 == index ? item + "" : item + " /"}
          </h3>
        </div>
      </Link>
    );
  });

  const paramsObject = useParams();
  const params = paramsObject.categories || ""; // Ensure params is at least an empty string
  const paramsArray = Array.isArray(params) ? params : params.split("/");
  const categoryBefore = paramsArray.slice(0, -1);

  const mappedSubCategory = subCategoryList.map((item, index) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      key={index}
    >
      <PortfolioCategoryCard
        title={item}
        description={portfolioData[item].pictures[0].description}
        shortDescription={portfolioData[item].pictures[0].heading}
        cover={portfolioData[item].pictures[0].url}
        transformedCategoriesFromPath={transformedCategoriesFromPath}
        addClass={
          portfolioData[subCategoryList[0]].images === undefined
            ? "border-l-red-600"
            : "border-l-green-600"
        }
      />
    </motion.div>
  ));

  console.log(portfolioData[subCategoryList[0]].images);

  const subcategoryMenu = subCategoryList.map((item, index) => {
    return (
      <li key={index} className="flex flex-row">
        <Triangle addClass={"border-l-green-600"} />
        {item}
      </li>
    );
  });

  // portfolioData.pictures.length === 1;
  return (
    <>
      {subCategoryList[0] === "images" && subCategoryList.length === 1 ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <PortfolioGallery
            currentCategory={currentCategory}
            transformedCategoriesFromPath={transformedCategoriesFromPath}
            shortCategoryDescription={portfolioData.pictures[0].heading}
            categoryDescription={portfolioData.pictures[0].description}
            picturesList={portfolioData.images.pictures}
          />
        </motion.div>
      ) : (
        <>
          <NavigationBar />
          <Wrapper>
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 pb-20 ">
              <div className="flex flex-col gap-2 col-span-1 mt-4 lg:mt-0">
                <div className="flex gap-4 items-center">
                  <Link href={`/${categoryBefore.join("/")}`}>
                    <Button addClass="p-2">
                      <FaArrowLeft size={25} />
                    </Button>
                  </Link>
                  <Link href={"/"}>
                    <Button addClass="p-2">
                      <TiHome size={25} />
                    </Button>
                  </Link>
                  <div className="flex flex-row gap-4">
                    <h3 className="text-base font-courier text-sky-800 font-bold">
                      <Link href="/#portfolio" className="hover:text-red-600">
                        portfolio
                      </Link>
                    </h3>
                    {pathList}
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="flex flex-row">
                    <h2 className="text-4xl font-courier font-bold text-sky-800 mb-2 mr-3">
                      {currentCategory}
                    </h2>
                    <div onClick={toggleMenu}>
                      <HamburgerIcon addClass="mt-2 text-green-600" />
                    </div>
                  </div>
                </div>
              </div>
              {/* ---------- SUBCATEGORY MENU ---------- */}
              <div
                className={`bg-customWhite absolute left-[10px] pt-10 pl-[10px] w-full h-full top-[230px] z-[200] font-courier font-bold text-xl text-sky-800 ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                {subcategoryMenu}
              </div>
              <div className="hidden lg:block col-span-2 pb-16">
                <p className=" text-base text-sky-800 font-semibold">
                  {currentCategoryDescription}
                </p>
              </div>
              {mappedSubCategory}
            </div>
          </Wrapper>
        </>
      )}
    </>
  );
}
