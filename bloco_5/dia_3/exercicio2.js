function squareNumber(num) {
  var squaredNumber = num * num;
  //console.log('The result of squaring the number ' + num + ' is ' + squaredNumber);
  return squaredNumber;
}

function halfOf(num) {
  var half = num / 2;
  //console.log('Half of ' + num + ' is ' +  half);
  return half;
}

function percentOf(num1, num2) {
  var percent = (num1/num2) * 100;
  //console.log(num1 + ' is ' + percent + '% of ' + num2);
  return percent;
}

function areaOfCircle(radius) {
  var area = Math.PI * squareNumber(radius);
  //console.log('The area of circle with radius ' + radius + ' is ' + area);
  return area;
}

/*function doCrazyStuff(num) {
  var half    = halfOf(num);
  var squared = squareNumber(half);
  var area    = areaOfCircle(squared);
  var result  = percentOf(squared, area);
}*/

document.getElementById('square-button').addEventListener('click', function() {
  document.getElementById('solution').innerText = squareNumber(document.getElementById('square-input').value);
});

document.getElementById('half-button').addEventListener('click', function() {
  document.getElementById('solution').innerText = halfOf(document.getElementById('half-input').value);
});

document.getElementById('percent-button').addEventListener('click', function() {
  document.getElementById('solution').innerText = percentOf(document.getElementById('percent1-input').value, document.getElementById('percent2-input').value);
});

document.getElementById('area-button').addEventListener('click', function(){
  document.getElementById('solution').innerText = areaOfCircle(document.getElementById('area-input').value);
});