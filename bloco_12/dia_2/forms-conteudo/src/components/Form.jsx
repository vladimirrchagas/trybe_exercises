import React, { Component } from 'react';
import '../css/form.css';
import Email from './input/Email.jsx'
import Age from './input/Age.jsx'

class Form extends Component {
  constructor() {
    super();

    this.getHandler = this.getHandler.bind(this);
    this.getError = this.getError.bind(this);

    this.state ={
      state:'',
      email:'',
      name:'',
      age: 0,
      testimony:'',
      gender: '',
      futebol: false,
      volei: false,
      formWithError: ''
    }
  }

  getError = ({ target }) => {
    const { name } = target;
    const errorMsg = `Erro no ${name}`;
    this.setState(() => ({ formWithError: errorMsg}))
  }

  getHandler = ({ target }) => {
    const { name } = target;
    let value = '';

    switch(target.type) {
      case 'selector':
        value = target.options[target.selectedIndex].text;
        break;
      case 'checkbox':
        value = target.checked;
        break;
      default:
        value = target.value;
        break;
    }

    if (target.error !== undefined) this.getError(target);

    this.setState(() => ({
      [name]: value,
    }));
  }

  render() {
    return (
      <form className='form'>
        <label className='labels'>
          Selecione um Estado:
          <select name='state' type='selector' onChange={this.getHandler}>
            <option value='Minas Gerais'>Minas Gerais</option>
            <option value='São Paulo'>São Paulo</option>
            <option value='Rio de Janeiro'>Rio de Janeiro</option>
            <option value='Santa Catarina'>Santa Catarina</option>
            <option value='Rio Grande do Sul'>Rio Grande do Sul</option>
          </select>
        </label>

        <Email value={this.state.email} callback={this.getHandler} callbackError={this.getError} errorMsg={this.formWithError}/>

        <label className='labels'>
          Digite seu Nome Completo:
          <input name='name' type='text' value={this.state.name} onChange={this.getHandler}></input>
        </label>

        <Age value={this.state.age} callback={this.getHandler} callbackError={this.getError} errorMsg={this.formWithError}/>

        <label className='labels'>
          Digite um depoimento para a Trybe:
          <textarea type="textarea" name='testimony' value={this.state.testimony} onChange={this.getHandler}></textarea>
        </label>

        <label className='labels'>
          Escolha seus esportes favoritos:
          <input type='checkbox' name='futebol' value='Masculino' onChange={this.getHandler}/>
          <label htmlFor="gender">Masculino</label>

          <input type='checkbox' name='volei' value='Feminino' onChange={this.getHandler}/>
          <label htmlFor="gender">Feminino</label>
        </label>

        <span></span>
      </form>
    );
  }
}

export default Form;