let n = 8;

function somaAnteriores(numero) {
    let resultado = 0;
    for (i = 1; i <= numero; i += 1){
        resultado += i;
    }

    return resultado;
}

let somatoria = somaAnteriores(n);

console.log(somatoria);
