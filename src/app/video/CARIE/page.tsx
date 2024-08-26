import VideoGallery from "@/components/Portfolio/VideoGallery/VideoGallery";
import { videoDatabase } from "../video-database";

export default function Carie() {
  return (
    <div>
      <VideoGallery videoLink={videoDatabase[0].videoLink} />
      <h1>VIDEOOOO</h1>
    </div>
  );
}
