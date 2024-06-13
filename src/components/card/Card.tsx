import React, { useContext, useEffect } from "react";
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
import { CartContext } from "../../contextStores/productStore/productStore.tsx";
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init();
  }, []);
  const handleProduct = (element: Product) => {
    addToCart(element);
  };
  return (
    <Grid
      data-aos="zoom-out-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      /* data-aos-anchor-placement="top-center" */
    >
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
    </Grid>
  );
};

export default Card;
