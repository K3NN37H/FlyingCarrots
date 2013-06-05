// hide playing page and show up the end game page.
// It will show how many score the player gains in the game
function endGame()
{
    if(playerX==endX)
    {
        if(playerY==endY)
        {
			victoryMusic();
            $("#controlButtons").hide();
            $("#multipleChoice").hide();
            $("#mapContainer").hide();
            $("#scoreDisplay").hide();
            $("#endGame").show();
            $("#Inventory").hide();
            currentLocal="floor";
            recentmove="right";
            usedMap=false;
            createMaze();
            mazeDrawer();
            mapToggle=0;
            $("#toggleMapButton").css("display","none");
            $("#backgroundImage").attr("src","Images/Victory.jpg");
            $("#backGround").show();
            $("#backgroundContainer").hide();
            if(LevelDisplay>maxLevel)
            {
            	maxLevel=LevelDisplay;
            }
            levelFinish();
			maxLevel++;
			savePlayerData();
        }
    }
}
function levelFinish()
{
    difficultyMode++
    if(difficultyMode===4&&difficulty<4){
        difficultyMode=1
        difficulty++
    }
    UnlockLevelButton();
}

function UnlockLevelButton(){
    if (difficulty===1&&difficultyMode===2){
        $("#Level2").removeAttr("disabled","");
    }
    if (difficulty===1&&difficultyMode===3){
        $("#Level3").removeAttr("disabled","");
    }
    if (difficulty===2&&difficultyMode===1){
        $("#Level4").removeAttr("disabled","");
    }
    if (difficulty===2&&difficultyMode===2){
        $("#Level5").removeAttr("disabled","");
    }
    if (difficulty===2&&difficultyMode===3){
        $("#Level6").removeAttr("disabled","");
    }
    if (difficulty===3&&difficultyMode===1){
        $("#Level7").removeAttr("disabled","");
    }
    if (difficulty===3&&difficultyMode===2){
        $("#Level8").removeAttr("disabled","");
    }
    if (difficulty===3&&difficultyMode===3){
        $("#Level9").removeAttr("disabled","");
    }
    if (difficulty===4&&difficultyMode===1){
        $("#Level10").removeAttr("disabled","");
    }
    if (difficulty===4&&difficultyMode===2){
        $("#Level11").removeAttr("disabled","");
    }
    if (difficulty===4&&difficultyMode===3){
        $("#Level12").removeAttr("disabled","");
    }
}
function restartGame(){
	playing = false;
    score = 0;
    $("#scorebutton").text("Votre score est "+ score); 
    $("#finalScoreButton").text("Votre score final est "+ score); 
    $("#endGame").hide();
	menuMusic();
    showMainMenu();
    $("#loseGame").hide();
    $("#backGround").hide();
    $("#backgroundContainer").show();
    $("#difficultyDisplay").show();
    $("#totalScoreButton").show();
    $("#backgroundImg"+backgroundCount).attr("src","Images/Menu.png");
}