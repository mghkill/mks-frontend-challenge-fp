import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import { CartContext } from "../../stores/productStore/productStore.tsx";

// @ts-ignore
import { ReactComponent as CartSvg } from "../../assets/img/cart.svg";

import { Typography } from "@mui/material";
import {
  StyledContainer,
  LogoContainer,
  SystemsTypography,
  CartContainer,
} from "./StyleHeader";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  
  const { cart } = useContext(CartContext);

  const cartItemCount = cart.length;

  return (
    <StyledContainer container alignItems="center">
      <LogoContainer>
        MKS
        <SystemsTypography>Sistemas</SystemsTypography>
      </LogoContainer>
      <Grid item>
        <CartContainer>
          <CartSvg />
          <Typography>{cartItemCount}</Typography>
        </CartContainer>
      </Grid>
    </StyledContainer>
  );
};

export default Header;
