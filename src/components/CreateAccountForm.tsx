import React, { Component, useState } from "react";
import "../css/LoginCreateAccount.css";

function CreateAccountForm({ CreateAccount }) {
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    CreateAccount(details);
  };

  return (
    <div className="content-left">
      <form onSubmit={submitHandler} className="form" noValidate>
        <h2>Create account</h2>
        <div className="input-div">
          <label className="label" htmlFor="username">
            Username:
          </label>
          <input
            className="input"
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
            value={details.username}
          />
        </div>
        <div className="input-div">
          <label className="label" htmlFor="email">
            Email:
          </label>
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
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
        <div className="input-div">
          <label className="label" htmlFor="confirmPassword">
            Confirm password:
          </label>
          <input
            className="input"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm password"
            onChange={(e) =>
              setDetails({ ...details, confirmPassword: e.target.value })
            }
            value={details.confirmPassword}
          />
        </div>
        <button
          className="loginCreateAccount-button"
          type="submit"
          value="CreateAccount"
        >
          Create account
        </button>
        <span className="input-loginCreateAccount">Something went wrong</span>
      </form>
    </div>
  );
}

export default CreateAccountForm;
