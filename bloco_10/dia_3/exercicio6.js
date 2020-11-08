const url = 'https://dog.ceo/dog-api/';

const fetch = require('node-fetch');

const fetchAPI = () => {
  return fetch(url)
    .then((resolve) => resolve)
    .catch((error) => new Error('Deu ruim!'));
}

module.exports = fetchAPI;