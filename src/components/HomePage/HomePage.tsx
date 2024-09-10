"use client";
import Link from "next/link";
import Button from "@/components/Buttons/Button";
import RedButton from "@/components/Buttons/RedButton";
import RedTriangle from "../Icons/RedTriangle";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [variable, setVariable] = useState("auto");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const proportion = width / height;

      if (proportion > 2.5) {
        setVariable("70%");
      }
    };

    // Check the screen size on initial render
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="md:hidden relative h-[90vh] overflow-hidden m-[-24px] sm:border-8 sm:border-red-500">
        <iframe
          className="absolute top-0 left-[-320px] w-[1200px] h-[100%] "
          style={{ objectFit: "cover" }}
          src="https://player.vimeo.com/video/1002621299?h=8f0a2b3536&amp&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&background=1"
        ></iframe>
      </div>
      <div className="text-sm lg:text-base text-sky-800 font-semibold col-span-1 pr-8">
        <div className="mb-1 font-courier">
          <p className="text-xl tracking-tighter">{`Niente si sa,`}</p>
          <p className="text-xl tracking-tighter mb-3">{`tutto si immagina`}</p>
          <p className="mb-5 lg:mb-14">Fernando Pessoa</p>
        </div>
        <p className="mb-5 lg:mb-7">
          Se per ragioni professionali o private vuoi comunicare al mondo le tue idee, chi sei, cosa
          fai, potresti essere interessato ad affidarti al collettivo creativo IMMAGINA+.
        </p>
        <p className="mb-5 lg:mb-7">
          {"Come un sarto confeziona l'abito, IMMAGINA+ confeziona la tua comunicazione."}
        </p>
        <p className="mb-5 lg:mb-7">
          IMMAGINA+ ti invita a <span className="text-red-600 italic">sfogliare</span> il suo
          portfolio. Poche parole. Immagini? Troppe, forse.
        </p>
        <Link href="#portfolio">
          {/* <Button addClass="p-2 px-3 text-xl font-courier mb-7 text-red-600 shadow-buttonTwo">
            Portfolio
          </Button> */}
          <RedButton addClass="p-2 px-3 text-base lg:text-xl font-courier mb-7 text-red-600 lg:font-light">
            Portfolio
          </RedButton>
        </Link>
        <ul className="font-courier text-base 2xl:text-lg pr-4 2xl:pr-0 text-center mb-5 lg:mb-7 grid grid-cols-2 gap-x-4 gap-y-4">
          <li className="flex">
            <RedTriangle />
            <Link href="/fotografia" className="hover:text-red-600">
              Fotografia
            </Link>
          </li>
          <Link href="/grafica" className="hover:text-red-600">
            <li className="flex items-centers justi">
              <RedTriangle />
              Grafica
            </li>
          </Link>
          <Link href="/video" className="hover:text-red-600">
            <li className="flex items-center">
              <RedTriangle />
              Video
            </li>
          </Link>

          <li className="flex items-center">
            <RedTriangle />
            Webdesign
          </li>
          {/* <li className="flex items-center">
            <RedTriangle />
            Bookdesign
          </li>
          <li className="flex items-center">
            <RedTriangle />
            Copywriting
          </li> */}
        </ul>
        <p className="pb-7">If you like it, scrivici. Why not.</p>
      </div>
      <div className="hidden md:inline col-span-2 relative w-full h-full">
        <div className="col-span-2 relative overflow-hidden pt-[75%]  bg-green-200 object-cover">
          <iframe
            className="absolute top-0 left-0 object-cover w-full h-full"
            src="https://player.vimeo.com/video/1002621299?h=8f0a2b3536&amp&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&background=1"
          ></iframe>
        </div>
      </div>
    </>
  );
}
