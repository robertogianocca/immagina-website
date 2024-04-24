"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useWillChange } from "framer-motion";

function PortfolioGallery({ portfolioData }: any) {
  const [currentIndex, setIndex] = useState(0);
  const pictures = portfolioData.pictures;

  function nextImage() {
    setIndex(currentIndex + 1);
  }
  const mappedImages = pictures.map((item, index) => {
    const isActive = index === currentIndex;
    const aspectRatio = item.width / item.height;
    const imageStyles = {
      width: aspectRatio > 1 ? "100%" : "auto",
      // height: aspectRatio > 1 ? "auto" : "100%",
      // objectFit: "contain",
      maxHeight: "100%",
      margin: "auto",
      border: "solid 3px red",
    };

    console.log(item);

    return (
      <div
        className=" mb-10 bg-green-200  border-4 border-blue-400 w-full h-[400px]  flex items-center justify-center"
        key={"dsdw" + index}
      >
        <Image
          priority={true}
          // className="mb-14 border-4 border-red-400"
          style={imageStyles}
          width={2000}
          height={1000}
          src={item.url}
          alt=""
        />
      </div>
    );
  });

  return (
    <div className="p-4 xl:grid xl:grid-cols-12">
      {/* <button className="bg-green-700 ml-[1400px]" onClick={nextImage}>
        <h1 className="text-xl">NEXT</h1>
      </button> */}

      <div
        // className={`col-span-8 col-start-3 ${
        //   isActive ? "opacity-100" : "opacity-0 pointer-events-none"
        // }`}
        className="xl:col-span-8 xl:col-start-3 grid"
      >
        {mappedImages}
      </div>
    </div>
  );
}

export default PortfolioGallery;
