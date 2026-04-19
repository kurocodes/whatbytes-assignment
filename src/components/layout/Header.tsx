"use client";

import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const queryParam = searchParams.get("q") || "";

  // Initialize directly from URL (no effect needed)
  const [searchTerm, setSearchTerm] = useState(queryParam);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm !== queryParam) {
        const params = new URLSearchParams(searchParams.toString());

        if (searchTerm) {
          params.set("q", searchTerm);
        } else {
          params.delete("q");
        }

        replace(`${pathname}?${params.toString()}`, { scroll: false });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, queryParam, pathname, replace, searchParams]);

  return (
    <div className="flex items-center h-10 w-36 sm:w-64 px-3 rounded-md outline-2 outline-white/30 focus-within:outline-white/50 border border-white/10 shadow-sm transition-all relative">
      <Search className="text-white/70 mr-2 shrink-0" size={18} />

      <input
        className="bg-transparent outline-none text-white w-full text-sm sm:text-base hidden sm:inline placeholder:text-white/70"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <input
        className="bg-transparent outline-none text-white w-full text-sm sm:hidden placeholder:text-white/70"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default function Header() {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full h-16 bg-[#0656A5] flex items-center justify-between px-4 sm:px-8 border-b border-[#043e78]/30">
      {/* Logo */}
      <div>
        <Link href="/" className="text-2xl text-white font-semibold">
          Logo
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Search */}
        <Suspense
          fallback={
            <div className="flex items-center h-10 w-36 sm:w-64 px-3 rounded-md outline-2 outline-white/30 border border-white/10 shadow-sm">
              <Search className="text-white/70 mr-2 shrink-0" size={18} />
            </div>
          }
        >
          <SearchInput />
        </Suspense>

        {/* Cart Button */}
        <Link
          href="/cart"
          className="relative h-10 flex items-center justify-center gap-2 bg-[#002B5A] hover:bg-[#002c5ac4] px-3 sm:px-5 rounded-md text-white transition shrink-0"
        >
          <ShoppingCart size={18} />
          <span className="hidden sm:inline text-sm font-medium">Cart</span>
          {itemCount > 0 ? (
            <span className="absolute -right-2 -top-2 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-[#FFD166] px-1.5 text-[11px] font-bold text-[#142642]">
              {itemCount}
            </span>
          ) : null}
        </Link>
      </div>
    </header>
  );
}
