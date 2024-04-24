// PORTFOLIO CONTAINER

"use client";
import Link from "next/link";
import PortfolioGallery from "../PortfolioGallery/PortfolioGallery";
import PortfolioSubCategoryCard from "@/components/Portfolio/PortfolioSubCategoryCard/PortfolioSubCategoryCard";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const PortfolioContainer = ({ portfolioData }: any) => {
  const pathname = usePathname();
  // const path = pathname.replace("/portfolio", "");
  const path = pathname;
  // When we have categories like "finzi-pasca"
  const pathClean = path.replace("-", " ");
  const categoriesFromPath = pathClean.split("/");
  // Remove the empty string
  categoriesFromPath.shift();

  // Function for pass through the portfolioObject
  const updatePortfolioData = (objPortfolio: any) => {
    // if (categoriesFromPath === "") {
    //   objPortfolio = portfolioData;
    // } else {
    categoriesFromPath.forEach((element) => {
      // objPortfolio = element === undefined ? objPortfolio : objPortfolio[element];
      objPortfolio = objPortfolio[element];
    });
    // }
    return objPortfolio;
  };

  const [currentItem, setItem] = useState(() => updatePortfolioData(portfolioData));

  console.log(currentItem);
  console.log(categoriesFromPath);
  const categoryList = Object.keys(currentItem);

  let mappedItem = categoryList.map((item, index) => (
    <PortfolioSubCategoryCard
      key={index}
      item={item}
      categoriesFromPath={categoriesFromPath}
      portfolioData={portfolioData}
    />
  ));
  return (
    <>
      <h2>portfolio container</h2>
      {mappedItem}
    </>
  );
};

export default PortfolioContainer;
