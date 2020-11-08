const fetchAPI = require('./exercicio6');

jest.mock('./exercicio6');

describe('testing requirements of exercise 6', () => {
  afterEach(() => {
    fetchAPI.mockReset();
  })

  it('should return success', () => {
    fetchAPI.mockResolvedValue('request sucess');
    expect(fetchAPI()).resolves.toBe('request sucess');
  });

  it('should return fail', () => {
    fetchAPI.mockRejectedValue('request fail');
    expect(fetchAPI()).rejects.toBe('request fail');
  });
});
