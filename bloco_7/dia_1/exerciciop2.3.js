const btn = document.querySelector('#button-clik');
const value = document.querySelector('#nmb-click');
let clickCount = 0;

btn.addEventListener('click', () => {
  clickCount = clickCount + 1;
  value.innerHTML = clickCount;
})
