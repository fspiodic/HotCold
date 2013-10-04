
var computerPickedNumber = Math.floor(Math.random() * 100);


var getHint = function(cPick, uPick) {

	var response = "";

	if (userPick == computerPickedNumber) {
		response = "You got it!";
		return
	}

	if (Math.abs(cPick - uPick) < 10) {
		
		response += "Warmer. "
		
		if (uPick < cPick) {
			response += "Hint: go higher";
		} else {
			response += "Hint: go lower";
		}

	} else {
		response = "Too Cold";
	}
	return response;

}


var processNumber = function () {

	var userPick = document.getElementById("field").value;
	var response = getHint(computerPickedNumber, userPick);

	document.getElementById("prevPick").innerHTML += userPick + " ";	
	
	document.getElementById("hint").innerHTML = response;

};












