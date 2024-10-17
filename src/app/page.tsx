// HOME

import React from "react";
import MainCard from "@/components/HomePage/MainCard/MainCard";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 w-[60%] m-auto mt-10 text-stone-700 font-bold text-xs">
        <div className="col-span-2">
          <p>
            IMMAGINA ti dice ciao e si presenta. Se per ragioni aziendali, o culturali o private
            vuoi far conoscere al mondo la tua attività, personalità, le tue idee, i tuoi progetti
            potresti essere interessato ad affidarti al collettivo creativo IMMAGINA+. Come il sarto
            confeziona l'abito, IMMAGINA+ confeziona la tua immagine, la tua comunicazione. Due sono
            le anime di IMMAGINA: una commerciale dedicata al modo del business (IMMAGINA azienda) e
            una culturale dedicata a teatro, musica, scultura, pittura, editoria, (IMMAGINA
            cultura). Dipende dal committente: o imprenditore o istituzione pubblica ǁ o artista o
            promotore culturale. A volte le due anime si intrecciano. IMMAGINA+ ti invita a
            sfogliare la sua storia: un’esperienza iniziata 50 anni fa. Ciò che scoprirai appartiene
            al passato, ma puoi immaginare con noi il tuo futuro.
          </p>
        </div>
        <div className="text-stone-500">
          <p>
            Dedicato agli artisti: Confessiamo di aver un debole: promuovere la cultura. Narrare per
            immagini il gesto creativo degli artisti, siano essi attori, clown, scultori e pittori,
            musicisti, scrittori, registi. La nostra missione? Rivelare l’invisibile, ossia
            trasmettere l’essenza di ogni espressione artistica.
          </p>
          <MainCard
            title="cultura"
            cover="https://res.cloudinary.com/immagina/image/upload/v1728637625/IMMAGINA/Home%20Page/immagina-cultura_uqdajd.jpg"
          />
        </div>
        <div className="text-stone-500">
          <p>
            Dedicato a imprenditori e manager. Corporate identity. Creare l’identità di un’azienda.
            Essere raffinati in ogni dettaglio: dalle immagini (foto/video) alla parola; dalla
            tipografia alla grafica; dalla comunicazione, alle pubblicazioni, al webdesign. Una
            narrazione coerente. Il Bauhaus ci insegna: Less is more.
          </p>
          <MainCard
            title="azienda"
            cover="https://res.cloudinary.com/immagina/image/upload/v1728637625/IMMAGINA/Home%20Page/immagina-azienda_t7txrw.jpg"
          />
        </div>
        {/* <div className="flex space-x-4">
          <Link href="/cultura" className="bg-blue-500 text-white px-4 py-2 rounded">
            Cultura
          </Link>
          <Link href="/impresa" className="bg-green-500 text-white px-4 py-2 rounded">
            Impresa
          </Link>
        </div> */}
      </div>
    </>
  );
}
