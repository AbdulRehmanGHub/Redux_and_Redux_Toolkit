Slices in Redux
    -- Slices are basically the reducers which we are creating in our redux and combine with combineReducers function.

Example:

``` javascript
const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

```


In the above example, we have combineReducer function in which there are three reducers combined. The key of these reduers like products, cartItems, wishList are slices.
Then we have added the combinedReducer function in our store and that's it. Our store has now included three slices/reducers.

We have also created a separate slices folder for our all slices which will make our code more optimized and readable.