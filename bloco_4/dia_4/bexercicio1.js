let numeroRomano = "MMXVIII";

let valoresNumRomano = {
    i: 1,
    iv: 4,
    v: 5,
    ix: 9,
    x: 10,
    xl: 40,
    l: 50,
    xc: 90,
    c: 100,
    cd: 400,
    d: 500,
    cm: 900,
    m: 1000
}

function verificaNumeroRomano(valor) {
    let valorReal = 0;
    for (i = 0; i < valor.length; i += 1){
        for (let j in valoresNumRomano){
            if (valor[i] == j) {
                if (valorReal < valoresNumRomano[j]){
                    valorReal = valoresNumRomano [j]  - valorReal;
                } else {
                    valorReal += valoresNumRomano[j];
                }
            }
        }
    }

    return valorReal;
}

let numero = verificaNumeroRomano(numeroRomano.toLowerCase());

console.log(numero);
