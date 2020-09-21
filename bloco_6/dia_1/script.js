// Javascript to generate <options> with brazilian states values
const form = document.querySelector('#form1');
const states = document.querySelector('#estado');
const buttonFinishForm = document.querySelector('#finaliza-form');
const buttonResetForm = document.querySelector('#limpa-form');
const dateMsg = document.querySelector('#data-msg');
const date = document.querySelector('#data');
const inputs = document.querySelectorAll('input');
const spans = document.querySelectorAll('span');
const name = document.querySelector('#nome');
const email = document.querySelector('#email');
const cpf = document.querySelector('#cpf');
const adress = document.querySelector('#endereco');
const city = document.querySelector('#cidade');
const type = document.querySelector('#tipo');
const type1 = document.querySelector('#casa1');
const type2 = document.querySelector('#casa2');
const cvResume = document.querySelector('#resumocv');
const jobTitle = document.querySelector('#cargo');
const jobDescription = document.querySelector('#desc-cargo');

const brazilStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

for (let index = 0; index < brazilStates.length; index += 1) {
  const option = document.createElement('option');
  option.setAttribute = ('required');
  option.value = brazilStates[index];
  option.innerText = brazilStates[index];
  states.appendChild(option);
};

for (let index = 0; index < inputs.length; index += 1) {
  inputs[index].addEventListener('keyup', clearSpanClass);
};

function clearSpanClass() {
  for (let index = 0; index < spans.length; index += 1) {
    spans[index].className = '';
  }
}

function divCreation() {
  if (type1.checked) {
    typeChosed = 'Casa';
  } else {
    typeChosed = 'Apartamento';
  }
  const div = document.createElement('div');
  div.id = 'resumoGeral';
  document.body.appendChild(div);

  const p = document.createElement('p');
  p.innerText = `Nome: ${name.value} \n
                 Email: ${email.value} \n
                 CPF: ${cpf.value} \n
                 Endereço: ${adress.value} \n
                 Cidade: ${city.value} \n
                 Tipo: ${typeChosed} \n
                 Resumo do CV: ${cvResume.value} \n
                 Cargo: ${jobTitle.value} \n
                 Descrição do Cargo: ${jobDescription.value} \n
                 Data de Início: ${date.value}`

  document.querySelector('#resumoGeral').appendChild(p);
                 
};

function validationDate() {
  if (date.value[2] !== "/" || date.value[5] !== "/" || date.value.length !== 10) {
    dateMsg.innerText = "Por favor insira data no formato dd/mm/aaaa!";
    dateMsg.className = 'alert';
    return false;
  } else if (date.value.slice(0,2) < 0 || date.value.slice(0,2) > 31) {
    dateMsg.innerText = "Por favor insira um dia válido!";
    dateMsg.className = 'alert';
    return false;
  } else if (date.value.slice(3,5) < 0 || date.value.slice(3,5) > 12) {
    dateMsg.innerText= "Por favor insira um mês válido!";
    dateMsg.className = 'alert';
    return false;
  } else if (date.value.slice(6,10) < 0) {
    dateMsg.innerText = "Por favor insira um ano válido!";
    dateMsg.className = 'alert';
    return false;
  } else {
    return true;
  }
};

function validateInputs() {
  switch (true) {
    case (name.value == ""):
      name.nextElementSibling.className = 'alert';
      return false;
    case (email.value == ""):
      email.nextElementSibling.className = 'alert';
      return false;
    case (cpf.value == ""):
      cpf.nextElementSibling.className = 'alert';
      return false;
    case (adress.value == ""):
      adress.nextElementSibling.className = 'alert';
      return false;
    case (city.value == ""):
      city.nextElementSibling.className = 'alert';
      return false;
    case (!type1.checked && !type2.checked):
      type.nextElementSibling.className = 'alert';
      return false;
    case (cvResume.value == ""):
      cvResume.nextElementSibling.className = 'alert';
      return false;
    case (jobTitle.value == ""):
      jobTitle.nextElementSibling.className = 'alert';
      return false;
    case (jobDescription.value == ""):
      jobDescription.nextElementSibling.className = 'alert';
      return false;
    default:
      return true;    
  }
};

buttonFinishForm.addEventListener('click', function () {
  event.preventDefault();
  clearSpanClass();
  if(validateInputs() && validationDate()) {
    divCreation();
  }
});

buttonResetForm.addEventListener('click', function () {
  form.reset();
  document.body.removeChild(document.querySelector('#resumoGeral'))
});
