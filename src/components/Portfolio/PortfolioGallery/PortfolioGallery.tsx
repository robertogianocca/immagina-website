"use client";
import PortfolioGallerySideBar from "@/components/Portfolio/PortfolioGallery/PortfolioGallerySideBar/PortfolioGallerySideBar";
import Image from "next/image";
import { useState } from "react";

function PortfolioGallery({
  picturesList,
  title,
  parentCategory,
  portfolioData,
  transformedCategoriesFromPath,
}: any) {
  function sortByFileNamePrefix(array) {
    return array.sort((a, b) => {
      const numA = parseInt(a.fileName.substring(0, 2), 10);
      const numB = parseInt(b.fileName.substring(0, 2), 10);
      return numA - numB;
    });
  }

  picturesList = sortByFileNamePrefix(picturesList);

  interface Picture {
    description: string;
    fileName: string;
    heading: string;
    public_id: string;
    url: string;
  }

  const [currentIndex, setIndex] = useState(0);

  //----------------
  // console.log(picturesList[currentIndex].url);
  // function addTransformationParams(url) {
  //   const transformationParams = "q_1,f_auto,e_blur:1000";
  //   const parts = url.split("/");
  //   const filename = parts.pop(); // Extracting the filename from the URL
  //   const newUrl = parts.join("/") + "/" + transformationParams + "/" + filename;
  //   return newUrl;
  // }

  // // Example usage:
  // const imageUrl =
  //   "http://res.cloudinary.com/immagina/image/upload/v1716139844/IMMAGINA/Portfolio/Fotografia/Slava%27s%20Snowshow/01_lpvd5s.jpg";
  // const modifiedUrl = addTransformationParams(imageUrl);
  // console.log(modifiedUrl);

  //----------------
  // console.log(title);
  // console.log(transformedCategoriesFromPath);
  return (
    <div className="flex flex-row h-screen w-full">
      <PortfolioGallerySideBar
        picturesList={picturesList}
        currentIndex={currentIndex}
        setIndex={setIndex}
        transformedCategoriesFromPath={transformedCategoriesFromPath}
      />
      <div className="w-[80%] relative border-white border-[15px] flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center bg-red-400">
          <div className="relative w-full h-full">
            <div className="absolute left-0 right-0 top-0 m-auto bg-black bg-opacity-50 text-white p-2 aspect-cover h-full">
              {/* <div className="absolute top-0  bg-black bg-opacity-50 text-white p-2 aspect-square h-full"> */}
              {picturesList[currentIndex].heading}
            </div>
            <div className="flex items-center justify-center w-full h-full">
              <Image
                loading="eager"
                key={currentIndex}
                src={picturesList[currentIndex].url}
                alt={picturesList[currentIndex].description}
                width={2000} // Use an appropriate width and height for the image
                height={2000} // This ensures the image maintains its aspect ratio
                className="object-contain max-w-full max-h-full"
                quality={80}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioGallery;
