import Link from "next/link";

export default function MenuDesktop({ menuItems }: { menuItems: string[] }) {
  const mappedMenu = menuItems.map((item: string, index: number) => {
    return (
      <li key={index} className="whitespace-nowrap">
        <Link href={`/#${item.toLowerCase()}`} className="hover:border-b-2 hover:border-red-500">
          {item}
        </Link>
      </li>
    );
  });
  return (
    <ul className="w-full 3xl:w-[70%] hidden lg:flex lg:justify-between font-courier font-bold text-[1.5vw] 2xxl:text-lg 3xl:text-xl text-red-600">
      {mappedMenu}
    </ul>
  );
}
