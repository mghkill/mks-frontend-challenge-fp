import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import { CartContext } from "../../stores/productStore/productStore.tsx";
import SearchIcon from "@mui/icons-material/Search";
// @ts-ignore
import { ReactComponent as CartSvg } from "../../assets/img/cart.svg";

import DrawerMiniCart from "../../components/Drawer/DrawerMiniCart.tsx";

import { InputBase, Paper, Typography } from "@mui/material";
import {
  StyledContainer,
  LogoContainer,
  SystemsTypography,
  CartContainer,
  SearchHomePage,
} from "./StyleHeader";
import Checkout from "../checkout/Checkout.tsx";
import { Divider, IconButton } from "@mui/joy";

interface HeaderProps {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ setSearchText }) => {
  const [open, setOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.length;

  return (
    <>
      <StyledContainer container>
        <LogoContainer>
          MKS
          <SystemsTypography>Sistemas</SystemsTypography>
        </LogoContainer>
        <SearchHomePage id="inputForm">
          <Paper
            component="form"
            sx={{
              display: "none",
              "@media (min-width: 726px)": {
                p: "2px 4px",
                display: "flex",
                alignItems: "right",
                width: 500,
              },
            }}
          >
            <InputBase
              onChange={(e) => setSearchText(e.target.value)}
              sx={{ ml: 1, flex: 1 }}
              placeholder="Buscar produto"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </SearchHomePage>

        <Grid onClick={() => setOpen(true)} item>
          <CartContainer>
            <CartSvg />
            <Typography>{cartItemCount}</Typography>
          </CartContainer>
        </Grid>
      </StyledContainer>

      <DrawerMiniCart
        open={open}
        setOpen={setOpen}
        children={<Checkout />}
      ></DrawerMiniCart>
    </>
  );
};

export default Header;
