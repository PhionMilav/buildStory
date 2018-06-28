// This programm tracks my progress in reading eloquent js. We deem the first 207 pages and pages 347 to 367 relevant. 
// We've already read the first 34 pages, which means we have 

var pagesToRead = function(numberOfDays, readToday){
var pagesRead = 34
var allPages = 227 
var pagesRead = pagesRead + readToday
	console.log("You have read " + readToday + " today. This means that you've read " + pagesRead + " within " + numberOfDays +" day.\n")
	console.log("You still have " + (allPages - pagesRead) + " pages to read.");
}
var readToday = prompt("How many pages did you read today?")
var numberOfDays = prompt("For how many days have you done this already?")
pagesToRead(numberOfDays, 5);