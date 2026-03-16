import Pokecard from './Pokecard'
import '../../styles/pokeContainer.css'
import inventoryPokemons from '../../../database/pokemons'
import { useEffect, useState } from 'react'
import { useAuth } from '../../context/UserContext';

function PokeContainer() {
  const [pokemons, setPokemons] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    let cancelled = false;

    async function fetchUserPokemons() {
      if (!user) {
        setPokemons(inventoryPokemons);
        return;
      }

      try {
        const response = await fetch(`/api/user-pokemon/${user.id}`);
        const data = await response.json();

        const pokeList = await Promise.all(
          data.map((pokemon) =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.pokemon_id}/`)
              .then((res) => res.json())
          )
        );

        if (!cancelled) {
          setPokemons(pokeList);
        }
      } catch (err) {
        if (!cancelled) {
          console.error(err);
        }
      }
      console.log('Fetched pokemons for user:', pokemons);
    }

    fetchUserPokemons();

    return () => {
      cancelled = true;
    };
  }, [user]);

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
