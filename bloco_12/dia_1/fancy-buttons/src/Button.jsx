import React, { Component } from 'react';
import './button.css'

class Button extends Component {
  constructor() {
    super();
    this.buttonEvent = this.buttonEvent.bind(this);
    this.state = {
      currentNumber: 0,
      class: 'button'
    }
  }

  buttonEvent() {
    this.setState((previousState, _props) => {
      previousState.class === 'button-green' ? console.log('green') : console.log('blue');
      
      return ({ currentNumber: previousState.currentNumber + 1,
         class: (previousState.currentNumber + 1) % 2 === 0 ? 'button-green' : 'button'
       })
    });
  }
  
  render() {
    return (
      <button className={this.state.class} onClick={this.buttonEvent}>{this.state.currentNumber}</button>
    );
  }
}

export default Button;
