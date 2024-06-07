import React from "react";
import Grid from "@mui/material/Grid";
import { ReactComponent as CartSvg } from "../../assets/img/cart.svg";
import { Typography } from "@mui/material";
import {
  StyledContainer,
  LogoContainer,
  SystemsTypography,
  CartContainer,
} from "./StyleHeader";

interface HeaderProps {
  cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount }) => {
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
