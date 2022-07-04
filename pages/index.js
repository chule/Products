import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import ProductCard from "../components/card";
import AppBarMain from "../components/appBar";
import { useProducts } from "../lib/hooks";

export default function Home() {
  const { products, isLoading, isError } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="xl">
        <AppBarMain setSearchTerm={setSearchTerm} />
        <Grid container spacing={2} sx={{ marginTop: "5px" }}>
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
                      rating={d.rating}
                    />
                  </Grid>
                );
              })}
        </Grid>
      </Container>

      <footer className={styles.footer}>Powered by Random Products</footer>
    </>
  );
}
