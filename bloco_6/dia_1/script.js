// Javascript para geração dos <options> dos estados
const estados = document.querySelector('#estado');

const estadosBrasileiros = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

for (let index = 0; index < estadosBrasileiros.length; index += 1) {
  const option = document.createElement('option');
  option.setAttribute = ('required', 'required');
  option.value = estadosBrasileiros[index];
  option.innerText = estadosBrasileiros[index];
  estados.appendChild(option);
}