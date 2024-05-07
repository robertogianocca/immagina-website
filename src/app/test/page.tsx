// test

import NavigationBar from "@/components/NavigationBar/NavigationBar";
import PortfolioCategoryCard from "@/components/Portfolio/PortfolioCategoryCard/PortfolioCategoryCard";
import { revalidatePath } from "next/cache";
import { getDataStructure } from "@/utils/portfolio-data-structure";

const test = async () => {
  const subfolderName = "immagina/portfolio/grafica";
  const encodedSubfolderName = encodeURIComponent(subfolderName);
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_ID}/resources/image/upload?prefix=${encodedSubfolderName}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`
        ).toString("base64")}`,
      },
    }
  );

  const cloudinaryResponse = await response.json();
  // revalidatePath("/");

  //   const portfolioData = getDataStructure(cloudinaryResponse);

  //   const categoryList = Object.keys(portfolioData);

  console.log(cloudinaryResponse.resources);

  //   let mappedCategories = categoryList.map((item, index) => (
  //     <PortfolioCategoryCard key={index} item={item} portfolioData={portfolioData} />
  //   ));
  // console.log(portfolioData.drone.pictures);
  return (
    <main className="">
      <NavigationBar />
      {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 h-space p-20">{mappedCategories}</div> */}
    </main>
  );
};

export default test;
