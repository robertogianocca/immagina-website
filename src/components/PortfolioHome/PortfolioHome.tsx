"use client";
import PortfolioCategoryCard from "@/components/Portfolio/PortfolioCategoryCard/PortfolioCategoryCard";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioHome({ categoryList, portfolioData }) {
  let mappedCategories = categoryList.map((item, index) => (
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
      <iframe src="https://www.youtube.com/watch?v=gfU1iZnjRZM" />
    </div>
  );
}
