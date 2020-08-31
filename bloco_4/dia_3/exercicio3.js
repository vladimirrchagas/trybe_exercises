let n = 5;
let output = "";
//Imprimindo um triangulo invertido
for (let i = n; i > 0; i -= 1) {
    output = "";
    for (let j = 1; j <= n; j += 1) {
        if(j<i) {
            output += " ";
        } else {
            output += "*";
        }
    }
    console.log(output);
}