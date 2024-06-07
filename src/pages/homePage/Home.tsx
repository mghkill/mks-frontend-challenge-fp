import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import Card from "../../components/card/Card.tsx";
import Product from "../../types/Types.tsx";
import Header from "../../components/Header/Header.tsx";
import { useGetProducts } from "../../stores/productStore/productStore.tsx";

const Home: React.FC = () => {
  const { data: listProducts, isLoading, error } = useGetProducts();

  useEffect(() => {
    console.log("listProducts", listProducts);
  }, [listProducts, isLoading, error]);

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error.message}</div>;

  return (
    <Grid>
      <Header cartItemCount={0} />
      {listProducts &&
        listProducts.map((e: Product) => (
          <Grid key={e.id}>
            <Card element={e} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Home;
