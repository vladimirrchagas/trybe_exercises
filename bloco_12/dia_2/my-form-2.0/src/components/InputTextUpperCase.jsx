import React, { Component } from 'react';

class InputTextUpperCase extends Component {
  render() {
    
    const { name, text, value, callback } = this.props;

    return (
      <label>
        {text}
        <input alt="textUpperCase" name={name} type="text" value={value.toUpperCase()} onChange={callback}></input>
      </label>
    );
  }
}

export default InputTextUpperCase;