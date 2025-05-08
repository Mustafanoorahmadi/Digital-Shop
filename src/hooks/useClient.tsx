"use client";

import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";

export const useCart = () => {
  // get all cart items by query -> cart
  // add to cart -> addToCartMutation
  // delete from cart -> removeCartItemMutation

  const queryClient = useQueryClient();

  // fetch
  const {
    data: cart,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      // get data from DB

      const res = await fetch("/api/cart/");
      if (!res.ok) throw new Error("Failed to fetch cart");
      return res.json();
    },
    staleTime: 5 * 60 * 1000, // cache for 5 minutes
  });

  // add to cart
  const addToCartMutation = useMutation({
    mutationFn: async (productId: string) => {
      const res = await fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify({ productId }),
        headers: { "Content-type": "application/json" },
      });
      if (!res.ok) throw new Error("Filed to add cart");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      alert("item is added");
    },
    onError: () => {
      alert("filed to add");
    },
  });

  //delete to cart
  const removeCartItemMutation = useMutation({
    mutationFn: async (productId: string) => {
      const res = await fetch("/api/cart", {
        method: "DELETE",
        body: JSON.stringify({ productId }),
        headers: { "Content-type": "application/json" },
      });
      if (!res.ok) throw new Error("Filed to remove from cart");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      alert("item is removed");
    },
    onError: () => {
      alert("filed to remove");
    },
  });

  return { cart, isLoading, error, addToCartMutation, removeCartItemMutation };
};
