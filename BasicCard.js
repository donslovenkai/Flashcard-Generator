//BasicCard.js

//Define BasicCard onstructor with front and back arguments
var BasicCard = function (front, back) {
	//Text for front of flashcard
    this.front = front;
    //Text for back of flashcard
    this.back = back;
};

//Export BasicCard constructor to be used by ClozeCard
module.exports = BasicCard;