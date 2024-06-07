import React from "react";
import { useQuery } from "react-query";
import api from "../../services/api.ts";
import { Grid } from "@mui/material";
import Card from "../../components/card/Card.tsx";
import Product from "../../types/Types.tsx";
import Header from "../../components/Header/Header.tsx";

 

const Home: React.FC = () => {
  const {
    data: listProducts,
    isLoading,
    error,
  } = useQuery<Product[], Error>("products", async () => {
    const response = await fetch(
      `${api}products?page=1&rows=5&sortBy=id&orderBy=DESC`
    );
    if (!response.ok) {
      throw new Error("Falha ao carregar os produtos");
    }
    const data = await response.json();
    return data.products;
  });

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error.message}</div>;

  return (
    <Grid>
      <Header cartItemCount={0} />
      {listProducts &&
        listProducts.map((e: Product) => (
          <Grid  key={e.id}>
            <Card element={e} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Home;
