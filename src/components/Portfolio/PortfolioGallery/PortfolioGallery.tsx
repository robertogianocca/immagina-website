"use client";
import Image from "next/image";
import PortfolioGallerySideBar from "@/components/Portfolio/PortfolioGallery/PortfolioGallerySideBar/PortfolioGallerySideBar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioGallery({
  currentCategory,
  transformedCategoriesFromPath,
  picturesList,
  categoryDescription,
}: any) {
  const [currentIndex, setIndex] = useState(0);

  // Sort pictures by file name
  function sortByFileNamePrefix(array) {
    return array.sort((a, b) => {
      const numA = parseInt(a.fileName.substring(0, 2), 10);
      const numB = parseInt(b.fileName.substring(0, 2), 10);
      return numA - numB;
    });
  }

  picturesList = sortByFileNamePrefix(picturesList);

  // Title class
  const hideTitle = currentIndex == 0 ? " " : "hidden";

  return (
    <div className="flex flex-row h-screen w-full">
      <div className="w-[300px] fixed h-screen overflow-auto flex flex-col justify-between p-5 bg-stone-100 text-base inner-shadow ">
        <PortfolioGallerySideBar
          categoryDescription={categoryDescription}
          currentCategory={currentCategory}
          picturesList={picturesList}
          transformedCategoriesFromPath={transformedCategoriesFromPath}
          currentIndex={currentIndex}
          setIndex={setIndex}
        />
      </div>
      <div className="ml-[300px] flex-grow p-4 pl-10 pb-10 bg-white">
        <div className="relative w-full h-full">
          {/* Gallery title */}
          <div
            className={`absolute left-0 right-0 top-0 m-auto p-2 aspect-cover h-full ${hideTitle}`}
          >
            <h1 className="font-courier font-bold text-4xl text-red-600">{currentCategory}</h1>
          </div>
          {/* Gallery image */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="flex items-center justify-center w-full h-full"
            >
              <Image
                loading="eager"
                src={picturesList[currentIndex].url}
                alt={picturesList[currentIndex].description}
                width={2000}
                height={2000}
                className="object-contain max-w-full max-h-full"
                quality={80}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
