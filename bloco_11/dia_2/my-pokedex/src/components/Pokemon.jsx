import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/pokemon.css';

class Pokemon extends Component {
  render() {
    const { name, type, image, moreInfo } = this.props.pokeInfo;
    const { value:weight, measurementUnit } = this.props.pokeInfo.averageWeight;

    return (
      <div className='pokemon'>
        <div className='pokemon-info'>
          <p className='pokemon-name'> {name} </p>
          <p className='pokemon-type'> {type} </p>
          <p className='pokemon-weight'> Average Weight: {weight} {measurementUnit} </p>
        </div>

        <div className='pokemon-img'>
          <a href={moreInfo}><img src={image} alt=''></img></a>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokeInfo: PropTypes.shape({
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string
  })
}

export default Pokemon;
