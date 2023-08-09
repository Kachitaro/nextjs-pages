import styles from "@/styles/News.module.css";

export function Hehe()  {
  return (
    <div>
      <h1>Hehe nene</h1>
    </div>
  );
}

export default function NewsDetail2({ event }: any) {
  return (
    <section className={`${styles.main}`}>
      <h1>News Detail No Dynamic</h1>
      <Hehe />
    </section>
  );
}

export async function getStaticProps(params: { params: { id: string } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/101`);
  const data = await res.json();
  return {
    props: {
      event: data,
    },
  };
}
