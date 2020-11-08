const adventure = require('../src/setupTeardown');
/*
Num universo não tão distante, um grupo de aventureiros da Trybe enfrentam uma série de testes.
O grupo parte em direção ao sucesso, mas,
devido a ameaça de criaturas temíveis, o grupo não chegará inteiro ao fim.
Após cada aventura um de nossos aventureiros cairá.
Cada um dos testes abaixo verifica a quantidade de aventureiros após cada iteração.
Sua missão aqui é:

  - Use a função randomAttack do objeto adventure que remove um dos aventureiros toda vez que é chamada, ela deve funcionar entre cada teste.

  Opcional:
  - Para ficar mais visível, imprima na tela após cada teste o grupo de aventureiros restante.
  - No fim dos testes, imprima uma mensagem com o nome do aventureiro que sobreviveu.

PS: Os codinomes dos aventureiros são reais! Tentem descobrir quem é quem!

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/
beforeEach(() => {
  adventure.randomAttack();
  if (adventure.specialists.length > 1) {
    // adventure.specialists.forEach(({ nome, classe }) => {
    //   console.log(`Wow, Trybe Avanger ${nome} of class ${classe}, survive!!!`);
    // });
    console.log('See below the list of avengers that keep alive:');
    console.table(adventure.specialists);
  } else {
    const { nome, classe } = adventure.specialists[0];
    console.log(`Wow, The Last and M... F... Trybe Avanger ${nome} of class ${classe}, survive!!!`);
  }
});

describe('quem sobreviveu?', () => {
  // Adicione seu código aqui
  test('depois da primeira aventura', () => {
    expect(adventure.specialists.length).toBe(5);
  });
  test('depois da segunda aventura', () => {
    expect(adventure.specialists.length).toBe(4);
  });
  test('depois da terceira aventura', () => {
    expect(adventure.specialists.length).toBe(3);
  });
  test('depois da quarta aventura', () => {
    expect(adventure.specialists.length).toBe(2);
  });
  test('depois da quinta aventura', () => {
    expect(adventure.specialists.length).toBe(1);
  });
});
