"use client";

import CartEmptyState from "@/components/cart/CartEmptyState";
import CartItemsList from "@/components/cart/CartItemsList";
import CartPageHeader from "@/components/cart/CartPageHeader";
import CartSummaryCard from "@/components/cart/CartSummaryCard";
import { useCart } from "@/context/CartContext";

export default function CartPageContent() {
  const { cartItems, subtotal, itemCount, updateQuantity, removeFromCart } =
    useCart();
  const shipping = cartItems.length > 0 ? 15 : 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return <CartEmptyState />;
  }

  return (
    <main className="mx-auto flex w-full max-w-270 flex-1 flex-col gap-8 px-4 py-8 sm:px-8">
      <CartPageHeader itemCount={itemCount} />

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <CartItemsList
          cartItems={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
        />
        <CartSummaryCard
          itemCount={itemCount}
          subtotal={subtotal}
          shipping={shipping}
          total={total}
        />
      </section>
    </main>
  );
}
