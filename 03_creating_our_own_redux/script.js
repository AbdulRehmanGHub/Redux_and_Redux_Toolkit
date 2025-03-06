import { createStore } from "redux";
import { myCreateStore } from "./my_redux";

const postCountElement = document.querySelector(".post-count");

const initialState = {
  name: "Abdul",
  age: 24,
  post: 0,
};

let INCREMENT = "post/increment";
let DECREMENT = "post/decrement";
let INCREASE_BY = "post/increaseBy";
let DECREASE_BY = "post/decreaseBy";

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, post: state.post + 1 };
    case DECREMENT:
      return { ...state, post: state.post - 1 };
    case INCREASE_BY:
      return { ...state, post: state.post + action.payload };
    case DECREASE_BY:
      return { ...state, post: state.post - action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

// const store = createStore(reducer);
console.log(store);

// const myStore = myCreateStore(); // our redux
const myStore = myCreateStore(reducer);

console.log(myStore);

// // subscribe method
myStore.subscribe(() => {
  console.log(myStore.getState());
  postCountElement.textContent = myStore.getState().post;
});
// postCountElement.textContent = myStore.getState().post;

// // this will also run every time when state change, like increase/decrease etc. To avoid the repition we use unsubscribe method. Lets implement

// myStore.subscribe(() => {
//   console.log("hi this is redux");
// });

// // unsubscribe method
const unsubscribe1 = myStore.subscribe(() => {
  console.log(myStore.getState());
  console.log("hi this redux"); // now this will run only once and after that it is unsub

  postCountElement.textContent = myStore.getState().post;
});

postCountElement.textContent = myStore.getState().post;

const unsubscribe2 = myStore.subscribe(() => {
  console.log("unsub 2");
});

const unsubscribe3 = myStore.subscribe(() => {
  console.log("unsub 3");
});

myStore.dispatch({ type: INCREMENT }); // 1

unsubscribe1(); // we have called the unsubsribe1
unsubscribe2();
unsubscribe3();

myStore.dispatch({ type: INCREMENT }); // 2
myStore.dispatch({ type: INCREASE_BY, payload: 20 }); // 22
myStore.dispatch({ type: DECREASE_BY, payload: 10 }); // 12
myStore.dispatch({ type: "something", payload: 10 }); // 12, because something is not defined in reducer function.

// console.log(myStore.getState()); // myStore is working in this way, but we have implemented subscribe method also to avoid console.log again and again.

postCountElement.addEventListener("click", () => {
  myStore.dispatch({ type: INCREMENT }); // + 1
});
