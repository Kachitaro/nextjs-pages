import Link from "next/link";
import React from "react";

export default function News({ event }: any) {
  return (
    <section>
      <div>
        <h1>Event</h1>
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
