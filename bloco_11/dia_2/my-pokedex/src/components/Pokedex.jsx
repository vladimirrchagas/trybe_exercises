import React, { Component } from 'react';
import pokemons from '../data/data';
import Pokemon from './Pokemon';
import '../css/pokedex.css';

class Pokedex extends Component {
  render() {
    return(
      <div className='pokedex'>
        {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokeInfo={pokemon}/>)}
      </div>
    );
  }
}

export default Pokedex;
