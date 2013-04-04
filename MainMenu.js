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
    $("#mathAnswer").hide();
    $("#multipleChoice").hide();
    $("#mapContainer").hide();
    $("#endGame").hide();
}
function showGame()
{
    $("#menuPage").hide();
    $("#controlButtons").show();
    $("#mapContainer").show();
}

function restartGame(){
    $("#endGame").hide();
    $("#menuPage").show();
}