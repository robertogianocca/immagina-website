// PORTFOLIO CONTAINER

"use client";
import Link from "next/link";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import PortfolioGallery from "../PortfolioGallery/PortfolioGallery";
import PortfolioSubCategoryCard from "@/components/Portfolio/PortfolioSubCategoryCard/PortfolioSubCategoryCard";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const PortfolioContainer = ({ portfolioData }: any) => {
  const path = usePathname();
  // When we have categories like "finzi-pasca"
  const pathClean = path.replace("-", " ");
  const categoriesFromPath = pathClean.split("/");
  // Remove the empty string
  categoriesFromPath.shift();

  // Function for pass through the portfolioObject
  const updatePortfolioData = (objPortfolio: any) => {
    categoriesFromPath.forEach((element) => {
      objPortfolio = element === undefined ? objPortfolio : objPortfolio[element];
    });
    return objPortfolio;
  };

  const [currentItem, setItem] = useState(() => updatePortfolioData(portfolioData));

  const categoryList = Object.keys(currentItem);

  let mappedItem = categoryList.map((item, index) => (
    <PortfolioSubCategoryCard
      key={index}
      item={item}
      categoriesFromPath={categoriesFromPath}
      currentItem={currentItem}
    />
  ));

  return (
    <>
      {categoryList[0] == "pictures" && categoryList.length == 1 ? (
        <>
          <PortfolioGallery picturesList={currentItem.pictures} />
        </>
      ) : (
        <>
          <NavigationBar />
          {mappedItem}
        </>
      )}
    </>
  );
};

export default PortfolioContainer;
