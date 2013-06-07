//set the background image to menu image
//also show the div contains menu page
function showMainMenu(){
	$("#backgroundImg"+backgroundCount).attr("src","Images/Menu.png");
	$("#menuPage").show();
	$("#backgroundImg2").css({left:"0%",top:"0%",height:"100%",width:"100%"});
	//that is for activating the area that player are going to click on
	//we use area instead of buttons
	$("#backgroundImg2").attr("usemap","#menunav");
}
//hide the div contains menu page
function hideMainMenu(){
	$("#menuPage").hide();
	//unable the area that player are going to click on
	$(".backImg").removeAttr("usemap");
}
//Switch into another background container div
//For this background div, it does not involve any first person display at all.
//the div will be set to the image of the shop.
function showShop(){
     $("#backGround").show();
    $("#backgroundContainer").hide();
	$("#backgroundImage").attr("src","Images/Shop.png");
//	$("#backgroundImg2").css({left:"0%",top:"0%",height:"100%",width:"100%"});
	//that is for activating the area that player are going to click on(same as main menu)
	$("#backgroundImage").attr("usemap","#shopnav");
	$("#controlButtons").hide();
	//this is for checking what page the player is on before entering the shop
	//if the player is in the maze, it will switch the music
	//if the player is in the menu screen, then the music will keep going.
	if(playing)
	{
		menuMusic();
	}
	$("#shop").show();
	$("#Inventory").show();
	$("#totalScoreButton").show();
    $("#mapContainer").hide();
	$("#shopBackDuringTheGame").show();
	//unable to use those items in shop.
	$("#buyMapDisplay").attr("disabled","disabled");
    $("#bullDozerDisplay").attr("disabled","disabled");
    $("#levelSkipDisplay").attr("disabled","disabled");
	mapToggle = 0;
}
// hide the shop div
function hideShop(){
    //unable the clicking area
	$("#backgroundImage").removeAttr("usemap");
	$("#shop").hide();
	$("#shopBackDuringTheGame").hide();
	//checking the player's status to play the right music
	if (playing) {
		ingameMusic();
		setImg();
		$("#controlButtons").show();
		$("#scoreDisplay").show();
		$("#totalScoreButton").hide();
	}
	else {
		$("#Inventory").hide();
		showMainMenu();
	}
	//check whether the player has used map
	if(usedMap===false)
	{
		$("#buyMapDisplay").removeAttr("disabled","");
	}
	$("#bullDozerDisplay").removeAttr("disabled","");
	$("#levelSkipDisplay").removeAttr("disabled","");
	$("#difficultyDisplay").show();
    $("#backGround").hide();
    $("#backgroundContainer").show();
}
function showPopup(){
	hideMainMenu();
	$("#backgroundImg"+backgroundCount).css("opacity","0.65");
	$("body").append('<div id="popup" style="position:absolute;top:15%;left:15%;width:60%;height:60%;background:#FFC8F2;border:solid 1px black;border-radius:10px;box-shadow: 10px 10px 5px #444444;"></div>');
	$("#popup").append('<button id="closePopup" style="position:absolute;right:0%;bottom:0%;height:15%;width:15%">RECULER</button>');
	$("#closePopup").click(hidePopup);
}

function hidePopup(){
	$("#backgroundImg"+backgroundCount).css("opacity","1");
	$("#popup").remove();
	showMainMenu();
}

function hideGame()
{
    $("#controlButtons").hide();
    $("#mathAnswer").hide();
    $("#instructionpage").hide();
    $("#multipleChoice").hide();
    $("#mapContainer").hide();
    $("#endGame").hide();
    $("#optionPage").hide();
    $("#scoreDisplay").hide();
    $("#shop").hide();
    $("#shopBackDuringTheGame").hide();
    $("#menuShopBack").hide();
    $("#Inventory").hide();
	$("#bullDozer").hide();
    $("#loseGame").hide();
    $("#levelChoosing").hide();
    $("#backGround").hide();

}
//this is for starting of a game.
// control button, score display, level display,inventory is showing up.
//the player doesn't use map in the beginning of a game.Therefore usedMap=false and toggle map button won't show up.
//the player's status is changed to playing.
function showGame()
{
    $("#totalScoreButton").hide();
    $("#controlButtons").show();
    $("#scoreDisplay").show();
    $("#Inventory").show();
    $("#backgroundImg"+backgroundCount).attr("src","Images/forwardcorridor.jpg");
    usedMap=false;
    $("#toggleMapButton").css("display","none");
    $("#buyMapDisplay").removeAttr("disabled","");
    createMaze();
    mazeDrawer();
	playing = true;
}