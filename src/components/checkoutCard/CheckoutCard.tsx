import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../stores/productStore/productStore.tsx";
//@ts-ignore
import { ReactComponent as EmptyCartIcon } from "../../assets/img/cartWhite.svg";

import {
  BoxAddRemove,
  ButtonAddRemove,
  CloseButton,
  CountSpan,
  NameStyle,
  PriceTotal,
  StyledCheckoutCardBox,
  SubmitButtonCart,
  TotalReduce,
} from "./StyledCheckoutCard.js";
import Product from "../../types/Types.tsx";
import { Grid } from "@mui/joy";

interface GroupedProduct extends Omit<Product, "count"> {
  count: number;
}

const CheckoutCard: React.FC = () => {
  const [totalOutput, setTotalOutput] = useState(0);
  const { updateCart, addToCart, removeFromCart, cart } =
    useContext(CartContext);

  useEffect(() => {
    const total = calcTotal(listProductCart);
    setTotalOutput(total);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  useEffect(() => {
    console.log("totalOutput", totalOutput);
  }, [totalOutput]);

  const reducePrice = (product: Product) => {
    const priceNumber: number = product.price;

    if (isNaN(priceNumber)) {
      throw new Error("O preço do produto não é um número válido.");
    }

    return priceNumber * product.count;
  };

  function groupByIdSerialize(products: Product[]): GroupedProduct[] {
    const grouped: { [id: number]: GroupedProduct } = {};

    products.forEach((product) => {
      const { id, count, ...rest } = product;
      if (grouped[id]) {
        grouped[id].count++;
      } else {
        grouped[id] = { id, count: 1, ...rest };
      }
    });

    return Object.values(grouped);
  }

  const listProductCart = groupByIdSerialize(cart);

  const handleAddProduct = (product: Product) => {
    addToCart(product);
  };

  const handleRemoveProduct = (product: Product) => {
    if (product.count <= 1) {
      removeFromCart(product);
    } else {
      updateCart([product]);
    }
  };

  const EmptyCartBlock = () => (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <EmptyCartIcon style={{ width: "150px", height: "150px" }} />

      <h2>Seu carrinho está vazio!</h2>
      <p>Adicione produtos ao seu carrinho para vê-los aqui.</p>
    </Grid>
  );

  const calcTotal = (listProductCart: GroupedProduct[]): number => {
    return listProductCart.reduce((acc, item) => {
      const price: number = item.price;
      const priceNumber: number = price;
      if (isNaN(priceNumber)) {
        console.warn(`Invalid price encountered: ${price}`);
        return acc;
      }
      return acc + priceNumber * item.count;
    }, 0);
  };

  const getPriceWithoutDecimal = (price: number) => {
    const formattedPrice = Number(price)
      .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
      .split(",")[0];
  
    return formattedPrice;
  };

  return (
    <>
      {listProductCart.length > 0 ? (
        listProductCart.map((product, index) => (
          <Grid key={index} m={"0 auto"}>
            <StyledCheckoutCardBox>
              <CloseButton onClick={() => removeFromCart(product)}>
                x
              </CloseButton>
              <img src={product.photo} alt="img" />
              <NameStyle className="title">{product.name}</NameStyle>
              <BoxAddRemove>
                <ButtonAddRemove onClick={() => handleRemoveProduct(product)}>
                  -
                </ButtonAddRemove>
                <CountSpan>{product.count}</CountSpan>
                <ButtonAddRemove onClick={() => handleAddProduct(product)}>
                  +
                </ButtonAddRemove>
              </BoxAddRemove>
              <PriceTotal className="description">
                {getPriceWithoutDecimal(reducePrice(product))}
              </PriceTotal>
            </StyledCheckoutCardBox>
          </Grid>
        ))
      ) : (
        <EmptyCartBlock />
      )}
      <TotalReduce>
        <span>Total</span>
        <span>{getPriceWithoutDecimal(totalOutput)}</span>
      </TotalReduce>
      
      <SubmitButtonCart>
        Finalizar Compra
      </SubmitButtonCart>
    </>
  );
};

export default CheckoutCard;
