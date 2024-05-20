// PORTFOLIO CONTAINER
"use client";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import PortfolioGallery from "../PortfolioGallery/PortfolioGallery";
import PortfolioGalleryMobile from "../PortfolioGalleryMobile/PortfolioGalleryMobile";
import PortfolioSubCategoryCard from "@/components/Portfolio/PortfolioSubCategoryCard/PortfolioSubCategoryCard";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

const PortfolioContainer = ({ portfolioData, categoriesFromPath }: any) => {
  // console.log(portfolioData[categoriesFromPath[]);
  // console.log(portfolioData[parentCategory]);
  // console.log(portfolioData[categoriesFromPath]);
  // if (!portfolioData[categoriesFromPath].pictures[0].description) {
  //   const description = undefined;
  // } else {
  // }

  let parentCategory = [];
  if (categoriesFromPath.length == 1) {
    parentCategory = categoriesFromPath;
  } else {
    parentCategory = categoriesFromPath[categoriesFromPath.length - 2];
  }

  const parentDescription = portfolioData[parentCategory].pictures[0].description;

  categoriesFromPath.forEach((element) => {
    element = element.replace("-", " ");

    portfolioData = element === undefined ? portfolioData : portfolioData[element];
  });

  if (!portfolioData) {
    notFound();
  }

  const categoryList = Object.keys(portfolioData);
  if (categoryList.includes("pictures") == true && categoryList.length !== 1) {
    let index = categoryList.indexOf("pictures");
    if (index !== -1) {
      categoryList.splice(index, 1);
    }
  }
  const mappedItem = categoryList.map((item, index) => (
    <PortfolioSubCategoryCard
      key={index}
      title={item}
      // description={description}
      categoriesFromPath={categoriesFromPath}
    />
  ));

  return (
    <>
      {categoryList[0] === "pictures" && categoryList.length === 1 ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <PortfolioGallery
            title={categoryList}
            // description={description}
            picturesList={portfolioData.pictures}
          />
        </motion.div>
      ) : (
        <>
          <NavigationBar />
          <p>{parentDescription}</p>
          {mappedItem}
        </>
      )}
    </>
  );
};

export default PortfolioContainer;
