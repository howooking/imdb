import Link from "next/link";

export default function Navbar() {
  return (
    <nav className='bg-gray-400 py-4'>
      <div className='flex justify-center gap-8 font-bold text-white'>
        <Link href='/treding'>Trending</Link>
        <Link href='/toprated'>Top Rated</Link>
      </div>
    </nav>
  );
}
