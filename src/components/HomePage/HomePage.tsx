"use client";
import Link from "next/link";
import Image from "next/image";
import RedButton from "@/components/Buttons/RedButton";
import Triangle from "../Icons/Triangle";
import OpacityAnimation from "../Animations/OpacityAnimation";

export default function HomePage() {
  return (
    <OpacityAnimation addClass="flex flex-col lg:grid lg:grid-cols-3 gap-10 pb-16">
      {/* ---------- VIDEO MOBILE ---------- */}
      <div className="md:hidden relative h-[50vh] sm:h-[90vh] overflow-hidden m-[-24px]">
        <iframe
          className="absolute top-0 left-[-390px] sm:left-0 w-[1200px] sm:w-[100%] sm:top-[-790px] h-[100%] sm:h-[2000px]"
          style={{ objectFit: "cover" }}
          src="https://player.vimeo.com/video/1002621299?h=8f0a2b3536&amp&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&background=1"
          loading="lazy"
        ></iframe>
      </div>
      <div className="flex flex-col justify-between h-[40vh] md:h-auto text-sm lg:text-xs xl:text-base text-sky-800 font-semibold col-span-1 lg:pr-8 md:pt-3">
        {/* ---------- CITAZIONE ---------- */}
        <div className="hidden sm:block mb-1 font-courier">
          <p className="text-xl lg:text-lg xl:text-xl tracking-tighter">{`Niente si sa,`}</p>
          <p className="text-xl lg:text-lg xl:text-xl tracking-tighter mb-3">{`tutto si immagina`}</p>
          <p className="text-lg lg:text-base xl:text-lg mb-5 lg:mb-5 xl:mb-14">Fernando Pessoa</p>
        </div>
        {/* ---------- PRESENTAZIONE ---------- */}
        <p className="tracking-tight md:tracking-normal mb-5 lg:mb-4 xl:mb-7">
          Se per ragioni professionali o private vuoi comunicare al mondo le tue idee, chi sei, cosa
          fai, potresti essere interessato ad affidarti al collettivo creativo IMMAGINA+.
        </p>
        <p className="hidden sm:block mb-5 lg:mb-4 xl:mb-7">
          {"Come un sarto confeziona l'abito, IMMAGINA+ confeziona la tua comunicazione."}
        </p>
        <p className="hidden sm:block mb-5 lg:mb-4 xl:mb-7">
          IMMAGINA+ ti invita a <span className="italic text-red-600">sfogliare</span> il suo
          portfolio. Poche parole. Immagini? Troppe, forse.
        </p>
        <Link href="#portfolio" className="hidden sm:block">
          <RedButton addClass="p-2 px-3 text-base xl:text-xl font-courier mb-7 text-red-600 lg:font-light">
            Portfolio
          </RedButton>
        </Link>
        {/* ---------- LISTA ---------- */}
        <ul className="font-courier text-base lg:text-sm 2xl:text-lg xs:pr-4 2xl:pr-0 text-center mb-5 lg:mb-7 grid grid-cols-2 md:flex lg:grid gap-x-4 gap-y-4">
          <li className="flex">
            <Triangle addClass="border-l-red-600" />
            <Link href="/fotografia" className="hover:text-red-600">
              Fotografia
            </Link>
          </li>
          <Link href="/grafica" className="hover:text-red-600">
            <li className="flex items-centers justi">
              <Triangle addClass="border-l-red-600" />
              Grafica
            </li>
          </Link>
          <Link href="/video" className="hover:text-red-600">
            <li className="flex items-center">
              <Triangle addClass="border-l-red-600" />
              Video
            </li>
          </Link>

          <li className="flex items-center">
            <Triangle addClass="border-l-red-600" />
            Webdesign
          </li>
        </ul>
        <p className="pb-7 md:pb-0 lg:pb-7">If you like it, scrivici. Why not.</p>
      </div>
      {/*  ------------ VIDEO DESKTOP ------------ */}
      <div className="col-span-2 w-[90%] loop h-full bg-green-400">
        <video controls autoPlay muted className="w-full h-full object-cover">
          <source src="/video/animazione-bosco-two.mp4" type="video/mp4" />
        </video>
      </div>
      {/* <div className="hidden md:inline col-span-2 relative w-full h-full">
        <div className="col-span-2 relative overflow-hidden pt-[75%] object-cover">
          <iframe
            className="absolute top-0 left-0 object-cover w-full h-full bg-contain bg-[url('https://res.cloudinary.com/immagina/image/upload/v1726056297/IMMAGINA/Home%20Page/placeholder-01_ynx5pe.jpg')]"
            src="https://player.vimeo.com/video/1002621299?h=8f0a2b3536&amp&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&background=1"
            loading="lazy"
          ></iframe>
        </div>
      </div> */}
    </OpacityAnimation>
  );
}
