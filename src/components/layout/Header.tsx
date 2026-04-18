import { Search, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-16 bg-[#0656A5] flex items-center justify-between px-4 sm:px-8 border-b border-[#043e78]/30">
      {/* Logo */}
      <div>
        <span className="text-2xl text-white font-semibold">Logo</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Search */}
        <div className="flex items-center h-10 w-36 sm:w-64 px-3 rounded-md outline-2 outline-white/30 focus-within:outline-white/50">
          <Search className="text-white/70 mr-2 shrink-0" size={18} />

          <input
            className="bg-transparent outline-none text-white placeholder:text-white/70 w-full text-sm sm:text-base hidden sm:inline"
            placeholder="Search for products..."
          />
          <input
            className="bg-transparent outline-none text-white placeholder:text-white/70 w-full text-sm sm:hidden"
            placeholder="Search..."
          />
        </div>

        {/* Cart Button */}
        <button className="h-10 flex items-center justify-center gap-2 bg-[#002B5A] hover:bg-[#002c5ac4] px-3 sm:px-5 rounded-md text-white transition shrink-0">
          <ShoppingCart size={18} />
          <span className="hidden sm:inline text-sm font-medium">Cart</span>
        </button>
      </div>
    </header>
  );
}
