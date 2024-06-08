import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import { CartContext } from "../../stores/productStore/productStore.tsx";

// @ts-ignore
import { ReactComponent as CartSvg } from "../../assets/img/cart.svg";

import DrawerMiniCart from "../../components/Drawer/DrawerMiniCart.tsx";

import { Typography } from "@mui/material";
import {
  StyledContainer,
  LogoContainer,
  SystemsTypography,
  CartContainer,
} from "./StyleHeader";
import Checkout from "../checkout/Checkout.tsx";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [open, setOpen] = useState(false);

  const { cart } = useContext(CartContext);

  const cartItemCount = cart.length;

  return (
    <>
      <StyledContainer onClick={() => setOpen(true)} container>
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
      <DrawerMiniCart open={open} setOpen={setOpen} children={<Checkout />}>

      </DrawerMiniCart>
    </>
  );
};

export default Header;
