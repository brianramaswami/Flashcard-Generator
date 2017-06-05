var ClozeCard = require('./ClozeCard.js');
var BasicCard = require('./BasicCard.js');

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");
console.log("");
console.log("Testing Basic Card front and back");
console.log("....................................................");
console.log("");
// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 
console.log("....................................................");

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");
console.log("");
console.log("Testing Cloze Card cloze, partial, and fullText");
console.log("....................................................");
console.log("");
// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); 

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

console.log("");
console.log("Testing Error case in Cloze Card");
console.log("....................................................");
console.log("");
// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");