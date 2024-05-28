import Image from "next/image";
import { useState, useEffect } from "react";

export default function Thumbnails({ picturesList, setIndex, currentIndex }) {
  const [currentThumbPage, setCurrentThumbPage] = useState(1);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(picturesList.length / itemsPerPage);

  const currentData = picturesList.slice(
    (currentThumbPage - 1) * itemsPerPage,
    currentThumbPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentThumbPage(pageNumber);
  };

  const nextThumbPage = () => {
    setCurrentThumbPage((prev) => (prev === totalPages ? 1 : prev + 1));
  };

  const previousThumbPage = () => {
    setCurrentThumbPage((prev) => (prev === 1 ? totalPages : prev - 1));
  };

  // Adjust the current page when currentIndex changes
  useEffect(() => {
    const newPage = Math.floor(currentIndex / itemsPerPage) + 1;
    setCurrentThumbPage(newPage);
  }, [currentIndex]);

  const mappedThumbnails = currentData.map((item, index) => {
    const globalIndex = (currentThumbPage - 1) * itemsPerPage + index;
    return (
      <div
        className={`${
          currentIndex === globalIndex
            ? "w-20 h-20 bg-white border-solid border-4"
            : "w-20 h-20 bg-white"
        }`}
        key={globalIndex}
      >
        <button onClick={() => selectThumbnail(globalIndex)} className="w-full h-full">
          <Image
            src={item.url}
            alt=""
            priority
            loading="eager"
            width={80}
            height={80}
            className="object-cover w-full h-full"
            quality={2}
          />
        </button>
      </div>
    );
  });

  function selectThumbnail(index) {
    setIndex(index);
  }

  return (
    <>
      <div className="relative bg-red-500 w-full grid grid-cols-4 gap-1">{mappedThumbnails}</div>
      <button onClick={previousThumbPage}>{"<"}</button>
      <button onClick={nextThumbPage}>{">"}</button>
    </>
  );
}
