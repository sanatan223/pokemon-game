import '../styles/AddPokemon.css';
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import Pokecard from './Pokecard';
import inventoryPokemons from '../../database/pokemons';

const AddPokemon = () => {
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [focused, setFocused] = useState(false);
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    const getAllPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1500');
      const data = await response.json();
      setAllPokemons(data.results);
    };
    getAllPokemons();
  }, [])

  async function addCurrentPokemon(pokemon) {
    const response = await fetch(pokemon.url)
    const data = await response.json()
    setPokemon(data)
    setFocused(false);
  }

  const addPokemon = async(pokemon) => {
    inventoryPokemons.push({
      id: pokemon.id,
      name: pokemon.name,
      base_experience: pokemon.base_experience,
      types: pokemon.types,
      weight: pokemon.weight,
    })
  }

  return (
    <>
      <Navbar destination={'/'} display={'Home'} />
      {!pokemon && (
        <div>
          <h2>Search Pokemon</h2>
          <input
            type="text" 
            id="name" 
            name="name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => {setFocused(true)}}
          />

          {focused && 
            (allPokemons.map((p, i) => {
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
            }))
          }

        </div>
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
              onClick={(e) => {
                e.preventDefault();
                addPokemon(pokemon);
                setPokemon(null);
                setQuery("");
              }}type="submit">Add Pokemon</button>
          </form>
        </div>
      )}

    </>
  );
};

export default AddPokemon;