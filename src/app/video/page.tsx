// VIDEO SUBCATEGORY CARDS

"use client";
import { videoDatabase } from "@/app/video/video-database";
import Wrapper from "@/components/Wrapper/Wrapper";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import VideoSubCategoryCard from "@/components/Portfolio/VideoSubCategoryCard/VideoSubCategoryCard";

export default function videoPage() {
  const mappedVideo = videoDatabase.map((item, index) => {
    return (
      <div key={index}>
        <VideoSubCategoryCard
          title={item.title}
          shortDescription={item.shortDescription}
          description={item.shortDescription}
          cover={item.cover}
        />
      </div>
    );
  });

  return (
    <>
      <NavigationBar />
      <Wrapper>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 h-space pt-10 pb-20">
          <div>
            <h1>Video</h1>
          </div>
          <div className="col-span-2 pb-16">
            <p>video description</p>
          </div>
          {mappedVideo}
        </div>
      </Wrapper>
    </>
  );
}
