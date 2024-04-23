import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Image from "next/image";
import img1 from "/public/images/samples/01.jpg";
import img2 from "/public/images/samples/02.jpg";
import img3 from "/public/images/samples/03.jpg";
import img4 from "/public/images/samples/04.jpg";
import img5 from "/public/images/samples/05.jpg";
import img6 from "/public/images/samples/06.jpg";
const Home = () => {
  return (
    <main className="">
      <NavigationBar />
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <Image src={img1} width={3000} height={2000} alt="portfolio images" />
        <Image src={img2} width={3000} height={2000} alt="portfolio images" />
        <Image src={img3} width={3000} height={2000} alt="portfolio images" />
        <Image src={img4} width={3000} height={2000} alt="portfolio images" />
        <Image src={img5} width={3000} height={2000} alt="portfolio images" />
        <Image src={img6} width={3000} height={2000} alt="portfolio images" />
      </div>
    </main>
  );
};

export default Home;
