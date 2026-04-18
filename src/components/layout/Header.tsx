import { Search, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full h-16 bg-[#0656A5] flex items-center justify-between px-8">
      {/* Logo */}
      <div>
        <span className="text-2xl text-white font-semibold">Logo</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="flex items-center h-10 w-64 px-3 rounded-md outline-1 outline-white focus-within:outline-2">
          <Search className="text-white/70 mr-2" />

          <input
            className="bg-transparent outline-none text-white placeholder:text-white/70 w-full"
            placeholder="Search for products..."
          />
        </div>

        {/* Cart Button */}
        <button className="h-10 flex items-center gap-2 bg-[#002B5A] hover:bg-[#002c5ac4] px-5 rounded-md text-white transition">
          <ShoppingCart size={16} />
          <span className="text-sm font-medium">Cart</span>
        </button>
      </div>
    </header>
  );
}
