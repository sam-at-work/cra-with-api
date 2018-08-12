import React from "react";
import { Route, Link } from "react-router-dom";

import App from "./App";

let Router;
if (process.env.REACT_APP_GH_PAGES) {
  Router = require("react-router-dom").HashRouter;
} else {
  Router = require("react-router-dom").BrowserRouter;
}

const BasicExample = () => (
  <Router>
    <div>
      <p>
        <code>process.env.PUBLIC_URL</code> is{" "}
        <code>{process.env.PUBLIC_URL}</code>
      </p>
      <p>
        <code>process.env.REACT_APP_GH_PAGES</code> is{" "}
        <code>{process.env.REACT_APP_GH_PAGES}</code>
      </p>
      <p>
        <code>Router</code> is{" "}
        <code>
          {process.env.REACT_APP_GH_PAGES ? "HashRouter" : "BrowserRouter"}
        </code>
      </p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/cra">Create React App</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path="/cra" component={App} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default BasicExample;