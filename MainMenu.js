hideGame();
$("#startgame").click(startGame)
$("#back").click(restartGame)
function startGame()
{
    showGame();
}    
function hideGame()
{
    $("#controlButtons").hide();
    $("#multipleChoice").hide();
    $("#mapContainer").hide();
    $("#endGame").hide();
}
function showGame()
{
    $("#menuPage").hide();
    $("#controlButtons").show();
    $("#multipleChoice").show();
    $("#mapContainer").show();
}

function restartGame(){
    $("#endGame").hide();
    $("#menuPage").show();
}