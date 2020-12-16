// React
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//
// Components
import Layout from "./components/Layout";

// Pages
import Start from "./pages/Start";
import Game from "./pages/Game";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/game" component={Game} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
