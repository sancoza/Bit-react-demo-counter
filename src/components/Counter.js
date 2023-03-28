import React, { useEffect, useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);


  const onIncreaseCounter = () => {
    setCount((prev) => prev + 1);
  };
  const onDecreaseCounter = () => {
    setCount((prev) => prev - 1);
  };
  const componentWilUnmount=()=> {
    console.log('componentWillUnmount');
    console.log('Ovo se izvrsava samo kada se komponenta unmontuje!')
  }

  useEffect(() => {
    console.log('componentDidMount');
    return componentWilUnmount;
  }, []);

  //prazan ni -componentDidMount - api calls
  //niz sa promenljivom - componentDidUpdate samo  kad se count promeni
  //bez niza - comonentDidUpdate - kad se bilo šta promeni

  return (
    <div>
      <h1>Counter</h1>
      <div>
        <button onClick={onIncreaseCounter}>+</button>
        <span>{count}</span>
        <button onClick={onDecreaseCounter}>-</button>
      </div>
    </div>
  );
};
