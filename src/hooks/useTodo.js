import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodo = () => {
  const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: newTodo,
    };

    dispatch(action);
  };

  const deleteTodo = (todoId) => {
    const action = {
      type: "[TODO] Delete Todo",
      payload: todoId,
    };

    dispatch(action);
  };

  const toggleTodo = (todoId, newValue) => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: {
        id: todoId,
        done: newValue,
      },
    };

    dispatch(action);
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
  };
};
