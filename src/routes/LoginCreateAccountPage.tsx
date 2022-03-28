import React, { useState } from "react";
import CreateAccountForm from "../components/CreateAccountForm";
import LoginForm from "../components/LoginForm";
import "../css/LoginCreateAccount.css";

function LoginCreateAccountPage() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [userLogin, setUserLogin] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details: { email: string; password: string; name: any }) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUserLogin({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match!");
    }
  };

  const [userCreateAccount, setUserCreateAccount] = useState({
    username: "",
    email: "",
    password: "",
  });

  const CreateAccount = (details: {
    username: string;
    email: string;
    password: string;
    confirmpassword: string;
    name: any;
  }) => {
    console.log(details);

    if (
      details.username !== "" &&
      details.email !== "" &&
      details.password !== "" &&
      details.confirmpassword !== ""
    ) {
      console.log("Account created");
      setUserCreateAccount({
        username: details.username,
        email: details.email,
        password: details.password,
      });
    } else {
      console.log("Something went wrong");
    }
  };

  return (
    <div className="loginCreateAccountPage">
      <CreateAccountForm CreateAccount={CreateAccount} />
      <LoginForm Login={Login} />
    </div>
  );
}

export default LoginCreateAccountPage;
