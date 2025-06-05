import { prisma } from "@/lib/prisma";
import ProductListView from "@/modules/products/views/ProductListView";
import { ProductsWithImages } from "@/types";
import React from "react";

async function Products() {
  const products: ProductsWithImages[] = await prisma.product.findMany({
    include: { images: true },
  });
  return (
    <div>
      <ProductListView products={products} />
    </div>
  );
}

export default Products;
