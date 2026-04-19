"use client";

import { Minus, Plus } from "lucide-react";

export default function CartQuantityControl({
  title,
  quantity,
  onDecrease,
  onIncrease,
}: {
  title: string;
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}) {
  return (
    <div className="inline-flex items-center rounded-xl border border-[#D5E4F2] bg-white shadow-sm">
      <button
        type="button"
        onClick={onDecrease}
        aria-label={`Decrease quantity for ${title}`}
        className="flex h-11 w-11 items-center justify-center text-[#3F5F82] transition hover:bg-[#F3F8FD]"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="flex h-11 min-w-14 items-center justify-center border-x border-[#D5E4F2] px-4 text-base font-semibold text-[#142642]">
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        aria-label={`Increase quantity for ${title}`}
        className="flex h-11 w-11 items-center justify-center text-[#3F5F82] transition hover:bg-[#F3F8FD]"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
