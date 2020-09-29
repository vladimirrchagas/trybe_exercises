/* Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string. Exemplo:
String determinada: "Tryber x aqui!"
Parâmetro: "Bebeto"
Retorno: "Tryber Bebeto aqui!" */

const string = 'Trybe x aqui!'

const changeX = wordToChangeX => string.replace('x', wordToChangeX);

const resultFunc1 = changeX('Bebeto');

console.log(resultFunc1);

/* Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills. */

const array = ['JavaScript', 'HTML', 'CSS', 'Soft Skills', 'Shell'];

/* Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string. Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
JavaScript;
HTML; ...
#goTrybe". */

const func2 = (array, resultFunc1) => {
  array = array.sort();

  console.log(`${resultFunc1} Minhas cinco principais habilidades são:`)

  for (let index = 0; index < array.length; index += 1) {
    console.log(array[index]);
  }
}

func2(array, resultFunc1)
