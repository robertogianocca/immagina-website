import Link from "next/link";

type MenuMobileProps = {
  menuItems: string[];
  menuColor: string;
  toggleMenu: () => void;
};

export default function MenuMobile({ menuItems, menuColor, toggleMenu }: MenuMobileProps) {
  const mappedMenu = menuItems.map((item: string, index: number) => {
    return (
      <li key={index}>
        <Link
          href={`/#${item.toLowerCase()}`}
          className={`whitespace-nowrap ${menuColor}`}
          onClick={toggleMenu}
        >
          {item}
        </Link>
      </li>
    );
  });
  return (
    <ul className="flex flex-col min-h-screen font-courier font-bold text-lg leading-[3rem]">
      {mappedMenu}
    </ul>
  );
}
