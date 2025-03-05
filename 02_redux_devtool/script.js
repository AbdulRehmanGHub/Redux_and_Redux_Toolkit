import { createStore } from "redux";

const postCountElement = document.querySelector(".post-count"); // selected post-count class from HTML

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

// // After installing redux devtool extension, we have to add __REDUX_DEVTOOLS_EXTENSION__(), to access the redux devtool extension properly. But there is an issue, it will work only on those browsers on which devtool is installed otherwise it will not work.
// const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__());

// we can fix this issue, by doing this - optional chaining
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

// const store = createStore(reducer);
console.log(store);

store.subscribe(() => {
  console.log(store.getState());
  postCountElement.textContent = store.getState().post;
});

// postCountElement.textContent = store.getState().post;

// // there is also an unsubscribe method in store which is used to stop the process of subscribe method.

store.dispatch({ type: INCREMENT }); // 1
store.dispatch({ type: INCREMENT }); // 2
store.dispatch({ type: INCREASE_BY, payload: 20 }); // 22
store.dispatch({ type: DECREASE_BY, payload: 10 }); // 12
store.dispatch({ type: "something", payload: 10 }); // 12, because something is not defined in reducer function.

// // change after every 3 seconds
// setTimeout(() => {
//   store.dispatch({ type: INCREMENT });
// }, 3000);

// // change on every click
postCountElement.addEventListener("click", () => {
  store.dispatch({ type: INCREMENT }); // 1
});
