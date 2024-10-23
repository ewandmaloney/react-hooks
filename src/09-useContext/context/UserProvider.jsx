import React, { useState } from "react";
import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const changeUser = () => {
    setUser({
      id: Date.now(),
      name: "Obiwan",
    });
  };

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
