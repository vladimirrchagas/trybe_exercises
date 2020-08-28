//Array utilizado para o exercício
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 6, descobrindo a quantidade de valores ímpares no array

let quantidadeDeValoresImpares = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 != 0){
        quantidadeDeValoresImpares += 1;
    }
}

console.log(quantidadeDeValoresImpares);
