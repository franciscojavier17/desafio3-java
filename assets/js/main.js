const element = document.querySelector("#ele1")
element.getElementsByClassName.backgroundColor = "green"
const paint = function(setColor, color) {
    setColor.style.backgroundColor = color
}
element.addEventListener("click", () => paint(element, "yellow"));

const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");

document.addEventListener("keydown", function (event) {
	if (event.key === "a" || event.key === "A") {
		colorselect = "black";
		document.getElementById("msgText").innerHTML =
		document.getElementById("msgText").style.color = "black";
		console.log("cambia color 01 " + colorselect);
		return;
	}

	if (event.key === "s" || event.key === "S") {
		colorselect = "yellow";
		document.getElementById("msgText").innerHTML =
		document.getElementById("msgText").style.color = "yellow";
		console.log("cambia color 02 " + colorselect);
		return;
	}

	if (event.key === "d" || event.key === "D") {
		colorselect = "red";
		document.getElementById("msgText").innerHTML =
		document.getElementById("msgText").style.color = "red";
		console.log("cambia color 03 " + colorselect);
		return;
	}
});

function changeColor(evento) {
	const casilla = evento.target;
	casilla.style.background = colorselect;
	casilla.style.color = colorselectext;
	casilla.innerHTML = colorText;
}

div1.addEventListener("click", changeColor);
div2.addEventListener("click", changeColor);
div3.addEventListener("click", changeColor);
div4.addEventListener("click", changeColor)