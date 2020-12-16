// React
import React, { useContext, useRef } from "react";

// Context
import AppContext from "../context/AppContext";

// Css
import "../styles/components/form.css";

function Form() {
  const { state, setState } = useContext(AppContext);
  const refUsername = useRef("");

  const handleOnChange = () => {
    setState({
      ...state,
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
        {state.error && <h6 className="start-form__error">{state.error}</h6>}
      </form>
    </div>
  );
}

export default Form;
