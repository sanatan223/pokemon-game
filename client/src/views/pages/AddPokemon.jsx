import '../../styles/AddPokemon.css';
import { useEffect, useState } from "react";
import Pokecard from '../components/Pokecard';
import inventoryPokemons from '../../../database/pokemons';
import { useAuth } from '../../context/UserContext';

const AddPokemon = () => {
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [focused, setFocused] = useState(false);
  const [allPokemons, setAllPokemons] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const getAllPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1500');
      const data = await response.json();
      setAllPokemons(data.results);
    };
    getAllPokemons();
  }, [user])

  async function addCurrentPokemon(pokemon) {
    const response = await fetch(pokemon.url)
    const data = await response.json()
    setPokemon(data);
    setFocused(false);
  }

  const addPokemon = async(pokemon) => {
    
    if (user){
      console.log('Adding pokemon to user inventory:', pokemon.id, user.id);
      const response = await fetch('/api/user-pokemon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          pokemon_id: pokemon.id,
          user_id: user.id,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add pokemon to user inventory');
      }
    } else {
      inventoryPokemons.push({
        id: pokemon.id,
        name: pokemon.name,
        base_experience: pokemon.base_experience,
        types: pokemon.types,
        weight: pokemon.weight,
      });
    }

  }

  return (
    <>
      <div 
        className="capture-background"
        ></div>
      <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >

          {!pokemon && (
            <>
              <div className='search-header'>Search Pokemon</div>
              <input
                className='pokemon-search'
                placeholder='Search Pokemon by name'
                autoComplete='off'
                type="text" 
                id="name" 
                name="name"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => {setFocused(true)}}
              />

              {focused && 
                <div className="pokemons-container">
                  {(allPokemons.map((p, i) => {
                    if (p.name.toLowerCase().includes(query.toLowerCase())) {
                      return (
                        <div
                          key={i}
                          className="pokemon-search-item"
                          onClick={() => addCurrentPokemon(p)}
                        >
                          <p>{p.name}</p>
                        </div>
                      );
                    }
                    return null;
                  }))}
                </div>
              }
            </>
          )}

          {pokemon && (
            <div>
              <Pokecard
                  key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  exp={pokemon.base_experience}
                  type={pokemon.types}
                  weight={pokemon.weight} />
              <form className="add-pokemon-form">
                <button 
                className='pokemon-search-item'
                  onClick={(e) => {
                    e.preventDefault();
                    addPokemon(pokemon);
                    setPokemon(null);
                    setQuery("");
                  }}type="submit">Capture Pokemon</button>
              </form>
            </div>
          )}

        </div>


    </>
  );
};

export default AddPokemon;