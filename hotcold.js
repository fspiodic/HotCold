
var computerPickedNumber = function() {

	var number = Math.floor(Math.random() * 100);
	return number;
}


window.onload = computerPickedNumber();



var userPickedNumber = function() {

	var number = document.getElementById("field").value;
	document.getElementById("prevPick").innerHTML += number + " ";
}



var compareNumbers = function() {

	var cPick = computerPickedNumber();
	var uPick = userPickedNumber();

	if (cPick == uPick) {
		document.getElementById("hint").innerHTML = uPick + "IS CORRECT!!!";
	}

	else if (cPick < uPick && cPick + 10 > uPick) {
		document.getElementById("hint").innerHTML = "Warmer. Go lower.";
	}

	else if (cPick > uPick && cPick - 10 < uPick) {
		document.getElementById("hint").innerHTML = "Warmer. Go higher.";
	}
	else {
		document.getElementById("hint").innerHTML = "Too cold. Try again.";
	}
}



document.getElementById("enter").onclick = userPickedNumber();
document.getElementById("enter").onclick = compareNumbers();

document.getElementById("new-game").onclick = computerPickedNumber();










