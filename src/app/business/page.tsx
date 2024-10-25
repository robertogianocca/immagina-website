// HOME AZIENDA

import { revalidatePath } from "next/cache";
import { getDataStructure } from "@/utils/portfolio-data-structure";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Wrapper from "@/components/Wrapper/Wrapper";
import logoBlue from "/public/images/logo/logo-immagina-blue.svg";

export default async function Business() {
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
  // revalidatePath("/azienda");

  const portfolioData = getDataStructure(cloudinaryResponse);

  const categoryList = Object.keys(portfolioData.azienda.portfolio);

  return (
    <>
      <NavigationBar
        logo={logoBlue}
        menuColor="text-customBlue hover:border-b-2 hover:border-customBlue"
        bgColor="bg-slate-300 lg:shadow-xl lg:shadow-slate-200"
      />
      {/* <Wrapper></Wrapper> */}
    </>
  );
}
