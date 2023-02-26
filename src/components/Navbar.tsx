"use client";

import NavbarItem from "./NavbarItem";
import { usePathname } from "next/navigation";

const NAV_MENU = [
  {
    href: "/movies/trending",
    title: "Trending",
  },
  {
    href: "/movies/toprated",
    title: "Top Rated",
  },
];

export default function Navbar() {
  const path = usePathname();
  console.log(path);
  return (
    <nav className='bg-orange-200 py-4 dark:bg-gray-500'>
      <div className='flex justify-center gap-8 font-bold '>
        {NAV_MENU.map((menu) => {
          const isSelected = path === menu.href ? true : false;
          return (
            <NavbarItem
              href={menu.href}
              title={menu.title}
              key={menu.href}
              isSelected={isSelected}
            />
          );
        })}
      </div>
    </nav>
  );
}
