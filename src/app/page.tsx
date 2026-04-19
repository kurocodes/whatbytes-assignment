import Sidebar from "@/components/filters/Sidebar";
import ProductGrid from "@/components/product/ProductGrid";

function getSingleSearchParam(
  value: string | string[] | undefined,
): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

function getNumberSearchParam(
  value: string | string[] | undefined,
  fallback: number,
) {
  const singleValue = getSingleSearchParam(value);

  if (singleValue === undefined || singleValue.trim() === "") {
    return fallback;
  }

  const parsedValue = Number(singleValue);

  return Number.isFinite(parsedValue) ? parsedValue : fallback;
}

export default async function Home(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const q = getSingleSearchParam(searchParams?.q);
  const category = getSingleSearchParam(searchParams?.category);
  const minPriceParam = getNumberSearchParam(searchParams?.minPrice, 0);
  const maxPriceParam = getNumberSearchParam(searchParams?.maxPrice, 1000);
  const minPrice = Math.max(0, Math.min(minPriceParam, 999));
  const maxPrice = Math.max(minPrice + 1, Math.min(maxPriceParam, 1000));

  return (
    <main className="flex flex-col lg:flex-row gap-8 px-4 sm:px-8 py-8 max-w-270 mx-auto w-full">
      {/* Sidebar */}
      <aside className="w-full lg:w-70 shrink-0">
        <Sidebar />
      </aside>

      {/* Product Section */}
      <section className="flex-1">
        <h1 className="text-[28px] font-bold text-[#142642] mb-6">
          Product Listing
        </h1>
        <ProductGrid
          searchQuery={q}
          selectedCategory={category}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
      </section>
    </main>
  );
}
