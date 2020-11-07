const getUserName = require ('./exercicio3');

describe('Get User Name (using async/await', () => {
  it('Should return user name when found numberID on the list', async () => {
    const userName = await getUserName(4);
    expect(userName).toBe('Mark');
  });

  it('Should not return user name when not found numberID on the list', async () => {
    try {
      await getUserName(1);
    } catch (error) {
      expect(error).toEqual({error: 'User with 1 not found.'});
    }
  });
});
