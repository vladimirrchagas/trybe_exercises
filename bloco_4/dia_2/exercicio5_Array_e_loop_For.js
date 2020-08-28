//Array utilizado para o exercício
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 5, descobrindo maior valor dentro de um array

let numeroMaior = numbers[0];

for (i = 1; i < numbers.length; i += 1) {
    if (numbers[i] > numeroMaior) {
        numeroMaior = numbers[i];
    }
}

console.log(numeroMaior);
