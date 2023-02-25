import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className='text-red-300'>hello</h1>
      <button className='btn'>버튼</button>
    </main>
  );
}
