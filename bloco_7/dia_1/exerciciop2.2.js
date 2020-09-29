/* Crie uma função que receba uma frase e retorne qual a maior palavra.

Exemplo: 

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

*/

const longestWord = (stringPhrase) => {
  const words = stringPhrase.split(' ');
  let check = 0;
  let longestWord = '';
  for (let index = 0; index < words.length; index += 1) {
    if (words[index].length > check) {
      longestWord = words[index];
      check = words[index].length;
    }
  }
  return longestWord;
}

console.log(longestWord("Antônio foi no banheirooooooo e não sabemos o que aconteceu"));