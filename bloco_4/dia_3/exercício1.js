let n = 7;
let output;
//Imprimindo um quadrado
if (n > 0) { //verificando se o valor recebido é maior que 0
    for (let i = 0; i < n; i += 1){ //for que definirá as linhas do quadrado
        output = ""
        for (let j = 0; j < n; j += 1){ //for que definirá as colunas do quadrado
            output += "*"
        }
        console.log(output);
    }
}
