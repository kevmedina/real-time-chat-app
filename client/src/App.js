import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/chat" component={Chat} />
      </Switch>
    </div>
  );
};

export default App;
