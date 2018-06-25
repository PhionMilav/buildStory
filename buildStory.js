

document.addEventListener("DOMContentLoaded", function(event){


	const buttonElement = document.getElementById("submit");
	var inputElement = document.getElementById("color");
	var inputElementtwo = document.getElementById("landscape");
	var inputElementthree = document.getElementById("name");

function buildStory(color, landscape, name) {

character = ["n orc", " goblin", " water person", " unicorn", "n elefant", " dinosaur", " cow", " butterfly person"];	
character = shuffle(character);

	openingImageInput0 = ("There, on a sprawling " +  landscape);
	openingImageInput1 = ("There, within the milky mists of a " + landscape);
	openingImageInput2 = ("There, right on the rough " + landscape);
	myOpeningImage = [openingImageInput0 , openingImageInput1, openingImageInput2];
	myOpeningImage = shuffle(myOpeningImage);

	colorInput0 = ("When I moved out over this " + landscape + " I did see it. It was a teddy behind an unusual bush and its furr was " + color + "... ");
	colorInput1 = ("While I thought, I was utterly alone in this " + landscape + " I found myself wondering whether you could actually, ever be truly alone within the realms of a " + landscape + " So I looked closer and there it was! Right next to me! A great big lizard and its tongue was " + color + "! ");
	colorInput2 = ("It started, when I looked over the " + landscape + " and found the strangest thing: I was a little bit scared when I noticed, but, believe me, there suddenly appeared a gicantic, " + color + " monster-dragon! ");
	myColors = [colorInput0 , colorInput1 , colorInput2];
	myColors = shuffle(myColors);

	nameInput0 = ("Have I introduced myself? My name is " + name + " and I'm very exited about all of this! By the way, I am a" + character[0] + ". ");
	nameInput1 = ("Oh, now I delved right into the story without telling you who and what I am! I'm so terribly sorry, my name is " + name + " and I am a" + character[0] + ". ");
	nameInput2 = ("By the way, I am me, that is my name is " + name + ". I'm sorry, I should have mentioned that right away. Also, I am a" + character[0] + ", do you know what that is? ");
	myName = [nameInput0 , nameInput1 , nameInput2];
	myName = shuffle(myName);


	closingImageInput0 = ("And that's what happened, true and sublime. " + myOpeningImage[0] + " is where the story ended.");

	

// connectors
	connector0 = " is where the story began. "
	console.log(myOpeningImage[0] + connector0 + myColors[0] + myName[0] + closingImageInput0);
	

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
