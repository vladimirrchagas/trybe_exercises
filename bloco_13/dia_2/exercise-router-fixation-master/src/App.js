import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import Home from './Home.jsx';
import About from './About.jsx';
import Users from './Users.jsx';
import StrictAccess from './StrictAccess.jsx';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to='/strict-access'>Strict Access</Link>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/users/:id" 
            render={(props) => 
              <Users {...props} greetingMessage="Good Morning"/>}/>
          <Route path="/strict-access" 
            render={() => 
              <StrictAccess user={{username: 'joao', password: 123}} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;