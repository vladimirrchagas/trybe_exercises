const myFizzBuzz = require('./exercicio4');

describe ('myFizzBuzz', () => {
  // 1. Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
  it('should return fizzbuzz for numbers divisible for 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  // 2. Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
  it('should return fizz for numbers divisible for 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  // 3. Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
  it('should return buzz for numbers divisible only for 5', () => {
    expect(myFizzBuzz(20)).toBe('buzz');
  });

  // 4. Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
  it('should retunt the self number if not divisible for 3 and 5', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  // 5. Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
  it('should return false for input not equal to numbers', () => {
    expect(myFizzBuzz('9')).toBe(false);
  });
})
