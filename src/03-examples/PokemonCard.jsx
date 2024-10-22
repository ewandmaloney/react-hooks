import React from "react";

const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <>
      <h2>
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
    </>
  );
};

export default PokemonCard;
