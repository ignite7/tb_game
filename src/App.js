// React
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
//
// Components
import Layout from "./components/Layout";

// Pages
import Start from "./pages/Start";
import Game from "./pages/Game";
import End from "./pages/End";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/tb_start" component={Start} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/end" component={End} />
          <Redirect from="/" to="tb_start" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
