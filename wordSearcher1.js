	buttonElement.addEventListener("click", function(){
console.log("This is the Count:" + matchCount);

connectParts("sprawling", openingImageInput0);

if (matchCount==1) {
	myClosingImage = closingImageInput0;
}
else{
connectParts("milky", openingImageInput0);
}
if (matchCount==1) {
	myClosingImage = closingImageInput1;
}
else{
connectParts("rough", openingImageInput0);
}
if (matchCount==1) {
	myClosingImage = closingImageInput2;
}

console.log(openingImageInput0 + myClosingImage);

}
