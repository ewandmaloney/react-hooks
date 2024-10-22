import React, { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus screen</h1>
      <hr />
      {/* Tengo una referencia de mi input */}
      <input ref={inputRef} type="text" placeholder="Ingrese su nombre" />

      <button onClick={onClick}>Set Focus</button>
    </> 
  );
};

export default FocusScreen;
