"use client";
import PortfolioCategoryCard from "@/components/Portfolio/PortfolioCategoryCard/PortfolioCategoryCard";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioHome({ categoryList, portfolioData }: any) {
  let mappedCategories = categoryList.map((item: string, index: number) => (
    // <AnimatePresence key={index}>
    <PortfolioCategoryCard
      key={index}
      title={item}
      shortDescription={portfolioData[item].pictures[0].heading}
      description={portfolioData[item].pictures[0].description}
      cover={portfolioData[item].pictures[0].url}
    />
    // </AnimatePresence>
  ));
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10">
      {mappedCategories}
      <PortfolioCategoryCard
        key="£!ä"
        title="video"
        shortDescription={`IMMAGINA offre servizi video a tutto tondo. Produciamo di preferenza documentari per artisti, musicisti, attori, teatri, festival, matrimoni: per gente simpatica only.`}
        description={``}
        cover="https://res.cloudinary.com/immagina/image/upload/v1724666692/IMMAGINA/Portfolio/Video/thumb-carie.jpg"
      />

      {/* <iframe
        src="https://player.vimeo.com/video/917201659?&loop=1&autoplay=1"
        width="640"
        height="564"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe> */}
    </div>
  );
}
