import ProductDetail from "@/modules/products/components/ProductDetail";
import { DATA } from "@/modules/products/mock/products";
import { getProductById } from "@/modules/products/services";
import { ProductsWithImages } from "@/types";
import React from "react";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const data = await params;
  const { id } = data
  const product = (await getProductById(id)) as ProductsWithImages;

  return (
    <ProductDetail {... product} />
  )
}

export default page;
