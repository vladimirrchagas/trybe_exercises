const assert = require('assert');
// escreva a função removeMiddle aqui

const removeMiddle = (word) => {
  const middlePoint = Math.round(word.length / 2) - 1;
  const outputWord = [word[middlePoint]];
  word.splice(middlePoint, 1);
  return outputWord;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput, 'validation1');
assert.deepStrictEqual(words, expectedWords, 'validation2');
