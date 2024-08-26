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
          link={item.link}
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
        {/* <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 h-space pt-10 pb-20">
          <div>
            <h1>Video</h1>
          </div>
          <div className="col-span-2 pb-16">
            <p>video description</p>
          </div>
        </div> */}
        <section id="portfolio" className="pt-16 pb-16">
          <div className="flex flex-col md:main-grid">
            <div>
              <h2 className="text-4xl font-courier font-bold text-sky-800">Video</h2>
            </div>
            <div className="col-span-2 pl-6">
              <p className="text-base text-sky-800 font-semibold">
                {`It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text.`}
              </p>
            </div>
            {mappedVideo}
          </div>
        </section>
      </Wrapper>
    </>
  );
}
