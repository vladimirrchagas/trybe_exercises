import React, { Component } from 'react';
import './data.js'

class Button extends Component {
  render() {
    const { onClick, value, disabled, name } = this.props;
    const classPoke = name.toLowerCase();

    return (
      <button className={classPoke} onClick={onClick} value={value} disabled={disabled}>{name}</button>
    );
  }
}

export default Button;