"use client";
import Image from "next/image";
import VideoGallerySideBar from "./VideoGallerySideBar/VideoGallerySideBar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoGallery({ videoLink }: any) {
  return (
    <div className="flex flex-row h-screen w-full">
      <div className="w-[300px] fixed h-screen overflow-auto flex flex-col justify-between p-5 bg-stone-100 text-base inner-shadow ">
        <VideoGallerySideBar />
      </div>
      <div className="ml-[300px] flex-grow p-4 pl-10 pb-10 bg-white">
        <div className="relative w-full h-full">
          <iframe
            // src="https://player.vimeo.com/video/676793805"
            src={videoLink}
            // src="https://player.vimeo.com/video/676793805?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            width="100%"
            height="100%"
            title="CARIE"
            className="bg-red-200"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
