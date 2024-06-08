import React, { useContext, useMemo, useState } from "react";
import { Grid } from "@mui/material";
import Card from "../../components/card/Card.tsx";
import Product from "../../types/Types.tsx";
import Header from "../../components/Header/Header.tsx";
import { CartContext } from "../../contextStores/productStore/productStore.tsx";
import { StyledHomeCard, StyledHomeContainer } from "./StyleHome.js";

const Home: React.FC = () => {
  const { useGetProducts } = useContext(CartContext);
  const containsText = (text: string, searchText: string) =>
    text.toLowerCase().includes(searchText.toLowerCase());
  const [searchText, setSearchText] = useState<string>("");
  const listProducts = useGetProducts();

  const displayedOptions = useMemo(
    () => listProducts.filter((c) => containsText(c.name, searchText)),
    [listProducts, searchText]
  );

  return (
    <Grid container>
      <Header setSearchText={setSearchText} />
      <StyledHomeContainer>
        {displayedOptions &&
          displayedOptions.map((e: Product) => (
            <StyledHomeCard key={e.id} item xs={12} sm={6} md={4} lg={3}>
              <Card element={e} />
            </StyledHomeCard>
          ))}
      </StyledHomeContainer>
    </Grid>
  );
};

export default Home;
