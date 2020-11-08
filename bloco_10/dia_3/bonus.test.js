const functions = require('./bonus');

describe('testing fetchJoke using mock', () => {
  it('should return one object defined on mock', () => {
    const object = {
      'id': '7h3oGtrOfxc',
      'joke': 'Whiteboards ... are remarkable.',
      'status': 200
    };
    functions.fetchJoke = jest.fn().mockReturnValue(object);
    expect(functions.fetchJoke()).toEqual(object);
  });
});