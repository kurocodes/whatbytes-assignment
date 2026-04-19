import { formatPrice } from "@/lib/cart";
import Link from "next/link";

export default function CartSummaryCard({
  itemCount,
  subtotal,
  shipping,
  total,
}: {
  itemCount: number;
  subtotal: number;
  shipping: number;
  total: number;
}) {
  return (
    <aside className="h-fit rounded-[28px] border border-[#DCEAF7] bg-white p-6 shadow-sm sm:p-8">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7A93AF]">
        Summary
      </p>
      <h2 className="mt-2 text-2xl font-bold text-[#142642]">
        Price summary
      </h2>

      <div className="mt-8 space-y-4 text-sm text-[#4F6785]">
        <div className="flex items-center justify-between">
          <span>Items ({itemCount})</span>
          <span className="font-semibold text-[#142642]">
            {formatPrice(subtotal)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span className="font-semibold text-[#142642]">
            {formatPrice(shipping)}
          </span>
        </div>
        <div className="h-px bg-[#E2EAF3]" />
        <div className="flex items-center justify-between text-base">
          <span className="font-semibold text-[#142642]">Total</span>
          <span className="text-2xl font-bold text-[#0856AA]">
            {formatPrice(total)}
          </span>
        </div>
      </div>

      <button
        type="button"
        className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-[#0856AA] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#074b94]"
      >
        Proceed to Checkout
      </button>

      <Link
        href="/"
        className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-[#DCEAF7] px-6 py-4 text-sm font-semibold text-[#142642] transition hover:bg-[#F7FBFF]"
      >
        Continue shopping
      </Link>
    </aside>
  );
}
