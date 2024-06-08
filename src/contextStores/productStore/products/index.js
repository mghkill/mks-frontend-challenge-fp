import { CartProvider } from "../productStore.tsx";

export const Providers = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};
