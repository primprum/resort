/* eslint-disable no-unused-vars */
// do you still need "import React from 'react' here?", yes you are, app will break without it. I've tried it.
import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/rooms">
        <Rooms />
      </Route>
      <Route exact path="/single-room">
        <SingleRoom />
      </Route>
    </Switch>
  );
}

export default App;
