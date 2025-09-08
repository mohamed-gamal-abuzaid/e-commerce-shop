import { addItem, CartItem, removeItem } from "@/store/cartSlice";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";
import { useDispatch } from "react-redux";

type Props = {
  items: CartItem[];
};

const CartSidebar = ({ items }: Props) => {
  const dispatch = useDispatch();
  const addCartHandler = (item: CartItem) => dispatch(addItem(item));
  const removeCartHandler = (id: number) => dispatch(removeItem({ id }));

  return (
    <div className="mt-6 h-full mb-6 mx-4">
      {items.length === 0 && (
        <div className="flex items-center w-full h-[80vh] flex-col justify-center">
          <Image
            src={"/images/cart.svg"}
            alt="empty cart"
            width={200}
            height={200}
            className="mx-auto object-cover"
          />
          <h1 className="mt-8 text-2xl font-semibold">Your Cart is Empty</h1>
        </div>
      )}

      {items.length > 0 && (
        <div>
          {items.map((item) => (
            <div
              key={item.id}
              className="pb-4 border-b-2 border-gray-300 border-opacity-60 p-4"
            >
              <div>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="mb-4 object-cover"
                />
              </div>
              <div>
                <h1 className="w-4/5 text-sm font-semibold truncate">
                  {item.title}
                </h1>
                <h1 className="text-base text-blue-950 font-bold">
                  {(item.price * item.quantity).toFixed(2)}
                </h1>
                <h1 className="text-base font-bold mb-2">
                  Quantity : {item.quantity}
                </h1>
                <div className="flex items-center space-x-4">
                  <Button
                    onClick={() => removeCartHandler(item.id)}
                    size={"sm"}
                    variant={"destructive"}
                  >
                    Remove
                  </Button>
                  <Button onClick={() => addCartHandler(item)} size={"sm"}>
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}

          <SheetClose asChild>
            <Link href="/cart">
              <Button className="w-full mb-6 mt-6">View All Cart</Button>
            </Link>
          </SheetClose>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
