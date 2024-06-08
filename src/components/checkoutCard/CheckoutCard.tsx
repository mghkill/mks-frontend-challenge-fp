import React, { useContext, useEffect } from "react";
import { CartContext } from "../../stores/productStore/productStore.tsx";
import {
  BoxAddRemove,
  ButtonAddRemove,
  CountSpan,
  NameStyle,
  PriceTotal,
  StyledCheckoutCardBox,
} from "./StyledCheckoutCard.js";
import Product from "../../types/Types.tsx";

interface GroupedProduct extends Omit<Product, "count"> {
  count: number;
}

const CheckoutCard: React.FC = () => {
  const { updateCart, addToCart, removeFromCart, cart } =
    useContext(CartContext);

  const reducePrice = (product: Product) => {
    const priceNumber: number = parseFloat(product.price);

    if (isNaN(priceNumber)) {
      throw new Error("O preço do produto não é um número válido.");
    }

    return priceNumber * product.count;
  };

  function groupByIdSerialize(products: Product[]): GroupedProduct[] {
    const grouped: { [id: number]: GroupedProduct } = {};

    products.forEach((product) => {
      const { id, count, ...rest } = product; // Remove 'count' from the spread
      if (grouped[id]) {
        grouped[id].count++;
      } else {
        grouped[id] = { id, count: 1, ...rest }; // Ensure 'count' has the same type as the one in GroupedProduct
      }
    });

    return Object.values(grouped);
  }

  const listProductCart = groupByIdSerialize(cart);

  useEffect(() => {
    console.log(listProductCart);
  }, [listProductCart]);

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

  return (
    <div>
      {listProductCart.map((product, index) => (
        <StyledCheckoutCardBox key={index}>
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
            {"R$" + reducePrice(product)}
          </PriceTotal>
        </StyledCheckoutCardBox>
      ))}
    </div>
  );
};

export default CheckoutCard;
