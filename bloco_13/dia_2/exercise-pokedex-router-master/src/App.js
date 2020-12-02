import React, { Component } from 'react';
import './App.css';
import pokemons from './data.js';
import Pokedex from './Pokedex.jsx';
import Pokemon from './Pokemon.jsx';
import About from './About.jsx'
import Favorite from './Favorite.jsx'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

class App extends Component {


  constructor() {
    super();

    this.moreDetailTrue = this.moreDetailTrue.bind(this);
    this.moreDetailFalse = this.moreDetailFalse.bind(this);

    this.state = {
      moreDetail: false,
    }
  }

  moreDetailTrue() {
    this.setState(() => ({moreDetail: true}));
  }

  moreDetailFalse() {
    this.setState(() => ({moreDetail: false}));
  }



  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1> Pokedex </h1>
          <Link to="/" onClick={this.moreDetailFalse}><span>Home</span></Link>
          <Link to="/About" onClick={this.moreDetailFalse}><span>About</span></Link>
          <Link to="/Favorite" onClick={this.moreDetailFalse}><span>Favorite Pokemons</span></Link>
          <Switch>
            <Route exact path="/" render={() => <Pokedex pokemons={pokemons} callback={this.moreDetailTrue} moreDetail={this.state.moreDetail}/>} />
            <Route path="/About" component={About} />
            <Route path="/Favorite" component={Favorite} />
            <Route path="/pokemons/:id" render={(props) => <Pokemon {...props} pokemon={pokemons.filter((pokemon) => pokemon.id === parseInt(props.match.params.id))[0]} callback={this.moreDetail} moreDetail='true'/> } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;