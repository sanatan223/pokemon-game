
import '../styles/App.css'
import Navbar from './Navbar'
import PokeContainer from './PokeContainer'

function App() {
  return (
    <>
      <div className='background'></div>
        <Navbar isHome={true} />
        <PokeContainer />
    </>
  )
}

export default App
