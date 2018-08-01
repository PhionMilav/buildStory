

	var buttonElement = document.getElementById("submit");
	var inputElement = document.getElementById("color");
	var inputElementtwo = document.getElementById("landscape");
	var inputElementthree = document.getElementById("name");


	let ppOpeningImage;
	let ppSetUp;
	let ppCatalyst;
	let ppBStory;
	let ppCStory;

	let requiredFutureIds = [];
	let allowedFutureIds = [];
	let forbiddenFutureIds = [];
	let selectedPlotPoints = [];
	let texts = [];




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

  ppBStory = db.getPlotPoints("bStory", requiredFutureIds, allowedFutureIds, forbiddenFutureIds);
  selectedPlotPoints.push(ppBStory);
  populateFutureIds(ppBStory);

  ppCStory = db.getPlotPoints("cStory", requiredFutureIds, allowedFutureIds, forbiddenFutureIds)
  selectedPlotPoints.push(ppCStory);
  populateFutureIds(ppCStory);
  
  ppPromise = db.getPlotPoints("promise", requiredFutureIds, allowedFutureIds, forbiddenFutureIds)
  selectedPlotPoints.push(ppPromise);
  populateFutureIds(ppPromise);
  
 
}

function reset() {  
  requiredFutureIds = [];
  allowedFutureIds = [];
  forbiddenFutureIds = [];
  selectedPlotPoints = [];
  texts = [];
}

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
texts = [];
  for (let pp of selectedPlotPoints) {
    const text = pp.text
            .replace(/%landscape%/g, landscape)
            .replace(/%color%/g, color)
            .replace(/%name%/g, name);
    texts.push(text);
  };
};




	buttonElement.addEventListener("click", function(){

		var color = inputElement.value;
		var landscape = inputElementtwo.value;
		var name = inputElementthree.value;

		reset();
		buildStory();
		printStory(color, landscape, name);
		
		const outputDiv = document.getElementById("output");
		outputDiv.innerHTML = '';

		for (let text of texts) {
		    const textDiv = document.createElement('div');
		    textDiv.classList.add('text');
		    textDiv.innerHTML = text;
		    outputDiv.appendChild(textDiv);
		    //trigger animations
    		setTimeout(function() {
      		textDiv.classList.add('active');
    		}, 20);

		  }

		});
