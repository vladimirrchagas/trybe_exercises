const functions = require('./exercicio4');

jest.mock('./exercicio4');

describe('test functions mocked', () => {

  it('should return string in lower case instead of uppercase', () => {
    functions.upperCase.mockImplementation((string) => string.toLowerCase());
    expect(functions.upperCase('TrYbE')).toBe('trybe');
  });

  it('should return last char of string instead of first char', () => {
    functions.firstChar.mockImplementation((string) => string.charAt(string.length - 1));
    expect(functions.firstChar('TrYbE')).toBe('E');
  });

  it('should return concatenation of 3 string instead of concatenation of 2 strings', () => {
    functions.concatTwoStrings.mockImplementation((string1, string2, string3) => string1 + string2 + string3);
    expect(functions.concatTwoStrings('TrYbE', ' A Melhor', ' Escolha!')).toBe('TrYbE A Melhor Escolha!');
  });
});