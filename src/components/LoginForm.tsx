import React, { useState } from "react";
import "../css/LoginCreateAccount.css";

function LoginForm({ Login }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <div className="content-right">
      <form onSubmit={submitHandler} className="form" noValidate>
        <h2>Login</h2>
        <div className="input-div">
          <label className="label" htmlFor="emailoRUsername">
            Email or Username:
          </label>
          <input
            className="input"
            type="emailOrUsername"
            name="emailOrUsername"
            id="emailOrUsername"
            placeholder="Enter your email or username"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="input-div">
          <label className="label" htmlFor="password">
            Password:
          </label>
          <input
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <button
          className="loginCreateAccount-button"
          type="submit"
          value="Login"
        >
          {" "}
          Login
        </button>

        <span className="input-loginCreateAccount">
          Already have an account
        </span>
      </form>
    </div>
  );
}

export default LoginForm;
