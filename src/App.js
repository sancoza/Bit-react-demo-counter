import './App.css';
import { Counter } from './components/Counter';
import { useState } from 'react';

function App() {
  const [showCounter, setShowCounter] = useState(true);

  const onToggleCounter = () => {
    setShowCounter((prev) => !prev);
  };
  return (
    <>
      <button onClick={onToggleCounter}>Remove - Show Counter</button>
      {showCounter && <Counter />}
    </>
  );
}

export default App;
