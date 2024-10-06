import Image from "next/image";
import logo from "/public/images/logo/logo-immagina.svg";

export default function Logo() {
  return <Image src={logo} width={210} height={210} alt="Logo IMMAGINA" />;
}
