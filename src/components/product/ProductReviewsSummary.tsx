import { getRatingDistribution } from "@/lib/product-details";
import type { Product } from "@/lib/types";
import ProductRatingStars from "./ProductRatingStars";

export default function ProductReviewsSummary({
  product,
}: {
  product: Product;
}) {
  const ratingDistribution = getRatingDistribution(
    product.rating,
    product.reviews,
  );

  return (
    <section className="rounded-[28px] border border-[#DCEAF7] bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7A93AF]">
            Reviews
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#142642]">
            Customer rating overview
          </h2>
        </div>
        <p className="text-sm text-[#5F7896]">
          Based on {product.reviews} submitted ratings for this product.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        <div className="rounded-3xl bg-[#F6FAFE] p-6 text-center">
          <p className="text-5xl font-bold text-[#142642]">
            {product.rating.toFixed(1)}
          </p>
          <div className="mt-4 flex justify-center">
            <ProductRatingStars rating={product.rating} />
          </div>
          <p className="mt-4 text-sm leading-6 text-[#5F7896]">
            Shoppers consistently rate this product highly for quality and
            overall value.
          </p>
        </div>

        <div className="space-y-4">
          {ratingDistribution.map((entry) => {
            const percentage =
              product.reviews === 0 ? 0 : (entry.count / product.reviews) * 100;

            return (
              <div
                key={entry.label}
                className="grid grid-cols-[72px_minmax(0,1fr)_52px] items-center gap-4"
              >
                <span className="text-sm font-medium text-[#3F5F82]">
                  {entry.label}
                </span>
                <div className="h-2 overflow-hidden rounded-full bg-[#E4EEF8]">
                  <div
                    className="h-full rounded-full bg-[#0856AA]"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-right text-sm text-[#5F7896]">
                  {entry.count}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
