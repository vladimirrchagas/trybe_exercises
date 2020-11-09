import React from 'react';
import './App.css'
import FirstApp from './Component'

const task = (value) => {
  return (<li>{value}</li>);
};

const commitments = [
  'Reunião de Professores',
  'Reunião de Coordenadores',
  'Reunião de Gestores',
  'Reunião de Alunos'
];

const commitmentsShow = commitments.map((commitment) => task(commitment));

function App() {
  return commitmentsShow;
}

export default App;
