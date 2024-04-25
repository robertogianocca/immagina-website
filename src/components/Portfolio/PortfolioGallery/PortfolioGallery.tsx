"use client";
import Image from "next/image";
import { useState } from "react";
// function imageLoader(config) {
//   const urlStart = config.src.split("upload/")[0];
//   const urlEnd = config.src.split("upload/")[1];
//   const transformations = `w_200,h_150,q_${config.quality}`;
//   return `${urlStart}upload/${transformations}/${urlEnd}`;
// }

function PortfolioGallery({ picturesList }: any) {
  const [currentIndex, setIndex] = useState(0);

  function nextImage() {
    currentIndex == picturesList.length - 1 ? setIndex(0) : setIndex(currentIndex + 1);
  }
  function previousImage() {
    currentIndex == 0 ? setIndex(picturesList.length - 1) : setIndex(currentIndex - 1);
  }

  const mappedImages = picturesList.map((item, index) => {
    return <Image key="index" src={item.url} alt="" fill className="object-contain" quality={80} />;
  });

  return (
    <div className="gallery-grid h-screen">
      <div className="col-span-1 row-span-2 bg-green-400 flex items-center justify-center">
        <div onClick={previousImage}>
          <h1 className="text-[50px] font-bold text-white">{"<"}</h1>
        </div>
      </div>
      <div className="clo-start-2 relative border-white border-8">{mappedImages[currentIndex]}</div>
      <div className="clo-start-3 row-span-2 bg-red-400 flex items-center justify-center">
        <div onClick={nextImage}>
          <h1 className="text-[50px] font-bold text-white">{">"}</h1>
        </div>
      </div>
    </div>
  );
}

export default PortfolioGallery;
