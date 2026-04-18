import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

export default function Sidebar() {
  return (
    <div className="relative lg:sticky top-6 lg:top-24 bg-[#0856AA] p-5 rounded-xl text-white space-y-6 z-10 w-full">
      <h2 className="text-xl font-medium">Filters</h2>
      <CategoryFilter />
      <PriceFilter />
    </div>
  );
}