import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/logo/logo-immagina.svg";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image src={logo} width={200} height={200} alt="logo immagina" />
      </Link>
    </>
  );
};

export default Logo;
