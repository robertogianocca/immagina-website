import Link from "next/link";

type MenuDesktopProps = {
  menuItems: string[];
  menuColor: string;
};

export default function MenuDesktop({ menuItems, menuColor }: MenuDesktopProps) {
  const mappedMenu = menuItems.map((item: string, index: number) => {
    return (
      <li key={index} className="whitespace-nowrap">
        <Link href={`/#${item.toLowerCase()}`} className={menuColor}>
          {item}
        </Link>
      </li>
    );
  });
  return (
    <ul className="w-full 3xl:w-[70%] hidden lg:flex lg:justify-between font-courier font-bold text-sm xl:text-lg 3xl:text-xl">
      {mappedMenu}
    </ul>
  );
}
