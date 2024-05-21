// PORTFOLIO CONTAINER
"use client";
import Wrapper from "@/components/Wrapper/Wrapper";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import PortfolioGallery from "../PortfolioGallery/PortfolioGallery";
import PortfolioGalleryMobile from "../PortfolioGalleryMobile/PortfolioGalleryMobile";
import PortfolioSubCategoryCard from "@/components/Portfolio/PortfolioSubCategoryCard/PortfolioSubCategoryCard";
import H1 from "@/components/Fonts/H1";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

export default function PortfolioContainer({ portfolioData, categoriesFromPath }: any) {
  // Transform categoriesFromPath
  const transformedCategoriesFromPath = categoriesFromPath.map((item) => {
    item = item.replace("a-s", "a's-s");
    return item.replace("-", " ");
  });

  let parentCategory = [];
  if (transformedCategoriesFromPath.length == 1) {
    parentCategory = transformedCategoriesFromPath;
  } else {
    parentCategory = transformedCategoriesFromPath[transformedCategoriesFromPath.length - 2];
  }

  const parentDescription = portfolioData[parentCategory].pictures[0].description;

  transformedCategoriesFromPath.forEach((element) => {
    portfolioData = element === undefined ? portfolioData : portfolioData[element];
  });

  if (!portfolioData) {
    notFound();
  }

  const categoryList = Object.keys(portfolioData);
  if (categoryList.includes("pictures") && categoryList.length !== 1) {
    let index = categoryList.indexOf("pictures");
    if (index !== -1) {
      categoryList.splice(index, 1);
    }
  }

  const mappedItem = categoryList.map((item, index) => (
    <PortfolioSubCategoryCard
      key={index}
      title={item}
      categoriesFromPath={transformedCategoriesFromPath}
      description={portfolioData[item].pictures[0].description}
      cover={portfolioData[item].pictures[0].url}
    />
  ));

  console.log(portfolioData);
  console.log(categoryList[0] === "images");

  return (
    <>
      {categoryList[0] === "images" && categoryList.length === 1 ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <PortfolioGallery
            title={categoryList}
            // description={description}
            picturesList={portfolioData.images.pictures}
          />
        </motion.div>
      ) : (
        <>
          <NavigationBar />
          <Wrapper>
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 h-space pt-10 pb-20">
              <div>
                <H1>{parentCategory}</H1>
              </div>
              <div className="col-span-2 pb-16">
                <p>{parentDescription}</p>
              </div>
              {mappedItem}
            </div>
          </Wrapper>
        </>
      )}
    </>
  );
}
