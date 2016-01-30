// Shows/hides the alert box
var alert =  document.getElementById("alert");

// Janky way to see if there is an alert
if (alert.innerHTML.length == 92) {
	alert.style.display = "none";
}
else {
	alert.style.display = "";
}