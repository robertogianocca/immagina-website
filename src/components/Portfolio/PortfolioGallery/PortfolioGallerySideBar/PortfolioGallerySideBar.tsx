import Link from "next/link";
import Image from "next/image";
import Thumbnails from "./Thumbnails/Thumbnails";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const PortfolioGallerySideBar = ({
  picturesList,
  setIndex,
  currentIndex,
  transformedCategoriesFromPath,
}) => {
  document.onkeydown = function (event) {
    switch (event.keyCode) {
      case 37:
        currentIndex == 0 ? setIndex(picturesList.length - 1) : setIndex(currentIndex - 1);
        break;
      case 39:
        currentIndex == picturesList.length - 1 ? setIndex(0) : setIndex(currentIndex + 1);
        break;
    }
  };

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

  //   --------------------------------- ARROWS FUNCTION ---------------------------------
  function nextImage() {
    currentIndex == picturesList.length - 1 ? setIndex(0) : setIndex(currentIndex + 1);
  }
  function previousImage() {
    currentIndex == 0 ? setIndex(picturesList.length - 1) : setIndex(currentIndex - 1);
  }

  //   --------------------------------- PATH ---------------------------------
  const path = usePathname();

  // When we have categories like "finzi-pasca"
  const pathClean = path.replace("-", " ");

  const categoriesFromPath = pathClean.split("/");

  // Remove the empty string
  categoriesFromPath.shift();

  const mappedPath = categoriesFromPath.slice(0, -1).map((item, index) => {
    return (
      <li key="index">
        <Link href={`/${categoriesFromPath.slice(0, 1 + index).join("/")}`}>{item}</Link>
      </li>
    );
  });

  //   --------------------------------- THUMBNAILS ---------------------------------
  function selectThumbnail(index) {
    setIndex(index);
    // console.log(index);
  }

  // <div
  //   className={`${
  //     currentIndex === index
  //       ? "aspect-square  bg-white border-solid border-4"
  //       : "aspect-square  bg-white"
  //   }`}
  //   key={index}
  // >
  const mappedImagestwo = picturesList.map((item, index) => {
    return (
      <div className="relative aspect-square bg-blue-200" key={index}>
        <button onClick={() => selectThumbnail(index)}>
          <Image
            // key="index"
            src={item.url}
            alt=""
            quality={1}
            // className="aspect-square"
            fill
            // onLoad={onImageLoad}
            className="object-cover"
          />
        </button>
      </div>
    );
  });
  //   -------------------------------------------------------------------------

  return (
    <div className="col-span-1 row-span-2 w-[20%] flex flex-col p-3 bg-green-200 ">
      {/* ------ PATH LINKS ------ */}
      <div className="bg-red-200">
        <div>
          <ul className="">
            <li>
              <Link href={"/"}>
                <button>{"HOME"}</button>
              </Link>
            </li>
            {mappedPath}
          </ul>
        </div>
      </div>
      {/* ------ TITLE AND DESCRIPTION ------ */}
      <div className="bg-orange-500 h-[200px]">
        <h1 className="text-xl">{transformedCategoriesFromPath[1]}</h1>
        <p className="text-xs">
          {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.`}
        </p>
      </div>
      {/* ------ ARROWS AND INDEX ------ */}
      <div className="bg-blue-200 flex items-center justify-between">
        <div onClick={previousImage}>
          <h1 className="bg-red-200 text-[50px] font-bold text-white">{"<"}</h1>
        </div>

        <h1 className="bg-yellow-400 ">{`${currentIndex + 1} / ${picturesList.length}`}</h1>
        <div onClick={nextImage}>
          <h1 className="bg-blue-500 text-[50px] font-bold text-white">{">"}</h1>
        </div>
      </div>
      {/* ------ IMAGE HEADING AND DESCRIPTION ------ */}
      <div>
        <p className="text-sm">{picturesList[currentIndex].heading}</p>
        <p className="text-xs">{picturesList[currentIndex].description}</p>
      </div>
      {/* ------ THUMBNAIL ------ */}
      <Thumbnails picturesList={picturesList} setIndex={setIndex} currentIndex={currentIndex} />

      {/* ------ FULL SCREEN BUTTON ------ */}
      <div>
        <button onClick={handleFullscreen}>
          {isFullscreen ? "Exit Fullscreen" : "Go Fullscreen"}
        </button>{" "}
      </div>
    </div>
  );
};

export default PortfolioGallerySideBar;
