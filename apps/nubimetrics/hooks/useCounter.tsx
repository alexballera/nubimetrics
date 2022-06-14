import { useState } from 'react';

// Ejemplo de custom hook
export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    return setCounter(counter + 1);
  };

  return { counter, increment };
};
