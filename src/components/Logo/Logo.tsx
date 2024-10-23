import Image from "next/image";

export default function Logo({ logo }) {
  return <Image src={logo} width={210} height={210} alt="Logo IMMAGINA" />;
}
