import ProductDetail from "@/modules/products/components/ProductDetail";
import { DATA } from "@/modules/products/mock/products";
import React from "react";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const data = await params;

  const prodcut = DATA[0]
  return (
    <ProductDetail {... prodcut} />
  )
}

export default page;
