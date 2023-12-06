import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TextField, Box, Paper, Button, useMediaQuery } from "@mui/material";

const BoxStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100svh",
  width: "100svw",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("false");

  const isMobile = useMediaQuery("(max-width: 550px)");
  const TextFieldStyle = {
    borderRadius: "5px",
    padding: 1,
    width: isMobile ? "100%" : "200%",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <section style={BoxStyle}>
      <h1 role="heading" aria-level="1" style={{ marginBottom: 5 }}>
        Video App
      </h1>
      <h2 role="subheading" aria-level="2" style={{ marginBottom: 15 }}>
        Login
      </h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <TextField
          fullWidth
          type="text"
          id="username"
          name="username"
          label="Username"
          placeholder="Username"
          autoComplete="username"
          autoFocus
          // error={error}
          size="small"
          sx={TextFieldStyle}
          // value={}
          // onChange={}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          fullWidth
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          autoComplete="Password"
          size="small"
          label="Password"
          InputLabelProps={{
            shrink: true,
          }}
          // error={error}
          sx={TextFieldStyle}
          // value={}
          // onChange={}
        />

        <Button //updated button to MUI component
          type="submit"
          aria-label="Login"
          style={{
            borderRadius: "20px",
            padding: "5px",
            width: "50%",
            fontSize: "small",
            color: "black",
            border: "0.5px solid black",
            margin: "10px 0",
          }}
        >
          Login
        </Button>
      </form>
      <p style={{ lineHeight: "1.5" }}>
        Create an account <Link to="/signup">here</Link>
      </p>
    </section>
  );
};

export default LoginPage;
