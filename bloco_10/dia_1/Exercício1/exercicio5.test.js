const { object1, object2, object3 } = require('./exercicio5');

describe('validating objects', () => {
  it('should be return that objects 1 and 2 are equals', () => {
    expect(object1).toEqual(object2);
  });

  it('should be return that objects 1 and 3 are equals', () => {
    expect(object1).not.toEqual(object3);
  });

  it('should be return that objects 2 and 3 are equals', () => {
    expect(object2).not.toEqual(object3);
  });
});