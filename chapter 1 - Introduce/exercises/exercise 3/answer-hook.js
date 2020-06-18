import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [state, setState] = useState({ items: [], text: '' });

  const handleChange = (e) => {
    setState({ ...state, text: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.text.length === 0) {
      return;
    }
    const newItem = {
      text: state.text,
      id: Date.now(),
    };
    setState({
      items: state.items.concat(newItem),
      text: '',
    });
  };

  return (
    <div>
      <h3>TODO</h3>
      <TodoList items={state.items} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">What needs to be done?</label>
        <br />
        <input id="new-todo" onChange={handleChange} value={state.text} />
        <button>Add #{state.items.length + 1}</button>
      </form>
    </div>
  );
};

const TodoList = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>{item.text}</li>
    ))}
  </ul>
);

export default App;
