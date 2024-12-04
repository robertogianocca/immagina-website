import Image from "next/image";
import imgOne from "/public/images/samples/01.jpg";
export default function TeamSection() {
  return (
    <div className="grid grid-cols-6 gap-6">
      <div className="flex flex-col">
        <div className="w-full h-[300px] bg-slate-400"></div>
      </div>
      <div className="">
        <h2 className="text-base">Adriano Heitmann</h2>
        <p>
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
          }
        </p>
      </div>
      <div className="flex flex-col">
        <div className="w-full h-[300px] bg-slate-400"></div>
      </div>
      <div className="">
        <h2 className="text-base">Roberto Gianocca</h2>
        <p>
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
          }
        </p>
      </div>
      <div className="flex flex-col">
        <div className="w-full h-[300px] bg-slate-400"></div>
      </div>
      <div className="">
        <h2 className="text-base">Omar Beltraminelli</h2>
        <p>
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
          }
        </p>
      </div>
    </div>
  );
}
