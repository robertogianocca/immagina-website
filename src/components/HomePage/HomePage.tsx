"use client";
import Link from "next/link";
import Button from "@/components/Buttons/Button";
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

      <div className="text-sm md:text-base text-sky-800 font-semibold col-span-1">
        <div className="mb-1 font-courier">
          <p className="text-xl tracking-tighter">{`Niente si sa,`}</p>
          <p className="text-xl tracking-tighter mb-3">{`tutto si immagina`}</p>
          <p className="mb-14">Fernando Pessoa</p>
        </div>
        <p className="mb-7"> IMMAGINA+ è un collettivo di creativi.</p>
        <p className="mb-7">
          Se per ragioni professionali o private vuoi comunicare al mondo chi sei, cosa fai,
          potresti essere interessato ad affidarti al collettivo creativo IMMAGINA+. Comunichiamo la
          tua immagine, come il sarto fa l’abito su misura. Quali strumenti abbiamo a disposizione?
        </p>
        <div className="mb-7">
          <p>Fotografia Grafica Video</p>
          <p>Webdesign Bookdesign Copywriting</p>
        </div>
        <p className="pb-7">
          Ti invitiamo a sfogliare il nostro portfolio: un’immagine vale mille parole. Se ti piace
          scrivici. Why not?
        </p>
        <Link href="#portfolio">
          <Button addClass="p-2 px-3 text-stone-600 text-base">Portfolio</Button>
        </Link>
      </div>
      <div className="hidden md:inline col-span-2 relative w-full h-full">
        <div className="h-full flex">
          <iframe
            src="https://player.vimeo.com/video/999094842?h=19a5c4fcfb&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&background=1"
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
