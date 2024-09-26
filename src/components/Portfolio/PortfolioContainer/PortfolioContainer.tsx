// PORTFOLIO CONTAINER

"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import Wrapper from "@/components/Wrapper/Wrapper";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import PortfolioTitleNavigation from "../PortfolioTitleNavigation/PortfolioTitleNavigation";
import PortfolioGallery from "../PortfolioGallery/PortfolioGallery";
import PortfolioGalleryMobile from "../PortfolioGalleryMobile/PortfolioGalleryMobile";
import PortfolioCategoryCard from "@/components/Portfolio/PortfolioCategoryCard/PortfolioCategoryCard";
import Triangle from "@/components/Icons/Triangle";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function PortfolioContainer({ portfolioData, categoriesFromPath }: any) {
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
  const currentCategoryDescription =
    portfolioData?.pictures?.[0]?.description || "No description available";

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

  const categoryColors =
    portfolioData[subCategoryList[0]].images === undefined
      ? "border-l-red-600"
      : "border-l-green-600";

  const subCategoryColors =
    portfolioData[subCategoryList[0]].images === undefined
      ? "border-l-green-600"
      : "border-l-amber-400";

  const hamburgerColors =
    portfolioData[subCategoryList[0]].images === undefined ? "text-green-600" : "text-amber-400";
  // --------------------------------- PATHS ---------------------------------

  const pathList = categoriesFromPath.slice(0, -1).map((item: string, index: number) => {
    return (
      <div key={index} className="flex flex-row">
        <Triangle addClass="md:border-l-[13px] xl:border-l-[19px] xl:border-b-[19px] md:border-b-[13px] border-l-red-600" />
        <Link href={`/${categoriesFromPath.slice(0, 1 + index).join("/")}`}>
          <h3 className="text-base font-courier text-sky-800 font-bold hover:text-red-600">
            {categoriesFromPath.slice(0, -1).length - 1 == index ? item + "" : item + " /"}
          </h3>
        </Link>
      </div>
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
      className="lg:row-start-3 xl:row-start-2"
    >
      <PortfolioCategoryCard
        title={item}
        description={portfolioData[item]?.pictures?.[0]?.description || "No description available"}
        shortDescription={
          portfolioData[item]?.pictures?.[0]?.heading || "No short description available"
        }
        cover={portfolioData[item]?.pictures?.[0]?.url || "/images/samples/01.jpg"}
        transformedCategoriesFromPath={transformedCategoriesFromPath}
        addClass={subCategoryColors}
      />
    </motion.div>
  ));

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
          <NavigationBar addClass="" />
          <Wrapper>
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6 pb-20">
              <PortfolioTitleNavigation
                categoriesFromPath={categoriesFromPath}
                transformedCategoriesFromPath={transformedCategoriesFromPath}
                categoryBefore={categoryBefore}
                currentCategory={currentCategory}
                currentCategoryDescription={currentCategoryDescription}
                pathList={pathList}
                subCategoryList={subCategoryList}
                categoryColors={categoryColors}
                subCategoryColors={subCategoryColors}
                hamburgerColors={hamburgerColors}
              />
              {/* ---------- DESCRIPTION DESKTOP  ---------- */}
              <div className="xl:block col-span-2">
                <p
                  className="hidden xl:block text-base text-sky-800 font-semibold col-span-2"
                  dangerouslySetInnerHTML={{ __html: currentCategoryDescription }}
                />
              </div>
              {mappedSubCategory}
            </div>
          </Wrapper>
        </>
      )}
    </>
  );
}
