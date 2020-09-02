let word = "trybe";

let ending = "be";

function verificaFimPalavra(palavra, fim) {
    if (palavra.length >= fim.length){

        let fimWord = "";

        for (i = 0; i < fim.length; i += 1){
            fimWord += palavra[palavra.length-fim.length+i];
        }

        console.log(fimWord);

        if (fimWord == fim){
            return true;
        } else {
            return false;
        }

    } else {
        return false;
    }

}

let validador = verificaFimPalavra(word, ending);

console.log(validador);
