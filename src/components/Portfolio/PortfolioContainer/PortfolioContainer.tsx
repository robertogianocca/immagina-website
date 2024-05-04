// PORTFOLIO CONTAINER

"use client";
import Link from "next/link";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import PortfolioGallery from "../PortfolioGallery/PortfolioGallery";
import PortfolioGalleryMobile from "../PortfolioGalleryMobile/PortfolioGalleryMobile";
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

  // console.log(currentItem);

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
          {mappedItem}
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
  return (
    <>
      {/* {categoryList[0] == "pictures" && categoryList.length == 1 ? (
        <>
          <PortfolioGallery title={categoryList} picturesList={currentItem.pictures} />
        </>
      ) : (
        <>
          <NavigationBar />
          {mappedItem}
        </>
      )} */}
      {displayGallery()}
    </>
  );
};

export default PortfolioContainer;
