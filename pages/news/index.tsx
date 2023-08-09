import styles from "@/styles/News.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import MyButton from "../components";

// eslint-disable-next-line react/display-name
export default function News({ event }: any) {
  // const router = useRouter();
  // const handleClick = () => {
  //   let path = "/news/101";
  //   router.push("/news/102", path);
  // };

  return (
    <section className={`${styles.main}`}>
      <div className={`${styles.event}`}>
        <h1>Event</h1>
        <Link href={"/news/100"} as={"/news/102"}>
          <MyButton />
        </Link>
        {event.map((item: any) => (
          <div key={item.id} style={{ padding: "5px" }}>
            <Link href={`/news/${item.id}`}>
              <h3>
                {item.id}. {item.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      event: data,
    },
  };
}
