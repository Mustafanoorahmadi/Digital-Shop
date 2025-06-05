"use client";

import React from "react";
import ProductList from "../components/ProductList";
import { ProductsWithImages } from "@/types";

function ProductListView({ products }: { products: ProductsWithImages[] }) {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default ProductListView;
