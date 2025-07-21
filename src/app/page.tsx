import AncientCollection from "@/components/ancientCollection";
import CategoryList from "@/components/categoryList/CategoryList";
import FeaturedCollection from "@/components/collection/FeaturedCollection";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/heroSection/HeroSection";
import GallerySection from "@/components/home/gallerysection";
import NewProducts from "@/components/newProducts";
import TrendingProducts from "@/components/trendingProducts";
import React from "react";

export default async function Home() {
 

  return (
    <div className="bg-white min-h-screen">
      <HeroSection />
      <CategoryList />
      <NewProducts />
      <FeaturedCollection />
      <TrendingProducts />
      <AncientCollection />
      <GallerySection />
    </div>
  );
}
