"use client";
import Link from "next/link";
import Image from "next/image";
import { TiHome } from "react-icons/ti";
import { FaArrowLeft } from "react-icons/fa";
import VideoGallerySideBar from "./VideoGallerySideBar/VideoGallerySideBar";
import { useState } from "react";
import Button from "@/components/Buttons/Button";
import { IoMdCloseCircle } from "react-icons/io";

import { motion, AnimatePresence } from "framer-motion";

export default function VideoGallery({
  videoLink,
  title,
  path,
  shortDescription,
  longDescription,
  categoriesFromPath,
}: any) {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  function openTextBox() {
    setIsVisible((prevState) => !prevState);
  }

  function closeTextBox() {
    setIsVisible((prevState) => !prevState);
  }

  return (
    <div className="flex flex-row h-screen w-full">
      {/*  ------------ TEXT BOX DESCRIPTION ------------ */}
      <div
        className={`flex items-center justify-center fixed top-[60px] lg:top-0 lg:left-[300px] right-0 bottom-0 p-0 lg:p-10 z-50 bg-opacity-100 bg-white ${
          isVisible ? "hidden" : "block"
        }`}
      >
        <div className="flex flex-col items-center w-full max-w-[screen] h-full">
          <div className="w-full xl:w-[70%] flex-grow px-6 overflow-auto ">
            {/* Bottone Chiusura X */}
            <div className="w-full lg:mb-3">
              <Button
                addClass="p-2 mt-4 mb-4 shadow-stone-300 text-slate-400"
                onClick={closeTextBox}
              >
                <IoMdCloseCircle size={30} />
              </Button>
            </div>
            {/* Testo */}
            <p
              className="link text-sm lg:text-base text-sky-800 lg:font-semibold"
              dangerouslySetInnerHTML={{ __html: longDescription }}
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col justify-between w-[300px] fixed h-screen overflow-auto p-5 bg-stone-200 bg-opacity-35 text-base inner-shadow ">
        <VideoGallerySideBar
          title={title}
          path={path}
          shortDescription={shortDescription}
          longDescription={longDescription}
          setIsVisible={openTextBox}
        />
      </div>
      {/* ------------ MOBILE GALLERY ------------ */}
      {/* Mobile Menu */}
      <nav className="lg:hidden w-full h-[60px] fixed left-0 top-0 z-50 px-4 lg:pl-14 lg:pr-24 flex lg:main-grid md:shadow-xl bg-stone-200">
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="font-courier font-bold text-sm lg:text-4xl text-customRed">{title}</h1>
          <div className="flex gap-6">
            <Link href={`/cultura/video`}>
              <Button addClass="p-2 text-slate-400">
                <FaArrowLeft size={20} />
              </Button>
            </Link>
            <Link href={"/cultura"}>
              <Button addClass="p-2 text-slate-400">
                <TiHome size={20} />
              </Button>
            </Link>
            <Link href={""}>
              <Button onClick={openTextBox} addClass="p-[5.9px] text-slate-400">
                <p className="font-bold">Read</p>
              </Button>
            </Link>
            {/* <div onClick={toggleMenu}>
                  <HamburgerIcon color="text-customRed" />
                </div> */}
            <div
              className={`absolute top-[60px] left-0 w-full h-space bg-customWhite opacity-98 px-4 py-10 ${
                isOpen ? "block" : "hidden"
              }`}
            ></div>
          </div>
        </div>
      </nav>

      <div className="mt-[60px] lg:mt-0 lg:ml-[300px] flex-grow p-4 lg:pl-10 pb-10 bg-customWhite">
        <div className="relative w-full h-full">
          <iframe
            src={videoLink}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            width="100%"
            height="100%"
            title="CARIE"
            className=""
          ></iframe>
        </div>
      </div>
    </div>
  );
}
