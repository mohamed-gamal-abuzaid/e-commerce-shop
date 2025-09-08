"use client";
import { Button } from "@/components/ui/button"
import { addItem } from "@/store/cartSlice";
import { Product } from "@/typing";
import { useDispatch } from "react-redux";

type Props={
  product:Product;
}

const AddToCart = ({product}:Props) => {
  const dispatch = useDispatch();
  const addCartHandler = ()=>dispatch(addItem(product));
  return (
    <Button className="mt-6" onClick={()=>addCartHandler()}> Add to Cart</Button>
  )
}
export default AddToCart