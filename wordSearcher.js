	
	const buttonElement = document.getElementById("connect");
	landscape = "sea";
	
	function shuffle(array) {
		for (var i = array.length - 1; i > 0; i--){
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array
	}

	openingImageInput0 = ("There, on a sprawling " + landscape + " under a bleak sky and with the gentle turning of worlds in my ears, is where the story began");
	openingImageInput1 = ("There, within the milky mists of a " + landscape + " with the adventures all behind me and the quiet settling into my chest, is where the story began");
	openingImageInput2 = ("There, right on the rough " + landscape + " is where the story began, and that, my friends, is a fact.");
	myOpeningImage = [openingImageInput0 , openingImageInput1, openingImageInput2];
	myOpeningImage = shuffle(myOpeningImage);

	closingImageInput0 = ("There, on that sprawling " + landscape + " under that bleak sky and with the gentle turning of worlds in my ears, is where the story ended");
	closingImageInput1 = ("There, within the milky mists of a " + landscape + " with the adventures all behind me and the quiet settling into my chest, is where the story ended");
	closingImageInput2 = ("There, right on the rough " + landscape + " is where the story ended and that, my friends, is a fact.");
	myClosingImage = [closingImageInput0 ,closingImageInput1, closingImageInput2];

var connectParts = (word, placeToSearch) => {

	var text = placeToSearch;
	var query = word;
	var matchCount = 0;


	for (var counter = 0; counter < text.length; counter++) {
	  	
	  	if((text[counter] == query[0]) && (text.length-counter >= query.length))
	  
	{
		var match = true;

		for(var counter1 = 0; counter1 < query.length; counter1++);

			{
				if(!(text[counter+counter1] == query[counter1]))
				{
					match = false;
					
					break;

				}
			}

			if(match==true)
			{
				matchCount++;
			}
	  }  
	}
	return matchCount;
}

console.log("The count is " + connectParts("sprawling", "While I pondered on a sprawling pond..."));