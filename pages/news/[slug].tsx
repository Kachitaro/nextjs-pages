import styles from "@/styles/News.module.css";

export default function NewsDetail({ event }: any) {
  return (
    <section className={`${styles.main}`}>
      <h1>News Detail</h1>
      <div className={`${styles.event}`}>
        <h3>
          {event.id}. {event.title}
        </h3>
        <p>{event.body}</p>
      </div>
    </section>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  const paths = posts.map((post: { id: number }) => ({
    params: { slug: `${post.id}` },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps(params: { params: { slug: string } }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.params.slug}`
  );
  const data = await res.json();
  return {
    props: {
      event: data,
    },
  };
}
