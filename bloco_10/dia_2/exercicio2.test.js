const getUserName = require ('./exercício2');

describe('When user exist', () =>{
  it('shold find id required', () => {
    expect.assertions(1);
    return getUserName(4).then(name => {
      expect(name).toBe('Mark');
    });
  });

  it('shold not find id required when it do not exist on user list', () => {
    expect.assertions(1);
    return getUserName(1).catch(error => {
      expect(error).toEqual({error: 'User with 1 not found.'});
    });
  });
});
