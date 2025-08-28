import { createSlice,PayloadAction } from "@reduxjs/toolkit";


export interface CartItem{

    id:number;
    title:string;
    price:number;
    category:string;
    image:string;
    rating:{
        rate:number;
        count:number;
    };
    quantity:number
} 



export interface CartState{
    items:CartItem[];
}


const initialState:CartState={
    items:[],
}

const cartSlice =createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem:(state,action:PayloadAction<Omit<CartItem,"quantity">>)=>{
            const existingItem = state.items.find(
                (item)=>item.id===action.payload.id
            );
        },
    },
})