import MovieCard from "@/components/MovieCard";

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
      sort === "top_rated" ? "movie/top_rated" : "trending/movie/week"
    }?api_key=${process.env.TMDB_API_KEY}&page=1`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const movieDatas = data.results;
  // const movieData = json.results;

  return (
    <div className='grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 '>
      {movieDatas?.map((movie: any) => (
        <MovieCard
          key={movie.id}
          original_title={movie.original_title || movie.original_name}
          overview={movie.overview}
          release_date={movie.release_date}
          vote_average={movie.vote_average}
          backdrop_path={movie.backdrop_path}
          id={movie.id}
        />
      ))}
    </div>
  );
}
