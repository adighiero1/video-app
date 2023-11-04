import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../store/userSlice"; // Assuming you have an action for user registration
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import { useDispatch } from "react-redux";

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
      navigate("/login"); // Use navigate to redirect to the login page
    } catch (error) {
      // Handle registration error
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUpPage;
