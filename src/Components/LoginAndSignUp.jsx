import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";
import "./LoginAndSignUp.css";

const LoginAndSignUp = () => {
  const [formName, setFormName] = useState("Sign Up");
  return (
    <div className="container">
      <h2 className="title">{formName}</h2>
      <div className="line"></div>
      <div className="usename-form form">
        <label htmlFor="usename">
          <BsPersonFill className="icon" />
        </label>
        <input
          type="text"
          id="usename"
          name="usename"
          placeholder="Enter your name"
          autocomplete="off"
        />
      </div>
      {formName === "Login" ? (
        ""
      ) : (
        <div className={`email-form form `}>
          <label htmlFor="email" className="label-email">
            <MdEmail className="icon" />
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="email"
            placeholder="Enter your email"
          />
        </div>
      )}
      <div className="pass-form form">
        <label htmlFor="password">
          <HiLockClosed className="icon" />
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="password"
          placeholder="Enter your password"
        />
      </div>

      {formName === "Login" ? (
        <p className="reset-pass">
          Forgot password? <span className="link">Click here</span>
        </p>
      ) : (
        ""
      )}

      <div className="group-button">
        <button
          className={`btn signup ${formName === "Sign Up" ? "active" : ""}`}
          onClick={() => setFormName("Sign Up")}
        >
          Sign Up
        </button>
        <button
          className={`btn login ${formName === "Login" ? "active" : ""}`}
          onClick={() => setFormName("Login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginAndSignUp;
