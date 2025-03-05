// // createStore method is deprecated in redux but we are using only for learning purpose. Later on we will use Redux Toolkit.
import { createStore } from "redux";

const initialState = {
  name: "Abdul",
  age: 24,
  post: 0,
};

// function reducer(state = initialState, action) {
//   if (action.type === "post/increment") {
//     return { ...state, post: state.post + 1 };
//   } else if (action.type === "post/decrement") {
//     return { ...state, post: state.post - 1 };
//   } else if (action.type === "post/increaseBy") {
//     return { ...state, post: state.post + action.payload };
//   } else if (action.type === "post/decreaseBy") {
//     return { ...state, post: state.post - action.payload };
//   }
//   return state;
// }

// const store = createStore(reducer);
// console.log(store);

// console.log(store.getState()); // this will give undefined, that's why we need to give initial state above in func.

// store.dispatch({ type: "post/increment" });
// console.log(store.getState());

// store.dispatch({ type: "post/increment" });    // same as above
// console.log(store.getState());

// *** ---------------------------------------------- *** //

// // Now, the state is changing and properly working. But the problem is we need to console again and again to see the changes. We don't want that. There's comes an interesting feature/method of redux which is subscribe and we are going to use subscribe method now to avoid repetition of console.log().

// // we can put type value in some variables(for readability). Recommended to give these uppercase names like,
let INCREMENT = "post/increment";
let DECREMENT = "post/decrement";
let INCREASE_BY = "post/increaseBy";
let DECREASE_BY = "post/decreaseBy";

// // instead of if else, we can write switch case also
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

const store = createStore(reducer);
console.log(store);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: INCREMENT }); // 1
store.dispatch({ type: INCREMENT }); // 2
store.dispatch({ type: INCREASE_BY, payload: 20 }); // 22
store.dispatch({ type: DECREASE_BY, payload: 10 }); // 12
store.dispatch({ type: "something", payload: 10 }); // 12, because something is not defined in reducer function.

// // now we don't need to console again and again.
