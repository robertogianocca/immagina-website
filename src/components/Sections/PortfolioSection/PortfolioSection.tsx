"use client";
import PortfolioCategoryCard from "@/components/Portfolio/PortfolioCategoryCard/PortfolioCategoryCard";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioSection({ categoryList, portfolioData }: any) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Stagger animation delay
        duration: 0.5,
      },
    }),
  };

  let mappedCategories = categoryList.map((item: string, index: number) => (
    <motion.div
      key={index}
      variants={cardVariants}
      initial="hidden"
      custom={index}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <PortfolioCategoryCard
        key={index}
        title={item}
        shortDescription={
          portfolioData[item]?.pictures?.[0]?.heading || "No short description available"
        }
        cover={portfolioData[item]?.pictures?.[0]?.url || "/No cover image available"}
        transformedCategoriesFromPath={item}
        addClass="border-l-red-600"
      />
    </motion.div>
  ));

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10">
      <AnimatePresence>
        {mappedCategories}
        <motion.div
          key="£!ä"
          variants={cardVariants}
          initial="hidden"
          custom={categoryList.length}
          whileInView="visible"
          viewport={{ once: true }}
        >
          <PortfolioCategoryCard
            key="£!ä"
            title="Video"
            shortDescription={`IMMAGINA offre servizi video a tutto tondo. Produciamo di preferenza documentari per artisti, musicisti, attori, teatri, festival, matrimoni: per gente simpatica only.`}
            description={``}
            cover="https://res.cloudinary.com/immagina/image/upload/v1726135738/IMMAGINA/Video/thumb-carie_tqot2z.jpg"
            transformedCategoriesFromPath="video"
            addClass="border-l-red-600"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
