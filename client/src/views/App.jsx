
import '../styles/App.css'
import Navbar from './Navbar'
import PokeContainer from './PokeContainer'

function App() {
  return (
    <>
      <Navbar destination={'/addPokemon'} display={'Add Pokemon'} />
      <PokeContainer />
    </>
  )
}

export default App
