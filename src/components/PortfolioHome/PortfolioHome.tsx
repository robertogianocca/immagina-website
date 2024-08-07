"use client";
import PortfolioCategoryCard from "@/components/Portfolio/PortfolioCategoryCard/PortfolioCategoryCard";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioHome({ categoryList, portfolioData }) {
  let mappedCategories = categoryList.map((item: string, index: number) => (
    // <AnimatePresence key={index}>
    <PortfolioCategoryCard
      key={index}
      title={item}
      description={portfolioData[item].pictures[0].description}
      cover={portfolioData[item].pictures[0].url}
    />
    // </AnimatePresence>
  ));
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
      {mappedCategories}
      <PortfolioCategoryCard
        key="£!ä"
        title="video"
        description="Descrizione video"
        cover="https://res.cloudinary.com/immagina/image/upload/v1716928095/IMMAGINA/Portfolio/Fotografia/Slava%27s%20Snowshow/images/20_ckiexj.jpg"
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
