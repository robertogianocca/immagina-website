"use client";
import Link from "next/link";
import Image from "next/image";
import RedButton from "@/components/Buttons/RedButton";
import Triangle from "../Icons/Triangle";
import OpacityAnimation from "../Animations/OpacityAnimation";

export default function HomePage() {
  return (
    <OpacityAnimation addClass="flex flex-col lg:grid lg:grid-cols-3 lg:gap-10 pb-10 xl:pb-16">
      {/* ---------- VIDEO MOBILE ---------- */}
      <div className="lg:hidden mx-[-160px] h-[50vh] sm:h-[300px] md:h-[50vh] sm:mb-4 md:mb-0">
        <video autoPlay muted loop className="w-full h-full object-cover object-top">
          <source src="/video/animazione-bosco-two.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col flex-grow gap-4 justify-between lg:col-span-1 lg:pr-8 min-h-[30vh] lg:h-full 2xl:h-fit  text-sm xs:text-[4.2vw] xs:text-sm lg:text-xs xl:text-base text-sky-800 font-semibold ">
        {/* ---------- CITAZIONE ---------- */}
        <div className="hidden md:block lg:hidden mt-4 font-courier">
          <p className="text-xl lg:text-lg xl:text-xl tracking-tighter">{`Niente si sa, tutto si immagina`}</p>
          <p className="text-lg lg:text-base xl:text-lg lg:mb-5 xl:mb-14">Fernando Pessoa</p>
        </div>
        <div className="hidden lg:block font-courier">
          <p className="text-xl lg:text-lg xl:text-xl tracking-tighter">{`Niente si sa,`}</p>
          <p className="text-xl lg:text-lg xl:text-xl tracking-tighter mb-3">{`tutto si immagina`}</p>
          <p className="text-lg lg:text-base xl:text-lg xl:mb-14">Fernando Pessoa</p>
        </div>
        {/* ---------- PRESENTAZIONE ---------- */}
        <p className="mt-4 lg:-mt-0 xl:mb-7">
          Se per ragioni professionali o private vuoi comunicare al mondo le tue idee, chi sei, cosa
          fai, potresti essere interessato ad affidarti al collettivo creativo IMMAGINA+.
        </p>
        <p className="hidden sm:block xl:mb-7">
          {"Come un sarto confeziona l'abito, IMMAGINA+ confeziona la tua comunicazione."}
        </p>
        <p className="hidden sm:block xl:mb-7">
          IMMAGINA+ ti invita a <span className="italic text-red-600">sfogliare</span> il suo
          portfolio. Poche parole. Immagini? Troppe, forse.
        </p>
        <Link href="#portfolio" className="hidden sm:block">
          <RedButton addClass="p-2 px-3 text-base xl:text-xl font-courier mb-4 text-red-600 lg:font-light">
            Portfolio
          </RedButton>
        </Link>
        {/* ---------- LISTA ---------- */}
        <ul className="grid grid-cols-2 sm:flex lg:grid gap-x-4 gap-y-4 font-courier text-base lg:text-sm 2xl:text-lg xs:pr-4 2xl:pr-0 text-center lg:mb-0">
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
        <p className="md:pb-0 lg:pb-7">If you like it, scrivici. Why not.</p>
      </div>
      {/*  ------------ VIDEO DESKTOP ------------ */}
      <div className="hidden lg:inline col-span-2 lg:w-full h-full aspect-home">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/video/animazione-bosco-two.mp4" type="video/mp4" />
        </video>
      </div>
    </OpacityAnimation>
  );
}
