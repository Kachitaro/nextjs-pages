import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import MainLayout from "@/layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={`${styles.title} ${inter.className}`}>
          Welcome to Next.js!
        </h1>
        <Link href="/news">
          <button className={`${styles.btn}`}>News</button>
        </Link>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return <MainLayout>{page}</MainLayout>;
};
