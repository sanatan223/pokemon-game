import Pokecard from './Pokecard'
import '../../styles/pokeContainer.css'
import inventoryPokemons from '../../../database/pokemons'
import { useEffect, useState } from 'react'

function PokeContainer() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setPokemons(inventoryPokemons);
  }, [])

  return (
    <>
      <div className="container-body">
        <h1>Choose your Pokemon:</h1>
        <div className='poke-container'>
          {pokemons && pokemons.map(pokemon => {return (
            <Pokecard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              exp={pokemon.base_experience}
              type={pokemon.types}
              weight={pokemon.weight} />
          )})}
        </div>
      </div>
    </>
  )
}

export default PokeContainer
