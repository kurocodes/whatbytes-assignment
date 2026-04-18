import Sidebar from "@/components/filters/Sidebar";
import ProductGrid from "@/components/product/ProductGrid";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row gap-8 px-4 sm:px-8 py-8 max-w-[1400px] mx-auto">
      {/* Sidebar */}
      <aside className="w-full lg:w-[280px] shrink-0">
        <Sidebar />
      </aside>

      {/* Product Section */}
      <section className="flex-1">
        <h1 className="text-[28px] font-bold text-[#142642] mb-6">
          Product Listing
        </h1>
        <ProductGrid />
      </section>
    </main>
  );
}
