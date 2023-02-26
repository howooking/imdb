"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

export default function SearchBox() {
  const router = useRouter();
  const searchTermRef = useRef<HTMLInputElement>(null);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchTerm = searchTermRef.current?.value;
    if (!searchTerm) {
      searchTermRef.current?.focus();
      return;
    }
    router.push(`search/${searchTerm}`);

    console.log(searchTerm);
  };
  return (
    <div className='py-4'>
      <form onSubmit={handleSubmit} className='flex items-center gap-4'>
        <input
          type='text'
          ref={searchTermRef}
          className='w-full rounded-lg bg-slate-200 p-3'
          placeholder='SEARCH...'
        />
        <button className='btn-warning btn'>search</button>
      </form>
    </div>
  );
}
