import ProductDashboardView from "@/modules/products/views/ProductDashboardView";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const data = await params;
  const { id } = data;
  console.log(id);
  return (
    <div>
      <ProductDashboardView />
    </div>
  );
};

export default page;
