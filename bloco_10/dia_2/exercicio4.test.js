const getRepos = require('./exercicio4');

describe('Get Repo', () => {
  it('Shoud return repo name "sd-01-week4-5-project-todo-list" found on list', async () =>{
    const repo = await getRepos('https://api.github.com/users/tryber/repos');

    expect(repo.filter(repo => repo === 'sd-01-week4-5-project-todo-list')).not.toEqual(['sd-01-week4-5-project-todo-list']);

    expect(repo.filter(repo => repo === 'sd-01-week4-5-project-meme-generator')).not.toEqual(['sd-01-week4-5-project-meme-generator']);
  });
});