
var db = {
	test: "Yeah!",
	getPlotPoints: function (type, requiredIds = [], allowedIds = [], forbiddenIds =[]) {
		const validPlotPoints = [];

		for (let pp of PlotPoints) {
			if (pp.type === type) {
				if (type === "openingImage"){
					// if it's an Opening Image, we do not restrict it ever
				validPlotPoints.push(pp);
				}
				else if (forbiddenIds.indexOf(pp.id) >= 0) {
					// if it is forbidden, we don't do anything and continue with the next item
					continue;
				}
				else if (requiredIds.indexOf(pp.id) >= 0) {
					// if it's a required PlotPoint, we HAVE to take it in
					return pp;
				}
				else if (allowedIds.indexOf(pp.id) >= 0) {
					// things have to be allowed AND not forbidden
					validPlotPoints.push(pp);
				}
			}
		}
		let randomIndex = randomInt(0,validPlotPoints.length);
		return validPlotPoints[randomIndex];
	}
}

function randomInt(min, max) {
    return Math.floor(Math.random() * max - min) + min
};

const PlotPoints = [];

PlotPoints.push({
//TODO: All plotpoint texts need to be strings, not arrays
	text: ["There, on a sprawling  %landscape% under a bleak sky and with the gentle turning of worlds in my ears, is where the story began. "],
	type: "openingImage",
	id: "openingImageA",
	validFutures: [
	{
		rule: "requiredIds",
		ids: ["closingImageA"]
	},
	{
		rule: "allowedIds",
		ids: ["setUpA", "setUpB", "setUpC"]
	},
	{
		rule: "forbiddenIds",
		ids: []
	}]
});

PlotPoints.push({
	text: "There, within the milky mists of a %landscape% with the adventures all in front of me and the quiet settling into my chest, is where the story began.",
	type: "openingImage",
	id: "openingImageB",
	validFutures: [
	{
		rule: "requiredIds",
		ids: ["closingImageB"]
	},
	{
		rule: "allowedIds",
		ids: ["setUpA", "setUpB", "setUpC"]
	},
	{
		rule: "forbiddenIds",
		ids: []
	}]
});


PlotPoints.push({
	text: "There, right on the rough %landscape% is where the story began, and that, my friends, is a fact.",
	type: "openingImage",
	id: "openingImageC",
	validFutures: [
	{
		rule: "requiredIds",
		ids: ["closingImageC"]
	},
	{
		rule: "allowedIds",
		ids: ["setUpA", "setUpB", "setUpC"]
	},
	{
		rule: "forbiddenIds",
		ids: []
	}]
});

PlotPoints.push({
// set up about orcs
	text: " But before I go into the details of this tale, let me tell you a little bit about me, about what I was before I fell head first into the waves of this adventure.  I, my friends, am an Orc. My name is %name% and before all of this, I lived in a beautiful cave under the rolling hills of a place, right at the back of beyond. I liked it there, in fact, I liked it a lot. But then, one day, the story took me away from there:",
	type: "setUp",
	id: "setUpA",
	validFutures: [
	{
		rule: "requiredIds",
		ids: ["bStoryA"]
	},
	{
		rule: "allowedIds",
		ids: []
	},
	{
		rule: "forbiddenIds",
		ids: ["catalystB", "catalystC"]
	}]
});

PlotPoints.push({
// set up about aliens
	text: "And there I stood. Mortified. Just hours ago, I’d been far away, very far away, actually, because I’d still been on my home planet, in my home galaxy. Where people knew my name, knew what I was, what I could do and what I could not. And now I found myself here, at the edge of an unfolding adventure, alone. My name, before I came here, was %name%. And I was and still am an alien. Now, where I come from, we don’t tell stories, because we all know everything, all of the time. But here, in this world, if I want you to know how I came to be here, I will have to tell you. So, listen carefully, for I shall only tell this story once:",
	type: "setUp",
	id: "setUpB",
	validFutures: [
	{
		rule: "requiredIds",
		ids: ["bStoryC"]
	},
	{
		rule: "allowedIds",
		ids: []
	},
	{
		rule: "forbiddenIds",
		ids: ["catalystA"]
	}]
});


PlotPoints.push({
// set up about elves
	text: "When I look back, it all seems very strange to me. There I was, right on that spot, thinking to myself, %name%, what have you stumbled into here? I had no answer back then, because the things I knew most about where what kinds of leaf to eat and which to leave hanging on the tree. I am an elf and I grew up on a tree and I never thought I would leave it in my life, but I did. And now, I shall tell you why:",
	type: "setUp",
	id: "setUpC",
	validFutures: [
	{
		rule: "requiredIds",
		ids: ["bStoryB"]
	},
	{
		rule: "allowedIds",
		ids: []
	},
	{
		rule: "forbiddenIds",
		ids: ["catalystB", "catalystC"]
	}]
});

