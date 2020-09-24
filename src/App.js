import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Result from "./Pages/Result";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Pages/About";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          {/* Results Page */}
          <Route path="/search">
            {/* <Result /> */}
            <Result />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* Home Page */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* Error Page */}
          <Route>
            <h1>Wrong Page</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
