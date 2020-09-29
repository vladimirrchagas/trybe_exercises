/* Crie uma função que receba um número e retorne seu fatorial.

Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 3 2 * 1 = 24.
*/

  const fatorial = (fatorando) => {
    let result = fatorando;
    for (let index = 1; index < fatorando; index += 1) {
      result = result * index;
    }

  return result

  }

// console.log(fatorial(5));

/*Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha. */


//tentativa 1, mas colocando mais parâmetros

  const fatorial1 = (fatorando1, index, result1) => index === fatorando1 ? result1*index : fatorial1(fatorando1, index+1, result1*index);

// console.log(fatorial1(4, 1, 1));

// tentativa 2

  const fat = fatorial3 => fatorial3 <= 1 ? 1 : fatorial3 * fat(fatorial3 - 1);

  console.log(fat(4));
