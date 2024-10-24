// IMMAGINA MAIN PAGE

import React from "react";
import Link from "next/link";
import MainCard from "@/components/MainPage/MainCard/MainCard";
import logoRed from "/public/images/logo/logo-immagina.svg";
import logoBlue from "/public/images/logo/logo-immagina-blue.svg";
import Triangle from "@/components/Icons/Triangle";

export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:grid grid-cols-3 gap-4 lg:gap-12 h-screen lg:h-auto lg:m-10 p-4 lg:px-20 lg:pt-16 lg:pb-20 bg-customGrey font-bold text-xs lg:text-sm lg:rounded-2xl">
        <div className="text-customBrown">
          {/* ---------- CITAZIONE ---------- */}
          <div className="hidden lg:flex flex-col font-courier font-bold text-2xl tracking-tight">
            <p className="">{`Niente si sa,`}</p>
            <p className="mb-5">{`tutto si immagina`}</p>
            <p className="mb-16 text-lg italic">{`Fernando Pessoa`}</p>
          </div>
          {/* ---------- DESCRIZIONE ---------- */}
          <p className="mb-5">{`IMMAGINA ti dice ciao e si presenta.`}</p>
          <p className="mb-5">{`Come il sarto confeziona l'abito, IMMAGINA confeziona la tua immagine, la tua comunicazione.`}</p>
          <p className="hidden lg:block mb-5">{`Se per ragioni aziendali, o culturali o private vuoi far conoscere al mondo la tua attività, personalità, le tue idee, i tuoi progetti, potresti essere interessato ad affidarti al collettivo creativo IMMAGINA. Sfogliaci.`}</p>
          {/* mobile only */}
          <p className="lg:hidden mb-5">{`Se ti vuoi profilare potresti essere interessato ad affidarti al collettivo IMMAGINA. Sfogliaci.
`}</p>
          <p className="mb-4 hidden lg:block">{`IMMAGINA ha un cuore e un’anima.
Il cuore batte per la cultura. L’anima governa il business.`}</p>
          {/* ---------- DESCRIZIONE ---------- */}
          <div className="hidden lg:flex flex-row">
            <div className="flex flex-row">
              <Triangle addClass="border-l-customRed" />
              <Link href="/cultura">
                <p className="font-courier text-lg text-customRed hover:border-b-2 hover:border-customRed mr-6 ml-[-4px]">
                  cultura
                </p>
              </Link>
            </div>
            <div className="flex flex-row">
              <Triangle addClass="border-l-customBlue" />
              <Link href="/cultura">
                <p className="font-courier text-lg text-customBlue hover:border-b-2 hover:border-customBlue ml-[-4px]">
                  business
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <MainCard
            title="cultura"
            description="Dedicato ad artisti e operatori culturali."
            cover="https://res.cloudinary.com/immagina/image/upload/v1728637625/IMMAGINA/Home%20Page/immagina-cultura_uqdajd.jpg"
            logo={logoRed}
            titleColor="text-customRed"
          />
        </div>
        <MainCard
          title="business"
          description="Dedicato ad aziende, imprenditori e manager."
          cover="https://res.cloudinary.com/immagina/image/upload/v1729761866/IMMAGINA/Home%20Page/immagina-azienda_fndvpj.jpg"
          logo={logoBlue}
          titleColor="text-customBlue"
        />
      </div>
    </>
  );
}
