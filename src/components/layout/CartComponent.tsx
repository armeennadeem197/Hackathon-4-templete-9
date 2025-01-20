"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export default function CartComponent() {
  const { handleCartClick } = useShoppingCart();

  return (
    <Button
      variant={"outline"}
      onClick={() => handleCartClick()}
      className="flex items-center justify-center text-white "
    >
      <ShoppingBag />
    </Button>
  );
}
