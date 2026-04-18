import { products } from "@/lib/data";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function ProductGrid({ searchQuery }: { searchQuery?: string }) {
  const query = searchQuery?.toLowerCase() || "";
  
  const filteredProducts = query 
    ? products.filter((product) => 
        product.title.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      )
    : products;

  if (filteredProducts.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start w-full">
        <div className="col-span-full py-20 flex flex-col items-center justify-center text-gray-500">
          <p className="text-lg">No products found matching "{searchQuery}"</p>
          <Link href="/" className="mt-4 text-[#0656A5] hover:underline font-medium">
            Clear search
          </Link>
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
