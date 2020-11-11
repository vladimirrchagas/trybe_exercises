let numero = 13;
let validaPrimo = 0;

for (let i = 1; i <= numero; i += 1) {
    if (numero % i == 0) {
        validaPrimo += 1;
    }
}

if (validaPrimo < 3) {
    console.log('Número '+numero+' é primo!')
} else {
    console.log('Número '+numero+' não é primo!')    
}
