const buttonWindow = document.querySelector('#lib-button');
  
buttonWindow.addEventListener('click', makeMadLib);

function makeMadLib() {
  document.getElementById('story').innerText = `${document.getElementById('person').value} really ${document.getElementById('adjective').value} ${document.getElementById('noun').value};`;
}