import React, { useState } from "react";

export default function Login() {
  const [currentState, setCurrentState] = useState("Sign Up");

  const onHandleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <h1 className="text-3xl font-medium mb-4">
          <u>{currentState}</u>
        </h1>
        {currentState === "Login" ? (
          ""
        ) : (
          <input
            className="border border-black p-2"
            type="text"
            placeholder="name"
            // required
          />
        )}
        <br />
        <br />
        <input
          className="border border-black p-2"
          type="email"
          placeholder="Email"
          // required
        />
        <br />
        <br />
        <input
          className="border border-black p-2"
          type="password"
          placeholder="Password"
          // required
        />
        <div>
          <p className="text-sm">Forgot your password</p>
          {currentState === "Login" ? (
            <p onClick={() => setCurrentState("Sign Up")} className="text-sm">
              Create Account
            </p>
          ) : (
            <p onClick={() => setCurrentState("Login")} className="text-sm">
              Login Here
            </p>
          )}
        </div>
        <br />
        <br />
        {currentState === "Login" ? (
          <button className="border px-5 py-1 border-black">Sign In</button>
        ) : (
          <button className="border px-5 py-1 border-black">Sign Up</button>
        )}
      </form>
    </>
  );
}
