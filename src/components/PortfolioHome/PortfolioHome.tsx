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
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10">
      {mappedCategories}
      <PortfolioCategoryCard
        key="£!ä"
        title="video"
        description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
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
