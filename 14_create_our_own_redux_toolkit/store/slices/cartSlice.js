import { myCreateSlice } from "../../redux-toolkit";

// // Redux Toolkit
const findItemIndex = (state, action) =>
  state.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId
  );

// // we have removed the slice method from redux toolkit. We are going to create our own createSlice method. I have created another file redux-toolkit for it, created and imported from here.

const mySlice = myCreateSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      if (existingItemIndex !== -1) state[existingItemIndex].quantity += 1;
      else state.push({ ...action.payload, quantity: 1 });
    },

    removeCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state.splice(existingItemIndex, 1);
    },

    increaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state[existingItemIndex].quantity += 1;
    },

    decreaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state[existingItemIndex].quantity -= 1;
      if (state[existingItemIndex].quantity === 0)
        state.splice(existingItemIndex, 1);
    },
  },
});

// console.log(mySlice);

// // action creators
export const {
  addCartItem,
  removeCartItem,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} = mySlice.actions;

// console.log(addCartItem());
// 'cart/addCartItem'.split("/")[1]   // take first index value like addCartItem, removeCartItem etc.

export default mySlice.reducer;
