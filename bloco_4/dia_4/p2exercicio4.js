let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNomeNoArray(nome) {
    let maiorString = array[0];

    for (let i = 0; i < nome.length; i += 1){
        if (nome[i].length > maiorString.length){
            maiorString = nome[i];
        }
    }

    return maiorString;
}

let maiorNome = maiorNomeNoArray(array);

console.log(maiorNome);
