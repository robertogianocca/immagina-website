import Image from "next/image";

const PortfolioGalleryMobile = ({ title, picturesList }) => {
  const mappedImages = picturesList.map((item: Picture, index: number) => {
    return (
      <div className="relative my-10 bg-red-200 z-100" key={index}>
        {/* <div className="absolute top-0 left-0 w-full h-full bg-red-500 opacity-50 z-10"></div> */}
        <Image
          priority
          loading="eager"
          src={item.url}
          alt=""
          // onLoad={onImageLoad}
          width={1920}
          height={1920}
          //   className="object-contain"
          quality={80}
        />
      </div>
    );
  });

  return (
    <div className="p-2">
      {mappedImages}
      <h1>Sono la galleria mobile</h1>
    </div>
  );
};

export default PortfolioGalleryMobile;
