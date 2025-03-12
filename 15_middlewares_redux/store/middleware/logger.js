// // * --- Currying function --- *
// // Currying is used in JavaScript to break down complex function calls into smaller, more manageable steps. It transforms a function with multiple arguments into a series of functions, each taking a single argument.
// // link: https://www.geeksforgeeks.org/what-is-currying-function-in-javascript/

// // Normal Function
// function add(a, b) {
//     return a + b;
// }
// console.log(add(2, 3));

// // Function Currying
// function add(a) {
//   return function(b) {
//       return a + b;
//   }
// }

// const addTwo = add(5);  // First function call with 5
// console.log(addTwo(4));

// // here we will do middlewares
// // middleware is using the currying function method.

// function logger(store) {
//   return function (next) {
//     return function (action) {
//       console.log("store: ", store);
//       console.log("next: ", next);
//       console.log("action: ", action);
//       next(action);
//     };
//   };
// }

// // using Arrow Function - for readability

export const logger = (store) => (next) => (action) => {
//   console.log("store: ", store);
//   console.log("next: ", next);
//   console.log("action: ", action);
  next(action);
};
