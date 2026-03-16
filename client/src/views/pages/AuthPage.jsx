import React, { useState } from 'react';
import '../../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/UserContext';
import Popup from '../components/Popup';

const AuthPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleNameChange = (e) => {
    const value = e.target.value
    e.target.value = value.toLowerCase();
    setUsername(value.toLowerCase());
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const validateCred = async (username, password) => {
    const error = [];

    const userRegex = /^[a-zA-Z0-9_-]{3,20}$/;
    if (!userRegex.test(username) || username.length < 3) {
      error.push("Username must be 3-20 characters (letters, numbers, _ or - only).");
    }

    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passRegex.test(password) || password.length < 8) {
      error.push("Password must be at least 8 characters and include a Capital letter and a number.");
    }

    return error;
  };

  const handleLogin = async (username, password) => {
    setLoading(true);
    const error = await validateCred(username, password);
    if (error.length > 0){
      console.log("validation error", error[0]);
      setError(`Validation errors: ${error.join('\n')}`);
      setLoading(false);
      return;
    }
    const data = { username: username, password: password };

    const response = await fetch("api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    
    if (responseData.success) {
      console.log("user logged in", response.statusText);
      console.log(responseData.user)
      setError(null);
      setUser(responseData.user);
      setLoading(false);
      navigate('/');
    } else {
      const errorData = await response.json();
      setError(errorData.message || "Login failed.");
      setLoading(false);
    }
  };

  const handleSubmit = async (username, password) => {
    setLoading(true);
    const error = await validateCred(username, password);
    if (error.length > 0){
      setError("Validation errors:", error);
      setLoading(false);
      return;
    }
    const data = { username: username, password: password };

    const response = await fetch("api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    if (response.ok) {
      console.log("user created", response.statusText);
      setError(null);
      handleLogin(username, password);
    } else {
      setError(response.statusText || "Signup failed.");
      setLoading(false);
    }
  };

  return (
    <div className="login-background">
      {error &&
        <Popup message={error} type={'error'} onClose={() => {setError(null)}}/>
      }
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
          {loading?
            "Processing..." : props.site === 'signup' ? "Create Account" : "Login"
          }
          
        </button>
        <button className='register-btn' onClick={() => { navigate(props.site === 'signup'? '/login' : '/signup') }}>
          {props.site === 'signup'? "Login to existing Account" : "Start new container"}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;