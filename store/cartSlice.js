import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems:[],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        fetchCart: (state, action) => {
            state.cartItems = action.payload
        },
        addToCart: (state, action) => {
            console.log(action.payload.product.id)
            const index = state.cartItems.findIndex(p=>p.product.id===action.payload.product.id)
            console.log(index)
            if (index !== -1) {
                state.cartItems[index].quantity += 1;
            } else {
                const product = { ...action.payload, quantity: 1 }
                console.log(product)
                state.cartItems.push(product)
            }
         localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        removeFromCart: (state, action) => {
            const index = state.cartItems.findIndex(p=>p.product.id===action.payload.product.id)
            console.log(index)
            if (state.cartItems[index].quantity>1) {
                state.cartItems[index].quantity -= 1;
            } else {
                state.cartItems.splice(index, 1)
            }
        },
        removeProduct: (state, action) => {
            const index = state.cartItems.findIndex(p => p.product.id === action.payload.product.id)
            state.cartItems.splice(index, 1)
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        }
    }
})

export const { addToCart, removeFromCart, fetchCart, removeProduct } = cartSlice.actions

//Selectors
export const selectItems = (state) => state.cartItems
export const selectTotal = (state) => state.cart.cartItems.reduce((total, item) => (total, item.price), 0);

export default cartSlice.reducer;