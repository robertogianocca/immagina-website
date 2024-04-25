import Link from "next/link";
import Image from "next/image";

const PortfolioCategoryCard = ({ item, portfolioData }) => {
  return (
    // <Link href={`/${item}`}>
    <Link href={item.includes(" ") ? item.replace(" ", "-") : `/${item}`}>
      <div className="w-fit h-[400px] border-4 flex items-center justify-center bg-gray-400">
        <h2 className="text-4xl ">{item}</h2>
        <Image
          src={portfolioData[item].pictures[0].url}
          width={3000}
          height={2000}
          alt="Category Cover"
        />
      </div>
    </Link>
  );
};

export default PortfolioCategoryCard;
