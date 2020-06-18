import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [value, setValue] = useState('Hello world!');

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <div>
      <h3>Input</h3>
      <label>Enter some text</label>
      <br />
      <textarea onChange={handleChange} defaultValue={value} />
      <h3>Output</h3>
      <p>{value}</p>
    </div>
  );
};

export default App;
