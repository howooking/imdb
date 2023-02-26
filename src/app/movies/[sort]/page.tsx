import MovieList, { MovieListProps } from "@/components/MovieList";
import next from "next";
import json from "../../../../public/dummy.json";

export default async function SortedMovies({
  params,
}: {
  params: {
    sort: string;
  };
}) {
  const { sort } = params;

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      sort === "top_rated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 100000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const movieData = data.results;
  // const movieData = json.results;

  return (
    <div className='flex flex-col gap-6'>
      {movieData?.map((movie: MovieListProps) => (
        <MovieList
          key={movie.id}
          title={movie.title}
          overview={movie.overview}
          release_date={movie.release_date}
          vote_average={movie.vote_average}
        />
      ))}
    </div>
  );
}
