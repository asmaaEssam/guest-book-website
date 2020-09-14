import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";

const Register = (props) => {
  const [credentials, setcredentials] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    fullNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });
  const handleValidation = (e) => {
    if (e.target.name === "fullName") {
      if (e.target.value === "" || e.target.value.length < 5) {
        setcredentials({
          ...credentials,
          fullName: e.target.value,
          fullNameError: "Full Name is Required",
        });
      } else {
        setcredentials({
          ...credentials,
          fullName: e.target.value,
          fullNameError: "",
        });
      }
    }
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
    if (e.target.name === "confirmPassword") {
      if (e.target.value !== credentials.password) {
        setcredentials({
          ...credentials,
          confirmPassword: e.target.value,
          confirmPasswordError: "Password doesn't match",
        });
      } else {
        setcredentials({
          ...credentials,
          confirmPassword: e.target.value,
          confirmPasswordError: "",
        });
      }
    }
  };

  const baseUrl = process.env.BASEURL || "http://localhost:9000";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      credentials.fullName !== '' &&
      credentials.email !=='' &&
      credentials.password !=='' &&
      credentials.confirmPassword !=='' &&
      credentials.fullNameError === ''&&
      credentials.emailError === ''&&
      credentials.passwordError === ''&&
      credentials.confirmPasswordError === ''

    ) {
    const user = {fullName: credentials.fullName,email: credentials.email, password: credentials.password}
      const requestOptions = {
        method: "POST",
        redirect: 'follow',
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      };
      fetch(baseUrl + "/user/register", requestOptions).then((res) =>{
        console.log(res);
      props.history.push("/login");
      });
    }
  };

  return (
    <div className="login-conatiner">
      <h1>SIGN UP</h1>
      <form className="form">
        <Input
          type="text"
          name="fullName"
          value={credentials.fullName}
          onChange={handleValidation}
          error={credentials.fullNameError}
          placeholder="Full Name"
        />
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
        <Input
          type="password"
          name="confirmPassword"
          value={credentials.confirmPassword}
          onChange={handleValidation}
          error={credentials.confirmPasswordError}
          placeholder="Confirm Password"
        />
        <button className="submit-form" onClick={handleSubmit}>
          {" "}
          SIGN UP
        </button>
      </form>
      <p style={{ marginBottom: "0.3rem", marginTop: "2.5rem" }}>
        Already have an account ?
      </p>
      <Link to="/login">Sign In</Link>
    </div>
  );
};

export default Register;
