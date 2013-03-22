hideGame();
$("#startgame").click(startGame)
function startGame()
{
    showGame();
}    
function hideGame()
{
    $("#controlButtons").hide();
    $("#multipleChoice").hide();
    $("#mapContainer").hide();
}
function showGame()
{
    $("#menuPage").hide();
    $("#controlButtons").show();
    $("#multipleChoice").show();
    $("#mapContainer").show();
}