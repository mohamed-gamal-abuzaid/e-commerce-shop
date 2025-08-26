import { getProduct,getCategory } from "@/Request/Requests";
import { Product } from "@/typing";
import Image from "next/image";
import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button"


const ProductDetails = async ({params}:{params :{id:string}}) => {

    const id=params.id;
    const product:Product = await getProduct(id);
    const category:Product[] = await getCategory(product.category);
    const num = Math.round(product.rating.rate);
    const ratingArray = new Array(num).fill(0);
  return (
    <div className="mt-20 mx-auto">
        <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4">
            <div className="col-span-3 mb-6 lg:mb-0">
                <Image src={product.image} alt={product.title} width={400} height={400} className="w-[80%] h-[80%] object-contain"/>
            </div>
            <div className="col-span-3 mb-6 lg:mb-0">
            <h1 className="lg:text-3xl text-2xl text-black font-bold">{product.title}</h1>
            <div className="mt-2 flex items-center space-x-2">
                <div className="flex items-center">
                    {ratingArray.map((star)=>{
                        return(
                            <StarIcon
                            key={Math.random()*1000}
                            size={20}
                            fill="yellow"
                            className="text-yellow-500"
                            />
                        );  
                    })}
                    <span className="ml-2">({product?.rating?.count}) Reviews</span>
                </div>
            </div>
            <span className="h-[1.6px] w-2/5 bg-slate-500 block opacity-20 mb-4 mt-4"></span>
            <h1 className="text-blue-950 font-bold text-3xl lg:text-6xl md:text-4xl">{`$${(product?.price).toFixed(2)}`}</h1>
            <p className="mt-4 text-base opacity-70">{product?.description}</p>
            <div className="font-semibold my-4">
                <div > Category : {product.category}</div>
                <div> Tag : Mix Shop</div>
                <div> SKU :564227632458</div>
            </div>
            <Button size={"sm"} className="bg-gray-900 mb-4 text-lg p-1.5">
                Add to Cart
            </Button>
            </div>
        </div>
        
    </div>
  )
}
export default ProductDetails