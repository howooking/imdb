"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className='flex flex-col gap-4 text-center'>
      <h1 className='text-3xl font-bold text-red-400'>Somthing went wrong</h1>
      <button onClick={() => reset()} className='btn-error btn mx-auto w-52'>
        Try again
      </button>
      <Link href='/' className='btn-success btn  mx-auto w-52'>
        To the home page
      </Link>
    </div>
  );
}
