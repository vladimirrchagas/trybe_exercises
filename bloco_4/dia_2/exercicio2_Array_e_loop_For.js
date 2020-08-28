//Array utilizado para o exercício
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 2, soma de todos os valores do array
let somaValoresArray = 0;

for (let i = 0; i < numbers.length; i += 1) {
    somaValoresArray += numbers[i];
}

console.log(somaValoresArray);
