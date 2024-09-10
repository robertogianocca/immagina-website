// VIDEO PAGE

"use client";
import { videoDatabase } from "@/app/video/video-database";
import Wrapper from "@/components/Wrapper/Wrapper";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import VideoSubCategoryCard from "@/components/Portfolio/VideoSubCategoryCard/VideoSubCategoryCard";
import PortfolioCategoryCard from "@/components/Portfolio/PortfolioCategoryCard/PortfolioCategoryCard";

export default function VideoPage() {
  const mappedVideo = videoDatabase.map((item, index) => {
    return (
      <div key={index}>
        <VideoSubCategoryCard
          link={item.link}
          title={item.title}
          shortDescription={item.shortDescription}
          description={item.shortDescription}
          cover={item.cover}
        />
      </div>
    );
  });

  return (
    <>
      <NavigationBar />
      <Wrapper>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 h-space pb-20">
          <div>
            <h2 className="text-4xl font-courier font-bold text-sky-800">Video</h2>
          </div>
          <div className="col-span-2 pb-16">
            <p className="text-base text-sky-800 font-semibold">{`A The cameraman (Buster Keaton), La febbre dell’oro (Charlie Chaplin), Mon oncle (Jacques Tati) metterebbero una sfilza di like. Quelli di IMMAGINA.La produzione di immagini in movimento ha indubbiamente un grande fascino. Ha un effetto ipnotizzante sul pubblico. IMMAGINA offre servizi video a tutto tondo. Produciamo di preferenza documentari per artisti, musicisti, attori, teatri, festival, matrimoni: per gente simpatica  only. Per imprenditori simpatici e con umore produciamo volontieri spot pubblicitari simpatici e … Per un corto o lungometraggio: se ne può parlare. Why not? Schiaccia qui per mandarci un messaggio. Naturalmente ci integriamo volentieri a un più esteso team per prestar servizi quali riprese, riprese con droni, montaggio, color balancing, prise de son e produzione di colonne sonore, ecc ecc. Disponiamo di hardwere e software e Know How.`}</p>
          </div>
          {mappedVideo}
        </div>
      </Wrapper>
    </>
  );
}
