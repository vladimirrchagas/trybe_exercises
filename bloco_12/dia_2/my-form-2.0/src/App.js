import './css/App.css';
import React, { Component } from 'react';
import InputTextUpperCase from './components/InputTextUpperCase.jsx';
import InputText from './components/InputText.jsx';
import Select from './components/Select.jsx';
import RadioButton from './components/RadioButton.jsx';


class App extends Component{
  constructor() {
    super();

    this.getHandle = this.getHandle.bind(this);

    this.state = {
      textUpperCase: {
        name: ''
      },

      text: {
        email: '',
        cpf: '',
        adress: '',
        city: '',
      },
      
      select: {
        state: {
         value: '',
         data: {}
        }
      },

      radioButton: {
        type: ''
      },

      textArea: {
        resume: '',
        jobTitle: '',
        jobTitleAlert: false,
        jobDescription: '',
      }
    }
  }

  getHandle({ target }){
    const { alt, value, name } = target;
    this.setState((state) => {
      const firstStage = state[alt];
      return ( firstStage[name] = value );
    });
  }
  render() {

    const { textUpperCase, text, select, radioButton } = this.state
    return (
      <div className="App">
        <fieldset>

          {Object.entries(textUpperCase).map((item) => 
            <InputTextUpperCase key={item[0]} name={item[0]} text={`Type your ${item[0]}:`} value={textUpperCase[item[0]]} callback={ this.getHandle }/>
          )}
        
          {Object.entries(text).map((item) => 
            <InputText key={item[0]} name={item[0]} text={`Type your ${item[0]}:`} value={text[item[0]]} callback={ this.getHandle }/>
          )}

          {Object.entries(select).forEach((item) => {
            const name = item[0];
            Object.entries(item).forEach((item) => {
              <Select name={name} text={`Selecione seu ${name}:`} value={item[0]} data={item[1]} callback={ this.getHandle }/>
            })
          })}
          
          {Object.entries(radioButton).map((item) => 
            <RadioButton name={item[0]} text={`Select your ${item[0]}`} value={radioButton[item[0]]} callback={ this.getHandle }/>
          )}

        </fieldset>
        <fieldset>
          
        </fieldset>
      </div>
    );
  }
}

export default App;
