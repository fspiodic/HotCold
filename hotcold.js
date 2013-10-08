
var computerPickedNumber = function() {

	var number = Math.floor(Math.random() * 100);
	document.getElementById("prevPick").innerHTML = "";
	document.getElementById("hint").innerHTML = "";
	document.getElementById("field").value = "";
	return number;
}


var userPickedNumber = function() {

	var number = document.getElementById("field").value;
	document.getElementById("prevPick").innerHTML += number + " ";
	if ( number = NaN ) {
		alert(number + " is not a number");
	};
	
}


var compareNumbers = function() {

	if (computerPickedNumber == userPickedNumber) {
		document.getElementById("hint").innerHTML = userPickedNumber + "IS CORRECT!!!";
	}

	else if (computerPickedNumber < userPickedNumber && computerPickedNumber + 10 > userPickedNumber) {
		document.getElementById("hint").innerHTML = "Warmer. Go lower.";
	}

	else if (computerPickedNumber > userPickedNumber && computerPickedNumber - 10 < userPickedNumber) {
		document.getElementById("hint").innerHTML = "Warmer. Go higher.";
	}
	else {
		document.getElementById("hint").innerHTML = "Too cold. Try again.";
	}
}



window.onload = computerPickedNumber();

document.getElementById("enter").addEventListener("click", compareNumbers, false);

document.getElementById("new-game").addEventListener("click", computerPickedNumber, false);










