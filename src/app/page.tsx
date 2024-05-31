// HOMEPAGE

import { revalidatePath } from "next/cache";
import { getDataStructure } from "@/utils/portfolio-data-structure";
import Wrapper from "@/components/Wrapper/Wrapper";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import PortfolioHome from "@/components/PortfolioHome/PortfolioHome";
import H1 from "@/components/Fonts/H1";
import PortfolioCategoryCard from "@/components/Portfolio/PortfolioCategoryCard/PortfolioCategoryCard";

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

  return (
    <>
      <NavigationBar />
      <Wrapper>
        <section id="portfolio" className="h-space">
          <div className="flex flex-col md:main-grid pt-20">
            <div>
              <H1>Portfolio</H1>
            </div>
            <div className="col-span-2">
              <p className="text-base text-slate-700">
                {`It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text.`}
              </p>
            </div>
            <div className="col-span-3">
              <PortfolioHome categoryList={categoryList} portfolioData={portfolioData} />
            </div>
          </div>
        </section>
        <section id="about" className="h-space">
          <div className="flex flex-col md:main-grid pt-20">
            <div>
              <H1>About</H1>
            </div>
            <div className="col-span-2">
              <p className="text-base text-slate-700">
                {`It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text.It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text.Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text.It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text.`}
              </p>
            </div>
          </div>
        </section>
        <section id="contact" className="h-space">
          <div className="flex flex-col md:main-grid pt-20">
            <div>
              <H1>Contact</H1>
            </div>
            <div className="col-span-2 bg-red-200 w-full h-[500px]">
              <div className="text-base text-slate-700"></div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
}
