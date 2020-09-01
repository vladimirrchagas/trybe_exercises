let array = [2, 3, 6, 7, 10, 11];

function indiceDoMaiorNumeroDoArray(vetor) {
    let maiorValor = vetor[0];
    let indiceMaiorValor = 0;

    for (let i = 1; i < vetor.length; i += 1) {
        if (vetor[i] > maiorValor){
            maiorValor = vetor[i];
            indiceMaiorValor = i;
        }
    }

    return indiceMaiorValor;
}

let indice = indiceDoMaiorNumeroDoArray(array);

console.log(indice);
