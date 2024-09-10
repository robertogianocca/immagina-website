"use client";
import PortfolioCategoryCard from "@/components/Portfolio/PortfolioCategoryCard/PortfolioCategoryCard";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioHome({ categoryList, portfolioData, params }: any) {
  console.log(categoryList);

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
        shortDescription={portfolioData[item].pictures[0].heading}
        description={portfolioData[item].pictures[0].description}
        cover={portfolioData[item].pictures[0].url}
        transformedCategoriesFromPath={item}
        addClass="border-l-red-600"
      />
    </motion.div>
  ));

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
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
            cover="https://res.cloudinary.com/immagina/image/upload/v1724666692/IMMAGINA/Portfolio/Video/thumb-carie.jpg"
            transformedCategoriesFromPath="video"
            addClass="border-l-red-600"
          />
        </motion.div>
      </AnimatePresence>
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
