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
      <div className="flex flex-col lg:grid grid-cols-3 gap-12 lg:m-10 p-4 lg:px-20 lg:pt-16 lg:pb-20 bg-customGrey font-bold text-xs lg:text-sm rounded-2xl">
        <div className="text-customBrown">
          {/* ---------- CITAZIONE ---------- */}
          <div className="font-courier font-bold text-2xl tracking-tight">
            <p className="">{`Niente si sa,`}</p>
            <p className="mb-5">{`tutto si immagina`}</p>
            <p className="mb-16 text-lg italic">{`Fernando Pessoa`}</p>
          </div>
          <p className="mb-5">{`IMMAGINA ti dice ciao e si presenta.`}</p>
          <p className="mb-5">{`Come il sarto confeziona l'abito, IMMAGINA confeziona la tua immagine, la tua comunicazione.`}</p>
          <p className="mb-5">{`Se per ragioni aziendali, o culturali o private vuoi far conoscere al mondo la tua attività, personalità, le tue idee, i tuoi progetti, potresti essere interessato ad affidarti al collettivo creativo IMMAGINA.`}</p>
          <p className="mb-4">{`Due sono le anime di IMMAGINA:`}</p>
          <div className="flex flex-row">
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
                  azienda
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <MainCard
            title="cultura"
            cover="https://res.cloudinary.com/immagina/image/upload/v1728637625/IMMAGINA/Home%20Page/immagina-cultura_uqdajd.jpg"
            logo={logoRed}
            titleColor="text-customRed"
          />
        </div>
        <MainCard
          title="azienda"
          cover="https://res.cloudinary.com/immagina/image/upload/v1728637625/IMMAGINA/Home%20Page/immagina-azienda_t7txrw.jpg"
          logo={logoBlue}
          titleColor="text-customBlue"
        />
      </div>
    </>
  );
}
