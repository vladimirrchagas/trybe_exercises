const API_URL = 'https://icanhazdadjoke.com/';

const showJoke = (data) => {
  const jokeWindow = document.getElementById('jokeContainer');

  jokeWindow.innerText = data;
}

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then((data) => showJoke(data.joke));
};

window.onload = () => fetchJoke();
