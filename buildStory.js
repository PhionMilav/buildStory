

document.addEventListener("DOMContentLoaded", function(event){


	var buttonElement = document.getElementById("submit");
	var inputElement = document.getElementById("color");
	var inputElementtwo = document.getElementById("landscape");
	var inputElementthree = document.getElementById("name");

	character = ["n orc", " goblin", " water person", " unicorn", "n elefant", " dinosaur", " cow", " butterfly person"];	
	character = shuffle(character);

function buildStory(color, landscape, name) {

	var openingImageInput0 = ("There, on a sprawling  %landscape% under a bleak sky and with the gentle turning of worlds in my ears, is where the story began.");
	var openingImageInput1 = ("There, within the milky mists of a " + landscape + " with the adventures all behind me and the quiet settling into my chest, is where the story began.");
	var openingImageInput2 = ("There, right on the rough " + landscape + " is where the story began, and that, my friends, is a fact.");
	var myOpeningImage = [openingImageInput0 , openingImageInput1, openingImageInput2];

	var colorInput0 = ("When I moved out over this " + landscape + " I did see it. It was a teddy behind an unusual bush and its furr was " + color + "... ");
	var colorInput1 = ("While I thought, I was utterly alone in this " + landscape + " I found myself wondering whether you could actually, ever be truly alone within the realms of a " + landscape + " So I looked closer and there it was! Right next to me! A great big lizard and its tongue was " + color + "! ");
	var colorInput2 = ("It started, when I looked over the " + landscape + " and found the strangest thing: I was a little bit scared when I noticed, but, believe me, there suddenly appeared a gicantic, " + color + " monster-dragon! ");
	var myColors = [colorInput0 , colorInput1 , colorInput2];

	var nameInput0 = ("Have I introduced myself? My name is " + name + " and I'm very exited about all of this! By the way, I am a" + character[0] + ". ");
	var nameInput1 = ("Oh, now I delved right into the story without telling you who and what I am! I'm so terribly sorry, my name is " + name + " and I am a" + character[0] + ". ");
	var nameInput2 = ("By the way, I am me, that is my name is " + name + ". I'm sorry, I should have mentioned that right away. Also, I am a" + character[0] + ", do you know what that is? ");
	var myName = [nameInput0 , nameInput1 , nameInput2];


	var closingImageInput0 = (" 1There, on that sprawling " + landscape + " under that bleak sky and with the gentle turning of worlds in my ears, is where the story ended");
	var closingImageInput1 = (" 2There, within the milky mists of a " + landscape + " with the adventures all behind me and the quiet settling into my chest, is where the story ended");
	var closingImageInput2 = (" 3There, right on the rough " + landscape + " is where the story ended and that, my friends, is a fact.");
	var myClosingImage = [closingImageInput0 ,closingImageInput1, closingImageInput2];




	var randomNumber = randomInt(0, 2);

	console.log(myOpeningImage[randomNumber] + myColors[randomNumber] + myName[randomNumber] + myClosingImage[randomNumber]);
		
	myOpeningImage.splice[randomNumber];
	myColors.splice[randomNumber];
	myName.splice[randomNumber]
	
	if (myOpeningImage.length == 1) {
	  	myOpeningImage = [openingImageInput0 , openingImageInput1, openingImageInput2];
		myColors = [colorInput0 , colorInput1 , colorInput2];
		myName = [nameInput0 , nameInput1 , nameInput2];
		}
	// insert a for loop here that tells the thing how often to do something? or a while ?
	
	}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

	
	function shuffle(array) {
		for (var i = array.length - 1; i > 0; i--){
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array
	}



	buttonElement.addEventListener("click", function(){

		var color = inputElement.value;
		var landscape = inputElementtwo.value;
		var name = inputElementthree.value;

		buildStory(color, landscape, name);
		


	});


	//buttonElement.addEventListener("click", function(){

	//alert(myColours[0]);
	//myColours.shift();	
	//});
	//storyPart.innerHTML = words;
});
