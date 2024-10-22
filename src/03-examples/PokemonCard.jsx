import React, { useLayoutEffect, useRef, useState } from "react";

const PokemonCard = ({ id, name, sprites = [] }) => {
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  const h2Ref = useRef();

  useLayoutEffect(() => {
    const { width, height } = h2Ref.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [id]);

  return (
    <>
      <h2 ref={h2Ref}>
        #{id} - {name}
      </h2>

      {/* Image */}
      {sprites.map((sprite, index) => {
        return (
          <img
            key={index}
            src={sprite}
            alt={name}
            style={{ width: "100px", height: "100px" }}
          />
        );
      })}
      <hr />
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
    </>
  );
};

export default PokemonCard;
