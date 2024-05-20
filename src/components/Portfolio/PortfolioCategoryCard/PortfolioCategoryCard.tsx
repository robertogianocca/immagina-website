import Link from "next/link";
import Image from "next/image";
interface PortfolioCategoryCardProps {
  title: string;
  description: string;
  cover: string;
}
const PortfolioCategoryCard = ({ title, description, cover }: PortfolioCategoryCardProps) => {
  return (
    // <Link href={`/${title}`}>
    <Link href={title.includes(" ") ? title.replace(" ", "-") : `/${title}`}>
      <div className="w-full h-full relative flex flex-col p-8 bg-zinc-600 hover:bg-red-900 text-slate-200">
        <h1 className="text-4xl pb-4">{title}</h1>
        <p>{description}</p>
        <div className="">
          <Image src={cover} width={3000} height={2000} alt="Category Cover" />
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCategoryCard;
