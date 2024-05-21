// HOMEPAGE

import { revalidatePath } from "next/cache";
import { getDataStructure } from "@/utils/portfolio-data-structure";
import Wrapper from "@/components/Wrapper/Wrapper";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import PortfolioCategoryCard from "@/components/Portfolio/PortfolioCategoryCard/PortfolioCategoryCard";
import H1 from "@/components/Fonts/H1";
import P from "@/components/Fonts/P";

export default async function Home() {
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

  let mappedCategories = categoryList.map((item, index) => (
    <PortfolioCategoryCard
      key={index}
      title={item}
      description={portfolioData[item].pictures[0].description}
      cover={portfolioData[item].pictures[0].url}
    />
  ));

  return (
    <>
      <NavigationBar />
      <Wrapper>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 h-space pt-10 pb-20">
          <div>
            <H1>Portfolio</H1>
          </div>
          <div className="col-span-2 pb-16">
            <P>
              {`It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text.`}
            </P>
          </div>
          {mappedCategories}
        </div>
      </Wrapper>
    </>
  );
}
