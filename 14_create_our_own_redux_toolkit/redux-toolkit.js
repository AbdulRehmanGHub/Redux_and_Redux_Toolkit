import { produce } from "immer";

export function myCreateSlice(config) {
  const { name, initialState, reducers } = config;

  // // This code is creating action creators and action types
  const actions = {};
  console.log(config);
  // console.log(reducers);

  Object.keys(reducers).forEach(
    (key) =>
      (actions[key] = function (payload) {
        return {
          type: `${name}/${key}`,
          payload,
        };
      })
  );

  // // This code is creating reducers
  function reducer(originalState = initialState, action) {
    return produce(originalState, (state) => {
      const caseReducer = reducers[action.type.split("/")[1]];
      if (caseReducer) {
        return caseReducer(state, action);
      }
      return state;
    });
  }
  return { actions, reducer };
}
