import React from 'react';
import './App.css';

class App extends React.Component {
  state = { items: [], text: '' };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState((prevState) => ({ ...prevState, text: value }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: '',
    }));
  };

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">What needs to be done?</label>
          <br />
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }
}

const TodoList = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>{item.text}</li>
    ))}
  </ul>
);

export default App;
