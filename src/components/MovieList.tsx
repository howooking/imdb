export type MovieListProps = {
  original_title: string;
  vote_average: number;
  overview: string;
  release_date: string;
  id?: number;
};

export default function MovieList({
  original_title,
  vote_average,
  overview,
  release_date,
}: MovieListProps) {
  return (
    <div className='bg-orange-300'>
      <h1>{original_title}</h1>
    </div>
  );
}
