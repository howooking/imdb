import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

export type MovieListProps = {
  original_title: string;
  vote_average: number;
  overview: string;
  release_date: string;
  id: number;
  backdrop_path: string;
};

export default function MovieCard({
  original_title,
  vote_average,
  overview,
  release_date,
  backdrop_path,
  id,
}: MovieListProps) {
  return (
    <div className='card glass cursor-pointer shadow-lg transition-all duration-200 hover:opacity-70'>
      <figure>
        <Image
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={original_title}
          width={500}
          height={300}
          className='relative object-contain'
          placeholder='blur'
          blurDataURL='/loading.svg'
        />
      </figure>
      <div className='p-3'>
        <h2 className='truncate font-bold'>{original_title}</h2>
        <p className='text-gray-400 line-clamp-3'>{overview}</p>
        <p className='flex items-center justify-between text-gray-200'>
          <p className='text-gray-100'>{release_date}</p>
          <div className='flex items-center gap-2'>
            <span>
              <AiFillStar />
            </span>
            <div>{vote_average.toFixed(1)} / 10</div>
          </div>
        </p>
      </div>
    </div>
  );
}
