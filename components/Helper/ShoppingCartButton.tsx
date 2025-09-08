"use client";

import { ShoppingBagIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import CartSidebar from "./CartSidebar";

const ShoppingCartButton = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Sheet>
      {/* ✅ Use asChild to avoid nested <button> */}
      <SheetTrigger asChild>
        <div className="relative cursor-pointer">
          {totalQuantity > 0 && (
            <span className="absolute -top-3 -right-2 w-6 h-6 bg-red-500 flex items-center justify-center text-xs text-white rounded-full">
              {totalQuantity}
            </span>
          )}
          <ShoppingBagIcon size={26} />
        </div>
      </SheetTrigger>

      <SheetContent className="overflow-auto h-full">
        <SheetTitle className="text-center pt-6 lg:text-3xl md:text-2xl sm:text-xl text-3xl">
          My Cart
        </SheetTitle>
        <span className="block m-2 mx-auto w-4/5 border-b-[1.6px] border-b-gray-700" />
        <CartSidebar items={items} />
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartButton;
