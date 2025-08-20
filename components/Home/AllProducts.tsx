"use client";

import { getAllProducts } from "@/Request/Requests";
import { Product } from "@/typing";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const AllProducts = () => {
    const[products,setProducts]=useState<Product[]|null>(null);
    const[loading,setLoading]=useState(true);
    console.log(products);
    useEffect(()=>{
        const getData=async ()=>{
            setLoading(true);
            try{
                const products:Product[]=await getAllProducts();
                setProducts(products);
            }catch (error){
                console.log(error);
            }finally{
                setLoading(false);
            }
        };
        getData();
    },[]);

  return (
    <div className="pt-16 pb-12">
        <h1 className="flex items-center justify-center text-2xl lg:text-3xl xl:text-4xl font-bold text-black">All Products</h1>
        {loading ?(
            <div className="flex items-center justify-center">
                <Loader size={32} className="animate-spin"/>
            </div>
        ):(
            <div className="w-4/5 mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                {products?.map((product)=>{
                    return<ProductCard key={product.id} product={product}/>
                })}
            </div>
        )}
    </div>
  )
}
export default AllProducts