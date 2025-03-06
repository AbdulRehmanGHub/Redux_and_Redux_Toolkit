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

// // This whole function is new in here. All the other code are previous one.
// // With the help of this function we can create our own combineReducers.
// // This will work the same as redux combineReducers do.
function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);

  return function (state = {}, action) {
    const nextState = {};

    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      const reducer = reducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      nextState[key] = nextStateForKey;
    }

    return nextState;
  };
}

const reducer = combineReducers({
  products: ProductsReducer,
  cartItems: CartReducer,
  wishList: WishlistReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(store);

store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 1, quantity: 1 } }); // add item - id 1
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 3, quantity: 1 } });
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 9, quantity: 1 } });

store.dispatch({
  type: CART_REMOVE_ITEM,
  payload: { productId: 3 },
});

store.dispatch({
  type: CART_ITEM_INCREASE_QUANTITY,
  payload: { productId: 9 },
});

store.dispatch({
  type: CART_ITEM_DECREASE_QUANTITY,
  payload: { productId: 9 },
});

store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: { productId: 11 },
});

store.dispatch({
  type: WISHLIST_REMOVE_ITEM,
  payload: { productId: 11 },
});

console.log(store.getState());
