import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Artist from "./pages/Artist";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/artists/:id" exact>
          <Artist />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
