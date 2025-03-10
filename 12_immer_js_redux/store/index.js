import { combineReducers, createStore } from "redux";
import productsReducer from "./slices/productsReducer";
import cartReducer from "./slices/cartReducer";
import wishListReducer from "./slices/wishListReducer";

// import { produce } from "immer";

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

const users = [
  {
    name: "Abdul",
    age: 24,
    country: "Pakistan",
  },
  {
    name: "Abhijit",
    age: 20,
    country: "India",
  },
  {
    name: "Martin",
    age: 30,
    country: "Australia",
  },
];

// // // original array
// console.log(users[1]);    // age 20

// // // method 1 - this will change age in original array also
// users[1].age = 18;
// console.log(users[1]);    // age 18

// // // method 2 - this will not change the original array
// const modifiedUsers = users.map((user, i) => {
//   if (i === 1) {
//     return { ...user, age: 15 };
//   }
//   return user;
// });

// console.log(modifiedUsers);
// console.log(users);

// // but these methods like map, forEach and others are very lengthy and complicated. There's comes the immer js in action which makes our work easy.

// // Immer JS -- produce method with array name and callback function in which we write what to change. This is also performance wise better than map because in loops there is a check on every index but here only the change thing will effect.

// const newUsers = produce(users, (usersCopy) => {
//   usersCopy[1].age = 10;
// });

// console.log(users); // 20
// console.log(newUsers); // 10
// console.log(users); // 20


// // Now, let's apply immer js in our code like cartSlice etc to optimize, reduce our code.