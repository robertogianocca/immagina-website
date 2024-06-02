import Link from "next/link";
import H2 from "@/components/Fonts/H2";
import H3 from "@/components/Fonts/H3";
import ReadMoreReact from "read-more-react";

export default function Header({
  transformedCategoriesFromPath,
  currentCategory,
  categoryDescription,
  littleCategoryDescription,
  setIsVisible,
}) {
  // --------------------------------- PATHS ---------------------------------

  //   First letter upper case
  transformedCategoriesFromPath = transformedCategoriesFromPath.map((item, index) => {
    item = item.split(" ");
    item = item.map((itemTwo: string, index: number) => {
      return itemTwo[0].toUpperCase() + itemTwo.slice(1);
    });

    return item.join(" ");
  });

  const pathList = transformedCategoriesFromPath.slice(0, -1).map((item, index) => {
    return (
      <li key={index} className="mr-1">
        <Link
          href={`/${transformedCategoriesFromPath
            .slice(0, 1 + index)
            .join("/")
            .toLowerCase()}`}
        >
          <H3>
            {transformedCategoriesFromPath.slice(0, -1).length - 1 == index
              ? item + ""
              : item + " /"}
          </H3>
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
        <H2>{currentCategory}</H2>
        <p
          className="link text-sm"
          dangerouslySetInnerHTML={{ __html: littleCategoryDescription }}
        />
        <button onClick={openTextBox}>readmore</button>
      </div>
    </div>
  );
}
