function verificaPalindromoe(palavra) {
    let palavraInvertida = "";

    for(let i = palavra.length-1; i >= 0; i -= 1){
        palavraInvertida += palavra[i];
    }

    if (palavraInvertida == palavra){
        return true;
    } else {
        return false;
    }
}

let resultado = verificaPalindromoe("ovo");

console.log(resultado);
