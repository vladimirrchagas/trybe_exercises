import React, { Component } from 'react';
import '../css/form.css';

class Form extends Component {
  constructor() {
    super();

    this.getHandler = this.getHandler.bind(this);

    this.state ={
      state:'',
      adress:'',
      name:'',
      testimony:'',
      gender: '',
      futebol: false,
      volei: false
    }
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

        <label className='labels'>
          Digite Seu Endereço:
          <input name='adress' type='text' value={this.state.adress} onChange={this.getHandler}></input>
        </label>

        <label className='labels'>
          Digite seu nome Completo:
          <input name='name' type='text' value={this.state.name} onChange={this.getHandler}></input>
        </label>

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
      </form>
    );
  }
}

export default Form;