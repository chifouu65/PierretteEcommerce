import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find(item => item.id === action.payload.id)

            if (item) {
                item.quantity += action.payload.quantity++
            } else {
                state.products.push({...action.payload, quantity: action.payload.quantity})
            }
        },
        removeItem: (state, action) => {
            const item = state.products.find(item => item.id === action.payload.id)

            if (item.quantity > 1) {
                item.quantity--
            } else {
                state.products = state.products.filter(item => item.id !== action.payload.id)
            }
        },
        resetCart: (state) => {
            const newState = initialState
            state.products = newState.products
        },
    }
});

export const {addToCart, removeItem, resetCart} = cartSlice.actions

export default cartSlice.reducer