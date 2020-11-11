let array = [2, 3, 2, 5, 8, 2, 3];

function verificaRepeticaoNumero(vetor) {
    let maiorRepetidor = vetor[0];
    let numRepeticoes = 0;
    let contador = 0;

    for (i = 0; i < vetor.length; i += 1){

        for (let j = 0; j < vetor.length; j += 1) {
            if (vetor[j] == vetor[i]) {
                contador += 1;
            }
        }

        if (contador > numRepeticoes){
            numRepeticoes = contador;
            maiorRepetidor = vetor[i];
        }

        contador = 0;

    }

    return maiorRepetidor;

}

let numeroQueMaisRepete = verificaRepeticaoNumero(array);

console.log(numeroQueMaisRepete);
