import CategorySidebar from "./CategorySidebar";
import MainBanner from "./MainBanner";
import FlashSaleBanner from "./FlashSaleBanner";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:py-2 ">
      {/* Sidebar */}
      <div className="hidden lg:block">
        <CategorySidebar />
      </div>
      {/* Main Banner */}
      <div className="lg:col-span-2 flex">
        <MainBanner />
      </div>
      {/* Flash Sale Banner */}
      <div className=" flex">
        <FlashSaleBanner />
      </div>
    </section>
  );
}
