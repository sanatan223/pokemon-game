import React from 'react';
import '../../styles/Login.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("data sent;")

    // If you are using state variables (recommended)
    const loginData = { username: "username", password: " password" };

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData), 
    });
    console.log("data sent;")
  };
  return (
    <div className="login-background">
      <div className="login-card">
        <div className="logo-placeholder">
           <img className='logo-img' src="/logo.png" alt="logo" />
        </div>
        <div className='login-header'>Let's capture all Pokemons.</div>
        <form className="login-form" action="/login" method="post" >
          <div className="input-group">
            <label>Unique Trainer ID</label>
            <input type="text" placeholder="pikachu_pokemon" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Pikachu@123" />
          </div>
          
          <button type="submit" className="login-btn" >
            Login
          </button>
        </form>
        <button className='register-btn' onClick={() => { navigate('/signup') }}>
            Start New Container
        </button>
      </div>
    </div>
  );
};

export default LoginPage;