import { useState } from "react";

export const useCounter = (initialValue = 20) => {
  const [counter, setCounter] = useState(initialValue);

  const firstValue = initialValue;

  const addValue = (value = 1) => {
    console.log(value);
    //Si mando un objeto vacio y hago un toString, me retorna un [object, Object] que es en lo que se me convertiria en el setCounter
    setCounter(counter + value);
  };
  const substractValue = () => {
    if (counter === 1) return;
    setCounter(counter - 1);
  };

  const resetValue = () => {
    setCounter(firstValue);
  };

  return {
    counter,
    addValue,
    substractValue,
    resetValue,
  };
};
