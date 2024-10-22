import React from "react";

const Small = ({ counter }) => {
  console.log("Me volví a llamar :(");
  return (
    <>
      <small>{counter}</small>
    </>
  );
};

export default Small;
