import React, { useState } from "react";
import "./Form.css";

function AuthForm({
  users,
  setUsers,
  setCurrentUser,
  isLogin,
  setIsLogin,
  formData,
  setFormData,
  isLoggedIn,
  setIsLoggedIn,
}) {
  const [errors, setErrors] = useState({});

  // Toggle between forms
  const toggleForm = () => {
    setIsLogin((prev) => !prev);
    setFormData({
      username: "",
      email: "",
      password: "",
      gender: "",
      birthdate: "",
    });
    setErrors({});
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const validateForm = () => {
    const newErrors = {};

    if (!isLogin) {
      // Sign-up specific validations
      if (!formData.username.trim())
        newErrors.username = "Username is required.";
      if (!formData.gender) newErrors.gender = "Gender is required.";
      if (!formData.birthdate) newErrors.birthdate = "Birth date is required.";
    }

    // Common validations
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
    if (isLogin) {
      const userExists = users.some(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );

      if (!userExists) {
        newErrors.email = "User does not exist or invalid credentials.";
      }
    } else {
      // Check if the user already exists
      const userExists = users.find((user) => user.email === formData.email);
      if (userExists) {
        newErrors.email = "Email is already registered.";
      }
    }
    return newErrors;
  };
  function handleUsersAdd() {
    setUsers((users) => ({ ...users, formData }));
    setCurrentUser(formData);
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      if (isLogin) {
        const user = users.find(
          (user) =>
            user.email === formData.email && user.password === formData.password
        );
        setCurrentUser(user); // Store the logged-in user's data
      } else {
        handleUsersAdd();
      }
      alert(isLogin ? "Logged in successfully!" : "Signed up successfully!");

      setFormData({
        username: "",
        email: "",
        password: "",
        gender: "",
        birthdate: "",
      });
      setIsLoggedIn(true);
    }
  };
  if (isLoggedIn) return;
  return (
    <div className="form-container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
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
        )}
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
        {!isLogin && (
          <>
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
          </>
        )}
        <button type="submit" className="btn submit-btn">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <p className="toggle-text">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span className="toggle-link" onClick={toggleForm}>
          {isLogin ? "Sign Up" : "Login"}
        </span>
      </p>
    </div>
  );
}

export default AuthForm;
