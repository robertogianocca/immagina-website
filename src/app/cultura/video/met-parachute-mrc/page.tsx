import VideoGallery from "@/components/Portfolio/VideoGallery/VideoGallery";
import { videoDatabaseCultura } from "../video-database-cultura";

export default function metParachuteMrc() {
  return (
    <div>
      <VideoGallery
        videoLink={videoDatabaseCultura[2].videoLink}
        link={videoDatabaseCultura[2].link}
      />
      <h1></h1>
    </div>
  );
}
