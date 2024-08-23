import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false,
    productCount: 0,
    isProductAdded: false,
};

export const addtoCart = createAsyncThunk(
    "cart/addtoCart",
    async (payload) => {

        console.log('addtoCart sl')
        let cart = localStorage.getItem("cart");
        cart = JSON.parse(cart)
        if (cart !== null) {
            const index = cart.findIndex((product) => product.id === payload.id);
            if (index !== -1) {
                cart[index].quantity++;
            } else {
                cart.push({ ...payload, quantity: 1 });
            }
        } else {
            cart = [{ ...payload, quantity: 1 }]
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        // return payload;
        return cart;
    }
);

export const clearCartItems = createAsyncThunk(
    "cart/clearCartItems",
    async (payload) => {
        
        console.log('clearCartItems')
        localStorage.removeItem("cart");
        return []
    }
)

// export const updateCartItem = createAsyncThunk(
//     "cart/updateCartItem",
//     async (id, operationType) => {

//         let cart = localStorage.getItem("cart");
//         cart = JSON.parse(cart);
//         const selectedProduct = cart.find((product) => {
//             if (product.id === id) {
//                 return product;
//             }

//         })

//         if (operationType === "increment") {
//             selectedProduct.quantity = selectedProduct.quantity + 1;
//         }
//         else {
//             selectedProduct.quantity = selectedProduct.quantity - 1;
//         }

//         const index = cart.findIndex((product) => product.id === id);
//         cart[index] = selectedProduct;
//         return cart;

// const res = await updateAnswerAPI(payload);
// return res.data;
//     }
// );

export const updateCartItem = createAsyncThunk(
    "cart/updateCartItem",
    async ({ id, operationType }) => {
        let cart = JSON.parse(localStorage.getItem("cart"));
        const index = cart.findIndex((product) => product.id === id);

        if (index !== -1) {
            if (operationType === "increment") {
                cart[index].quantity += 1;
            } else if (operationType === "decrement" && cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            }
            localStorage.setItem("cart", JSON.stringify(cart));
        }

        return cart;
    }
);


export const getCartItems = createAsyncThunk(
    "cart/getCartItems",
    async (payload) => {
        let cart = localStorage.getItem("cart");
        if (cart !== null) {
            cart = JSON.parse(cart)
        }
        else {
            cart = [];
        }
        return cart;
        // const res = await updateAnswerAPI(payload);
        // return res.data;
    }
);


const cartSlice = createSlice({
    name: "cart",
    initialState,
    extraReducers: (builder) => {
        //add user
        builder.addCase(addtoCart.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(addtoCart.fulfilled, (state, action) => {
            console.log('action', action)
            if (state.products.length > 0) {
                state.products.push(action.payload);
            } else {
                state.products = [action.payload];
                console.log('state.products', state.products)
            }

            state.productCount = state.productCount + 1;
            state.isProductAdded = true;
            state.loading = false;
        });
        builder.addCase(addtoCart.rejected, (state, action) => {

            state.isProductAdded = false;
            state.loading = false;

        });

        //delete user
        builder.addCase(updateCartItem.pending, (state, action) => {

            state.loading = true;
        });
        builder.addCase(updateCartItem.fulfilled, (state, action) => {
            let sum = 0;
            const cart = action.payload
            for (let i = 0; i < cart.length; i++) {
                sum += cart[i].quantity;
            }
            // state.products = cart;
            // state.productCount = sum
            // state.loading = false;

            state.products = action.payload;
            state.productCount = action.payload.reduce((sum, item) => sum + item.quantity, 0);
            state.loading = false;

        });
        builder.addCase(updateCartItem.rejected, (state, action) => {

            state.loading = false;
        });


        builder.addCase(getCartItems.pending, (state, action) => {

            state.loading = true;
        });
        builder.addCase(getCartItems.fulfilled, (state, action) => {
            state.products = action.payload;

            state.loading = false;

        });
        builder.addCase(getCartItems.rejected, (state, action) => {

            state.loading = false;
        });
        builder.addCase(clearCartItems.pending, (state, action) => {

            state.loading = true;
        })
        builder.addCase(clearCartItems.fulfilled, (state, action) => {
            state.products = [];
        })
        builder.addCase(clearCartItems.rejected, (state, action) => {
            state.loading = false;
        })
    },
});

export default cartSlice.reducer;
