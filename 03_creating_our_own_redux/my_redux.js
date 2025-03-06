export function myCreateStore(reducer) {
  let state;
  const listeners = [];
  const store = {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      listeners.forEach((listener) => {
        listener();
      });
    },
    subscribe(listener) {
      // ------------------
      // this is for unsubsribe method
      listeners.push(listener);
      return function () {
        const listenerIndex = listeners.findIndex(
          (registeredListeners) => registeredListeners === listener
        );

        listeners.splice(listenerIndex, 1);
      };
      // -------------------
    },
  };
  store.dispatch({ type: "@@INIT" }); // initial type of redux
  return store;
}

// // That's set, this is our redux - offcourse not exact like real redux because in real redux there is so much more things like error handlings etc and more. But our work is done. We have created redux and methods like getState, dispatch, subscribe which are working the same way as redux
