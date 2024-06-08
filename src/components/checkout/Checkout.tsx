import React from "react";
import { Grid } from "@mui/material";
import { ContainerListProduct, StyledContainer } from "./StyleCheckout";
//@ts-ignore
import CheckoutCard from "../checkoutCard/CheckoutCard.tsx";

const Checkout: React.FC = () => {
  return (
    <Grid container direction="column">
      <StyledContainer>Carrinho de compras</StyledContainer>
      <ContainerListProduct>
        <CheckoutCard />
      </ContainerListProduct>
    </Grid>
  );
};

export default Checkout;
