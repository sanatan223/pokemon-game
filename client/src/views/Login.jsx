import React from 'react';
import '../styles/Login.css';

const LoginPage = () => {
  return (
    <div className="login-background">
      <div className="login-card">
        <div className="logo-placeholder">
           <img className='logo-img' src="/logo.png" alt="logo" />
        </div>
        <div className='login-header'>Let's capture all Pokemons.</div>
        
        <form className="login-form">
          <div className="input-group">
            <label>Unique Trainer ID</label>
            <input type="text" placeholder="pikachu_pokemon" />
          </div>
          
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Pikachu@123" />
          </div>
          
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <button className='register-btn'>
            Start New Container
        </button>
      </div>
    </div>
  );
};

export default LoginPage;