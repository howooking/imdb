import MovieCard from "@/components/MovieCard";

export default async function page({
  params,
}: {
  params: {
    searchTerm: string;
  };
}) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&page=1&include_adult=false&query=${params.searchTerm}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const movieDatas = data.results;

  return (
    <div className='grid grid-cols-1 gap-5  sm:grid-cols-3 '>
      {movieDatas?.map((movie: any) => (
        <MovieCard
          key={movie.id}
          original_title={movie.original_title || movie.original_name}
          overview={movie.overview}
          release_date={movie.release_date}
          vote_average={movie.vote_average}
          backdrop_path={movie.backdrop_path || movie.poster_path}
          id={movie.id}
        />
      ))}
    </div>
  );
}
