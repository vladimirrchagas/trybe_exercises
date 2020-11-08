const { upperCase } = require('./exercicio4');
const functions = require('./exercicio4');

describe('test functions mocked', () => {

  it('should return string in lower case instead of uppercase', () => {
    functions.upperCase = jest.spyOn(functions, 'upperCase')
        .mockImplementation((string) => string.toLowerCase());

    functions.upperCase('TrYbE');
    expect(functions.upperCase).toHaveBeenCalled();
    expect(functions.upperCase('TrYbE')).toBe('trybe');
  });

  it('should validate original function', () => {
    functions.upperCase.mockRestore();
    expect(functions.upperCase('TrYbE')).toBe('TRYBE');
  });

});