import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Clock />
      </div>
    );
  }
}

class Clock extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }

  state = {
    time: new Date()
  };
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>Hello world</h1>
        <h2 style={{ color: "blue" }}>
          It is {this.state.time.toLocaleTimeString()}.
        </h2>
      </div>
    );
  }
}

export default App;
