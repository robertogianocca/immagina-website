import Link from "next/link";

export default function MenuDesktop({ menuItems }) {
  const mappedMenu = menuItems.map((item, index) => {
    return (
      <li key={index} className="pr-16">
        <Link href={`/#${item.toLowerCase()}`}>{item}</Link>
      </li>
    );
  });
  return (
    <ul className="hidden md:flex font-courier font-bold text-base text-red-600">{mappedMenu}</ul>
  );
}
