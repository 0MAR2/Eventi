import React, { useState } from "react";
import "./Form.css";

function AuthForm({
  isLogin,
  setIsLogin,
  isRegistred,
  toggleForm,
  setFormData,
  formData,
  setErrors,
  errors,
}) {
  // Form state

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate the form
  const validateForm = () => {
    const newErrors = {};

    if (!isRegistred) {
      if (!formData.username.trim()) {
        newErrors.username = "Username is required.";
      }
      if (!formData.gender) {
        newErrors.gender = "Gender is required.";
      }
      if (!formData.birthdate) {
        newErrors.birthdate = "Birth date is required.";
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert(isLogin ? "Logged in successfully!" : "Signed up successfully!");
      setFormData({
        username: "",
        email: "",
        password: "",
        gender: "",
        birthdate: "",
      });
    }
  };

  if (isLogin) return;
  return (
    <div className="form-container">
      <h2>{isRegistred ? "Sign Up" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        {isRegistred ? (
          <>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
              />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <p className="error">{errors.gender}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="birthdate">Birth Date</label>
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
              />
              {errors.birthdate && <p className="error">{errors.birthdate}</p>}
            </div>
            <button
              type="submit"
              className="btn submit-btn"
              onClick={() => setIsLogin(true)}
              disabled={Object.keys(errors).length > 0}
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="btn submit-btn"
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
          </>
        )}
      </form>
      <p className="toggle-text">
        {isRegistred ? "Already have an account?" : "Don't have an account?"}{" "}
        <span className="toggle-link" onClick={toggleForm}>
          {isRegistred ? "Login" : "Sign Up"}
        </span>
      </p>
    </div>
  );
}

export default AuthForm;
