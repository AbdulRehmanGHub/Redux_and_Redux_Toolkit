// // Previously we took example of BANK where a cashier(reducer) perform the defined actions(tasks/conditions) for customer/user like withdraw cash, deposit cash, check balance etc. And we also saw it(examples) with the of redux.

// // Now, imagine a big scenario like BANK have many departments MGT, Cashier, Collector, Distributor etc. And now if we are covering this big scenario and we will perform more actions(tasks/conditions), then there will be more reducers(cashier, mgt, collector, account etc) and more actions(tasks/conditions).

// // We will make separate reducer files for each reducer like in our case ProductsReducer, CartReducers etc and move/write their code within the file.

import { combineReducers, createStore } from "redux";
import { productsList } from "./productsData";
import {
  CART_ADD_ITEM,
  CART_ITEM_DECREASE_QUANTITY,
  CART_ITEM_INCREASE_QUANTITY,
  CART_REMOVE_ITEM,
  CartReducer,
} from "./CartReducer";
import {
  WISHLIST_ADD_ITEM,
  WISHLIST_REMOVE_ITEM,
  WishlistReducer,
} from "./WishlilstReducer";
import { ProductsReducer } from "./ProductsReducer";

const initialState = {
  products: productsList,
  cartItems: [],
  wishList: [],
};

// // As we cannot pass all the reducers at same time in a function, that's why redux gives us combineReducers function which helps us to combine the reducers at one place.
const reducer = combineReducers({
  products: ProductsReducer,
  cartItems: CartReducer,
  wishList: WishlistReducer,
});

// console.log(reducer);

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(store);

store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 1, quantity: 1 } }); // add item - id 1
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 3, quantity: 1 } });
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 9, quantity: 1 } });

store.dispatch({
  type: CART_REMOVE_ITEM,
  payload: { productId: 3 },
}); // remove item - id 3

store.dispatch({
  type: CART_ITEM_INCREASE_QUANTITY,
  payload: { productId: 9 },
}); // increase quantity - id 9 quantity will increase +1

store.dispatch({
  type: CART_ITEM_DECREASE_QUANTITY,
  payload: { productId: 9 },
}); // decrease quantity - id 9 quantity will decrease -1

store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: { productId: 11 },
}); // add wishlist - id 11 will add to wishlist

store.dispatch({
  type: WISHLIST_REMOVE_ITEM,
  payload: { productId: 11 },
}); // remove wishlist - id 11 will remove from wishlist

console.log(store.getState());
