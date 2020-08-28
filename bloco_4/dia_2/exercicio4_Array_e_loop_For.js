//Array utilizado para o exercício
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 4, impressão de mensagens de acordo com o valor da média aritmetica

let somaValoresArray2 = 0;
let mediaAritmetica = 0;

for (let i = 0; i < numbers.length; i += 1) {
    somaValoresArray2 += numbers[i];
}

mediaAritmetica = somaValoresArray2 / numbers.length

if (mediaAritmetica > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}
