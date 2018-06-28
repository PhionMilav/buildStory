	
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

	openingImageInput0 = ("There, on a sprawling " + landscape + " under a bleak sky and with the gentle turning of worlds in my ears, is where the story began.");
	openingImageInput1 = ("There, within the milky mists of a " + landscape + " with the adventures all behind me and the quiet settling into my chest, is where the story began.");
	openingImageInput2 = ("There, right on the rough " + landscape + " is where the story began, and that, my friends, is a fact.");
	myOpeningImage = [openingImageInput0 , openingImageInput1, openingImageInput2];
	myOpeningImage = shuffle(myOpeningImage);
	myRealOpeningImage = myOpeningImage.slice(0,1);

	closingImageInput0 = (" There, on that sprawling " + landscape + " under that bleak sky and with the gentle turning of worlds in my ears, is where the story ended");
	closingImageInput1 = (" There, within the milky mists of a " + landscape + " with the adventures all behind me and the quiet settling into my chest, is where the story ended");
	closingImageInput2 = (" There, right on the rough " + landscape + " is where the story ended and that, my friends, is a fact.");
	myClosingImage = [closingImageInput0 ,closingImageInput1, closingImageInput2];

var connectParts = () => {
	const a = myRealOpeningImage[0].indexOf("sprawling");
	const b = myRealOpeningImage[0].indexOf("milky");
	const c = myRealOpeningImage[0].indexOf("rough");
	if (a >= 1) {
		thisClosingImage = closingImageInput0
	}
	else if (b >= 1) {
		thisClosingImage = closingImageInput1
	}
	else if (c >= 1) {
		thisClosingImage = closingImageInput2
	}

}
	
connectParts();
console.log(openingImageInput0 + thisClosingImage);