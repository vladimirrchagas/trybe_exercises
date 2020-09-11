/**
 * Cor de fundo da tela; - ok
 * Cor do texto; - ok
 * Tamanho da fonte; - ok
 * Espaçamento entre as linhas do texto; - ok
 * Tipo da fonte (Font family).  
 */

window.onload = function() {

  if (localStorage['verifyAccess'] !== 'verificadis') {

    document.querySelector('h1').innerText = "Escolhis suas preferencis, e veja a magikis!!!!";

    document.querySelector('.mussum-paragraphs').style.color = 'black';

    document.querySelector('.button').addEventListener('click', function(){
      localStorage.setItem('verifyAccess', 'verificadis')

      localStorage.setItem('backgroundcolor', document.getElementById('backgroundcolor').value);

      localStorage.setItem('textcolor', document.getElementById('textcolor').value);

      localStorage.setItem('fontsize', document.getElementById('fontsize').value);

      localStorage.setItem('lineheight', document.getElementById('lineheight').value);

      localStorage.setItem('fontfamily', document.getElementById('fontfamily').value);

      document.body.removeChild(document.querySelector('.stylingsite'))

      setLocalstorageStyle ();

    })

  } else {

    document.body.removeChild(document.querySelector('.stylingsite'))

    setLocalstorageStyle ();

  }

  function setLocalstorageStyle() {

    document.querySelector('body').style.backgroundColor = localStorage['backgroundcolor'];

    document.querySelector('h1').innerText = 'Sua Leituris Diaris e Imperdivis';
    document.querySelector('h1').style.color = localStorage['textcolor'];
    document.querySelector('.mussum-paragraphs').style.color = localStorage['textcolor'];

    document.querySelector('.mussum-paragraphs').style.fontSize = localStorage['fontsize'] + 'px';

    document.querySelector('.mussum-paragraphs').style.lineHeight = localStorage['lineheight'] + 'px';

    document.querySelector('.mussum-paragraphs').style.fontFamily = localStorage['fontfamily'];
  };

};