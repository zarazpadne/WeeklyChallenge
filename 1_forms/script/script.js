function clearContents(element) {
	if (element.value == "Type your message...")
  		element.value = '';
}

function checkIfEmpty(element) {
	if (element.value == '')
		element.value = "Type your message...";
}
