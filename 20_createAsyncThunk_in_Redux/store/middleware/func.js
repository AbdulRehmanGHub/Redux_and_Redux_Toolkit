export const func = ({dispatch, getState}) => (next) => (action) => {
  if (type === "function") {
    action();
  } else {
    next(action);
  }
};
