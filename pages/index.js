import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useProducts } from "../lib/hooks";
import { Grid } from "@mui/material";
import ProductCard from "../components/card";

export default function Home() {
  const { products, isLoading, isError } = useProducts();

  console.log(products);

  return (
    <div className={styles.container}>
      <Head>
        <title>Products</title>
        <meta name="description" content="Products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Grid container spacing={2} maxWidth="xl">
          {!isError &&
            !isLoading &&
            products.map((d) => {
              return (
                <Grid item lg={2} sm={6} xs={12} md={3} key={d.id}>
                  <ProductCard
                    id={d.id}
                    title={d.title}
                    description={d.description}
                    price={d.price}
                    image={d.image}
                  />
                </Grid>
              );
            })}
        </Grid>

        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>Powered by Random products</footer>
    </div>
  );
}
