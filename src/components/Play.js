// React
import { Fragment, useContext } from "react";

// Context
import ThemeContext from "../context/ThemeContext";

// Icons
import { GoPlay } from "react-icons/go";

function Play() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleOnClick = () => {
    if (theme.username === "") {
      setTheme({ ...theme, error: "Insert a username please." });
    } else if (theme.username.length > 25) {
      setTheme({ ...theme, error: "Max length is 25 characters." });
    } else if (theme.username.length < 4) {
      setTheme({ ...theme, error: "Min length is 4 characters." });
    } else if (theme.level === "") {
      setTheme({ ...theme, error: "Select a level please." });
    } else {
      setTheme({ ...theme, goGame: true });
    }
  };

  return (
    <Fragment>
      {theme.showPlay && (
        <div className="start-play">
          <GoPlay
            onClick={handleOnClick}
            name="start"
            className="start-play__icon"
          />
        </div>
      )}
    </Fragment>
  );
}

export default Play;
