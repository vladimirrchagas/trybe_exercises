import React from 'react';
import { Redirect, Link } from 'react-router-dom'

const StrictAccess = (props) => {
  const { username, password } = props.user;
  if (username === 'joao' && password === 123) {
    return (
      <div>
        <p>Welcome João!</p>
        <Link to="/">Home</Link>
      </div>
    );
  }
  alert('Access Denied');
  return (<Redirect to='/' />);
}

export default StrictAccess;