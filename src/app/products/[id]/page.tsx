import customMetadataGenerator from "@/lib/metadata";
import ProductDetail from "@/modules/products/components/ProductDetail";
import { getProductById } from "@/modules/products/services";
import { ProductsWithImages } from "@/types";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const data = await params;
  const { id } = data;
  const product = (await getProductById(id)) as ProductsWithImages;

  if (!product) {
    return customMetadataGenerator({
      title: "not found",
    });
  }
  return customMetadataGenerator({
    title: product?.name,
    description: product?.description,
    images: product?.images,
  });
}

async function page({ params }: { params: Promise<{ id: string }> }) {
  const data = await params;
  const { id } = data;
  const product = (await getProductById(id)) as ProductsWithImages;

  const jsonLD = {
    "@context": "http://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    images: product?.images.length && product.images[0].image,
  };
  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />
      <ProductDetail {...product} />
    </section>
  );
}

export default page;
