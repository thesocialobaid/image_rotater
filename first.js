let angle = 0;
const image = document.getElementById('myImage');
const button = document.getElementById('rotateBtn');

button.addEventListener('click', () => {
  angle += 90;
  image.style.transform = `rotate(${angle}deg)`;
});

