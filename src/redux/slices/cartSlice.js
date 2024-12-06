import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        // add items to cart
            addcartItems:(state,action)=>{
                state.push(action.payload)
            },
            removecarItems:(state,action)=>{
                return state.filter((item)=>item.id!=action.payload)
            },
            emptycart:(state)=>{
                return state=[]
            }
        

    }
})

export const {addcartItems,removecarItems,emptycart}=cartSlice.actions
export default cartSlice.reducer