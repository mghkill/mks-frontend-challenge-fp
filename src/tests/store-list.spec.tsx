import { render, screen } from "@testing-library/react";
import React, { useContext } from "react";
import Home from "../pages/homePage/Home";
import "@testing-library/jest-dom";
import Product from "../types/Types";
import Card from "../components/card/Card";
import Checkout from "../components/checkout/Checkout";
import Header from "../components/Header/Header";
import {
  CartContext,
  CartProvider,
} from "../contextStores/productStore/productStore";

describe("Home component", () => {
  it("should render shopping cart icon", () => {
    render(<Home />);
    expect(screen.getByText("Finalizar Compra")).toBeInTheDocument();
  });
});

describe("Card component", () => {
  const product: Product = {
    id: 1,
    count: 1,
    name: "Produto de Teste",
    brand: "Marca do Produto",
    description: "Descrição do produto de teste",
    photo: "caminho/para/a/imagem.jpg",
    price: 10.99,
    createdAt: "2024-06-08",
    updatedAt: "2024-06-08",
  };

  it("should render Card component with product", () => {
    render(<Card element={product} />);
    expect(screen.getByText("COMPRAR")).toBeInTheDocument();
    expect(screen.getByText("shoppingBag.svg")).toBeInTheDocument();
  });
});

describe("Checkout component", () => {
  it("should render checkout title and checkout card", () => {
    render(<Checkout />);
    expect(screen.getByText("Carrinho de compras")).toBeInTheDocument();
  });
});

describe("Header component", () => {
  it("should render MKS Sistemas text", () => {
    render(<Header setSearchText={() => {}} />);
    expect(screen.getByText("MKS")).toBeInTheDocument();
    expect(screen.getByText("Sistemas")).toBeInTheDocument();
  });
});

const TestComponent = () => {
  const { cart } = useContext(CartContext);
  return <div data-testid="cart-length">{cart.length}</div>;
};

describe("CartProvider component", () => {
  it("should provide cart context to consumers", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    const cartLengthElement = screen.getByTestId("cart-length");
    expect(cartLengthElement).toBeInTheDocument();
    expect(cartLengthElement.textContent).toBe("0");
  });
});
