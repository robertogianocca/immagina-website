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
  console.log(categoriesFromPath);
  // Transform categoriesFromPath as the objects name, remove "-" (uppercasing after)
  const transformedCategoriesFromPath = categoriesFromPath.map((item: string) => {
    // Exception of "Slava's Snowshow"
    item = item.replace("a-s", "a's-s");
    item = item.replace("-", " ");
    return item;
  });

  // Go through the portfolio object
  transformedCategoriesFromPath.forEach((element) => {
    portfolioData = element === undefined ? portfolioData : portfolioData[element];
  });

  // let parentCategory = [];
  // if (transformedCategoriesFromPath.length == 1) {
  //   parentCategory = transformedCategoriesFromPath;
  // } else {
  //   parentCategory = transformedCategoriesFromPath[transformedCategoriesFromPath.length - 1];
  // }

  let parentCategory = transformedCategoriesFromPath[transformedCategoriesFromPath.length - 1];
  // parentCategory = parentCategory.toUpperCase();
  parentCategory = parentCategory.split(" ");
  parentCategory = parentCategory.map((item: string, index: number) => {
    return item[0].toUpperCase() + item.slice(1);
  });
  parentCategory = parentCategory.join(" ");

  // console.log(parentCategory);

  const parentDescription = portfolioData.pictures[0].description;

  // Not Found Page
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      key={index}
    >
      <PortfolioSubCategoryCard
        title={item}
        description={portfolioData[item].pictures[0].description}
        cover={portfolioData[item].pictures[0].url}
        categoriesFromPath={transformedCategoriesFromPath}
      />
    </motion.div>
  ));

  // console.log(categoryList);
  // console.log(transformedCategoriesFromPath);
  // console.log(portfolioData);
  // console.log("CATEGORYLIST " + categoryList);
  // console.log(categoryList[0] === "images");

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
            parentCategory={parentCategory}
            title={categoryList}
            portfolioData={portfolioData}
            transformedCategoriesFromPath={transformedCategoriesFromPath}
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
