// PORTFOLIO CONTAINER

"use client";
import Link from "next/link";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import PortfolioGallery from "../PortfolioGallery/PortfolioGallery";
import PortfolioGalleryMobile from "../PortfolioGalleryMobile/PortfolioGalleryMobile";
import PortfolioSubCategoryCard from "@/components/Portfolio/PortfolioSubCategoryCard/PortfolioSubCategoryCard";
import PortfolioCategoryCard from "@/components/Portfolio/PortfolioCategoryCard/PortfolioCategoryCard";
import { useState } from "react";
import { useEffect } from "react";

const PortfolioContainer = ({ portfolioData, categoriesFromPath }: any) => {
  // console.log(test);
  // const path = usePathname();
  // When we have categories like "finzi-pasca"
  // const pathClean = path.replace("-", " ");
  // const categoriesFromPath = pathClean.split("/");
  // Remove the empty string
  // categoriesFromPath.shift();

  // Function for pass through the portfolioObject
  const updatePortfolioData = (objPortfolio: any) => {
    categoriesFromPath.forEach((element) => {
      objPortfolio = element === undefined ? objPortfolio : objPortfolio[element];
    });
    return objPortfolio;
  };

  const [currentItem, setItem] = useState(() => updatePortfolioData(portfolioData));

  const categoryList = Object.keys(currentItem);

  // let mappedItem = categoryList.map((item, index) => (
  //   <PortfolioSubCategoryCard
  //     key={index}
  //     item={item}
  //     categoriesFromPath={categoriesFromPath}
  //     currentItem={currentItem}
  //   />
  // ));
  let mappedItem;
  if (categoryList.includes("pictures") == true && categoryList.length !== 1) {
    let index = categoryList.indexOf("pictures");
    if (index !== -1) {
      categoryList.splice(index, 1);
    }
    // categoryList.pop();
    mappedItem = categoryList.map((item, index) => (
      <PortfolioSubCategoryCard
        key={index}
        item={item}
        categoriesFromPath={categoriesFromPath}
        currentItem={currentItem}
      />
    ));
  } else {
    mappedItem = categoryList.map((item, index) => (
      <PortfolioSubCategoryCard
        key={index}
        item={item}
        categoriesFromPath={categoriesFromPath}
        currentItem={currentItem}
      />
    ));
  }

  const displayGallery = () => {
    if (window.innerWidth < 1024) {
      return <PortfolioGalleryMobile title={categoryList} picturesList={currentItem.pictures} />;
    }
    if (categoryList[0] === "pictures" && categoryList.length === 1) {
      return <PortfolioGallery title={categoryList} picturesList={currentItem.pictures} />;
    } else {
      return (
        <>
          <NavigationBar />
          <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 h-space p-20">
            {mappedItem}
          </div>
        </>
      );
    }
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <>{displayGallery()}</>;
};

export default PortfolioContainer;
