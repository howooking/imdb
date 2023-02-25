import { BsFillSunFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import MenuItem from "./MenuItem";

export default function Header() {
  return (
    <header className='bg-gray-700 py-7'>
      <div className='mx-auto flex max-w-3xl items-center justify-between font-bold text-white'>
        <div className='flex gap-6'>
          <MenuItem href='/' Icon={AiFillHome} title='Home' />
          <MenuItem href='/about' Icon={AiFillInfoCircle} title='ABOUT' />
        </div>
        <div className='flex items-center gap-7'>
          <BsFillSunFill className='text-2xl' />
          <div className='rounded-lg bg-orange-400 p-2'>IMDB</div>
          <div>Clone</div>
        </div>
      </div>
    </header>
  );
}
