import Sidebar from "@/components/filters/Sidebar";
import ProductGrid from "@/components/product/ProductGrid";

export default async function Home(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const q = searchParams?.q as string | undefined;

  return (
    <main className="flex flex-col lg:flex-row gap-8 px-4 sm:px-8 py-8 max-w-[1080px] mx-auto w-full">
      {/* Sidebar */}
      <aside className="w-full lg:w-[280px] shrink-0">
        <Sidebar />
      </aside>

      {/* Product Section */}
      <section className="flex-1">
        <h1 className="text-[28px] font-bold text-[#142642] mb-6">
          Product Listing
        </h1>
        <ProductGrid searchQuery={q} />
      </section>
    </main>
  );
}
