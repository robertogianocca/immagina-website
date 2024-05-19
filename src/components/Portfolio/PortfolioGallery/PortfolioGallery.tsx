"use client";
import PortfolioGallerySideBar from "@/components/Portfolio/PortfolioGallery/PortfolioGallerySideBar/PortfolioGallerySideBar";
import Image from "next/image";
import { useState } from "react";
// function imageLoader(config) {
//   const urlStart = config.src.split("upload/")[0];
//   const urlEnd = config.src.split("upload/")[1];
//   const transformations = `w_200,h_150,q_${config.quality}`;
//   return `${urlStart}upload/${transformations}/${urlEnd}`;
// }

function PortfolioGallery({ picturesList }: any) {
  // pictureList type

  function sortByFileNamePrefix(array) {
    return array.sort((a, b) => {
      const numA = parseInt(a.fileName.substring(0, 2), 10);
      const numB = parseInt(b.fileName.substring(0, 2), 10);
      return numA - numB;
    });
  }

  picturesList = sortByFileNamePrefix(picturesList);
  // console.log(sortedItems);

  interface Picture {
    description: string;
    fileName: string;
    heading: string;
    public_id: string;
    url: string;
  }

  console.log(picturesList.sort());
  const [currentIndex, setIndex] = useState(0);

  const mappedImages = picturesList.map((item: Picture, index: number) => {
    return (
      <Image
        priority
        loading="eager"
        key="index"
        src={item.url}
        alt=""
        // onLoad={onImageLoad}
        fill
        className="object-contain z-0"
        quality={80}
      />
    );
  });

  return (
    <div className="gallery-grid h-screen">
      <PortfolioGallerySideBar
        picturesList={picturesList}
        currentIndex={currentIndex}
        setIndex={setIndex}
      />
      <div className="clo-start-2 relative border-white border-[15px]">
        {mappedImages[currentIndex]}
      </div>
    </div>
  );
}

export default PortfolioGallery;
