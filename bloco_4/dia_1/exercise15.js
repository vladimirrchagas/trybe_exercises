const salarioBruto = 2000.00;
let salarioBase;
let valorInss;
let valorIrpf;
let salarioLiquido;
let aliquotaInss;
let aliquotaIrpf;

//Calculando alíquota do INSS de acordo com o salário bruto e posteriormente o salário base
if (salarioBruto <= 1556.94){
    aliquotaInss = salarioBruto * 0.08;
    salarioBase = salarioBruto - aliquotaInss;
} else if (salarioBruto <= 2594.92) {
    aliquotaInss = salarioBruto * 0.09;   
    salarioBase = salarioBruto - aliquotaInss;
} else if (salarioBruto <= 5189.82) {
    aliquotaInss = salarioBruto * 0.11;
    salarioBase = salarioBruto - aliquotaInss;
} else {
    aliquotaInss = 570.88;
    salarioBase = salarioBruto - aliquotaInss;
}

//Calculando o Imposto de renda de acordo com o salário base e posteriormente o salário líquido
if (salarioBase <= 1903.98){
    aliquotaIrpf = 0;
    salarioLiquido = salarioBase - aliquotaIrpf;
} else if (salarioBase <= 2826.65) {
    aliquotaIrpf = (salarioBase * 0.075) - 142.80;
    salarioLiquido = salarioBase - aliquotaIrpf;
} else if (salarioBase <= 3751.05) {
    aliquotaIrpf = (salarioBase * 0.15) - 354.80;
    salarioLiquido = salarioBase - aliquotaIrpf;
} else if (salarioBase <= 4664.68) {
    aliquotaIrpf = (salarioBase * 0.225) - 636.13;
    salarioLiquido = salarioBase - aliquotaIrpf;
} else {
    aliquotaIrpf = (salarioBase * 0.275) - 869.36;
    salarioLiquido = salarioBase - aliquotaIrpf;
}

console.log(salarioLiquido);
