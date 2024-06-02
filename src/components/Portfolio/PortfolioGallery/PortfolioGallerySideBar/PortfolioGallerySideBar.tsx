import Link from "next/link";
import Image from "next/image";
import Header from "./Header/Header";
import Thumbnails from "./Thumbnails/Thumbnails";
import Logo from "@/components/Logo/Logo";
import Button from "@/components/Buttons/Button";
import H3 from "@/components/Fonts/H3";
import { TiHome } from "react-icons/ti";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineFullscreen } from "react-icons/md";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function PortfolioGallerySideBar({
  currentCategory,
  littleCategoryDescription,
  categoryDescription,
  picturesList,
  setIndex,
  currentIndex,
  transformedCategoriesFromPath,
  setIsVisible,
}) {
  //   --------------------------------- KEYBOARD NAVIGATION ---------------------------------

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

  //   --------------------------------- FULL SCREEN ---------------------------------

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

  //   --------------------------------- THUMBNAILS ---------------------------------
  function selectThumbnail(index) {
    setIndex(index);
  }

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

  const paramsObject = useParams();
  const params = paramsObject.categories;
  const categoryBefore = params.slice(0, -1);
  //   --------------------------------------------------------------------------------------------------------------------------------------------------
  return (
    <>
      {/* ------ HOME E BACK BUTTONS ------ */}

      <ul>
        <li className="flex gap-2">
          <Link href={`/${categoryBefore.join("/")}`}>
            <Button addClass="p-2 text-slate-400">
              <FaArrowLeft size={25} />
            </Button>
          </Link>
          <Link href={"/"}>
            <Button addClass="p-2 text-slate-400">
              <TiHome size={25} />
            </Button>
          </Link>
        </li>
      </ul>

      {/* ------ HEADER: PATH, TITLE AND DESCRIPTION ------ */}
      <Header
        setIsVisible={setIsVisible}
        transformedCategoriesFromPath={transformedCategoriesFromPath}
        currentCategory={currentCategory}
        littleCategoryDescription={littleCategoryDescription}
        categoryDescription={categoryDescription}
      />

      {/* ------ ARROWS AND INDEX ------ */}

      <div className="grid grid-cols-2 gap-4 font-courier font-bold mb-4">
        {/* Left Arrow */}
        <button
          onClick={previousImage}
          className="bg-zinc-150 text-stone-600 shadow-button flex items-center justify-center h-20 rounded-md"
        >
          <p className="font-courier font-bold text-4xl ">{"<"}</p>
        </button>
        {/* Right Arrow */}
        <button
          onClick={nextImage}
          className="bg-zinc-150 text-stone-600 shadow-button flex items-center justify-center rounded-md"
        >
          <p className="text-4xl">{">"}</p>
        </button>
        {/* Index */}
        <h1 className="bg-zinc-150 text-stone-600 h-20 flex items-center justify-center rounded-xl">{`${
          currentIndex + 1
        } / ${picturesList.length}`}</h1>
        {/* Full Screen */}
        <button
          onClick={handleFullscreen}
          className="bg-zinc-150 text-stone-600 shadow-button flex items-center justify-center rounded-md"
        >
          {/* {isFullscreen ? "Exit Fullscreen" : "Go Fullscreen"} */}
          <MdOutlineFullscreen size={40} />
        </button>
      </div>

      {/* ------ IMAGE HEADING ------ */}

      <div className="h-auto">
        <p className="text-sm">{picturesList[currentIndex].heading}</p>
      </div>

      {/* ------ THUMBNAIL ------ */}

      <Thumbnails picturesList={picturesList} setIndex={setIndex} currentIndex={currentIndex} />

      {/* ------ LOGO ------ */}

      <div className="relative h-8 mt-8">
        <div className="absolute bottom-0 left-0">
          <div className="h-4 w-28 relative">
            <Logo />
          </div>
        </div>
      </div>
    </>
  );
}
