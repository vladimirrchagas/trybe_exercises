// Manipulando Objetos

const usuario = {
  nome: 'vladimir',
  sobrenome: 'rambaldi'
}

const senha = (objeto, keyName, keyValue) => objeto.keyName = keyValue;

senha(usuario, 'Senha', 'vlad1234');

console.log (usuario); //{ nome: 'vladimir', sobrenome: 'rambaldi', keyName: 'vlad1234' }
