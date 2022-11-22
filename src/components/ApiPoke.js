import { useState, useEffect } from "react";

export default function ApiPoke() {

    const [poke, setPoke] = useState([]);
  
    useEffect( () => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then( (data) => data.json())
      .then( (data) => setPoke(data.results))
    }, [] );
  
    return (
      <div>
          <ul>
            {poke.map( (pokemon, index) =>
            <li key={index}>
              <span>{pokemon.name}</span><br/>
              <a href={pokemon.url}>link</a>
            </li> )}
          </ul>
        </div>
    );
  }