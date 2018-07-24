

	var buttonElement = document.getElementById("submit");
	var inputElement = document.getElementById("color");
	var inputElementtwo = document.getElementById("landscape");
	var inputElementthree = document.getElementById("name");

//const db = require('./db.js');

	let ppOpeningImage;
	let ppSetUp;
	let ppCatalyst;
	let ppBStory;
	let ppCStory;

const requiredFutureIds = [];
const allowedFutureIds = [];
const forbiddenFutureIds = [];
const selectedPlotPoints = [];
const texts = [];



function populateFutureIds(plotPoint){

	for (let future of plotPoint.validFutures) {
		if (future.rule === "requiredIds") {
			for (let id of future.ids){
			requiredFutureIds.push(id);
				
			}
		}
		else if (future.rule === "allowedIds") {
			for (let id of future.ids){
				allowedFutureIds.push(id);
			}
		}
		else if (future.rule === "forbiddenIds") {
			for ( let id of future.ids){
				forbiddenFutureIds.push(id);
			}
		}
	};
}


function printStory(color, landscape, name) {

  for (let pp of selectedPlotPoints) {
    const text = pp.text
            .replace(/%color%/g, color)
            .replace(/%landscape%/g, landscape)
            .replace(/%name%/g, name);
    texts.push(text);
  }
}




function buildStory() {
  ppOpeningImage = db.getPlotPoints("openingImage");
  selectedPlotPoints.push(ppOpeningImage);
  populateFutureIds(ppOpeningImage);

  ppSetUp = db.getPlotPoints("setUp", requiredFutureIds, allowedFutureIds, forbiddenFutureIds);
  selectedPlotPoints.push(ppSetUp);
  populateFutureIds(ppSetUp);

  ppCatalyst = db.getPlotPoints("catalyst", requiredFutureIds, allowedFutureIds, forbiddenFutureIds);
  selectedPlotPoints.push(ppCatalyst);
  populateFutureIds(ppCatalyst);

  /*ppBStory = db.getPlotPoints("bStory", requiredFutureIds, allowedFutureIds, forbiddenFutureIds);
  selectedPlotPoints.push(ppBStory);
  populateFutureIds(ppBStory);

  ppCStory = db.getPlotPoints("cStory", requiredFutureIds, allowedFutureIds, forbiddenFutureIds)
  selectedPlotPoints.push(ppCStory);
  populateFutureIds(ppCStory);
  */
 
}



	buttonElement.addEventListener("click", function(){

		var color = inputElement.value;
		var landscape = inputElementtwo.value;
		var name = inputElementthree.value;

		buildStory();
		printStory(color, landscape, name);
		const story = texts.join();
		console.log(story); //prints .text WITH variable replacements
		});
