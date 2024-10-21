import React from "react";
import { useCounter } from "../hooks/useCounter";

const CounterWithCustomHook = () => {
  const { counter, substractValue, addValue, resetValue } = useCounter(5);

  return (
    <div>
      <h1>Counter with Hook: {counter}</h1>

      <hr />

      {/* Necesito pasar un argumento por lo que uso una funcion anonima */}
      <button onClick={() => addValue(2)}>+1</button>
      <button onClick={resetValue}>Reset</button>
      <button onClick={substractValue}>-1</button>
    </div>
  );
};

export default CounterWithCustomHook;
