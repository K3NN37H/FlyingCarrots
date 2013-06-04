// hide playing page and show up the end game page.
// It will show how many score the player gains in the game
function restartGame(){
	playing = false;
    score = 0;
    $("#scorebutton").text("Votre score est "+ score); 
    $("#finalScoreButton").text("Votre score final est "+ score); 
    $("#endGame").hide();
    showMainMenu();
    $("#loseGame").hide();
    $("#backGround").hide();
    $("#backgroundContainer").show();
    $("#difficultyDisplay").show();
    $("#totalScoreButton").show();
    $("#backgroundImg"+backgroundCount).attr("src","Images/Menu.png");
}