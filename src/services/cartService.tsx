// cartService.ts
import { useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "./api";

const CART_KEY = 'cart';

export interface Product {
  id: number;
  name: string;
  price: number;
  // Outras propriedades conforme necessário
}

export const getCart = (): Product[] => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};

export const addToCart = (product: Product): void => {
  const cart = getCart();
  cart.push(product);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const removeFromCart = (productId: number): void => {
  const cart = getCart();
  const updatedCart = cart.filter(item => item.id !== productId);
  localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
};

export const clearCart = (): void => {
  localStorage.removeItem(CART_KEY);
};

 
