

	var buttonElement = document.getElementById("submit");
	var inputElement = document.getElementById("color");
	var inputElementtwo = document.getElementById("landscape");
	var inputElementthree = document.getElementById("name");

//const db = require('./db.js');

console.log(db.test);

const requiredFutureIds = [];
const allowedFutureIds = [];


let ppOpeningImage = db.getPlotPoints("openingImage");

for (let future of ppOpeningImage.validFutures) {
	if (future.rule === "requiredIds") {
		requiredFutureIds.push(future.id);
	}
	else if (future.rule === "allowedIds") {
		allowedFutureIds.push(future.id);
	}
};


let ppSetUp = db.getPlotPoints("setUp");
for (let future of ppSetUp.validFutures) {
	if (future.rule === "requiredIds") {
		requiredFutureIds.push(future.id);
	}
	else if (future.rule === "allowedIds") {
		allowedFutureIds.push(future.id);
	}
};


	buttonElement.addEventListener("click", function(){

		var color = inputElement.value;
		var landscape = inputElementtwo.value;
		var name = inputElementthree.value;

		console.log(ppOpeningImage.text);
		console.log(ppSetUp.text);
	});
