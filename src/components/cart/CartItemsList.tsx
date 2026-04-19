"use client";

import type { CartItem } from "@/lib/types";
import CartItemCard from "./CartItemCard";

export default function CartItemsList({
  cartItems,
  onUpdateQuantity,
  onRemove,
}: {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}) {
  return (
    <div className="space-y-4">
      {cartItems.map((item) => (
        <CartItemCard
          key={item.id}
          item={item}
          onUpdateQuantity={onUpdateQuantity}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}
