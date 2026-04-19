"use client";

import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function ProductDetailsActions() {
  const [quantity, setQuantity] = useState(1);

  function decreaseQuantity() {
    setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1));
  }

  function increaseQuantity() {
    setQuantity((currentQuantity) => currentQuantity + 1);
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-[#142642] mb-3">Quantity</p>
        <div className="inline-flex items-center rounded-xl border border-[#D5E4F2] bg-white shadow-sm">
          <button
            type="button"
            onClick={decreaseQuantity}
            aria-label="Decrease quantity"
            className="flex h-12 w-12 items-center justify-center text-[#3F5F82] transition hover:bg-[#F3F8FD] disabled:cursor-not-allowed"
            disabled={quantity === 1}
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="flex h-12 min-w-14 items-center justify-center border-x border-[#D5E4F2] px-4 text-base font-semibold text-[#142642]">
            {quantity}
          </span>
          <button
            type="button"
            onClick={increaseQuantity}
            aria-label="Increase quantity"
            className="flex h-12 w-12 items-center justify-center text-[#3F5F82] transition hover:bg-[#F3F8FD]"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <button
        type="button"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0856AA] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#074b94] active:scale-[0.99] sm:w-auto sm:min-w-[220px]"
      >
        <ShoppingCart className="h-5 w-5" />
        Add to Cart
      </button>
    </div>
  );
}
