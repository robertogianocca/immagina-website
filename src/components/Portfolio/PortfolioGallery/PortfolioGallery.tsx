"use client";
import Image from "next/image";
import PortfolioGallerySideBar from "@/components/Portfolio/PortfolioGallery/PortfolioGallerySideBar/PortfolioGallerySideBar";
import Button from "@/components/Buttons/Button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioGallery({
  currentCategory,
  transformedCategoriesFromPath,
  picturesList,
  categoryDescription,
  shortCategoryDescription,
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

  const [isVisible, setIsVisible] = useState(true);

  function closeTextBox() {
    setIsVisible((prevState) => !prevState);
  }

  const [imageQuality, setImageQuality] = useState(2);

  const handleImageLoad = () => {
    setImageQuality(70);
  };

  const mobileGallery = picturesList.map((item, index) => {
    return (
      <Image
        key={index}
        priority={true}
        src={picturesList[index].url}
        alt={picturesList[index].description}
        width={picturesList[index].width}
        height={picturesList[index].height}
        className="object-contain max-w-full max-h-full mb-6"
        quality={imageQuality}
        onLoad={handleImageLoad}
        sizes="(max-width: 1200px) 100vw, 70vw"
      />
    );
  });

  return (
    <div className="flex flex-row h-screen w-full">
      <div className="hidden w-[300px] fixed h-screen overflow-auto md:flex flex-col justify-between p-5 bg-stone-200 bg-opacity-35 text-base inner-shadow ">
        <PortfolioGallerySideBar
          title={currentCategory}
          shortCategoryDescription={shortCategoryDescription}
          categoryDescription={categoryDescription}
          picturesList={picturesList}
          transformedCategoriesFromPath={transformedCategoriesFromPath}
          currentIndex={currentIndex}
          setIndex={setIndex}
          setIsVisible={setIsVisible}
        />
      </div>
      {/* Text Description Overlay */}
      <div
        className={`fixed top-0 left-[300px] right-0 bottom-0 bg-white z-50 bg-opacity-100 flex items-center justify-center p-10 ${
          isVisible ? "hidden" : "block"
        }`}
      >
        <div className="flex flex-col items-center w-full max-w-[800px] h-full">
          <div className="w-full px-10 mb-3">
            <Button
              addClass="px-4 py-2 mb-4 shadow-stone-300 text-stone-600 font-bold text-md"
              onClick={closeTextBox}
            >
              X
            </Button>
          </div>
          <div className="w-full flex-grow px-10 overflow-auto ">
            <p
              className="link text-base text-sky-800 font-semibold"
              dangerouslySetInnerHTML={{ __html: categoryDescription }}
            />
          </div>
        </div>
      </div>

      {/* Image Container */}
      <div className="md:ml-[300px] flex-grow p-4 pl-10 pb-10 bg-customWhite">
        <div className="relative w-full h-full">
          {/* Gallery title */}
          <div
            className={`md:absolute left-0 right-0 top-0 m-auto p-2 aspect-cover h-full ${hideTitle}`}
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
              className="hidden md:flex items-center justify-center w-full h-full"
            >
              <Image
                priority={true}
                src={picturesList[currentIndex].url}
                alt={picturesList[currentIndex].description}
                width={picturesList[currentIndex].width}
                height={picturesList[currentIndex].height}
                className="object-contain max-w-full max-h-full"
                quality={imageQuality}
                onLoad={handleImageLoad}
                sizes="(max-width: 1200px) 100vw, 70vw"
              />
            </motion.div>
          </AnimatePresence>
          <div className="flex flex-col md:hidden">{mobileGallery}</div>
        </div>
      </div>
    </div>
  );
}
