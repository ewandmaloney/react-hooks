import React, { useEffect, useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "ewan",
    email: "ewan@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("Formstate changed");
  }, [formState]);

  useEffect(() => {
    console.log("Email changed");
  }, [email]);

  // useEffect(() => {
  //   first;

  //   // Cleanup
  //   return () => {
  //     second;
  //   };
  // }, [third]);

  return (
    <>
      <h1>Formulario Simple</h1>
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
      {username === "ewan2" && <Message />}
    </>
  );
};

export default SimpleForm;
