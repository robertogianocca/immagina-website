import "./globals.css";
import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import { Inter } from "next/font/google";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import logoRed from "/public/images/logo/logo-immagina.svg";
import OpacityAnimation from "@/components/Animations/OpacityAnimation";

type RootLayoutProps = {
  children: React.ReactNode;
};

// Globals font
const main = Inter({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  // fallback: ["arial"],
  variable: "--customMain",
});

const courier = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  // fallback: ["system-ui", "arial"],
  variable: "--customCourier",
});

export const metadata: Metadata = {
  title: "IMMAGINA",
  description:
    "Come il sarto confeziona l'abito, IMMAGINA confeziona la tua immagine, la tua comunicazione.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${courier.variable} ${main.variable}`}>
      <body className="font-main bg-slate-50">{children}</body>
    </html>
  );
}
