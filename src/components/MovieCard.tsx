"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (mounted) {
    return (
      <Link
        href={`/movie/${id}`}
        className='card glass cursor-pointer shadow-lg transition-all duration-200 hover:opacity-70'
      >
        <figure>
          <Image
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt={original_title}
            width={500}
            height={300}
            className='relative object-contain'
            placeholder='blur'
            blurDataURL='/loading.svg'
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </figure>
        <div className='p-3'>
          <h2 className='truncate text-lg font-bold'>{original_title}</h2>
          <p className='text-sm line-clamp-3'>{overview}</p>
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
      </Link>
    );
  }
  return <></>;
}
