
import '../styles/App.css'
import Navbar from './Navbar'
import PokeContainer from './PokeContainer'

function App() {
  return (
    <>
      <Navbar isHome={true} />
      <PokeContainer />
    </>
  )
}

export default App
