import Link from "next/link";

interface GalleryHeaderProps {
  title: string;
  path: string[];
  shortDescription: string;
  longDescription: string;
  setIsVisible: (prevState: boolean) => boolean;
}

export default function Header({
  title,
  path,
  shortDescription,
  longDescription,
  setIsVisible,
}: GalleryHeaderProps) {
  // --------------------------------- PATHS ---------------------------------

  const pathList = path.slice(0, -1).map((item, index) => {
    return (
      <li key={index} className="mr-1">
        <Link
          href={`/${path
            .slice(0, 1 + index)
            .join("/")
            .toLowerCase()}`}
        >
          <h3 className="text-base">
            {path.slice(0, -1).length - 1 == index ? item + "" : item + " /"}
          </h3>
        </Link>
      </li>
    );
  });

  // --------------------------------- READ MORE ---------------------------------

  function openTextBox() {
    setIsVisible((prevState) => !prevState);
  }

  return (
    <div>
      <ul className="flex">{pathList}</ul>
      <div className="mt-1 mb-6 border-t-4 border-red-600">
        <h2 className="text-lg">{title}</h2>
        <p className="link text-sm" dangerouslySetInnerHTML={{ __html: shortDescription }} />
        <button onClick={openTextBox}>readmore</button>
      </div>
    </div>
  );
}
