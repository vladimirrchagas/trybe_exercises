let array = [2, 4, 6, 7, 10, 0, -3];

function indiceDoMenorNumeroDoArray(vetor) {
    let menorValor = vetor[0];
    let indiceMenorValor = 0;

    for (let i = 1; i < vetor.length; i += 1) {
        if (vetor[i] < menorValor){
            menorValor = vetor[i];
            indiceMenorValor = i;
        }
    }

    return indiceMenorValor;
}

let indice = indiceDoMenorNumeroDoArray(array);

console.log(indice);
