import ProductDashboardView from "@/modules/products/views/ProductDashboardView";
import ProductDetailView from "@/modules/products/views/ProductDetailView";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const data = await params;
  const { id } = data;

  return (
    <div>
      <ProductDashboardView />
    </div>
  );
};

export default page;
