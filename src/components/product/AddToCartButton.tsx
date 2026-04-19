"use client";

import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/types";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function AddToCartButton({
  product,
  quantity = 1,
  className,
  showIcon = false,
}: {
  product: Product;
  quantity?: number;
  className: string;
  showIcon?: boolean;
}) {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  function handleAddToCart() {
    addToCart(product, quantity);
    setJustAdded(true);

    window.setTimeout(() => {
      setJustAdded(false);
    }, 1200);
  }

  return (
    <button type="button" onClick={handleAddToCart} className={`${className} cursor-pointer`}>
      {showIcon ? <ShoppingCart className="h-5 w-5" /> : null}
      {justAdded ? "Added to Cart" : "Add to Cart"}
    </button>
  );
}
