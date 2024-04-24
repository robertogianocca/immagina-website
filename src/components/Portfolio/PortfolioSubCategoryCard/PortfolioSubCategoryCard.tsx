import Image from "next/image";
import Link from "next/link";

const PortfolioSubCategoryCard = ({ item, portfolioData, categoriesFromPath }) => {
  return (
    <div className="bg-gray-400">
      {/* <Link href={`/portfolio/${categoriesFromPath.join("/")}/${item.replace(" ", "-")}`}> */}
      <Link href={`/${categoriesFromPath.join("/")}/${item.replace(" ", "-")}`}>
        <h2 className="text-4xl">{item}</h2>
      </Link>
      {/* <Image
        className="object-contain w-full h-full"
        src={portfolioData[item].pictures ? portfolioData[item].pictures[0].url : ""}
        alt="Logo Colombera"
        width={200}
        height={200}
        priority={false}
      /> */}
    </div>
  );
};

export default PortfolioSubCategoryCard;
