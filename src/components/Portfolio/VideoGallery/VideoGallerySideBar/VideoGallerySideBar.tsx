import Link from "next/link";
import Header from "../../PortfolioGallery/PortfolioGallerySideBar/Header/Header";
import Logo from "@/components/Logo/Logo";
import Button from "@/components/Buttons/Button";
import { TiHome } from "react-icons/ti";
import { FaArrowLeft } from "react-icons/fa";

export default function VideoGallerySideBar({
  title,
  path,
  shortDescription,
  longDescription,
  setIsVisible,
}) {
  return (
    <>
      <div className="flex flex-col mb-2">
        {/* ------ HOME E BACK BUTTONS ------ */}
        <ul className="mb-8">
          <li className="flex gap-2">
            <Link href={"/video"}>
              <Button addClass="p-2 text-slate-400">
                <FaArrowLeft size={25} />
              </Button>
            </Link>
            <Link href={"/"}>
              <Button addClass="p-2 text-slate-400">
                <TiHome size={25} />
              </Button>
            </Link>
            <div className="w-28 h-auto relative left-12">
              <Logo />
            </div>
          </li>
        </ul>

        {/* ------ HEADER: PATH, TITLE AND DESCRIPTION ------ */}
        <Header
          title={title}
          path={["Video"]}
          shortDescription={shortDescription}
          longDescription={longDescription}
          setIsVisible={setIsVisible}
        />
      </div>
    </>
  );
}
