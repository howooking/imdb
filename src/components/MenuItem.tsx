import Link from "next/link";
import { IconType } from "react-icons";

type MenuItemProps = {
  title: string;
  href: string;
  Icon: IconType;
};

export default function MenuItem({ title, href, Icon: Icon }: MenuItemProps) {
  return (
    <Link href={href} className='text-2xl hover:text-orange-400'>
      <Icon className='sm:hidden' />
      <div className='hidden sm:block'>{title}</div>
    </Link>
  );
}
