// // We are creating the complete react-redux here. This will work the same way as in our previous part(09) where we use react-redux.

import { createContext, useContext, useEffect, useState } from "react";

const storeContext = createContext();

export function Provider({ store, children }) {
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    store.subscribe(() => {
      console.log(store.getState());
      setState(store.getState());
    });
  }, []);

  return (
    <storeContext.Provider value={{ state, dispatch: store.dispatch }}>
      {children}
    </storeContext.Provider>
  );
}

export const useDispatch = () => useContext(storeContext).dispatch;
export const useSelector = (selector) =>
  selector(useContext(storeContext).state);

// // we have make it in one line above
// export const useDispatch = () => {
//   const store = useContext(storeContext);
//   return store.dispatch;
// };

// // we have make it in one line
// export const useSelector = (selector) => {
//   const store = useContext(storeContext);
//   return selector(store.state);
// };
