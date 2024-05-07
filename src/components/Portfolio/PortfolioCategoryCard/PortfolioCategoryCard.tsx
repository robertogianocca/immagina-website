import Link from "next/link";
import Image from "next/image";

const PortfolioCategoryCard = ({ item, portfolioData }) => {
  return (
    // <Link href={`/${item}`}>
    <Link href={item.includes(" ") ? item.replace(" ", "-") : `/${item}`}>
      <div className="w-full h-full relative flex flex-col p-8 bg-zinc-600 hover:bg-red-900 text-slate-200">
        <h1 className="text-4xl pb-4">{item}</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.
        </p>
        <div className="">
          {/* <Image
            src={portfolioData[item].pictures[0].url}
            width={3000}
            height={2000}
            alt="Category Cover"
          /> */}
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCategoryCard;
