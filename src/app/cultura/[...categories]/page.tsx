// CULTURE CATEGORIES PAGES

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
  revalidatePath("/cultura");

  const portfolioData = getDataStructure(cloudinaryResponse);
  const categoriesFromPath = params.categories;

  // ------------------------------------------------------------------------------------------------------------

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

  const dida = [
    "Chiesa di Negrentino, Romanico XI sec. Dedicata a Sant’Ambrogio, Prugiasco, Valle di Blenio",
    "Chiesa di Negrentino, Romanico XI sec. Dedicata a Sant’Ambrogio, Prugiasco, Valle di Blenio",
    "Chiesaromanica di san Pietro e Paolo, risale al 1171, Biasca",
    "Chiesa-Oratorio di San Vigilio, Rovio",
    "Chiesa di Santa Maria del Sasso, edificata nel 1470, Morcote",
    "Chiesa di Santa Maria del Sasso, edificata nel 1470, Morcote",
    "Chiesa di Santa Maria del Sasso, edificata nel 1470, Morcote",
    "Chiesa di Sant’Antonio Abate (ca. 1300), Morcote",
    "Isole di Brissago",
    "Isola di Brissago",
    "Isola di Brissago",
    "Castello Sasso Corbaro (Unterwaldo), XV secolo, Bellinzona",
    "Castello Sasso Corbaro (Unterwaldo), XV secolo, Bellinzona",
    "Castello Montebello (Svitto), XV secolo, Bellinzona",
    "Rovine di Serravalle nel comune di Malvaglia",
    "Rovine di Serravalle nel comune di Malvaglia",
    "Monte Generoso: Trenino/cremagliera. Capolago (270 s.l.)- Vetta (1700 s.l.m.)",
    "Monte Generoso: Trenino/cremagliera. Capolago (270 s.l.)- Vetta (1700 s.l.m.). Nello sfondo Melide e Lago 'Lugano'",
    "Monte Generoso: Trenino/cremagliera. Capolago (270 s.l.)- Vetta (1700 s.l.m.). Nello sfondo: Città di Lugano",
    "Monte Generoso: Trenino/cremagliera. Capolago (270 s.l.)- Vetta (1700 s.l.m.)",
    "Monte Generoso: Trenino/cremagliera. Capolago (270 s.l.)- Vetta (1700 s.l.m.)",
    "Monte Generoso: Trenino/cremagliera. Capolago (270 s.l.)- Vetta (1700 s.l.m.)",
  ];

  const gallery =
    portfolioData.cultura.portfolio.photography.drone["poesia ticino"].images.pictures;

  // Check if the gallery exists and iterate
  if (gallery && Array.isArray(gallery)) {
    dida.forEach((item, index) => {
      if (gallery[index]) {
        gallery[index].heading = item;
        gallery[index].description = item;
      }
    });
  } else {
    console.error("Gallery or images not found");
  }

  console.log(
    portfolioData.cultura?.portfolio?.photography?.drone["poesia ticino"].images.pictures[0]
  );

  // ------------------------------------------------------------------------------------------------------------

  return (
    <>
      <PortfolioContainer
        portfolioData={portfolioData.cultura.portfolio}
        categoriesFromPath={categoriesFromPath}
      />
    </>
  );
}
