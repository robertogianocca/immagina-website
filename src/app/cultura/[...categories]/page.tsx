// CULTURE CATEGORIES PAGES

import { revalidatePath } from "next/cache";
import { getDataStructure } from "@/utils/portfolio-data-structure";
import PortfolioContainer from "@/components/Portfolio/PortfolioContainer/PortfolioContainer";
import {
  captionPoesiaTicino,
  captionGottardo,
  captionFinziPasca,
} from "@/app/cultura/[...categories]/captions";
import { addCaption } from "@/utils/add-caption";

export default async function CategoriesPages({ params }: any) {
  let portfolioData = null;
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_ID}/resources/image/?max_results=500&metadata=true&context=true&prefix=IMMAGINA/Cultura/&type=upload`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`
          ).toString("base64")}`,
        },
      }
    );

    const cloudinaryResponse = await response.json();
    portfolioData = getDataStructure(cloudinaryResponse);
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
  }

  if (!portfolioData) {
    return (
      <div className="bg-customGrey h-screen">
        <div className="text-customBrown bg-customGrey w-[50%] flex m-auto justify-center pt-[20%]">
          <p className="font-semibold text-xs md:text-lg">
            Errore nel caricamento dei dati. Riprova più tardi.
          </p>
        </div>
      </div>
    );
  }

  const categoriesFromPath = params.categories;
  console.log(params.categories);

  // --------------------------------------------------------------------------------------------------

  function renamePropertyRecursive(obj, oldKey, newKey) {
    if (typeof obj !== "object" || obj === null) return false; // Base case for non-object

    // Check if the property exists at the current level
    if (obj.hasOwnProperty(oldKey)) {
      obj[newKey] = obj[oldKey]; // Rename the property
      delete obj[oldKey]; // Delete the old property
      return true; // Property found and renamed
    }

    // Recursively search deeper
    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        const found = renamePropertyRecursive(obj[key], oldKey, newKey);
        if (found) return true; // Stop further searching if property is renamed
      }
    }

    return false; // Property not found
  }

  renamePropertyRecursive(portfolioData, "gotthardbahn", "gotthardbahn 2016");
  renamePropertyRecursive(portfolioData, "autostrada", "autostrada - land art");
  renamePropertyRecursive(portfolioData, "ticino", "poesia ticino");

  addCaption(
    portfolioData.cultura.portfolio.photography.drone["poesia ticino"].images.pictures,
    captionPoesiaTicino
  );
  addCaption(
    portfolioData.cultura.portfolio.photography.drone["gotthardbahn 2016"].images.pictures,
    captionGottardo
  );
  addCaption(
    portfolioData.cultura.portfolio.photography.teatro["finzi pasca"].images.pictures,
    captionFinziPasca
  );

  return (
    <>
      <PortfolioContainer
        portfolioData={portfolioData.cultura.portfolio}
        categoriesFromPath={categoriesFromPath}
      />
    </>
  );
}
