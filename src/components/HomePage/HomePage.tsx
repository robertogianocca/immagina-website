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
      <div className="text-base text-sky-800 font-semibold col-span-1">
        <p>Niente si sa, tutto si IMMAGINA” Fernando Pessoa</p>
        <p> IMMAGINA+ è un collettivo di creativi.</p>
        <p>
          Se per ragioni professionali o private vuoi comunicare al mondo chi sei, cosa fai,
          potresti essere interessato ad affidarti al collettivo creativo IMMAGINA. Comunichiamo la
          tua immagine, come il sarto fa l’abito su misura. Quali strumenti abbiamo a disposizione?
        </p>
        <p>Fotografia Grafica Video</p>
        <p>Webdesign Bookdesign Scrittura</p>
        <p>
          Ti invitiamo a sfogliare il nostro portfolio: un’immagine vale mille parole. Se ti piace
          scrivici. Why not?`
        </p>
        <p>
          <Link href="#portfolio">
            <Button addClass="p-2 px-3 text-stone-600 text-base">Portfolio</Button>
          </Link>
        </p>
      </div>
      <div className="col-span-2 relative w-full h-full">
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