PlotPoints.push({
	// generic catalsyt, loosing family
	text: " One day, I came home to where I lived with my siblings and parents and then…. It’s hard to describe. It was like reality all of a sudden branched off, one door opening to my right, one to my left, just that they weren’t really doors. Just moments, shorter than the blinking of an eye, just shimmerings in the pattern of the world. And I, foolish as I was, I must have taken the wrong turn, the wrong door, if out of my own curiosity or out of ignorance, I do not know. But when I came back home, it was gone. No siblings, no parents, not even the home we had, not even the path to said home. But in the ground, in that muddy, slimy ground I liked so much, somebody had written ‘find us’.",
	type: "catalyst",
	id: "catalystA",
	validFutures: [
	{
		rule: "requiredIds",
		ids: [""]
	},
	{
		rule: "allowedIds",
		ids: [""]
	},
	{
		rule: "forbiddenIds",
		ids: [""]
	}]
});


PlotPoints.push({
	// Catalyst for alien - malfunctioning space suit
	text: " That day, I climbed into my space suit and yes, aliens do need them too, especially when we go off-worlds. So, I climbed into my space suit, switched on the auto-pilot which should have safely propelled me over to the next moon. But it malfunctioned, I saw how the beaming beaken switched on and wham! I was catapulted out of my galaxy and into this.",
	type: "catalyst",
	id: "catalystB",
	validFutures: [
	{
		rule: "requiredIds",
		ids: [""]
	},
	{
		rule: "allowedIds",
		ids: [""]
	},
	{
		rule: "forbiddenIds",
		ids: [""]
	}]
});

PlotPoints.push({
	// Catalyst for alien - curiosity as the cause
	text: " My galaxy that night was burning with stars, some on the verge of implosion, some well beyond that. I was in my families space shuttle, the lands I loved falling away behind me, when I heard that voice in my head. I’m sure it was in my head and nowhere else, because it was that voice that tells you to take one more step when you’re at the edge of some high place. That voice that wonders what might happen, if only you did that one, dangerous, forbidding thing. People in my galaxy always said that, if you pressed the accelerator the moment you cleared our planets gravity, you’d fly all the way to another world. I didn’t really believe it, but now, after I pressed that accelerator and found myself here, I do. I also believe that there’s a way to go back home and my real adventure began, when I went off in the world you call earth and started looking for it.",
	type: "catalyst",
	id: "catalystC",
	validFutures: [
	{
		rule: "requiredIds",
		ids: []
	},
	{
		rule: "allowedIds",
		ids: []
	},
	{
		rule: "forbiddenIds",
		ids: []
	}]
});

PlotPoints.push({
	// bStory for orc
	text: " So, this is how I left the place I came from and ended up at the beginning of this adventure though, of course, I did not know that yet. I was still in the middle of those rolling hills I came from, so I simply started walking off towards the setting sun. I passed them easily and ended up on the last hill, overlooking an endless ocean. I was just about to turn around, when I heard a strange sound, maybe a voice…",
	type: "bStory",
	id: "bStoryA",
	validFutures: [
	{
		rule: "requiredIds",
		ids: ["cStoryA"]
	},
	{
		rule: "allowedIds",
		ids: []
	},
	{
		rule: "forbiddenIds",
		ids: []
	}]
});

PlotPoints.push({
	//bStory for elf
	text: "  So, this is how I left the place I came from and ended up at the beginning of this adventure though, of course, I did not know that yet. I was still in the middle of my home forest, so I simply started walking off towards the setting sun. I walked deep into the night and when I was too tired to walk any further, I found a tree I’d never seen before and climbed up into the branches. I lay my body down unto one of the big ones, because I was scared to climb up high and tried to sleep, but when I was just dosing off, I heard a noise, a little like a very high-pitched snore…",
	type: "bStory",
	id: "bStoryB",	
	validFutures: [
	{
		rule: "requiredIds",
		ids: ["cStoryA"]
	},
	{
		rule: "allowedIds",
		ids: []
	},
	{
		rule: "forbiddenIds",
		ids: []
	}]
});

PlotPoints.push({
	// bStory for alien
	text: " So, this is how I left the place I came from and ended up at the beginning of this adventure though, of course, I did not know that yet. I had no idea where I was, of course, so I looked up at the sky, found one singular, very bright star and started walking in that direction. You call it sun, I’ve learned this by now. But back then it was merely a star to me.  I walked for a while and nothing happened at all, but then, when I thought I’d been getting the hang of this world, I stepped on something soft and squishy. I lifted my foot, looked down and found something, some thing, that was definitely alive…",
	type: "bStory",
	id: "bStoryC",
	validFutures: [
	{
		rule: "requiredIds",
		ids: ["cStoryB"]
	},
	{
		rule: "allowedIds",
		ids: []
	},
	{
		rule: "forbiddenIds",
		ids: []
	}]
});



