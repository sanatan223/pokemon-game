import Pokecard from './Pokecard'
import pokemons from '../../database/pokemons'
import '../styles/pokeContainer.css'

function PokeContainer() {

  return (
    <>
      <div className="container-body">
        <h1>Choose your Pokemon:</h1>
        <div className='poke-container'>
            {pokemons.map(pokemon => (
                <Pokecard
                name={pokemon.name}
                type={pokemon.type}
                gender={pokemon.gender}
                catch={pokemon.catch} />
            ))}
        </div>
      </div>
    </>
  )
}

export default PokeContainer
