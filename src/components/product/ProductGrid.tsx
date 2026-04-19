import { products } from "@/lib/data";
import Link from "next/link";
import ProductCard from "./ProductCard";

export default function ProductGrid({
  searchQuery,
  selectedCategory,
  minPrice = 0,
  maxPrice = 1000,
}: {
  searchQuery?: string;
  selectedCategory?: string;
  minPrice?: number;
  maxPrice?: number;
}) {
  const query = searchQuery?.toLowerCase() || "";
  const normalizedCategory = selectedCategory?.toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      !query ||
      product.title.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query);

    const matchesCategory =
      !normalizedCategory ||
      normalizedCategory === "all" ||
      product.category.toLowerCase() === normalizedCategory;

    const matchesPrice =
      product.price >= minPrice && product.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  if (filteredProducts.length === 0) {
    const hasFilters =
      Boolean(searchQuery) ||
      Boolean(selectedCategory && selectedCategory !== "All") ||
      minPrice > 0 ||
      maxPrice < 1000;

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start w-full">
        <div className="col-span-full py-20 flex flex-col items-center justify-center text-gray-500">
          <p className="text-lg text-center">
            No products found for the selected filters.
          </p>
          {hasFilters ? (
            <Link
              href="/"
              className="mt-4 text-[#0656A5] hover:underline font-medium"
            >
              Clear all filters
            </Link>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start w-full">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
