import styles from "@/styles/News.module.css";

export default function News({ news }: any) {
  console.log(news);
  return (
    <section className={`${styles.main}`}>
      <h1>News</h1>
    </section>
  );
}

export const getServerSideProps = async () => {
  const apiResponse = await fetch(
    `https://newsapi.org/v2/everything?q=game&apiKey=${process.env.API_KEY}`
  ); 
  const news = await apiResponse.json();

  return {
    props: {
      news: news,
    }
  }
}