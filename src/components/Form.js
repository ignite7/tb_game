// React
import { useContext, useRef } from "react";

// Context
import ThemeContext from "../context/ThemeContext";

function Form() {
  const { theme, setTheme } = useContext(ThemeContext);
  const refUsername = useRef("");

  const handleOnChange = () => {
    setTheme({
      ...theme,
      username: refUsername.current.value,
      showDifficultLevel: true,
    });
  };

  return (
    <div className="start-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          onChange={handleOnChange}
          name="username"
          ref={refUsername}
          className="start-form__username"
          minLength="4"
          maxLength="25"
          required
        />
        {theme.error && <h6 className="start-form__error">{theme.error}</h6>}
      </form>
    </div>
  );
}

export default Form;
