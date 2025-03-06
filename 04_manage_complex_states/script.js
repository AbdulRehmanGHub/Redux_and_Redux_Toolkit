import { createStore } from "redux";
import { productsList } from "./productsData";

const initialState = {
  products: productsList,
  cartItems: [],
  wishList: [],
};

let CART_ADD_ITEM = "cart/addItem";
let CART_REMOVE_ITEM = "cart/removeItem";
let CART_ITEM_INCREASE_QUANTITY = "cart/itemIncreaseQuantity";
let CART_ITEM_DECREASE_QUANTITY = "cart/itemDecreaseQuantity";

let WISHLIST_ADD_ITEM = "wishlist/addItem";
let WISHLIST_REMOVE_ITEM = "wishlist/removeItem";

function reducer(state = initialState, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.productId !== action.payload.productId
        ),
      };
    case CART_ITEM_INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        }),
      };
    case CART_ITEM_DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems
          .map((cartItem) => {
            if (cartItem.productId === action.payload.productId) {
              return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
            return cartItem;
          })
          .filter((cartItem) => cartItem.quantity > 0), // this will remove the item if quantity is less than 0
      };
    case WISHLIST_ADD_ITEM:
      return { ...state, wishList: [...state.wishList, action.payload] };
    case WISHLIST_REMOVE_ITEM:
      return {
        ...state,
        wishList: state.wishList.filter(
          (wishListItem) => wishListItem.productId !== action.payload.productId
        ),
      };
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(store);

store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 1, quantity: 1 } }); // add item - id 1
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 3, quantity: 1 } });
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 5, quantity: 1 } });
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 9, quantity: 1 } });

store.dispatch({
  type: CART_REMOVE_ITEM,
  payload: { productId: 5 },
}); // remove item - id 5

store.dispatch({
  type: CART_ITEM_INCREASE_QUANTITY,
  payload: { productId: 9 },
}); // increase quantity - id 9 quantity will increase +1

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
  type: WISHLIST_ADD_ITEM,
  payload: { productId: 8 },
}); // add wishlist - id 8 will add to wishlist

store.dispatch({
  type: WISHLIST_REMOVE_ITEM,
  payload: { productId: 11 },
}); // remove wishlist - id 11 will remove from wishlist

// // IMPORTANT NOTE
// // Our logic and redux is working fine and perfectly, but we noticed that our code is increasing more and if we add more actions, types etc then this will increase more. Which is not good.
// // So, we can make different different reducers for different parts which will make our work easy and readable also. Like if we create a cart then there will be a separate cart reducer which will only handle cart things and so on.
