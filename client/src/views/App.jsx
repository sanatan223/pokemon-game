import '../styles/App.css'
import Navbar from './components/Navbar'
import PokeContainer from './components/PokeContainer'
import { AuthProvider, useAuth } from '../context/UserContext'
import Popup from './components/Popup'

function App() {
  const { user } = useAuth();

  return (
      <AuthProvider>
        <div className='background'></div>
          {user && (
            <Popup
              message={`${user} has logged in!`}
              duration={3000}
            />
          )}
        <Navbar isHome={true} />
        <PokeContainer />
      </AuthProvider>
  )
}

export default App
