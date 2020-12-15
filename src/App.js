// React
import { Fragment, useContext } from "react";

// Context
import ThemeContext from "./context/ThemeContext";

// Components
import Header from "./components/Header";
import Start from "./pages/Start";
import Footer from "./components/Footer";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <Fragment>
      <header className="header">
        <Header />
      </header>
      <main className="main">{!theme.goGame && <Start />}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
