import VideoGallery from "@/components/Portfolio/VideoGallery/VideoGallery";
import { videoDatabase } from "../video-database";

export default function MemorieFuture() {
  return (
    <div>
      <VideoGallery videoLink={videoDatabase[1].videoLink} link={videoDatabase[1].link} />
      <h1></h1>
    </div>
  );
}
