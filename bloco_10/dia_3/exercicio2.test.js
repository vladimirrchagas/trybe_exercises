const service = require('./exercicio2');

describe('test division of numbers', () => {
  it('shoud return 10', () => {
    service.random100 = jest.fn().mockImplementationOnce((a,b) => a / b);
    expect(service.random100(15,3)).toBe(5);
    expect(service.random100).toHaveBeenCalledTimes(1);
  });
});
