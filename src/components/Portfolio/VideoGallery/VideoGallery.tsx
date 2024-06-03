"use client";
import Image from "next/image";
import VideoGallerySideBar from "./VideoGallerySideBar/VideoGallerySideBar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoGallery({}: any) {
  return (
    <div className="flex flex-row h-screen w-full">
      <div className="w-[300px] fixed h-screen overflow-auto flex flex-col justify-between p-5 bg-stone-100 text-base inner-shadow ">
        <VideoGallerySideBar />
      </div>
      <div className="ml-[300px] flex-grow p-4 pl-10 pb-10 bg-white">
        <div className="relative w-full h-full">
          {/* Gallery title */}
          <div className={`absolute left-0 right-0 top-0 m-auto p-2 aspect-cover h-full`}>
            <h1 className="font-courier font-bold text-4xl text-red-600"></h1>
          </div>
          {/* Gallery image */}
          <AnimatePresence mode="popLayout">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="flex items-center justify-center w-full h-full"
            >
              <div>
                <h1>INGOMBRO VIDEO</h1>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
