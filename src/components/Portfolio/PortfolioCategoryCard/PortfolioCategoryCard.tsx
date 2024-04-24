import Link from "next/link";
import Image from "next/image";

const PortfolioCategoryCard = ({ item, portfolioData }) => {
  console.log(portfolioData[item].pictures[0].url);
  return (
    <Link href={`/${item}`}>
      <div className="w-fit h-[400px] border-4 flex items-center justify-center bg-gray-400">
        <h2 className="text-4xl ">{item}</h2>
        <Image
          src={portfolioData[item].pictures[0].url}
          width={3000}
          height={2000}
          alt="Category Cover"
        />
        {/* <h1>{portfolioData[item].pictures}</h1> */}
        {/* <h1>{portfolioData.item.pictures}</h1> */}
      </div>
    </Link>
  );
};

export default PortfolioCategoryCard;