PlotPoints.push({
	//generic c-story, inserting Me as a character
	text: " “Who’s there”? I called out, trying hard to keep my voice as calm as I surely was not. “Uhm… me?” said a meek little voice from down on the ground. “Who’s asking?” I told the thing that I still got not say who I was. I gave it my name. %name%. And it took me a long and difficult to explain sort of conversation to find out that the things name actually was Me.",
	type: "cStory",
	id: "cStoryA",
	validFutures: [
	{
		rule: "requiredIds",
		ids: [""]
	},
	{
		rule: "allowedIds",
		ids: []
	},
	{
		rule: "forbiddenIds",
		ids: []
	}]
});



PlotPoints.push({
	// cStory for aliens, inserting Squisch as a character
	text: " “What are you?” I asked, looking down at the squishiness now right next to my foot. “I’m Squisch, thank you very much, don’t apologize for stepping on my head, oh no, why would you!” answered the little…well, answered Squisch. “What are you?” I repeated the question, because I wasn’t sure I’d gotten the answer yet.",
	type: "cStory",
	id: "cStoryA",
	validFutures: [
	{
		rule: "requiredIds",
		ids: [""]
	},
	{
		rule: "allowedIds",
		ids: []
	},
	{
		rule: "forbiddenIds",
		ids: []
	}]
});


PlotPoints.push({
	text: "",
	type: "",
	id: "",
	validFutures: [
	{
		rule: "requiredIds",
		ids: [""]
	},
	{
		rule: "allowedIds",
		ids: []
	},
	{
		rule: "forbiddenIds",
		ids: []
	}]
});


PlotPoints.push({
	text: "",
	type: "",
	id: "",
	validFutures: [
	{
		rule: "requiredIds",
		ids: [""]
	},
	{
		rule: "allowedIds",
		ids: []
	},
	{
		rule: "forbiddenIds",
		ids: []
	}]
});


PlotPoints.push({
	text: "",
	type: "",
	id: "",
	validFutures: [
	{
		rule: "requiredIds",
		ids: [""]
	},
	{
		rule: "allowedIds",
		ids: []
	},
	{
		rule: "forbiddenIds",
		ids: []
	}]
});


PlotPoints.push({
	text: "",
	type: "",
	id: "",
	validFutures: [
	{
		rule: "requiredIds",
		ids: [""]
	},
	{
		rule: "allowedIds",
		ids: []
	},
	{
		rule: "forbiddenIds",
		ids: []
	}]
});


PlotPoints.push({
	text: "",
	type: "",
	id: "",
	validFutures: [
	{
		rule: "requiredIds",
		ids: [""]
	},
	{
		rule: "allowedIds",
		ids: []
	},
	{
		rule: "forbiddenIds",
		ids: []
	}]
});


PlotPoints.push({
	text: "",
	type: "",
	id: "",
	validFutures: [
	{
		rule: "requiredIds",
		ids: [""]
	},
	{
		rule: "allowedIds",
		ids: []
	},
	{
		rule: "forbiddenIds",
		ids: []
	}]
});


PlotPoints.push({
	text: "",
	type: "",
	id: "",
	validFutures: [
	{
		rule: "requiredIds",
		ids: [""]
	},
	{
		rule: "allowedIds",
		ids: []
	},
	{
		rule: "forbiddenIds",
		ids: []
	}]
});


PlotPoints.push({
	text: "",
	type: "",
	id: "",
	validFutures: [
	{
		rule: "requiredIds",
		ids: [""]
	},
	{
		rule: "allowedIds",
		ids: []
	},
	{
		rule: "forbiddenIds",
		ids: []
	}]
});


PlotPoints.push({
	text: "",
	type: "",
	id: "",
	validFutures: [
	{
		rule: "requiredIds",
		ids: [""]
	},
	{
		rule: "allowedIds",
		ids: []
	},
	{
		rule: "forbiddenIds",
		ids: []
	}]
});


PlotPoints.push({
	text: "",
	type: "",
	id: "",
	validFutures: [
	{
		rule: "requiredIds",
		ids: [""]
	},
	{
		rule: "allowedIds",
		ids: []
	},
	{
		rule: "forbiddenIds",
		ids: []
	}]
});


PlotPoints.push({
	text: "",
	type: "",
	id: "",
	validFutures: [
	{
		rule: "requiredIds",
		ids: [""]
	},
	{
		rule: "allowedIds",
		ids: []
	},
	{
		rule: "forbiddenIds",
		ids: []
	}]
});
