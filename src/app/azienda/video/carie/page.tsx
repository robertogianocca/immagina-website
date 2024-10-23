"use client";
import VideoGallery from "@/components/Portfolio/VideoGallery/VideoGallery";
import { videoDatabase } from "../video-database";

export default function Carie({ params, setIsVisible }) {
  const categoriesFromPath = params.categories;

  return (
    <div>
      <VideoGallery
        videoLink={videoDatabase[0].videoLink}
        title={videoDatabase[0].title}
        path={categoriesFromPath}
        shortDescription={videoDatabase[0].shortDescription}
        longDescription={videoDatabase[0].description}
        setIsVisible={setIsVisible}
      />
      <h1>VIDEOOOO</h1>
    </div>
  );
}
