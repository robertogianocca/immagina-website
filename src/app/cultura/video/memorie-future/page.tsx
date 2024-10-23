import VideoGallery from "@/components/Portfolio/VideoGallery/VideoGallery";
import { videoDatabaseCultura } from "../video-database-cultura";

export default function MemorieFuture() {
  return (
    <div>
      <VideoGallery
        videoLink={videoDatabaseCultura[1].videoLink}
        link={videoDatabaseCultura[1].link}
      />
      <h1></h1>
    </div>
  );
}
