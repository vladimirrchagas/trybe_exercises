const valorVendaProduto = 0;
const valorCustoProduto = 0;
let valorCustoTotal;
let lucro;

valorCustoTotal = valorCustoProduto + (valorCustoProduto * 0.2);
lucro = valorVendaProduto - valorCustoTotal;

lucroTotal = 1000 * lucro;

if (valorVendaProduto >= 0 && valorCustoProduto >= 0) {
    console.log(lucroTotal);
} else {
    if (valorCustoProduto < 0) {
        console.log("valor de custo não pode ser menor que 0!");
    } else {
        console.log("valor de venda não pode ser menor que 0!");
    }
}
