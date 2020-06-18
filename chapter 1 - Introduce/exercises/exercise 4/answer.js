import React from 'react';
import './App.css';

class App extends React.Component {
  state = { value: 'Hello world!' };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <h3>Input</h3>
        <label>Enter some text</label>
        <br />
        <textarea
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default App;
