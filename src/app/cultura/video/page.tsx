// VIDEO PAGE

"use client";
import Link from "next/link";
import { videoDatabaseCultura } from "@/app/cultura/video/video-database-cultura";
import Wrapper from "@/components/Wrapper/Wrapper";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import PortfolioTitleNavigation from "@/components/Portfolio/PortfolioTitleNavigation/PortfolioTitleNavigation";
import PortfolioCategoryCard from "@/components/Portfolio/PortfolioCategoryCard/PortfolioCategoryCard";
import logoRed from "/public/images/logo/logo-immagina.svg";

export default function VideoPage() {
  const mappedVideo = videoDatabaseCultura.map((item, index) => {
    return (
      <div key={index}>
        <PortfolioCategoryCard
          title={item.title}
          shortDescription={item.shortDescription}
          cover={item.cover}
          transformedCategoriesFromPath={item.link}
          addClass="border-l-green-600"
        />
      </div>
    );
  });

  const subCategoryList = [];

  videoDatabaseCultura.map((item, index) => {
    subCategoryList.push(item.title);
  });

  return (
    <>
      <NavigationBar
        color="text-customRed"
        menuColor="text-customRed hover:border-b-2 hover:border-customRed"
        bgColor="bg-customWhite lg:shadow-xl lg:shadow-slate-200"
      />
      <Wrapper>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 pb-20 text-customBrown">
          <PortfolioTitleNavigation
            currentCategory="Video"
            currentCategoryDescription="A The cameraman (Buster Keaton), La febbre dell’oro (Charlie Chaplin), Mon oncle (Jacques Tati) metterebbero una sfilza di like. Quelli di IMMAGINA.La produzione di immagini in movimento ha indubbiamente un grande fascino. Ha un effetto ipnotizzante sul pubblico. IMMAGINA offre servizi video a tutto tondo. Produciamo di preferenza documentari per artisti, musicisti, attori, teatri, festival, matrimoni: per gente simpatica  only. Per imprenditori simpatici e con umore produciamo volontieri spot pubblicitari simpatici e … Per un corto o lungometraggio: se ne può parlare. Why not? Schiaccia qui per mandarci un messaggio. Naturalmente ci integriamo volentieri a un più esteso team per prestar servizi quali riprese, riprese con droni, montaggio, color balancing, prise de son e produzione di colonne sonore, ecc ecc. Disponiamo di hardwere e software e Know How."
            categoryColors="border-l-red-600"
            subCategoryColors="border-l-green-600"
            hamburgerColors="text-green-600"
          />
          <div className="hidden lg:block col-span-2">
            <p className="hidden xl:block text-base font-semibold col-span-2">{`A The cameraman (Buster Keaton), La febbre dell’oro (Charlie Chaplin), Mon oncle (Jacques Tati) metterebbero una sfilza di like. Quelli di IMMAGINA.La produzione di immagini in movimento ha indubbiamente un grande fascino. Ha un effetto ipnotizzante sul pubblico. IMMAGINA offre servizi video a tutto tondo. Produciamo di preferenza documentari per artisti, musicisti, attori, teatri, festival, matrimoni: per gente simpatica  only. Per imprenditori simpatici e con umore produciamo volontieri spot pubblicitari simpatici e … Per un corto o lungometraggio: se ne può parlare. Why not? Schiaccia qui per mandarci un messaggio. Naturalmente ci integriamo volentieri a un più esteso team per prestar servizi quali riprese, riprese con droni, montaggio, color balancing, prise de son e produzione di colonne sonore, ecc ecc. Disponiamo di hardwere e software e Know How.`}</p>
          </div>
          {mappedVideo}
        </div>
      </Wrapper>
    </>
  );
}
