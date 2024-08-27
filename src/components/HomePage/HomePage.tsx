"use client";
import Link from "next/link";
import Button from "@/components/Buttons/Button";
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
      {/* <div className="w-full h-screen md:hidden  bg-red-200">
        <div className="absolute top-0 left-0 w-full h-full">
          <iframe
            src="https://player.vimeo.com/video/999094842?h=19a5c4fcfb&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&background=1"
            className="absolute top-0 left-0 "
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style={{
              position: "absolute",
              top: "0",
              left: "50%",
              width: "300vw", // Double the viewport width to ensure cropping
              height: "100vh",
              transform: "translateX(-55%)", // Center the video horizontally
              objectFit: "cover", // Cover the area, cropping as needed
            }}
          ></iframe>
        </div>
      </div> */}

      <div className="text-sm lg:text-base text-sky-800 font-semibold col-span-1 pr-8">
        <div className="mb-1 font-courier">
          <p className="text-xl tracking-tighter">{`Niente si sa,`}</p>
          <p className="text-xl tracking-tighter mb-3">{`tutto si immagina`}</p>
          <p className="mb-14">Fernando Pessoa</p>
        </div>
        <p className="mb-7">
          Se per ragioni professionali o private vuoi comunicare al mondo le tue idee, chi sei, cosa
          fai, potresti essere interessato ad affidarti al collettivo creativo IMMAGINA+.
        </p>
        <p>Come un sarto confeziona l'abito, IMMAGINA+ confeziona la tua comunicazione.</p>
        <p className="mb-7">Quali gli strumenti?</p>
        <ul className="font-courier text-base 2xl:text-lg pr-4 2xl:pr-0 text-center mb-7 grid grid-cols-2 gap-x-4 gap-y-4">
          <li className="flex">
            <RedTriangle />
            Fotografia
          </li>
          <li className="flex items-centers justi">
            <RedTriangle />
            Grafica
          </li>
          <li className="flex items-center">
            <RedTriangle />
            Video
          </li>
          <li className="flex items-center">
            <RedTriangle />
            Webdesign
          </li>
          <li className="flex items-center">
            <RedTriangle />
            Bookdesign
          </li>
          <li className="flex items-center">
            <RedTriangle />
            Copywriting
          </li>
        </ul>
        <p className="pb-7">
          IMMAGINA+ ti invita a sfogliare il suo portfolio. Poche parole. Immagini? Troppe, forse.
        </p>
        <p className="pb-7">If you like it, scrivici. Why not.</p>
        <Link href="#portfolio">
          <Button addClass="p-2 px-3 text-stone-600 text-base">Portfolio</Button>
        </Link>
      </div>
      <div className="hidden md:inline col-span-2 relative w-full h-full">
        <div className="h-full flex">
          <iframe
            src="https://player.vimeo.com/video/1002621299?h=8f0a2b3536&amp&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&background=1"
            className="aspect-home self-start object-cover"
            width="100%"
            height={variable}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            // style={{ alignSelf: "flex-start", aspectRatio: "4 / 3" }}
          ></iframe>
        </div>
      </div>
    </>
  );
}
