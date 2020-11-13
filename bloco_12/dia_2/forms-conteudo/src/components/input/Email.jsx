import React, { Component } from 'react';

class Email extends Component {
  render() {

    const { value, callback } = this.props;

    let error = undefined;
    
    if (value.indexOf('@') === -1) error = 'Digite um Email Válido!';

    return (
      <label className='labels'>
        Digite Seu Email:
        <input name='email' error={error} type='text' value={value} onChange={callback}></input>
        <span>{error}</span>
      </label>
    );
  }
}

export default Email;