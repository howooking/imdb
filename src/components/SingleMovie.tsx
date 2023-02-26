import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

type SingleMovieProps = {
  original_title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
};

export default function SingleMovie({
  original_title,
  poster_path,
  release_date,
  vote_average,
  overview,
}: SingleMovieProps) {
  return (
    <div className='flex flex-col gap-4 sm:flex-row'>
      <div className='w-full overflow-hidden rounded-2xl sm:w-1/3'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={original_title}
          width={500}
          height={300}
          placeholder='blur'
          blurDataURL='/loading.svg'
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          className='rounded-2xl'
        />
      </div>
      <div className='w-full space-y-14 sm:w-2/3'>
        <h2 className='truncate font-bold'>{original_title}</h2>
        <p>{overview}</p>
        <div className='flex items-center justify-between'>
          <div>{release_date}</div>
          <div className='flex items-center gap-2'>
            <span>
              <AiFillStar />
            </span>
            <div>{vote_average.toFixed(1)} / 10</div>
          </div>
        </div>
      </div>
    </div>
  );
}
