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
	$("#scorebutton").text("Votre score est "+ score);
	$("#finalScoreButton").text("Votre score final est "+ score);
	$("#totalScoreButton").text("Votre point est "+points);
}