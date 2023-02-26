export default function SortedMovies({
  params,
}: {
  params: {
    sort: string;
  };
}) {
  const { sort } = params;

  return <div>{sort}</div>;
}
