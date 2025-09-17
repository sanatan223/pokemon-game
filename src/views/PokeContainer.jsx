import Pokecard from './Pokecard'
import pokemons from '../../database/pokemons'
import '../styles/pokeContainer.css'

function PokeContainer() {

  return (
    <>
        <div className='poke-container'>
            {pokemons.map(pokemon => (
                <Pokecard
                name={pokemon.name}
                type={pokemon.type}
                gender={pokemon.gender}
                catch={pokemon.catch} />
            ))};
        </div>
    </>
  )
}

export default PokeContainer
