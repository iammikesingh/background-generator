var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.querySelector('body');
var btn = document.querySelector('button');

css.textContent = "linear-gradient(to right, #fd66fd, #00FFFF)";

function setColor(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";"
}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandom(){
	var random1 = getRandomColor();
	var random2 = getRandomColor();
	body.style.background = "linear-gradient(to right, " + random1 + ", " + random2 + ")";
	css.textContent = body.style.background + ";"
	color1.value = random1;
	color2.value = random2;
}


btn.addEventListener('click', setRandom);
color1.addEventListener('input', setColor);
color2.addEventListener('input', setColor);



