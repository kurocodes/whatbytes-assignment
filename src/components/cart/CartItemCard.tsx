"use client";

import type { CartItem } from "@/lib/types";
import { formatPrice } from "@/lib/cart";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CartQuantityControl from "./CartQuantityControl";

export default function CartItemCard({
  item,
  onUpdateQuantity,
  onRemove,
}: {
  item: CartItem;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}) {
  return (
    <article className="grid gap-5 rounded-[28px] border border-[#DCEAF7] bg-white p-5 shadow-sm sm:grid-cols-[120px_minmax(0,1fr)] sm:p-6">
      <Link
        href={`/product/${item.id}`}
        className="relative mx-auto aspect-square w-full max-w-30 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#F6FAFE_0%,#ECF4FB_100%)]"
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-contain p-4"
          sizes="120px"
        />
      </Link>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link
              href={`/product/${item.id}`}
              className="text-xl font-semibold text-[#142642] transition hover:text-[#0856AA]"
            >
              {item.title}
            </Link>
            <p className="mt-2 text-sm text-[#5F7896]">
              Category: {item.category}
            </p>
          </div>
          <p className="text-xl font-bold text-[#0856AA]">
            {formatPrice(item.price * item.quantity)}
          </p>
        </div>

        <p className="text-sm leading-6 text-[#5F7896]">{item.description}</p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CartQuantityControl
            title={item.title}
            quantity={item.quantity}
            onDecrease={() => onUpdateQuantity(item.id, item.quantity - 1)}
            onIncrease={() => onUpdateQuantity(item.id, item.quantity + 1)}
          />

          <button
            type="button"
            onClick={() => onRemove(item.id)}
            className="inline-flex items-center gap-2 self-start rounded-xl border border-[#E2EAF3] px-4 py-2.5 text-sm font-medium text-[#C24646] transition hover:border-[#F1D5D5] hover:bg-[#FFF5F5]"
          >
            <Trash2 className="h-4 w-4" />
            Remove item
          </button>
        </div>
      </div>
    </article>
  );
}
