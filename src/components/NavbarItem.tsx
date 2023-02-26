import Link from "next/link";

type NavbarItemProps = {
  title: string;
  href: string;
  isSelected: boolean;
};

export default function NavbarItem({
  title,
  href,
  isSelected,
}: NavbarItemProps) {
  return (
    <Link
      href={href}
      className={`${
        isSelected
          ? "underline decoration-orange-400 decoration-4 underline-offset-8 hover:text-orange-400"
          : "hover:text-orange-400"
      }`}
    >
      {title}
    </Link>
  );
}
