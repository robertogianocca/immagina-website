// CATEGORIES PAGES

import { revalidatePath } from "next/cache";
import { getDataStructure } from "@/utils/portfolio-data-structure";
import PortfolioContainer from "@/components/Portfolio/PortfolioContainer/PortfolioContainer";

export default async function CategoriesPages({ params }: any) {
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

  return (
    <>
      <PortfolioContainer portfolioData={portfolioData} categoriesFromPath={categoriesFromPath} />
    </>
  );
}
