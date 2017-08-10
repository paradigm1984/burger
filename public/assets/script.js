window.addEventListener("load", function() {

	document.getElementById("deleteButton").addEventListener("click", function() {

		console.log("clicked");
		document.getElementById("eatenContainer").style.visibility = "hidden";
	});
});


