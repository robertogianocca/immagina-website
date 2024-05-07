import Image from "next/image";
import Link from "next/link";
interface PortfolioCategoryCardProps {
  item: any;
  categoriesFromPath: any;
}
const PortfolioSubCategoryCard = ({
  item,
  // portfolioData
  // currentItem,
  categoriesFromPath,
}: // updatePortfolioData,
PortfolioCategoryCardProps) => {
  // const imageCover = currentItem.pictures[0].url;
  // When we have categories like "finzi pasca"
  return (
    <div className="bg-gray-400">
      {/* <Link href={`/portfolio/${categoriesFromPath.join("/")}/${item.replace(" ", "-")}`}> */}
      <Link
        href={`/${categoriesFromPath.join("/")}/${item.replace(" ", "-")}`}
        // onClick={updatePortfolioData(currentItem)}
      >
        <div className="w-full h-full relative flex flex-col p-8 bg-zinc-600 hover:bg-red-900 text-slate-200">
          <h1 className="text-4xl pb-4">{item}</h1>
          <p>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.`}
          </p>
        </div>
      </Link>
      {/* <Image src={imageCover} alt="Logo Colombera" width={200} height={200} /> */}
    </div>
  );
};

export default PortfolioSubCategoryCard;
