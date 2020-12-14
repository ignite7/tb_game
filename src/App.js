// React
import { Fragment, useState, useRef } from "react";

// Components
import Header from "./components/Header";
import Start from "./components/Start";
import Footer from "./components/Footer";

function App() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState({ message: "", statusError: false });
  const [nextStep, setNextStep] = useState(false);
  const refUsername = useRef("");

  const handleOnChange = () => {
    setUsername(refUsername.current.value);
  };

  const handleOnClick = () => {
    cleanData() ? setNextStep(true) : setNextStep(false);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  const cleanData = () => {
    if (username === "") {
      setError({ message: "Insert a username please.", statusError: true });
      return false;
    } else if (username.length > 25) {
      setError({ message: "Max length is 25 characters.", statusError: true });
      return false;
    } else if (username.length < 4) {
      setError({ message: "Min length is 4 characters.", statusError: true });
      return false;
    }
    return true;
  };

  return (
    <Fragment>
      <header className="header">
        <Header />
      </header>
      <main className="main">
        {!nextStep && (
          <Start
            refUsername={refUsername}
            onChange={handleOnChange}
            onSubmit={handleOnSubmit}
            onClick={handleOnClick}
            error={error}
          />
        )}
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
