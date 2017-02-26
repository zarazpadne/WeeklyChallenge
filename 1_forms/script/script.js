function clearContents(element) {
	if (element.value == "Type your message...")
  		element.value = '';
}

function checkIfEmpty(element) {
	if (element.value == '')
		element.value = "Type your message...";
}

function checkIfDoneEmail(element) {
	if (element.value != '') {
		var x = document.getElementById("phone");
		console.log(x.value);
	}
}

function checkIfDoneEmail(element) {
	var x = '';
	if (element.value != '') {
		x = document.getElementById("email").value;
	}
	return x;
}

function checkIfDonePhone(element) {
	var x = '';
	if (element.value != '') {
		x = document.getElementById("phone").value;
	}
	return x;
}

function checkIfDone(element) {
	var email = checkIfDoneEmail(element);
	var phone = checkIfDonePhone(element);

	if ((email != "") && (phone != "")) {

	}
}