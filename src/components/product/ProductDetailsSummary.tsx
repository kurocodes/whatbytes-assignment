import type { Product } from "@/lib/types";
import { ShieldCheck, Truck } from "lucide-react";
import ProductDetailsActions from "./ProductDetailsActions";
import ProductRatingStars from "./ProductRatingStars";

export default function ProductDetailsSummary({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="rounded-[28px] border border-[#DCEAF7] bg-white p-6 shadow-sm sm:p-8">
      <p className="inline-flex rounded-full bg-[#E8F1FB] px-3 py-1 text-sm font-medium text-[#0856AA]">
        {product.category}
      </p>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#142642] sm:text-4xl">
        {product.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <ProductRatingStars rating={product.rating} />
        <p className="text-sm font-medium text-[#142642]">
          {product.rating.toFixed(1)} rating
        </p>
        <span className="text-[#B3C5D8]">|</span>
        <p className="text-sm text-[#5F7896]">
          {product.reviews} verified reviews
        </p>
      </div>

      <p className="mt-6 text-4xl font-bold text-[#0856AA]">${product.price}</p>

      <p className="mt-6 text-base leading-8 text-[#4F6785]">
        {product.description}
      </p>

      <div className="mt-8 grid gap-4 rounded-2xl bg-[#F6FAFE] p-5 sm:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7A93AF]">
            Category
          </p>
          <p className="mt-2 text-base font-semibold text-[#142642]">
            {product.category}
          </p>
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7A93AF]">
            Availability
          </p>
          <p className="mt-2 text-base font-semibold text-[#142642]">
            In stock
          </p>
        </div>
      </div>

      <div className="mt-8">
        <ProductDetailsActions product={product} />
      </div>

      <div className="mt-8 grid gap-4 rounded-2xl border border-[#E5EEF8] p-5 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-[#EAF4FF] p-2 text-[#0856AA]">
            <Truck className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold text-[#142642]">Fast shipping</p>
            <p className="mt-1 text-sm leading-6 text-[#5F7896]">
              Dispatch-ready packaging for quick doorstep delivery.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-[#EAF4FF] p-2 text-[#0856AA]">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold text-[#142642]">Secure checkout</p>
            <p className="mt-1 text-sm leading-6 text-[#5F7896]">
              Trusted purchase flow designed for a frictionless order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
