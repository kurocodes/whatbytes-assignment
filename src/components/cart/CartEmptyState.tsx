import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function CartEmptyState() {
  return (
    <main className="mx-auto flex w-full max-w-270 flex-1 flex-col px-4 py-10 sm:px-8">
      <section className="rounded-[28px] border border-[#DCEAF7] bg-white px-6 py-14 text-center shadow-sm sm:px-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF4FF] text-[#0856AA]">
          <ShoppingBag className="h-8 w-8" />
        </div>
        <h1 className="mt-6 text-3xl font-bold text-[#142642]">
          Your cart is empty
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-[#5F7896]">
          Add products from the catalog to review them here, adjust quantities,
          and continue to checkout.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-xl bg-[#0856AA] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#074b94]"
        >
          Continue shopping
        </Link>
      </section>
    </main>
  );
}
