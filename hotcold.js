var randomNumber;
var userNumber;


var computerPickedNumber = function() {
	randomNumber = Math.floor(Math.random() * 100);
	document.getElementById("prevPick").innerHTML = "";
	document.getElementById("hint").innerHTML = "";
	document.getElementById("field").value = "";
	console.log("in computerPickedNumber is " + randomNumber);

}


var userPickedNumber = function() {
	console.log("in userPickedNumber");
	userNumber = document.getElementById("field").value;
	
	if ( isNaN(userNumber)) {
		alert(userNumber + " is not a number");
		document.getElementById("prevPick").innerHTML += " ";
	}
	else {
		document.getElementById("prevPick").innerHTML += userNumber + " ";
	}
	

}

function pressEnter(enter) {
    if (enter.keyCode === 13) {
        var enteredNumber = document.getElementById("field").value;
        document.getElementById("prevPick").innerHTML += userNumber + " ";
    }
}


var compareNumbers = function() {

	userPickedNumber();

	if (randomNumber == userNumber) {
		document.getElementById("hint").innerHTML = userNumber + " IS CORRECT!!!";
	}

	else if (randomNumber < userNumber && randomNumber + 10 > userNumber) {
		document.getElementById("hint").innerHTML = "Warmer. Go lower.";
	}

	else if (randomNumber > userNumber && randomNumber - 10 < userNumber) {
		document.getElementById("hint").innerHTML = "Warmer. Go higher.";
	}
	else {
		document.getElementById("hint").innerHTML = "Too cold. Try again.";
	}
}

computerPickedNumber();

document.getElementById("enter").addEventListener("click", compareNumbers, false);

document.getElementById("new-game").addEventListener("click", computerPickedNumber, false);

$('#field').keypress(function (e)
{
    if(e.keyCode==13)
    {
        compareNumbers();
        document.getElementById("field").value = "";
    }
});










