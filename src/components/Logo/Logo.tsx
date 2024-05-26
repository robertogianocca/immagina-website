import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/logo/logo-immagina.svg";

export default function Logo() {
  return (
    <>
      <Link href="/">
        <Image src={logo} width={200} height={200} alt="Logo IMMAGINA" className="pl-6" />
      </Link>
    </>
  );
}
