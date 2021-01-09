import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import duckImage from '../images/ducks-client.png';

class Home extends Component {
  render() {
    return (
      <div className="home-grid">
        <div className="links">
          <Link className="link" to="/login">Login</Link>
          <Link className="link" to="/signup">Sign Up</Link>
        </div>
        <div className="logo-system">
          <h1>Duck</h1>
          <img src={duckImage} alt="duck clients"/>
          <h1>Client System</h1>
        </div>
      </div>
    );
  }
}

export default Home;