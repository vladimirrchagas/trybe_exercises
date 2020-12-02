import React from 'react';
import { Link } from 'react-router-dom'
import PokemonDetails from './PokemonDetails.jsx'
import './pokemon.css';

class Pokemon extends React.Component {

  render() {
    const {id, name, type, averageWeight, image} = this.props.pokemon;
    const { callback, moreDetail } = this.props;
    const url = `/pokemons/${id}`
    return (
      <div>
        {moreDetail ? <h2>{name} Details</h2> : ''}
        <div className="pokemon">
          <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>
              Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
            </p>
            {!moreDetail
              ? <Link to={url} onClick={callback}>More details</Link> : ''}
          </div>
          <img src={image} alt={`${name} sprite`} />
        </div>
        {moreDetail ? <PokemonDetails pokemon={this.props.pokemon}/> : ''}
      </div>
    );
  }
}

export default Pokemon;