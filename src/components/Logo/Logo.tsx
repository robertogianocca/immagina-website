import Image from "next/image";
import logo from "/public/images/logo/logo-immagina.svg";

const Logo = () => {
  return (
    <>
      <Image src={logo} width={200} height={200} alt="logo immagina" />
    </>
  );
};

export default Logo;
