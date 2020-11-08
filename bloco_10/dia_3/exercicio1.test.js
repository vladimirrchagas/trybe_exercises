const service = require('./exercicio1');

describe('test random number', () => {
  it('shoud return 10', () => {
    service.random100 = jest.fn().mockReturnValue(15);
    service.random100();
    expect(service.random100).toHaveBeenCalledTimes(1);
    expect(service.random100()).toBe(15);
    expect(service.random100).toHaveBeenCalledTimes(2);
  });
});
