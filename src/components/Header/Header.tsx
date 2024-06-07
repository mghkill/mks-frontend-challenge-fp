import React from "react";
import Grid from "@mui/material/Grid";
import { ReactComponent as CartSvg } from "../../assets/img/cart.svg";
import { Typography } from "@mui/material";

interface HeaderProps {
  cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount }) => {
  return (
    <Grid style={{ backgroundColor: "#f0f0f0", padding: "10px" }}>
      <Grid style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h1" style={{ margin: 0 }}>
          MKS
        </Typography>
        <Typography variant="h5" style={{ margin: 0, marginLeft: "5px" }}>
          Sistemas
        </Typography>
      </Grid>
      <Grid container justifyContent="flex-end" alignItems="center">
        <Grid item>
          <CartSvg style={{ width: "30px", height: "30px" }} />
          <Typography style={{ marginLeft: "5px" }}>{cartItemCount}</Typography>{" "}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
