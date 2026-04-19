"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

function getValidPrice(value: string | null, fallback: number) {
  if (value === null || value.trim() === "") {
    return fallback;
  }

  const parsedValue = Number(value);

  if (!Number.isFinite(parsedValue)) {
    return fallback;
  }

  return Math.min(1000, Math.max(0, parsedValue));
}

export default function Sidebar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const selectedCategory = searchParams.get("category") || "All";
  const minPriceParam = getValidPrice(searchParams.get("minPrice"), 0);
  const maxPriceParam = getValidPrice(searchParams.get("maxPrice"), 1000);
  const maxPrice = Math.max(1, maxPriceParam);
  const minPrice = Math.min(999, Math.min(minPriceParam, maxPrice - 1));

  const updateFilters = (updates: {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
  }) => {
    const params = new URLSearchParams(searchParams.toString());

    if (updates.category !== undefined) {
      if (updates.category === "All") {
        params.delete("category");
      } else {
        params.set("category", updates.category);
      }
    }

    if (updates.minPrice !== undefined) {
      if (updates.minPrice <= 0) {
        params.delete("minPrice");
      } else {
        params.set("minPrice", String(updates.minPrice));
      }
    }

    if (updates.maxPrice !== undefined) {
      if (updates.maxPrice >= 1000) {
        params.delete("maxPrice");
      } else {
        params.set("maxPrice", String(updates.maxPrice));
      }
    }

    const queryString = params.toString();
    replace(queryString ? `${pathname}?${queryString}` : pathname, {
      scroll: false,
    });
  };

  return (
    <div className="relative lg:sticky top-6 lg:top-24 bg-[#0856AA] p-5 rounded-xl text-white space-y-6 z-10 w-full">
      <h2 className="text-xl font-medium">Filters</h2>
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={(category) => updateFilters({ category })}
      />
      <PriceFilter
        key={`${minPrice}-${maxPrice}`}
        min={minPrice}
        max={maxPrice}
        onPriceChange={(nextMinPrice, nextMaxPrice) =>
          updateFilters({ minPrice: nextMinPrice, maxPrice: nextMaxPrice })
        }
      />
    </div>
  );
}
