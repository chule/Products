import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useProducts } from "../lib/hooks";
import { Grid } from "@mui/material";
import ProductCard from "../components/card";
import AppBarMain from "../components/appBar";

export default function Home() {
  const { products, isLoading, isError } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>Products</title>
        <meta name="description" content="Products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AppBarMain setSearchTerm={setSearchTerm} />
        <Grid container spacing={2} maxWidth="xl" sx={{ marginTop: "5px" }}>
          {!isError &&
            !isLoading &&
            products
              .filter((item) => {
                if (searchTerm === "") {
                  return item;
                } else if (
                  item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  item.price.toString().includes(searchTerm)
                ) {
                  return item;
                }
              })
              .map((d) => {
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
      </main>

      <footer className={styles.footer}>Powered by Random Products</footer>
    </div>
  );
}
