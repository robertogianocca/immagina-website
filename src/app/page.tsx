// HOMEPAGE

import { revalidatePath } from "next/cache";
import { getDataStructure } from "@/utils/portfolio-data-structure";
import Wrapper from "@/components/Wrapper/Wrapper";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import HomePage from "@/components/HomePage/HomePage";
import PortfolioHome from "@/components/Portfolio/PortfolioHome/PortfolioHome";

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
      {/* <NavigationBar /> */}
      <Wrapper>
        <section
          id="home"
          className="h-[calc(100vh-60px)] sm:h-full md:min-h-[calc(100vh-60px)] overflow-hidden"
        >
          <NavigationBar addClass="" />
          <HomePage />
        </section>
        <section id="portfolio" className="pb-16 md:pt-10 ">
          <div className="flex flex-col sm:grid lg:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-span-1">
              <h2 className="text-3xl xl:text-4xl font-courier font-bold text-sky-800 mr-3">
                Portfolio
              </h2>
            </div>
            <div className="hidden lg:block col-span-2 lg:pl-6 text-sm lg:text-base text-sky-800 font-semibold">
              <p>
                Albo di famiglia da sfogliare. Sfogliare per soddisfare la curiosità. Proponiamo una
                piccola selezione di lavori realizzati in passato nei vari settori (culturale e
                aziendale). Quali gli strumenti? Grafica, tipografica, fotografia, video/film,
                editoria/libri, web design, mostre. Quali le nostre preferenze? Una, nessuna,
                centomila. L’approccio è ludico e i messaggi vengono trasmessi analogicamente.
              </p>
              <p>
                L’understatement è il nostro stile: less is more. Fatalmente l’albo di famiglia
                racconta del passato. Passato di passioni. Biografie, spettacoli, edifici, ferrovie,
                fonderie, vestiti, modelle, visi, incontri. Intuizioni, sogni realizzati.
              </p>
            </div>
            <div className="col-span-2 lg:pl-6 lg:hidden">
              <p className="text-sm lg:text-base text-sky-800 font-semibold">
                Albo di famiglia da sfogliare. Sfogliare per soddisfare la curiosità. Proponiamo una
                piccola selezione di lavori realizzati in passato nei vari settori (culturale e
                aziendale). Quali gli strumenti? Grafica, tipografica, fotografia, video/film,
                editoria/libri, web design, mostre.
              </p>
            </div>
            <div className="col-span-3">
              <PortfolioHome categoryList={categoryList} portfolioData={portfolioData} />
            </div>
          </div>
        </section>
        <section id="principi" className="min-h-space">
          <div className="flex flex-col md:main-grid pt-20">
            <div>
              <h2 className="text-3xl xl:text-4xl font-courier font-bold text-sky-800 mr-3 pb-6">
                Principi
              </h2>
              <p className="text-sm text-sky-800 font-semibold">
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
            <div className="hidden lg:inline col-span-2 lg:w-full h-full aspect-home">
              <video autoPlay muted loop className="w-full h-full object-cover">
                <source src="/video/animazione-bosco-03.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
        <section id="principi" className="h-space">
          <div className="flex flex-col md:main-grid pt-20">
            <div>
              <h2 className="text-3xl xl:text-4xl font-courier font-bold text-sky-800 mr-3 pb-6">
                Prodotti
              </h2>
              <p className="text-sm text-sky-800 font-semibold">
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
            <div className="hidden lg:inline col-span-2 lg:w-full h-full aspect-home">
              <video autoPlay muted loop className="w-full h-full object-cover">
                <source src="/video/animazione-bosco-02.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
        {/* <section id="prodotti" className="h-space">
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
        </section> */}
        {/* <section id="contact" className="h-space">
          <div className="flex flex-col md:main-grid pt-20">
            <div>
              <h2 className="text-3xl font-courier">Contact</h2>
            </div>
            <div className="col-span-2 bg-red-200 w-full h-[500px]">
              <div className="text-base text-slate-700"></div>
            </div>
          </div>
        </section> */}
      </Wrapper>
    </>
  );
}
