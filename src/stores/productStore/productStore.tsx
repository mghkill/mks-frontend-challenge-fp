// productStore.tsx

import { useQuery } from "react-query";
import api from "../../services/api.ts";
import Product from "../../types/Types";

export function useGetProducts() {
  return useQuery<Product[], Error>("products", async () => {
    const response = await fetch(
      `${api}products?page=1&rows=5&sortBy=id&orderBy=DESC`
    );
    if (!response.ok) {
      throw new Error("Falha ao carregar os produtos");
    }
    const data = await response.json();
    return data.products;
  });
}

export async function addToCart(productId: string) {
  // Lógica para adicionar um produto ao carrinho de compras
}
