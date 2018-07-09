import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    message: "Hello from React Component"
  };

  componentDidMount() {
    setTimeout(async () => {
      const data = await fetch("/api").then(res => res.json());
      this.setState(data);
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> § Welcome to CRA with API demo §</h1>
        </header>
        <p className="App-intro">{this.state.message}</p>
      </div>
    );
  }
}

export default App;
