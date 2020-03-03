import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { auth } from "../store";

/**
 * COMPONENT
 */
const RegisterForm = props => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} name={name}>
          <div>
            <label htmlFor="username">
              <small>Name</small>
            </label>
            <input name="username" type="text" />
          </div>
          <div>
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input name="email" type="text" />
          </div>
          <div>
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input name="password" type="password" />
          </div>
          <div>
            <button type="submit">{displayName}</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>
      {/* <Portfolio/> */}
    </div>
  );
};

const mapRegister = state => {
  return {
    name: "register",
    displayName: "Register",
    error: state.user.error
  };
};

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(auth(username, email, password, formName));
    }
  };
};

export const Register = connect(mapRegister, mapDispatch)(RegisterForm);

/**
 * PROP TYPES
 */
RegisterForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
};
