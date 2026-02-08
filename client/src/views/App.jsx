import { useNavigate } from 'react-router-dom'
import '../styles/App.css'
import Navbar from './components/Navbar'
import PokeContainer from './components/PokeContainer'
import { AuthProvider, useAuth } from '../context/UserContext'
import Popup from './components/Popup'
import { useState } from 'react'

function App() {
  const navigate = useNavigate();
  const { user, loading, logout } = useAuth();

  return (
      <AuthProvider>
        <div className='background'></div>
          {user && (
            <Popup
              message={`${user} has logged in!`}
              duration={3000}
            />
          )}
        <div
          className='login-redirect-btn'
          onClick={() => user? logout() : navigate('/login')}
        >{user? 'Logout': 'Login'}</div>
        <Navbar isHome={true} />
        <PokeContainer />
      </AuthProvider>
  )
}

export default App
