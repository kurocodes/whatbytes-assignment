"use client";

import { useState } from "react";

export default function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div>
      <p className="mb-3 font-medium">Category</p>
      <div className="space-y-3">
        <FilterOption 
          label="All" 
          checked={selectedCategory === "All"}
          onChange={() => setSelectedCategory("All")}
        />
        <FilterOption 
          label="Electronics" 
          checked={selectedCategory === "Electronics"}
          onChange={() => setSelectedCategory("Electronics")}
        />
        <FilterOption 
          label="Clothing" 
          checked={selectedCategory === "Clothing"}
          onChange={() => setSelectedCategory("Clothing")}
        />
        <FilterOption 
          label="Home" 
          checked={selectedCategory === "Home"}
          onChange={() => setSelectedCategory("Home")}
        />
      </div>
    </div>
  );
}

function FilterOption({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className="relative flex items-center justify-center w-4 h-4 rounded-full border border-white">
        {checked && <div className="absolute w-2 h-2 rounded-full bg-white" />}
      </div>
      <span className="text-sm font-light">{label}</span>
      <input 
        type="radio" 
        name="category" 
        className="hidden" 
        checked={checked} 
        onChange={onChange} 
      />
    </label>
  );
}
