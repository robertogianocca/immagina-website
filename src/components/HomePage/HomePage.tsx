"use client";
import Link from "next/link";
import Image from "next/image";
import RedButton from "@/components/Buttons/RedButton";
import Triangle from "../Icons/Triangle";
import OpacityAnimation from "../Animations/OpacityAnimation";

export default function HomePage() {
  return (
    <OpacityAnimation addClass="h-full sm:h-auto flex flex-col justify-between sm:justify-no sm:grid sm:grid-cols-3 gap-[2vh] sm:gap-4 lg:gap-x-10 pt-4 lg:pt-[30px] pb-6 lg:pb-[30px] font-bold text-sky-800 ">
      <div className="flex flex-col gap-[2vh] sm:gap-4 lg:gap-x-10 xl:gap-y-[2vh] sm:col-span-2 lg:col-span-1 text-sm xl:responsive-home">
        {/* ---------- CITAZIONE ---------- */}
        <div className="hidden xl:block font-courier">
          <p className="text-xl lg:text-lg xl:text-xl tracking-tighter">{`Niente si sa,`}</p>
          <p className="text-xl lg:text-lg xl:text-xl tracking-tighter mb-3">{`tutto si immagina`}</p>
          <p className="text-lg lg:text-base xl:text-lg ">Fernando Pessoa</p>
        </div>
        {/* ---------- PRESENTAZIONE ---------- */}
        <p className="">
          Se per ragioni professionali o private vuoi comunicare al mondo le tue idee, chi sei, cosa
          fai, potresti essere interessato ad affidarti al collettivo creativo IMMAGINA+.
        </p>
        <p className="shidden sm:block">
          {"Come un sarto confeziona l'abito, IMMAGINA+ confeziona la tua comunicazione."}
        </p>
        <p className="hidden sm:block">
          IMMAGINA+ ti invita a <span className="italic text-red-600">sfogliare</span> il suo
          portfolio. Poche parole. Immagini? Troppe, forse.
        </p>
        <Link href="#portfolio" className="hidden sm:block">
          <RedButton addClass="p-2 px-3 text-base xl:text-xl font-courier mb-4 text-red-600 lg:font-light">
            Portfolio
          </RedButton>
        </Link>
        {/* ---------- PORTFOLIO LIST ---------- */}
        <ul className="grid grid-cols-2 sm:flex lg:grid gap-x-6 gap-y-4 2xl:gap-x-[min(1rem)] 2xl:w-[max(400px)] xs:pr-4 xl:pr-0 text-center lg:mb-0 font-courier text-base xl:text-lg">
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
        <p className="md:pb-0">If you like it, scrivici. Why not.</p>
      </div>

      {/*  ------------ VIDEO ------------ */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="sm:col-span-3 lg:col-span-2 object-cover lg:object-contain object-bottom sm:object-top w-full h-[50vh] xs:h-[70vh] md:max-h-[calc(100vh-478px)] lg:h-full lg:max-h-[calc(100vh-135px)] 2xl:w-full 2xl:h-auto 2xl:max-h-auto 2xl:object-cover 2xl:object-top"
      >
        <source src="/video/animazione-bosco-01.mp4" type="video/mp4" />
      </video>
    </OpacityAnimation>
  );
}
