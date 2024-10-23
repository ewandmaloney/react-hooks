import React from "react";

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span
          onClick={toggleTodo}
          className={`align-self-center ${
            todo.done ? "text-decoration-line-through" : ""
          }`}
        >
          {todo.desc}
        </span>
        <button className="btn btn-danger" onClick={deleteTodo}>
          Borrar
        </button>
      </li>
    </>
  );
};

export default TodoItem;
