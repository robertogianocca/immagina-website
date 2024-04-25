import Image from "next/image";
import Link from "next/link";

const PortfolioSubCategoryCard = ({ item, currentItem, categoriesFromPath }) => {
  // const imageCover = currentItem.pictures[0].url;

  return (
    <div className="bg-gray-400">
      {/* <Link href={`/portfolio/${categoriesFromPath.join("/")}/${item.replace(" ", "-")}`}> */}
      <Link href={`/${categoriesFromPath.join("/")}/${item.replace(" ", "-")}`}>
        <h2 className="text-4xl">{item}</h2>
      </Link>
      {/* <Image src={imageCover} alt="Logo Colombera" width={200} height={200} /> */}
    </div>
  );
};

export default PortfolioSubCategoryCard;
