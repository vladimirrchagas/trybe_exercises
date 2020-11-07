const fetch = require('node-fetch');

const getRepos = async (url) => {
  return await fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
}

getRepos('https://api.github.com/users/tryber/repos');

module.exports = getRepos;