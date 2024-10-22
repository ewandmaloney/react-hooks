import React from "react";

// Memoriza el componente para evitar renderizados innecesarios
const ShowIncrement = React.memo(({ increment }) => {
  console.log("Me volví a generar :(");
  return (
    <>
      <button onClick={() => increment(5)}>Incrementar</button>
    </>
  );
});

export default ShowIncrement;
