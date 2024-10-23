import VideoGallery from "@/components/Portfolio/VideoGallery/VideoGallery";
import { videoDatabase } from "../video-database";

export default function metParachuteMrc() {
  return (
    <div>
      <VideoGallery videoLink={videoDatabase[2].videoLink} link={videoDatabase[2].link} />
      <h1></h1>
    </div>
  );
}
