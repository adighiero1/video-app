import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  divStyle,
  formStyle,
  inputFieldsStyling,
  divButtonStyle,
  buttonStyling,
  paragraphStyle,
  h1Style,
} from "./style.signup";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("false");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toHome = () => {
    navigate("/");
  };

  const toSignUp = () => {
    navigate("/signup");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        email: email,
        password: password,
      };

      // dispatch(functionName(formData))
      navigate("/"); // NAVIGATES TO LANDING PAGE
    } catch (err) {
      console.error("Unable to authenticate user", err);
    }
  };

  return (
    <div style={divStyle}>
      <h1 style={h1Style}>Video App</h1>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="Email"
          style={inputFieldsStyling}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="Password"
          style={inputFieldsStyling}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div style={divButtonStyle}>
          <button type="submit" style={buttonStyling}>
            Sign In
          </button>
        </div>
      </form>
      <p style={paragraphStyle}>
        Create an account <Link to="/signup">here</Link>
      </p>
    </div>
  );
};

export default SignInPage;
