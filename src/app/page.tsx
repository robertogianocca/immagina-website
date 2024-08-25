// HOMEPAGE

import { revalidatePath } from "next/cache";
import { getDataStructure } from "@/utils/portfolio-data-structure";
import Link from "next/link";
import Wrapper from "@/components/Wrapper/Wrapper";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import HomePage from "@/components/HomePage/HomePage";
import PortfolioHome from "@/components/PortfolioHome/PortfolioHome";
import Button from "@/components/Buttons/Button";

export default async function Home() {
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_ID}/resources/image/?max_results=500&metadata=true&context=true`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`
        ).toString("base64")}`,
      },
    }
  );

  const cloudinaryResponse = await response.json();
  // revalidatePath("/");

  const portfolioData = getDataStructure(cloudinaryResponse);

  const categoryList = Object.keys(portfolioData);

  return (
    <>
      <NavigationBar />
      <Wrapper>
        <section id="home" className="h-space flex flex-col md:grid md:grid-cols-3 gap-10 pb-16">
          <HomePage />
        </section>
        <section id="portfolio" className="h-space pt-16 pb-16">
          <div className="flex flex-col md:main-grid">
            <div>
              <h2 className="text-3xl font-courier">Portfolio</h2>
            </div>
            <div className="col-span-2 pl-6">
              <p className="text-base text-sky-1000 font-semibold">
                {`It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text.`}
              </p>
            </div>
            <div className="col-span-3">
              <PortfolioHome categoryList={categoryList} portfolioData={portfolioData} />
            </div>
          </div>
        </section>
        <section id="principi" className="h-space">
          <div className="flex flex-col md:main-grid pt-20">
            <div>
              <h2 className="text-3xl font-courier">Principi</h2>
            </div>
            <div className="col-span-2">
              <p className="text-base text-slate-700">
                Abbiamo dei principi che applichiamo da sempre, da quando siamo attivi, ossia da
                quasi trent’anni. Ecco una distinta dei valori a cui ci atteniamo rigorosamente:
                Less is more (Mies van der Rohe) “Kalos kai agathos“ - Il bello è anche buono
                (Platone) Il tempo non è denaro Ambendo l’eccellenza spesso roviniamo ciò che è bene
                (W. Shakespeare). L’essenziale è invisibile agli occhi (Saint-Exupery) “Ho dei gusti
                semplicissimi. Mi accontento sempre del meglio” diceva O. Wilde. Prendendo in
                prestito il celebre personaggio di Collodi, cerchiamo di evitare ai nostri clienti i
                guai di… Pinocchio. Niente naso lungo e gambe corte, niente incontri con il Gatto e
                la Volpe, niente semina di zecchini d’oro nell’orto, niente orecchie lunghe. Siamo
                seri why not? Diamine: non viviamo mica nel paese dei balocchi! Scansiamo i furbi,
                scopriamo il tuo talento. Sotto la nostra regia, la tua comunicazione deve diventare
                iconica: non progettiamo il tuo domani, ma il tuo dopo-domani. Oggi. Come? Perché?
                Perché ci dedichiamo a te. Ci prendiamo il tempo, tutto il tempo necessario, perché
                abbiamo tempo. Del resto il tempo non si compra: si prende.
              </p>
            </div>
          </div>
        </section>
        <section id="prodotti" className="h-space">
          <div className="flex flex-col md:main-grid pt-20">
            <div>
              <h2 className="text-3xl font-courier">Prodotti</h2>
            </div>
            <div className="col-span-2">
              <p className="text-base text-slate-700">
                I nostri prodotti: Analisi e creazione di concetti di comunicazione, Fotografia,
                grafica, video, siti web, libri. La nostra passione: l’arte, lo spettacolo, la
                cucina, l’orto, il teatro, la musica, i libri… Libri e cataloghi Grafica:
                impaginazioni, logotipi, post produzione immagini e video Webdesign: dal progetto
                alla realizzazione e gestione del sito. Video: film, documentari, vidioclip
                musicali, reportage di eventi (se il tuo matrimonio deve diventare un
                lungometraggio), Fotografia. Ritratto, reportage, Still live, riprese con droni,
                Curatoria produzione e allestimento di mostre openair. Se sei un creativo potresti
                approfittare della nostra esperienza: Ritratti d’autore, cataloghi d’arte, libri a
                tema, allestimento mostre all’aperto (open air); siti web; video clip, documentari
                video FOTOGRAFIA: la nostra esperienza va dalla foto di sport, al, ritratto, still
                life, oggettistica industriale (orologi, gioielli, meccanica fine, paesaggio,
                teatro, riproduzioni d’arte (scultura), food, moda, reportage giornalistico
                (matrimoni - eventi), musica, drone, 3D Specialità produzione: foto con droni
                Specialità: mostre openair. Prodotto. Specialità: 3D Special interest: biografie,
                scultura teatro architettura natura (orto incluso)
              </p>
            </div>
          </div>
        </section>
        <section id="contact" className="h-space">
          <div className="flex flex-col md:main-grid pt-20">
            <div>
              <h2 className="text-3xl font-courier">Contact</h2>
            </div>
            <div className="col-span-2 bg-red-200 w-full h-[500px]">
              <div className="text-base text-slate-700"></div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
}
