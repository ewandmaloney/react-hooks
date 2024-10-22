import React from "react";
import { useForm } from "../hooks/useForm";

const FormCustomHook = () => {
  const { formState, onInputChange, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });

  return (
    <>
      <h1>Formulario Custom Hook</h1>
      <hr />

      <input
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={(event) => onInputChange(event)}
      />
      <input
        type="email"
        value={email}
        placeholder="Email"
        name="email"
        onChange={(event) => onInputChange(event)}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        name="password"
        onChange={(event) => onInputChange(event)}
      />
    </>
  );
};

export default FormCustomHook;
