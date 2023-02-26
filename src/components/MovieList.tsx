export type MovieListProps = {
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
  id?: number;
};

export default function MovieList({
  title,
  vote_average,
  overview,
  release_date,
}: MovieListProps) {
  return (
    <div className='bg-orange-300'>
      <h1>{title}</h1>
    </div>
  );
}
