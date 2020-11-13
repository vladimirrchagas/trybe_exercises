import React, { Component } from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon';
import Button from '../Button'
import './pokedex.css';

class Pokedex extends Component {
  constructor() {
    super();

    this.setType = this.setType.bind(this);
    this.all = this.all.bind(this);
    this.nextPokemon = this.nextPokemon.bind(this);

    this.state = {
      index: 0,
      type: '',
      typeLength: 0,
      filtered: false,
      nextPokemon: true,
    }
  }

  setType = (event) => this.setState(() => {
    const type = event.target.value;
    const typeLength = pokemons.filter((pokemon) => pokemon.type === type).length - 1;

    return ({
      index: 0, 
      filtered: true,
      type: type,
      typeLength: typeLength,
      nextPokemon: typeLength === 0 ? true : false
    })
  });

  all = () => this.setState(() => ({ filtered: false, type: '', index: 0 }));

  nextPokemon = () => {
    this.setState((previousState, _props) => {
      if (previousState.index === previousState.typeLength) {
        return ({ index: 0})
      } 
      return ({index: previousState.index + 1})
    });
  };

  render() {
    const pokemonsType = pokemons.filter(pokemon => pokemon.type === this.state.type);

    return(
      <div className='pokedex'>

        <div className='pokemons-grid'>
          {(this.state.filtered 
            ? <Pokemon key={pokemons[this.state.type]} pokeInfo={pokemonsType[this.state.index]}/>
            : pokemons.map(pokemon => <Pokemon key={pokemon.id} pokeInfo={pokemon}/>))}
        </div>

        <div className='buttons-type'>
          {([...new Set(pokemons.map(pokemon => pokemon.type))].map(type => <Button onClick={this.setType} key={type} name={type} value={type} />))}
        </div>
        
        <div className='button-other'>
          <Button onClick={this.all} key="all" name="All" value="all" />
          <Button onClick={this.nextPokemon} key="next" name="Next" value={this.state.nextPokemon} disabled={this.state.nextPokemon}/>
        </div>
      </div>
    );
  }
}

export default Pokedex;
