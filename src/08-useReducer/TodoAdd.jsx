import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, resetForm } = useForm({
    description: "",
  });

  const onsubmit = (event) => {
    event.preventDefault();

    if (description === "" || description.length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    onNewTodo(newTodo);

    resetForm();

    console.log(newTodo);
  };

  return (
    <>
      <form onSubmit={(event) => onsubmit(event)}>
        <input
          type="text"
          placeholder="Ingresa el todo"
          className="form-control mb-2"
          name="description"
          value={description}
          onChange={(event) => onInputChange(event)}
        />

        <button className="btn btn-outline-primary" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
};

export default TodoAdd;
