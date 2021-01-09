import React, { Component } from 'react';

class InputText extends Component {
  render() {

    const { name, text, value, callback } = this.props;

    return (
      <label>
        {text}
        <input alt='text' name={name} type="text" value={value} onChange={callback}></input>
      </label>
    );
  }
}

export default InputText;