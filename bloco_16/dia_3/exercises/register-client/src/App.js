import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ClientRegister from './pages/ClientRegister';
import PageNotFound from './pages/PageNotFound';
import './App.css';
import './toast/toastr.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/clients" component={ Clients } />
            <Route path="/login" component={ Login } />
            <Route path="/signup" component={ SignUp } />
            <Route path="/clientregister" component={ ClientRegister } />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
