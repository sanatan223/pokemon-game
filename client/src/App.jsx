
import { useNavigate } from 'react-router-dom'
import '../styles/App.css'
import Navbar from './components/Navbar'
import PokeContainer from './components/PokeContainer'

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className='background'></div>
      <div
        className='login-redirect-btn'
        onClick={() => navigate('/login')}
        >Login</div>
      <Navbar isHome={true} />
      <PokeContainer />
    </>
  )
}

export default App
