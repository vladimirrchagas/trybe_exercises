const sum = require('./exercicio1');

describe ('sum', () => {
  
  test('shoud be sum of numbers', () => {
    //1. Teste se o retorno de sum(4, 5) é 9
    expect(sum(4, 5)).toBe(9);
    // 2. Teste se o retorno de sum(0, 0) é 0
    expect(sum(0, 0)).toBe(0);
  });
  

  test('shoud be an error message when send string parameters', () => {
    expect(() => sum(4, '5')).toThrow();
  });
  
  test('shoud be an error', () => {
    expect(sum).toThrowError(new Error('parameters must be numbers'));
  });
})
