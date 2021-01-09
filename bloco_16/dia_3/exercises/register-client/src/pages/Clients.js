import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { logOut } from '../redux/actions';

import ClientGrid from '../components/ClientGrid';

class Clients extends Component {
  render() {
    const { clients, logOut } = this.props;
    return (
      <div className="grid">
        {clients.length === 0
        ?
        <div className="grid">
          <h1>Without Clients Registered</h1>
          <Link className="link link-register" to="clientregister">Register Here Your Client</Link>
        </div>
        :
        <div className="grid">
          <div className="links">
            <h1>Client List</h1>
            <Link className="link" to="/" onClick={logOut}>Log Out</Link>
          </div>
          <ClientGrid clients={clients}/>
        </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clients: state.cliReg.client,
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Clients);