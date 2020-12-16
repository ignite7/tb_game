// React
import React, { Fragment, useContext } from "react";

// Context
import AppContext from "./context/AppContext";

// Components
import Header from "./components/Header";
import Start from "./pages/Start";
import Footer from "./components/Footer";

function App() {
  const { state } = useContext(AppContext);

  return (
    <Fragment>
      <header className="header">
        <Header />
      </header>
      <main className="main">{!state.goGame && <Start />}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
