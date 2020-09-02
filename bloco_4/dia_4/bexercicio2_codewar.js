let numero1 = 555555;
let numero2 = 33333;

// resultado esperado 213

function add(num1, num2) {
    //Transformando os valores em string
    let n1 = num1.toString();
    let n2 = num2.toString();
  
    //transformando os valores em array
    n1 = n1.split("");
    n2 = n2.split("");
  
    //declaração do array totalizador
    let total = [];

    /*verificação do maior array e ajustes de tamanho acrescentando '0'
    no início do array*/
    if (n1.length > n2.length) {
        for (let i = 0; i < n1.length-n2.length+1; i += 1){
            n2.unshift('0');
        }        
    }

    if (n2.length > n1.length){
        for (let i = 0; i < n2.length-n1.length+1; i += 1){
            n1.unshift('0');
        }   
    }

    /*Convertendo os valores de cada posição do array de string para int
    e realizando a soma desses, colocando-os no array totalizador*/
    for (let i = 0; i < n1.length; i += 1){
        total[i] = parseInt(n1[i]) + parseInt(n2[i]);
    }

    /*Convertendo array totalizador para string utilizando a o metodo .join
    e convertendo o string em int com o metodo parseInt*/
    return parseInt(total.join(""));

}

let resultado = add (numero1, numero2);

console.log(resultado);
