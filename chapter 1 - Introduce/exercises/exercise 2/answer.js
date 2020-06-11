import React, { Component } from 'react';

class App extends Component {
  state = { counter: 0 };

  handleIncrease = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  handleDecrease = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };

  render() {
    return (
      <div style={{ display: 'flex', padding: '15px' }}>
        <button onClick={this.handleDecrease}>-</button>
        <span style={{ display: 'block', margin: '0 10px' }}>
          {this.state.counter}
        </span>
        <button onClick={this.handleIncrease}>+</button>
      </div>
    );
  }
}

export default App;
