// HOME CULTURA

import { revalidatePath } from "next/cache";
import { getDataStructure } from "@/utils/portfolio-data-structure";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Wrapper from "@/components/Wrapper/Wrapper";
import HomePage from "@/components/HomePage/HomePage";
import PortfolioHome from "@/components/Portfolio/PortfolioHome/PortfolioHome";

export default async function Cultura() {
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

  const categoryList = Object.keys(portfolioData);

  console.log(portfolioData);
  return (
    <div>
      <NavigationBar
        menuColor="text-customRed hover:border-b-2 hover:border-customRed"
        bgColor="bg-customWhite lg:shadow-xl lg:shadow-slate-200"
      />
      <Wrapper>
        <section id="home" className="h-space sm:h-full md:min-h-space overflow-hidden">
          <HomePage />
        </section>
        <section>
          <PortfolioHome categoryList={categoryList} portfolioData={portfolioData} />
        </section>
      </Wrapper>
    </div>
  );
}
