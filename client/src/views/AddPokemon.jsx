import '../styles/AddPokemon.css';
import Navbar from "./Navbar";
import { useState } from "react";
import pokemons from '../../database/pokemons';
import Pokecard from './Pokecard';

const AddPokemon = () => {
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [focused, setFocused] = useState(false);

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
            onBlur={() => {setFocused(false)}}
          />

          {focused && 
            (pokemons.map((p) => {
              if (p.name.toLowerCase().includes(query.toLowerCase())) {
                return (
                  <div
                    key={p.id}
                    className="pokemon-search-item"
                    onClick={() => setPokemon(p)}
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
            type={pokemon.type}
            gender={pokemon.gender}
            catch={pokemon.catch} />

          <form className="add-pokemon-form">
            <label htmlFor="name">Name:</label>
            <button type="submit">Add Pokemon</button>
          </form>
        </div>
      )}

    </>
  );
};

export default AddPokemon;