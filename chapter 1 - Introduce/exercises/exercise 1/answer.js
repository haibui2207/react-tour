import React, { Component } from 'react';

class App extends Component {
  state = { now: new Date().toLocaleTimeString() };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ now: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return <h1>{this.state.now}</h1>;
  }
}

export default App;
