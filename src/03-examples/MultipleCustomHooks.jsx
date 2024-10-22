import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import PokemonCard from "./PokemonCard";

const MultipleCustomHooks = () => {
  const { addValue, substractValue, counter } = useCounter(1);
  const { data, loading, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  console.log({
    data,
    loading,
    error,
  });

  return (
    <>
      <h1>Informacion de pokemon</h1>
      <hr />

      <p>Pokemon Info</p>

      {loading && <p>Loading...</p>}
      {data && (
        <PokemonCard
          key={data.id}
          id={data.id}
          name={data.name}
          //   Convertimos los sprites en un arreglo para mapearlos despues
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      )}

      <button onClick={() => addValue()}>Siguiente</button>
      <button onClick={substractValue}>Anterior</button>
    </>
  );
};

export default MultipleCustomHooks;
