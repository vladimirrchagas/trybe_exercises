//Exercise 1
let image = document.querySelector('#cat1');
image.style.marginLeft = '0px';

function catWalk(){
  image.style.marginLeft = (parseInt(image.style.marginLeft) + 10) + 'px';
}
window.setInterval(catWalk, 50);

//Bonus 1
let image2 = document.querySelector('#cat2');
image2.style.marginLeft = '0px';
windowWidth = window.innerWidth;

function catWalk2(){
  if (parseInt(image2.style.marginLeft) < windowWidth) {
    image2.style.marginLeft = (parseInt(image2.style.marginLeft) + 10) + 'px';
  } else {
    image2.style.marginLeft = '-150px';
  }
}
window.setInterval(catWalk2, 50);

//Bonus 2
let image3 = document.querySelector('#cat3');
image3.style.marginLeft = '0px';
windowWidth = window.innerWidth;
let turnBack = false;

function catWalk3(){
  if (parseInt(image3.style.marginLeft) < windowWidth && !turnBack) {
    image3.className = '';
    image3.style.marginLeft = (parseInt(image3.style.marginLeft) + 10) + 'px';
    if (parseInt(image3.style.marginLeft) > windowWidth) {
      turnBack = true;
    }
  } else if (parseInt(image3.style.marginLeft) > -150 && turnBack) {
      image3.className = 'esquerda';
      image3.style.marginLeft = (parseInt(image3.style.marginLeft) - 10) + 'px';
      if (parseInt(image3.style.marginLeft) <= -150) {
        turnBack = false;
      }
  }
}
window.setInterval(catWalk3, 50);

//Bonus 3
let image4 = document.querySelector('#cat4');
image4.style.marginLeft = '0px';
let turnBack2 = false;
let center = 0;

function catWalk4(){
if (parseInt(image4.style.marginLeft) < windowWidth && !turnBack2) {
    image4.className = '';
    image4.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
    image4.style.marginLeft = (parseInt(image4.style.marginLeft) + 10) + 'px';

    if (parseInt(image4.style.marginLeft) > (windowWidth/2-75) && center == 0) {
      image4.src = "img/cat-dancing.gif"
      center = 1;
      clearInterval(time);
      setTimeout(function(){
        time = setInterval(catWalk4, 50);
      }, 10000);
    }

    if (parseInt(image4.style.marginLeft) > windowWidth) {
      turnBack2 = true;
      center = 0;
    }
  } else if (parseInt(image4.style.marginLeft) > -150 && turnBack2) {
      image4.className = 'esquerda';
      image4.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
      image4.style.marginLeft = (parseInt(image4.style.marginLeft) - 10) + 'px';

      if (parseInt(image4.style.marginLeft) < windowWidth/2 && center == 0) {
        image4.src = "img/cat-dancing.gif";
        center = -1;
        clearInterval(time);
        setTimeout(function(){
          time = setInterval(catWalk4, 50);
        }, 10000);
      }

      if (parseInt(image4.style.marginLeft) <= -150) {
        turnBack2 = false;
        center = 0;
      }
  }
}
let time = setInterval(catWalk4, 50);
window.time