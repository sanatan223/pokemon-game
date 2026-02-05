import React, { useState } from 'react';
import '../../styles/Login.css';
import { useNavigate } from 'react-router-dom';

const AuthPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    const value = e.target.value
    e.target.value = value.toLowerCase();
    setUsername(value.toLowerCase());
    console.log(username)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(password)
  }

  const validateCred = async (username, password) => {
    const error = {};

    const userRegex = /^[a-zA-Z0-9_-]{3,20}$/;
    if (!userRegex.test(username) || username.length < 3) {
      error.username = "Username must be 3-20 characters (letters, numbers, _ or - only).";
    }

    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passRegex.test(password) || password.length < 8) {
      error.password = "Password must be at least 8 characters and include a Capital letter and a number.";
    }
    setErrors(error);

    return error;
  };

  const handleLogin = async (username, password) => {
    const error = await validateCred(username, password);
    if (Object.keys(error).length > 0){
      console.log("Validation errors:", error);
      return;
    }
    const data = { username: username, password: password };
    console.log("data submited", data)

    const response = await fetch("api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("user data sent for login.")
    console.log(response);
    if (response.ok) {
      console.log("user logged in", response.statusText);
      navigate('/');
    } else {
      console.error('Failed to log user');
    }
  };

  const handleSubmit = async (username, password) => {
    const error = await validateCred(username, password);
    if (Object.keys(error).length > 0){
      console.log("Validation errors:", error);
      return;
    }
    const data = { username: username, password: password };
    console.log("data submited", loginData)

    const response = await fetch("api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("user data sent for creatioin.")
    console.log(response);
    if (response.ok) {
      console.log("user created", response.statusText);
      navigate('/');
    } else {
      console.error('Failed to create user');
    }
  };

  return (
    <div className="login-background">
      <div className="login-card">
        <div className="logo-placeholder">
          <img className='logo-img' src="/logo.png" alt="logo" />
        </div>
        <div className='login-header'>Let's capture all Pokemons.</div>
        <div className="input-group">
          <label>Unique Trainer ID</label>
          <input
            type="text"
            onChange={handleNameChange}
            placeholder="pikachu_pokemon"
            />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="text" onChange={handlePasswordChange} placeholder="Pikachu@123" />
        </div>
        <button className="login-btn" onClick={() => {props.site == 'signup'? handleSubmit(username, password) : handleLogin(username, password)}} >
          {props.site === 'signup' ? "Create Account" : "Login"}
        </button>
        <button className='register-btn' onClick={() => { navigate(props.site === 'signup'? '/login' : '/signup') }}>
          {props.site === 'signup'? "Login to existing Account" : "Start new container"}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;