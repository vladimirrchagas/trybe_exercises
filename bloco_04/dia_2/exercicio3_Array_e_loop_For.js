//Array utilizado para o exercício
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 3, média aritmética dos valores do array
let somaValoresArray2 = 0;
let mediaAritmetica = 0;

for (let i = 0; i < numbers.length; i += 1) {
    somaValoresArray2 += numbers[i];
}

mediaAritmetica = somaValoresArray2 / numbers.length

console.log(mediaAritmetica);
