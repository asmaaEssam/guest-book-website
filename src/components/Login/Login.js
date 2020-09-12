import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";

const Login = () => {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
  });
  const handleValidation = (e) => {
    if (e.target.name === "email") {
      if (!/\S+@\S+\.\S+/.test(e.target.value)) {
        setcredentials({
          ...credentials,
          email: e.target.value,
          emailError: "Invalid Email Address",
        });
      } else {
        setcredentials({
          ...credentials,
          email: e.target.value,
          emailError: "",
        });
      }
    }
    if (e.target.name === "password") {
      if (e.target.value.length < 6) {
        setcredentials({
          ...credentials,
          password: e.target.value,
          passwordError: "Password should be greater that 6 digits",
        });
      } else {
        setcredentials({
          ...credentials,
          password: e.target.value,
          passwordError: "",
        });
      }
    }
  };

  return (
    <div className="login-conatiner">
      <h1>SIGN IN</h1>
      <form className="form">
        <Input
          type="text"
          name="email"
          value={credentials.email}
          onChange={handleValidation}
          error={credentials.emailError}
          placeholder="Email Address"
        />
        <Input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleValidation}
          error={credentials.passwordError}
          placeholder="Password"
        />
        <button type= 'submit' className="submit-form"> SIGN IN</button>
      </form>
      <p style={{ marginBottom: '0.3rem',marginTop:'2.5rem'}}>Don't have an account yet ?</p>
        <Link to='/register'>Create an account</Link>
    </div>
  );
};

export default Login;
