const myRemoveWithoutCopy = require('./exercicio3');

describe('myRemoveWithoutCopy', () => {

  // 1. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
  test('if return expected array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })

  // 2. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  it('should not return array specified', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })

  // 3. Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
  it('should return array without changes', () => {
    const array = [6, 7, 8, 9, 10];
    myRemoveWithoutCopy(array, 8);
    
    expect(array).not.toEqual([6, 7, 8, 9, 10]);
  });


  // 4. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
  it('should return correct array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

});
