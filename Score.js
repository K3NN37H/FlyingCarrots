var score = 0;
var points = 10000

function addScore(amount) {
	score += amount;
	points += amount;
	refreshScore();
}

function spendPoints(amount) {
	points -= amount;
	refreshScore();
}

function resetScore() {
	score = 0;
	refreshScore();
}

function resetPoints() {
	points = 0;
	refreshScore();
}

function refreshScore() {
	$("#scorebutton").text("Your score is "+ score);
	$("#finalScoreButton").text("Your final score is "+ score);
	$("#totalScoreButton").text("Your total points is "+points);
}