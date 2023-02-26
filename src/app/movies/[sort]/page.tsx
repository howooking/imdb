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
    }?api_key=${process.env.TMDB_API_KEY}&page=1`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const movieData = data.results;
  // const movieData = json.results;

  return (
    <div>
      {movieData?.map((movie: MovieListProps) => (
        <MovieList
          key={movie.id}
          original_title={movie.original_title}
          overview={movie.overview}
          release_date={movie.release_date}
          vote_average={movie.vote_average}
        />
      ))}
    </div>
  );
}
