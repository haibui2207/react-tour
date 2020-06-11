import React, { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleDecrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div style={{ display: 'flex', padding: '15px' }}>
      <button onClick={handleDecrease}>-</button>
      <span style={{ display: 'block', margin: '0 10px' }}>{counter}</span>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default App;
