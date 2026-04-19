import Image from "next/image";
import Link from "next/link";
import { Star, StarHalf } from "lucide-react";
import type { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  if (product.featured) {
    return <DetailedProductCard product={product} />;
  }
  return <NormalProductCard product={product} />;
}

function NormalProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl p-5 flex flex-col shadow-sm border border-gray-100 col-span-1 group">
      <Link
        href={`/product/${product.id}`}
        className="relative w-full aspect-square mb-4 flex items-center justify-center"
      >
        <div className="relative w-full h-full group-hover:scale-[1.03] transition-transform duration-300">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </Link>
      <div className="flex flex-col grow mt-2">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-medium text-[16px] text-gray-900 leading-snug mb-1 hover:text-[#0856AA] transition-colors">
            {product.title}
          </h3>
        </Link>
        <p className="font-bold text-[16px] text-gray-900 mb-4">
          ${product.price}
        </p>
        <button className="mt-auto w-full bg-[#0856AA] text-[15px] text-white py-2.5 rounded-lg font-medium hover:bg-[#074b94] transition-colors active:scale-[0.98]">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function DetailedProductCard({ product }: { product: Product }) {
  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 !== 0;
  const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

  return (
    <div className="bg-white rounded-xl p-6 md:p-5 flex flex-col md:flex-row gap-8 shadow-sm border border-gray-100 md:col-span-2 group">
      <Link
        href={`/product/${product.id}`}
        className="relative w-full md:w-[45%] flex items-center justify-center shrink-0"
      >
        <div className="relative w-full h-full min-h-[200px] md:min-h-[250px] group-hover:scale-[1.03] transition-transform duration-300">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </Link>

      <div className="flex flex-col justify-center grow">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-bold text-[28px] tracking-tight text-gray-900 mb-2 hover:text-[#0856AA] transition-colors">
            {product.title}
          </h3>
        </Link>
        <p className="font-bold text-xl text-gray-900 mb-2">${product.price}</p>

        <div className="flex items-center gap-1 mb-2 text-[#0856AA]">
          {Array.from({ length: fullStars }).map((_, i) => (
            <Star key={`full-${i}`} className="w-4 h-4 fill-current" />
          ))}
          {hasHalfStar && (
            <StarHalf key="half" className="w-4 h-4 fill-current" />
          )}
          {Array.from({ length: emptyStars }).map((_, i) => (
            <Star key={`empty-${i}`} className="w-4 h-4" />
          ))}
        </div>

        <p className="text-gray-700 text-[15px] leading-relaxed mb-3 max-w-sm">
          {product.description}
        </p>

        <div className="mb-3 space-y-1">
          <p className="text-[15px] font-medium text-gray-900">Category</p>
          <p className="text-[15px] text-gray-600">{product.category}</p>
        </div>

        <button className="bg-[#0856AA] text-white text-[15px] py-3.5 px-6 rounded-lg font-medium hover:bg-[#074b94] transition-colors mt-auto w-full md:w-auto md:min-w-[200px] active:scale-[0.98]">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
