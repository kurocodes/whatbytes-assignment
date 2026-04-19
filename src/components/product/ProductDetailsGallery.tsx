import type { Product } from "@/lib/types";
import Image from "next/image";

export default function ProductDetailsGallery({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="rounded-[28px] border border-[#DCEAF7] bg-white p-5 shadow-sm sm:p-7">
      <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#F6FAFE_0%,#ECF4FB_100%)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(8,86,170,0.10),transparent_38%)]" />
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.title}
            fill
            priority
            className="object-contain p-8 sm:p-12"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="mt-5 flex items-center gap-4 rounded-2xl border border-[#E5EEF8] bg-[#F9FCFF] p-4">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-[#DCEAF7] bg-white">
          <Image
            src={product.image}
            alt={`${product.title} thumbnail`}
            fill
            className="object-contain p-3"
            sizes="80px"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-[#142642]">
            Product Preview
          </p>
          <p className="mt-1 text-sm leading-6 text-[#5F7896]">
            Crisp product imagery with a spacious gallery layout built for this
            item detail view.
          </p>
        </div>
      </div>
    </div>
  );
}
