import React, { Component } from 'react';

class Age extends Component {
  render() {

    const { value, callback } = this.props;

    let error = undefined;

    if (isNaN(value) || value > 120 || value < 0) error = 'Digite uma idade válida';

    return (
      <label className='labels'>
      Digite sua Idade:
      <input name='age' error={error} type='text' value={value} onChange={callback}></input>
      <span>{error}</span>
    </label>
    );
  }
}

export default Age;
