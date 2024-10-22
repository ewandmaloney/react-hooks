import React, { useEffect, useState } from "react";

const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouse = ({ x, y }) => {
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", mouse);

    return () => {
      window.removeEventListener("mousemove", mouse);
    };
  }, []);

  useEffect(() => {
    console.log("Componente montado");

    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(coords)}
    </>
  );
};

export default Message;
