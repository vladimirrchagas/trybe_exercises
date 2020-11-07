const { getAnimalByName, getAnimalByAge } = require ('./exercicio6');

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimalByName('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalByName('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimalByAge(5).then(animal => {
        expect(animal).toEqual({ name: 'Preguiça', age: 5, type: 'Cat' });
      });
    });
  });

  describe('Quando não existe o animal com a idade procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalByAge(3).catch(error =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });
});