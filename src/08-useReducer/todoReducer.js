export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.payload];

    case "[TODO] Delete Todo":
      return initialState.filter((todo) => todo.id !== action.payload);

    case "[TODO] Toggle Todo":
      return initialState.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, done: action.payload.done }
          : todo
      );

    default:
      return initialState;
  }
};
