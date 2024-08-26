// PORTFOLIO CONTAINER

"use client";
import Wrapper from "@/components/Wrapper/Wrapper";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import PortfolioGallery from "../PortfolioGallery/PortfolioGallery";
import PortfolioGalleryMobile from "../PortfolioGalleryMobile/PortfolioGalleryMobile";
import PortfolioSubCategoryCard from "@/components/Portfolio/PortfolioSubCategoryCard/PortfolioSubCategoryCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import RedTriangle from "@/components/Icons/RedTriangle";

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

  const pathList = categoriesFromPath.slice(0, -1).map((item, index) => {
    return (
      <Link
        key={index}
        href={`/${categoriesFromPath
          .slice(0, 1 + index)
          .join("/")
          .toLowerCase()}`}
      >
        <div className="flex flex-row">
          <RedTriangle />
          <h3 className="text-base font-courier text-sky-800 font-bold">
            {categoriesFromPath.slice(0, -1).length - 1 == index ? item + "" : item + " /"}
          </h3>
        </div>
      </Link>
    );
  });

  const mappedSubCategory = subCategoryList.map((item, index) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      key={index}
    >
      <PortfolioSubCategoryCard
        title={item}
        shortDescription={portfolioData[item].pictures[0].heading}
        description={portfolioData[item].pictures[0].description}
        cover={portfolioData[item].pictures[0].url}
        transformedCategoriesFromPath={transformedCategoriesFromPath}
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
          <NavigationBar />
          <Wrapper>
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 h-space pt-10 pb-20">
              <div>
                <div className="pb-4">{pathList}</div>
                <h2 className="text-4xl font-courier font-bold text-sky-800">{currentCategory}</h2>
              </div>
              <div className="col-span-2 pb-16">
                <p>{currentCategoryDescription}</p>
              </div>
              {mappedSubCategory}
            </div>
          </Wrapper>
        </>
      )}
    </>
  );
}
