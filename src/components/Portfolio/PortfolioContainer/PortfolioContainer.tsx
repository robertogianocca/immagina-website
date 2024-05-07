// PORTFOLIO CONTAINER

import NavigationBar from "@/components/NavigationBar/NavigationBar";
import PortfolioGallery from "../PortfolioGallery/PortfolioGallery";
import PortfolioGalleryMobile from "../PortfolioGalleryMobile/PortfolioGalleryMobile";
import PortfolioSubCategoryCard from "@/components/Portfolio/PortfolioSubCategoryCard/PortfolioSubCategoryCard";
import { notFound } from "next/navigation";

const PortfolioContainer = ({ portfolioData, categoriesFromPath }: any) => {
  categoriesFromPath.forEach((element) => {
    element = element.replace("-", " ");

    portfolioData = element === undefined ? portfolioData : portfolioData[element];
  });

  if (!portfolioData) {
    notFound();
  }

  const categoryList = Object.keys(portfolioData);
  console.log(categoryList);
  if (categoryList.includes("pictures") == true && categoryList.length !== 1) {
    let index = categoryList.indexOf("pictures");
    if (index !== -1) {
      categoryList.splice(index, 1);
    }
  }
  const mappedItem = categoryList.map((item, index) => (
    <PortfolioSubCategoryCard key={index} item={item} categoriesFromPath={categoriesFromPath} />
  ));

  return (
    <>
      {categoryList[0] === "pictures" && categoryList.length === 1 ? (
        <PortfolioGallery title={categoryList} picturesList={portfolioData.pictures} />
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
