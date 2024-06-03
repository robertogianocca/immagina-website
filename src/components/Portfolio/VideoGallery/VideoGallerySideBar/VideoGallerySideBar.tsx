import Link from "next/link";
import Logo from "@/components/Logo/Logo";
import Button from "@/components/Buttons/Button";
import { TiHome } from "react-icons/ti";
import { FaArrowLeft } from "react-icons/fa";

export default function VideoGallerySideBar({}) {
  return (
    <>
      {/* ------ HOME E BACK BUTTONS ------ */}
      <ul>
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
        </li>
      </ul>

      {/* ------ HEADER: PATH, TITLE AND DESCRIPTION ------ */}

      {/* ------ LOGO ------ */}
      <div className="relative h-8 mt-8">
        <div className="absolute bottom-0 left-0">
          <div className="h-4 w-28 relative">
            <Logo />
          </div>
        </div>
      </div>
    </>
  );
}
