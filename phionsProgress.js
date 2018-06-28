// This programm tracks my progress in reading eloquent js. We deem the first 207 pages and pages 347 to 367 relevant. 
// We've already read the first 34 pages, which means we have 
document.addEventListener("DOMContentLoaded", function(event){

var buttonElemment = document.getElementById("submit")
const todaysProgress = document.getElementById("readToday")
const days = document.getElementById("numberOfDays")
	pagesRead = 34


buttonElemment.addEventListener("click", function(){
	var readToday = todaysProgress.value;
	var numberOfDays = days.value;
	pagesToRead(numberOfDays, readToday, pagesRead)
	});

function pagesToRead(numberOfDays, readToday, pagesRead){
	var allPages = 227 
	pagesRead = parseInt(pagesRead) + parseInt(readToday)
	console.log("You have read " + readToday + " pages today. This means that you've read " + pagesRead + " within " + numberOfDays +" day.\n")
	console.log("You still have " + (allPages - pagesRead) + " pages to read.");
	return pagesRead
}
console.log(pagesRead)
});
