const uppercase = require ('./exercicio1')

describe('Test Uppercase', () => {
  it('shoud return all charachter as Upper Case', done => {
    uppercase('vladimir', (result) => {
      expect(result).toBe('VLADIMIR');
      done();
    });
  });
});
