import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  const decrement = () => {
    if(count > 0) setCount(prev => prev - 1);
    else alert('count wynosi 0 i nie mozemy go zmniejszac');
  };
  const increment = () => setCount(prev => prev + 1);
  
  const incrementSecondCount = () => setSecondCount(prev => prev + 1);

  useEffect(() => {
    console.log('zmiana count');
  }, [count]);

  return (
    <div className="counter">
      <button onClick={decrement}>-1</button>
      <button onClick={increment}>+1</button>
      <span>{count}</span>
      <p>druga zmienna: {secondCount}</p>
      <button onClick={incrementSecondCount}>Zwieksz druga zmienna</button>
    </div>
  );
}