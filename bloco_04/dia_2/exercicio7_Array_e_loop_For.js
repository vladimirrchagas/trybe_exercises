//Array utilizado para o exercício
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 7, encontrando o menor valor no array;

let numeroMenor = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] < numeroMenor) {
        numeroMenor = numbers[i];
    }
}

console.log(numeroMenor);
