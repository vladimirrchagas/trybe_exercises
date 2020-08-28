//Exercicio 3 Bonus, Criação de um novo array a partir do array numbers porém multiplicando em pares os valores do array numbers

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let newNumbers = [];

for (let i = 0; i < numbers.length; i += 1){
    if (i != numbers.length-1) {
        newNumbers.push(numbers[i]*numbers[i+1]);
    } else {
        newNumbers.push(numbers[i]*2);   
    }
}

console.log(newNumbers);
