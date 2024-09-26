import Link from "next/link";

export default function MenuMobile({ menuItems, toggleMenu }) {
  const mappedMenu = menuItems.map((item: string, index: number) => {
    return (
      <li key={index} className="whitespace-nowrap">
        <Link
          href={`/#${item.toLowerCase()}`}
          className="hover:border-b-2 hover:border-red-500"
          onClick={toggleMenu}
        >
          {item}
        </Link>
      </li>
    );
  });
  return (
    <ul className="flex flex-col min-h-screen font-courier font-bold text-lg leading-[3rem] text-red-600">
      {mappedMenu}
    </ul>
  );
}
