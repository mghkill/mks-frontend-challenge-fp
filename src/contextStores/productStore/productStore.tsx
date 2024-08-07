import { createContext, Context, ReactNode, useState } from "react";
import { useQuery } from "react-query";
import api from "../../services/api.ts";
import Product from "../../types/Types.tsx";
import { PRODUCTS_MOCK } from "./mockProducts.js";

interface CartContextType {
  cart: Product[];
  getCart: () => Product[];
  addToCart: (productSelected: Product) => void;
  removeFromCart: (productSelected: Product) => void;
  useGetProducts: () => Product[];
  clearCart: () => void;
  updateCart: (product: Product[]) => void;
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const CartContext: Context<CartContextType> =
  createContext<CartContextType>({
    cart: [],
    getCart: () => [],
    useGetProducts: () => [],
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
    updateCart: () => {},
    setCart: () => [],
  });

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>(
    JSON.parse(localStorage.getItem("@Cart:products") || "[]")
  );

  const CART_KEY = "@Cart:products";

  const useGetProducts = (): Product[] => {
    const dataMockBug: any = PRODUCTS_MOCK.products;
    const { data } = useQuery<Product[], Error>("products", async () => {
      const response = await fetch(
        `${api}products?page=1&rows=8&sortBy=id&orderBy=DESC`
      );
      if (!response.ok) {
        throw new Error("Falha ao carregar os produtos");
      }
      const data = await response.json();
      return data.products;
    });
    return data || dataMockBug;
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
    const updatedCart = outputCart.filter(
      (item) => item.id !== productSelected.id
    );
    localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const updateCart = (product: Product[]): void => {
    const outputCart = getCart();
    let removed = false;
    const updatedCart = outputCart.filter((item) => {
      if (!removed && item.id === product[0].id) {
        removed = true;
        return false;
      }
      return true;
    });
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
        setCart,
        useGetProducts,
        getCart,
        addToCart,
        removeFromCart,
        clearCart,
        updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
