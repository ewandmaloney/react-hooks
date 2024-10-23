import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

const LoginPage = () => {
  const { user, changeUser } = useContext(UserContext);

  return (
    <div>
      <h1>From LoginPage - {user?.name}</h1>
      <button onClick={changeUser}>Mostrar user</button>
    </div>
  );
};

export default LoginPage;
