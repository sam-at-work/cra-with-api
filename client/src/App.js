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
        <p>Features:</p>
        <ul>
          <li>
            Server and client monorepo with
            <a href="https://yarnpkg.com/lang/en/docs/workspaces/">
              Yarn Workspaces.
            </a>
          </li>
          <li>
            Server and client deployed with{" "}
            <a href="https://zeit.co/now">Now</a>. The production build of CRA
            is served as static files from the same server as the API.
          </li>
          <li>
            Server code compiled with{" "}
            <a href="https://babeljs.io/docs/en/next">Babel 7</a>.
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
