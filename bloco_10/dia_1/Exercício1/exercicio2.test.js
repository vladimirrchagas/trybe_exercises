const myRemove = require('./exercicio2');

describe('myRemove', () => {
  // 1. Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  test('if are removing number passed', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  // 2. Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  test('if are returning correct array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  

  // 3. Verifique se o array passado por parâmetro não sofreu alterações
  test('if original array are not changed after function call', () => {
    let array = [9, 10, 15, 23];
    myRemove(array, 5);
    expect(array).toEqual([9, 10, 15, 23]);
  })

  // 4. Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
  test('if return expected array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})
