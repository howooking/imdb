"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className='flex flex-col gap-4 text-center'>
      <h1 className='text-3xl font-bold text-red-400'>Somthing went wrong</h1>
      <Link href='/' className='btn-success btn  mx-auto w-52'>
        To the home page
      </Link>
    </div>
  );
}
