import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/userSlice";
import { TextField, Box, Paper, Button, useMediaQuery } from "@mui/material";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

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

const TextFieldStyle = {
  borderRadius: "5px",
  padding: "0px",
};

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "", // Use plain text password
  });

  const [error, setError] = useState(false); // NEED TO IMPLEMENT FUNCTION THAT UPDATES STATE TO TRUE IF USERNAME OR EMAIL ARE ALREADY IN USE

  const isMobile = useMediaQuery("(max-width: 550px)");

  const TextFieldBoxStyle = {
    display: "flex",
    alignItems: "center",
    padding: 1,
    width: isMobile ? "100%" : "200%",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(registerUser(formData));
      console.log(user.isAuthenticated);
      if (user.isAuthenticated) {
        // Registration successful, navigate to success page or home page
        console.log("Registration successful!");
        navigate("/success"); // Replace with your desired success page route
      } else {
        // Handle registration error
        console.log("Registration failed.");
      }
    } catch (error) {
      // Handle registration error
      console.error(error);
    }
  };

  return (
    <section
      style={BoxStyle}
      role="region"
      aria-label="Registration Form Section"
    >
      <h1 role="heading" aria-level="1" style={{ marginBottom: 25 }}>
        Registration
      </h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <Box sx={TextFieldBoxStyle}>
          <TextField
            fullWidth
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            autoFocus
            error={error}
            size="small"
            autoComplete="current-sername"
            sx={TextFieldStyle}
            label="Username"
            InputLabelProps={{
              shrink: true,
            }}
            aria-describedby="username-helper-text"
            value={formData.username}
            onChange={handleChange}
          />
          <CheckCircleOutlineIcon
            aria-label="Validation Status"
            sx={{ ml: 1, fontSize: "small" }}
          />
        </Box>
        <Box sx={TextFieldBoxStyle}>
          <TextField
            fullWidth
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            autoComplete="current-email"
            error={error}
            sx={TextFieldStyle}
            size="small"
            label="Email"
            InputLabelProps={{
              shrink: true,
            }}
            value={formData.email}
            onChange={handleChange}
          />
          <CheckCircleOutlineIcon
            aria-label="Validation Status"
            sx={{ ml: 1, fontSize: "small" }}
          />
        </Box>
        <Box sx={TextFieldBoxStyle}>
          <TextField
            fullWidth
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            error={error}
            sx={TextFieldStyle}
            size="small"
            label="Password"
            InputLabelProps={{
              shrink: true,
            }}
            value={formData.password}
            onChange={handleChange}
          />
          <CheckCircleOutlineIcon
            aria-label="Validation Status"
            sx={{ ml: 1, fontSize: "small" }}
          />
        </Box>

        <Button //updated button to MUI component
          type="submit"
          aria-label="Sign Up"
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
          Sign Up
        </Button>
      </form>
      <p style={{ lineHeight: "1.5" }}>
        Already have an account?{" "}
        <Link to="/login" aria-label="Login">
          Login
        </Link>
      </p>
    </section>
  );
};

export default SignUpPage;
