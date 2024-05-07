// CATEGORIES PAGES

import { getDataStructure } from "@/utils/portfolio-data-structure";
import PortfolioContainer from "@/components/Portfolio/PortfolioContainer/PortfolioContainer";
import { revalidatePath } from "next/cache";
export const revalidate = 1;

const CategoriesPages = async ({ params }) => {
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_ID}/resources/image/?max_results=500&metadata=true&context=true`,
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
  const portfolioData = getDataStructure(cloudinaryResponse);
  const categoriesFromPath = params.categories;
  // console.log(test);

  return (
    <>
      <PortfolioContainer portfolioData={portfolioData} categoriesFromPath={categoriesFromPath} />
    </>
  );
};

export default CategoriesPages;
