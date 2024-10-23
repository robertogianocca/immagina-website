// HOME IMPRESA

import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Wrapper from "@/components/Wrapper/Wrapper";
import HomePage from "@/components/HomePage/HomePage";
import RedButton from "@/components/Buttons/RedButton";
import Link from "next/link";
import Triangle from "@/components/Icons/Triangle";

export default function Azienda() {
  return (
    <>
      <NavigationBar
        menuColor="text-blue-700 hover:border-b-2 hover:border-blue-700"
        bgColor="bg-slate-300 lg:shadow-xl lg:shadow-slate-200"
      />
      <Wrapper>
        <section id="home" className="h-space sm:h-full md:min-h-space overflow-hidden">
          <HomePage />
        </section>
        <section id="home" className="h-space sm:h-full md:min-h-space overflow-hidden">
          <p className="mt-5">
            Dedicato a imprenditori e manager. Corporate identity. Creare l’identità di un’azienda.
            Essere raffinati in ogni dettaglio: dalle immagini (foto/video) alla parola; dalla
            tipografia alla grafica; dalla comunicazione, alle pubblicazioni, al webdesign. Una
            narrazione coerente. Il Bauhaus ci insegna: Less is more
          </p>
          {/* <p className="shidden sm:block">
          {"Come un sarto confeziona l'abito, IMMAGINA+ confeziona la tua comunicazione."}
        </p> */}
          <p className="hidden sm:block">
            IMMAGINA+ ti invita a <span className="italic">sfogliare</span> il suo portfolio. Poche
            parole. Immagini? Troppe, forse.
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
              <Link href="/photography" className="hover:text-red-600">
                Photography
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
              Bookdesign
            </li>
          </ul>
        </section>
      </Wrapper>
    </>
    // <div className="p-24 bg-red-200">
    //   <Link href="/impresa" scroll={false} className="bg-blue-500 p-10 fixed right-10">
    //     <button>SWITCH</button>
    //   </Link>
    //   <h1>CULTURA PAGE</h1>
    //   <div className="h-96 w-96">
    //     <PortfolioCategoryCard
    //       title="Title"
    //       description="Description"
    //       shortDescription="Short description"
    //       cover=""
    //       transformedCategoriesFromPath=""
    //       addClass=""
    //     />
    //   </div>
    //   <div className="bg-green-500 h-screen"></div>
    // </div>
  );
}
