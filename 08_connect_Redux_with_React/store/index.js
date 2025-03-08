import { combineReducers, createStore } from "redux";
import { productsList } from "./productsData";
import {
  cartAddItem,
  CartReducer,
  cartRemoveItem,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} from "./CartReducer";
import {
  addWishlistItem,
  removeWishlistItem,
  WishlistReducer,
} from "./WishlilstReducer";
import { ProductsReducer } from "./ProductsReducer";

const initialState = {
  products: productsList,
  cartItems: [],
  wishList: [],
};

const reducer = combineReducers({
  products: ProductsReducer,
  cartItems: CartReducer,
  wishList: WishlistReducer,
});

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
// console.log(store);

// // // When dispatching actions types/tasks, we need to write the kind of same code/lines again and again which makes our code more lengthy. To solve this issue we need to create function and put the same repition code in function and call whenever needed.

// // // * --------------------------------------- * // //

// // // // now we don't need to write this whole
// // store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 1, quantity: 1 } }); // add item - id 1
// // store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 3, quantity: 1 } });
// // store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 9, quantity: 1 } });

// // store.dispatch({
// //   type: CART_REMOVE_ITEM,
// //   payload: { productId: 3 },
// // });

// // store.dispatch({
// //   type: CART_ITEM_INCREASE_QUANTITY,
// //   payload: { productId: 9 },
// // });

// // store.dispatch({
// //   type: CART_ITEM_DECREASE_QUANTITY,
// //   payload: { productId: 9 },
// // });

// // store.dispatch({
// //   type: WISHLIST_ADD_ITEM,
// //   payload: { productId: 11 },
// // });

// // store.dispatch({
// //   type: WISHLIST_REMOVE_ITEM,
// //   payload: { productId: 11 },
// // });

// // // * ------------------------------------------- * // //

// // // * ------------------------------------------- * // //

// // // instead we can now perform the above action more easily

// // by default quantity is 1, but we can increase if we want. like this (1, 4), there 1 is productId and 4 is quantity

// store.dispatch(cartAddItem(1)); // add 1
// store.dispatch(cartAddItem(3));
// store.dispatch(cartAddItem(9));

// store.dispatch(cartRemoveItem(3)); // remove 3

// store.dispatch(increaseCartItemQuantity(9)); // increase quantity of 9
// store.dispatch(decreaseCartItemQuantity(9)); // decrease quantity of 9

// store.dispatch(addWishlistItem(11)); // add 11 to wishlist
// store.dispatch(removeWishlistItem(11)); // remove 11 from wishlist

// console.log(store.getState());

// // // now our code is more readable, less number of code, structured, and optimized.
