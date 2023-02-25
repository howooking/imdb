import Link from "next/link";

export default function Navbar() {
  return (
    <nav className='py-4'>
      <div className='flex justify-center gap-8 font-bold'>
        <Link href='/treding'>Trending</Link>
        <Link href='/toprated'>Top Rated</Link>
      </div>
    </nav>
  );
}
