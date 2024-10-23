"use client";
import VideoGallery from "@/components/Portfolio/VideoGallery/VideoGallery";
import { videoDatabaseCultura } from "../video-database-cultura";

export default function Carie({ params, setIsVisible }) {
  const categoriesFromPath = params.categories;

  return (
    <div>
      <VideoGallery
        videoLink={videoDatabaseCultura[0].videoLink}
        title={videoDatabaseCultura[0].title}
        path={categoriesFromPath}
        shortDescription={videoDatabaseCultura[0].shortDescription}
        longDescription={videoDatabaseCultura[0].description}
        setIsVisible={setIsVisible}
      />
      <h1>VIDEOOOO</h1>
    </div>
  );
}
