//BasicCard module imported from BasicCard.js
var BasicCard = require ("./BasicCard");

//Defines ClozeCard constructor with text and cloze argments
var ClozeCard = function (text, cloze) {
    this.text = text;
    //For cloze-deleted portion of text
    this.cloze = cloze;
    //For full text
    this.fullText = function() {
        console.log(this.text);
    };
    //Property for partial text
    this.partial = function () {
        if (this.text.replace(this.cloze,"...") === this.text) {
            console.log(this.cloze + " does not appear in " + this.text);
        }
        else {
            var newText = this.text.replace(this.cloze, "...");
            console.log(newText);
        }
    };
};
//Hardcoded function for testing front and back of basic card
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

console.log(firstPresident.front);

console.log(firstPresident.back);

//Hardcode function for testing cloze card with various properties
var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

console.log(firstPresidentCloze.cloze);

firstPresidentCloze.partial();

firstPresidentCloze.fullText();

//Error handling when cloze deletion does not display
var brokenCloze = new ClozeCard("This does not work", "oops");
brokenCloze.partial();

module.exports = ClozeCard;



