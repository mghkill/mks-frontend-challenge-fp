import React, { useContext } from "react";
import { Grid } from "@mui/material";
import Card from "../../components/card/Card.tsx";
import Product from "../../types/Types.tsx";
import Header from "../../components/Header/Header.tsx";
import { CartContext } from "../../stores/productStore/productStore.tsx";
import { StyledHomeCard, StyledHomeContainer } from "./StyleHome.js";

const Home: React.FC = () => {
  const { useGetProducts } = useContext(CartContext);

  const listProducts = useGetProducts();

  return (
    <Grid container>
      <Header />
      <StyledHomeContainer>
        {listProducts &&
          listProducts.map((e: Product) => (
            <StyledHomeCard key={e.id} item xs={12} sm={6} md={4} lg={3}>
              <Card element={e} />
            </StyledHomeCard>
          ))}
      </StyledHomeContainer>
    </Grid>
  );
};

export default Home;
