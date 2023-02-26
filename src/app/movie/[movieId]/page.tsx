import SingleMovie from "@/components/SingleMovie";

export default async function MovieDetail({
  params,
}: {
  params: { movieId: string };
}) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.TMDB_API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const movieData = await res.json();

  // const movieData = data.results;

  return (
    <div>
      <SingleMovie
        original_title={movieData.original_title}
        poster_path={movieData.poster_path}
        release_date={movieData.release_date}
        vote_average={movieData.vote_average}
        overview={movieData.overview}
      />
    </div>
  );
}
