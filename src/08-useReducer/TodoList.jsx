import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo, i) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={() => deleteTodo(todo.id)}
            toggleTodo={() => toggleTodo(todo.id, !todo.done)}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
