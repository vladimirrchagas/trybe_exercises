const service = require('./exercicio3');

describe('test multiplication of numbers', () => {
  afterEach(() => {
    service.random100.mockReset();
  });

  it('shoud return 27', () => {
    service.random100 = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
    expect(service.random100(3, 3, 3)).toBe(27);
    expect(service.random100).toHaveBeenCalledTimes(1);
  });
});

describe('test double of number', () => {
  it('shoud return 9', () => {
    service.random100 = jest.fn().mockImplementationOnce((a) => a * a);
    expect(service.random100(3)).toBe(9);
    expect(service.random100).toHaveBeenCalledTimes(1);
  });
});
