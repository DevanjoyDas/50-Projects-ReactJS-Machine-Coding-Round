import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
    cartArray : string[]
}

const initialState : InitialStateType = {
    cartArray : []
};

const CartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addProduct: (state,action:PayloadAction<string>)=>{
            state.cartArray.push(action.payload)
        },
        removeProduct : (state,action:PayloadAction<string>)=>{
            state.cartArray = state.cartArray.filter((eachId)=>{
                console.log(action.payload)
                console.log(eachId)
                return(
                    eachId !== action.payload
                )
            })
        }
    }
})

export const {addProduct,removeProduct} = CartSlice.actions;
export default CartSlice.reducer