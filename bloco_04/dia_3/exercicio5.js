let n = 5;

if (n%2 != 0) { //Verificando se valor informado é ímpar, uma vez que a base da pirâmide tem que ser ímpar
    let espacoPiramide = Math.floor(n/2); //Determinando o valor inicial de espaços para o topo da pirâmide

    for (let i = 0; i < (Math.round(n/2)); i += 1) { //Determinando o número de linhas da pirâmide;
        let output = "";
        for (let j = 1; j <= n; j += 1) { //Realizando o preenchimento das linhas
            if ((j == espacoPiramide+1) || (j == n-espacoPiramide) || espacoPiramide == 0) { //Valida se j é o valor sucessor quantidade de espaços do início da pirâmide ou antecessor ao valor de espaço no fim da pirâmide e preenche.
                output += "*";
            } else { //caso contrário deixa em branco
                output += " ";
            }
        }
        console.log(output);
        espacoPiramide -= 1;
    }
} else {
    console.log("O valor da base da pirâmide deve ser ímpar!");
}
