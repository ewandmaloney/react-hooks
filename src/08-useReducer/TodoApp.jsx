import React, { useEffect, useReducer } from "react";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";

const TodoApp = () => {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodo();

  return (
    <div>
      <h1>
        TodoApp: 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/* Todo add */}
          <TodoAdd onNewTodo={addTodo} />
          {/* fin todo add */}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
