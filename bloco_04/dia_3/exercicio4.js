let n = 7;

if (n%2 != 0) { //Verificando se valor informado é ímpar, uma vez que a base da pirâmide tem que ser ímpar
    let espacoPiramide = Math.floor(n/2); //Determinando o valor inicial de espaços para o topo da pirâmide

    for (let i = 0; i < (Math.round(n/2)); i += 1) { //Determinando o número de linhas da pirâmide;
        let output = "";
        for (let j = 1; j <= n; j += 1) { //Realizando o preenchimento das linhas
            if ((j <= espacoPiramide) || (j > n-espacoPiramide)) { //Verifica o valor de j para que haja a inclusão de espaço ou de preenchimento
                output += " ";
            } else {
                output += "*";
            }
        }
        console.log(output);
        espacoPiramide -= 1;
    }
}
