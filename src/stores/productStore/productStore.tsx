// productStore.tsx

import { createContext, Context, ReactNode, useState } from "react";
import { useQuery } from "react-query";
import api from "../../services/api.ts";
import Product from "../../types/Types";

interface CartContextType {
  cart: Product[];
  getCart: () => Product[];
  addToCart: (productSelected: Product) => void;
  removeFromCart: (productSelected: Product) => void;
  useGetProducts: () => Product[];
  clearCart: () => void;
}

export const CartContext: Context<CartContextType> = createContext<CartContextType>({
  cart: [],
  getCart: () => [],
  useGetProducts: () => [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>(
    JSON.parse(localStorage.getItem("@Cart:products") || "[]")
  );

  const CART_KEY = "@Cart:products";

  const useGetProducts = (): Product[] => {
    const { data } = useQuery<Product[], Error>("products", async () => {
      const response = await fetch(
        `${api}products?page=1&rows=5&sortBy=id&orderBy=DESC`
      );
      if (!response.ok) {
        throw new Error("Falha ao carregar os produtos");
      }
      const data = await response.json();
      return data.products;
    });

    return data || [];
  };

  const getCart = (): Product[] => {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
  };

  const addToCart = (productSelected: Product): void => {
    const outputCart = getCart();
    outputCart.push(productSelected);
    localStorage.setItem(CART_KEY, JSON.stringify(outputCart));
    setCart(outputCart); 
};


  const removeFromCart = (productSelected: Product): void => {
    const outputCart = getCart();
    const updatedCart = outputCart.filter((item) => item.id !== productSelected.id);
    localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const clearCart = (): void => {
    localStorage.removeItem(CART_KEY);
    setCart(JSON.parse(localStorage.getItem("@Cart:products") || "[]"));

  };

  return (
    //@ts-ignore
    <CartContext.Provider
      value={{
        cart,
        useGetProducts,
        getCart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
