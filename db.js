
var db = {
	test: "Yeah!",
	getPlotPoints: function (type, requiredIds = [], allowedIds = []) {
	const validPlotPoints = [];

	for (let pp of PlotPoints) {
		if (pp.type === type) {
			if (requiredIds.indexOf(pp.id) >= 0) {
				return pp;
			}
			if (type === "openingImage" || allowedIds.indexOf(pp.id) >= 0) {
				validPlotPoints.push(pp);
			}
		}
	let randomIndex = randomInt(0,2);
	return validPlotPoints[randomIndex];
	console.log(validPlotPoints[randomIndex]);
	}
}


}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const PlotPoints = [];

PlotPoints.push({
	text: ["There, on a sprawling  %landscape% under a bleak sky and with the gentle turning of worlds in my ears, is where the story began. "],
	type: "openingImage",
	id: "openingImageA",
	validFutures: [
	{
		rule: "requiredIds",
		id: "closingImageA"
	},
	{
		rule: "allowedIds",
		id: ["setUpA", "setUpB", "setUpC"]
	}]
});

PlotPoints.push({
	text: ["There, on a sprawling  %landscape% under a bleak sky and with the gentle turning of worlds in my ears, is where the story began. "],
	type: "openingImage",
	id: "openingImageB",
	validFutures: [
	{
		rule: "requiredIds",
		id: "closingImageB"
	},
	{
		rule: "allowedIds",
		id: ["setUpA", "setUpB", "setUpC"]
	}]
});

PlotPoints.push({
	text: [" But before I go into the details of this tale, let me tell you a little bit about me, about what I was before I fell head first into the waves of this adventure.  I, my friends, am an Orc. My name is %name% and before all of this, I lived in a beautiful cave under the rolling hills of a place, right at the back of beyond. I liked it there, in fact, I liked it a lot. But then, one day, the story took me away from there:"],
	type: "setUp",
	id: "setUpA",
	validFutures: [
	{
		rule: "requiredIds",
		id: "bStoryA"
	},
	{
		rule: "allowedIds",
		id: []
	}/*,
	{
		rule: "forbiddenIds",
		id: ["catalystB", "catalystC"]
	}*/]
});

PlotPoints.push({
	text: ["And there I stood. Mortified. Just hours ago, I’d been far away, very far away, actually, because I’d still been on my home planet, in my home galaxy. Where people knew my name, knew what I was, what I could do and what I could not. And now I found myself here, at the edge of an unfolding adventure, alone. My name, before I came here, was %name%. And I was and still am an alien. Now, where I come from, we don’t tell stories, because we all know everything, all of the time. But here, in this world, if I want you to know how I came to be here, I will have to tell you. So, listen carefully, for I shall only tell this story once:"],
	type: "setUp",
	id: "setUpB",
	validFutures: [
	{
		rule: "requiredIds",
		id: ["catalystB", "catalystC"]
	},
	{
		rule: "allowedIds",
		id: []
	}/*,
	{
		rule: "forbiddenIds",
		id: ["catalystA"]
	}*/]
});


PlotPoints.push({
	text: ["When I look back, it all seems very strange to me. There I was, right on that spot, thinking to myself, %name%, what have you stumbled into here? I had no answer back then, because the things I knew most about where what kinds of leaf to eat and which to leave hanging on the tree. I am an elf and I grew up on a tree and I never thought I’d leave it in my life, but I did. And now, I shall tell you why:"],
	type: "setUp",
	id: "setUpC",
	validFutures: [
	{
		rule: "requiredIds",
		id: "bStoryB"
	},
	{
		rule: "allowedIds",
		id: []
	}/*,
	{
		rule: "forbiddenIds",
		id: ["catalystB", "catalystC"]
	}*/]
});

PlotPoints.push({
	text: [""],
	type: "",
	id: "",
	validFutures: [
	{
		rule: "requiredIds",
		id: []
	}/*,
	{
		rule: "allowedIds",
		id: ["setUpA", "setUpB", "setUpC"]
	}*/]
});
