
var color = document.getElementById('hexcode');
var viewer = document.getElementById('visor');
function event() {
	viewer.style.backgroundColor = color.value;
}
color.addEventListener('input',event);
