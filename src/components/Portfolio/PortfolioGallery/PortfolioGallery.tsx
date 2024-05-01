"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
// function imageLoader(config) {
//   const urlStart = config.src.split("upload/")[0];
//   const urlEnd = config.src.split("upload/")[1];
//   const transformations = `w_200,h_150,q_${config.quality}`;
//   return `${urlStart}upload/${transformations}/${urlEnd}`;
// }

function PortfolioGallery({ picturesList }: any) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const handleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const fullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", fullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", fullscreenChange);
    };
  }, []);

  const path = usePathname();
  // When we have categories like "finzi-pasca"
  const pathClean = path.replace("-", " ");
  const categoriesFromPath = pathClean.split("/");
  // Remove the empty string
  categoriesFromPath.shift();
  // categoriesFromPath.slice(0, -1);

  const mappedPath = categoriesFromPath.slice(0, -1).map((item, index) => {
    return (
      <ul key="index">
        <Link href={`/${categoriesFromPath.slice(0, 1 + index).join("/")}`}>
          <li>{item}</li>
        </Link>
      </ul>
    );
  });

  const [currentIndex, setIndex] = useState(0);
  // const [loading, setLoading] = useState("w-full h-full bg-red-600 z-50");

  function nextImage() {
    currentIndex == picturesList.length - 1 ? setIndex(0) : setIndex(currentIndex + 1);
  }
  function previousImage() {
    currentIndex == 0 ? setIndex(picturesList.length - 1) : setIndex(currentIndex - 1);
  }

  function selectThumbnail(index) {
    setIndex(index);
    console.log(index);
  }

  // function onImageLoad() {
  //   setLoading("w-full h-full bg-green-600 z-50");
  //   console.log("loaded");
  // }

  const mappedImages = picturesList.map((item, index) => {
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
  const mappedImagestwo = picturesList.map((item, index) => {
    return (
      <div
        className={`${
          currentIndex === index
            ? "aspect-square relative bg-white border-solid border-4"
            : "aspect-square relative bg-white"
        }`}
        key={index}
      >
        <button onClick={() => selectThumbnail(index)}>
          <Image
            // key="index"
            src={item.url}
            alt=""
            // width={20}
            // height={20}
            fill
            // onLoad={onImageLoad}
            className="object-cover"
            quality={80}
          />
        </button>
      </div>
    );
  });
  // It has
  // survived not only five centuries, but also the leap into electronic typesetting,
  // remaining essentially unchanged. It was popularised in the 1960s with the release of
  // Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
  // publishing software like Aldus PageMaker including versions of Lorem Ipsum.

  return (
    <div className="gallery-grid h-screen">
      <div className="col-span-1 row-span-2 bg-green-200 flex flex-col p-3">
        <div className="bg-red-200 p-5">
          <div>
            <ul className="pb-10">
              <li>{"HOME"}</li>
              {mappedPath}
            </ul>
          </div>
        </div>
        <div className="bg-orange-500 h-[200px]">
          <h1 className="text-xl">Slava snowshow</h1>
          <p className="text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="bg-blue-200 p-5 flex items-center justify-between">
          <div onClick={previousImage}>
            <h1 className="bg-red-200 text-[50px] font-bold text-white">{"<"}</h1>
          </div>

          <h1 className="bg-yellow-400 ">{`${currentIndex + 1} / ${picturesList.length}`}</h1>
          <div onClick={nextImage}>
            <h1 className="bg-blue-500 text-[50px] font-bold text-white">{">"}</h1>
          </div>
        </div>
        <div>
          <p className="text-sm">{picturesList[currentIndex].heading}</p>
          <p className="text-xs">{picturesList[currentIndex].description}</p>
        </div>
        <div className="relative bg-red-500 w-full  grid grid-cols-4 gap-1">{mappedImagestwo}</div>
        <div>
          <button onClick={handleFullscreen}>
            {isFullscreen ? "Exit Fullscreen" : "Go Fullscreen"}
          </button>{" "}
        </div>
      </div>
      <div className="clo-start-2 relative border-white border-[15px]">
        {/* {!loading ? (
          mappedImages[currentIndex]
        ) : (
          <div>
            <p className="text-lg bg-red-800">Loading Spinner goes here</p>
          </div>
        )} */}

        {mappedImages[currentIndex]}
      </div>
    </div>
  );
}

export default PortfolioGallery;
