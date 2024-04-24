"use client";
// GALLERY
import Image from "next/image";
import img1 from "/public/images/samples/01.jpg";

// function imageLoader(config) {
//   const urlStart = config.src.split("upload/")[0];
//   const urlEnd = config.src.split("upload/")[1];
//   const transformations = `w_200,h_150,q_${config.quality}`;
//   return `${urlStart}upload/${transformations}/${urlEnd}`;
// }

const Gallery = () => {
  return (
    <>
      <div className="gallery-grid h-screen">
        <div className="col-span-1 row-span-2 bg-green-400 flex items-center justify-center">
          <h1 className="text-[50px] font-bold text-white">{"<"}</h1>
        </div>
        <div className="clo-start-2 relative border-white">
          <Image
            src={
              "https://res.cloudinary.com/immagina/image/upload/v1713910704/IMMAGINA/Portfolio/Fotografia/Teatro/Slava/Screenshot_2024-04.png"
            }
            alt=""
            fill
            className="object-contain"
            quality={80}
          />
        </div>
        <div className="clo-start-3 row-span-2 bg-red-400 flex items-center justify-center">
          <h1 className="text-[50px] font-bold text-white">{">"}</h1>
        </div>
      </div>
    </>
  );
};

export default Gallery;
