var topPosition = 200;
var leftPosition = 508;

document.addEventListener('keydown', moveSquare);
function moveSquare(e) {

    var square = document.getElementById("square");
	square.style.position = "absolute";
	square.style.left = leftPosition + "px";
	square.style.top = topPosition + "px";
    square.style.visibility = "visible";    

	console.log("test");
	console.log(e);
	console.log(e.keyCode)

	if (e.keyCode==39) {
		leftPosition += 20;
		topPosition += 20;
		console.log(leftPosition)
		console.log(e.keyCode)
	}

}
