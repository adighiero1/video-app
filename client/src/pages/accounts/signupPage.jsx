import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../store/userSlice"; // Assuming you have an action for user registration
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import { useDispatch } from "react-redux";
import {
  divStyle,
  formStyle,
  inputFieldsStyling,
  divButtonStyle,
  buttonStyling,
  paragraphStyle,
} from "./style.signup";
import NavAppbar from "../../components/navigation/navAppbar";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate(); // Use useNavigate to navigate

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Dispatch the registration action with form data
      await dispatch(registerUser(formData));
      navigate("/"); // Use navigate to redirect to the login page
    } catch (error) {
      // Handle registration error
      console.error(error);
    }
  };

  return (
    <div style={divStyle}>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="Username"
          style={inputFieldsStyling}
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="Email"
          style={inputFieldsStyling}
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="Password"
          style={inputFieldsStyling}
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="Name"
          style={inputFieldsStyling}
          value={formData.name}
          onChange={handleChange}
        />
        <div style={divButtonStyle}>
          <button type="submit" style={buttonStyling}>
            Register
          </button>
        </div>
      </form>
      <p style={paragraphStyle}>
        Already have an account? <Link to="/signin">Login</Link>
      </p>
    </div>
  );
};

export default SignUpPage;
