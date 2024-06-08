import React, { useContext } from "react";
import Product from "../../types/Types";
import {
  StyledCard,
  StyledCardContent,
  StyledCardMedia,
  StyledButton,
  StyledTypographyName,
  StyledTypographyPrice,
  StyledTypographyDescription,
  StyledSpanPrice,
} from "./StyleCard";
import { CartContext } from "../../stores/productStore/productStore.tsx";

// @ts-ignore
import { ReactComponent as ShoppingBagSVG } from "../../assets/img/shoppingBag.svg";

import { Grid } from "@mui/material";

interface CardProps {
  element: Product;
}

const getPriceWithoutDecimal = (price: number) => {
  const formattedPrice = Number(price)
    .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    .split(",")[0];

  return formattedPrice;
};

const Card: React.FC<CardProps> = ({ element }) => {
  const { addToCart } = useContext(CartContext);

  const handleProduct = (element: Product) => {
    addToCart(element);
  };
  return (
    <StyledCard onClick={() => handleProduct(element)}>
      <StyledCardMedia
        component="img"
        height="140"
        image={element.photo}
        alt={element.name}
      />
      <StyledCardContent>
        <StyledTypographyName>{element.name}</StyledTypographyName>
        <StyledTypographyPrice variant="h5" align="right">
          <StyledSpanPrice>
            {getPriceWithoutDecimal(element.price)
              .toString()
              .replace(/\s/g, "")}
          </StyledSpanPrice>
        </StyledTypographyPrice>
      </StyledCardContent>
      <StyledTypographyDescription variant="body1" gutterBottom>
        {element.description}
      </StyledTypographyDescription>
      <StyledButton
        whileHover={{ y: -1, color: "#6495ED" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        variant="contained"
        color="primary"
      >
        <Grid sx={{ p: 1, pt: 1.6 }}>
          <ShoppingBagSVG />
        </Grid>
        COMPRAR
      </StyledButton>
    </StyledCard>
  );
};

export default Card;
