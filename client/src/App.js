import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Join} />
        <Route exact path="/chat" component={Chat} />
      </Switch>
    </div>
  );
};

export default App;
