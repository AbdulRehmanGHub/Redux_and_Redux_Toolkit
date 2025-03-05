// // Redux Intro - Concept
// // Redux is a state management tool that makes our complex state management work easy.

// // Reducer is called reducer because it takes 2 args(state, action) and return a result(1) after combining the whole.
// // Just like reduce method, which compressed the whole array elements and in result it provide only a compressed value.

// // Redux Example - BANK
// // From cashier, we(customer/user) can ask for few tasks(actions) like deposit cash, withdraw cash, check balance etc.
// // We can only ask for a specific tasks(actions) that are already defined.
// // If we ask something that is not defined(actions). Like we ask to cashier that, what is your bank password. This is not valid point(action). Similarly the Redux is working.

// // In the below example, we can consider bank as redux, cashier as reducer, and tasks(conditions) as actions.

let reduxState = {
  name: "Abdul",
  age: 24,
  post: 0,
};

// // Reducer - 2 args | state, action
function reducer(state, action) {
  if (action.type === "post/increment") {
    // increase by 1
    return { ...state, post: state.post + 1 };
  } else if (action.type === "post/decrement") {
    return { ...state, post: state.post - 1 }; // decrease by 1
  } else if (action.type === "post/incrementBy") {
    return { ...state, post: state.post + action.payload }; // increase by payload value (10)
  }

  // // if action type not matched then by default print this.
  return state;
}

// // Redux will do these

console.log(reduxState); // our object - initial state  // 0

reduxState = reducer(reduxState, { type: "post/increment" });
console.log(reduxState); // increase count  // 1

reduxState = reducer(reduxState, { type: "post/decrement" });
console.log(reduxState); // decrease count  // 0

reduxState = reducer(reduxState, { type: "post/decrement" });
console.log(reduxState); // decrease count   // -1

reduxState = reducer(reduxState, { type: "post/something" });
console.log(reduxState); // same state will return  // -1, because post/somehting is not defined in redux

reduxState = reducer(reduxState, { type: "newpost" });
console.log(reduxState); // same state will return  // -1, because newpost is not defined in redux

reduxState = reducer(reduxState, { type: "post/incrementBy", payload: 10 });
console.log(reduxState); // increase the value by payload value(10), but we have chose this by action.payload above.

