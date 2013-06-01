//Stuff From Main Menu
hideGame();

$("#LevelOne").click({diff:1,size:1,level:1},setLevel);
$("#LevelTwo").click(startLevelTwo);
$("#LevelThree").click(startLevelThree);
$("#LevelFour").click(startLevelFour);
$("#LevelFive").click(startLevelFive);
$("#LevelSix").click(startLevelSix);
$("#LevelSeven").click(startLevelSeven);
$("#LevelEight").click(startLevelEight);
$("#LevelNine").click(startLevelNine);
$("#LevelTen").click(startLevelTen);
$("#LevelEleven").click(startLevelEleven);
$("#LevelTwelve").click(startLevelTwelve);

$("#LevelTwo").attr("disabled","disabled");
$("#LevelThree").attr("disabled","disabled");
$("#LevelFour").attr("disabled","disabled");
$("#LevelFive").attr("disabled","disabled");
$("#LevelSix").attr("disabled","disabled");
$("#LevelSeven").attr("disabled","disabled");
$("#LevelEight").attr("disabled","disabled");
$("#LevelNine").attr("disabled","disabled");
$("#LevelTen").attr("disabled","disabled");
$("#LevelEleven").attr("disabled","disabled");
$("#LevelTwelve").attr("disabled","disabled");

$("#logoSplash").click(function () {
	$(this).hide();
});
window.setTimeout(function () {
	$("#logoSplash").hide();
}, 2500);

bgm = new Audio('Images/goblinking.mp3');
bgm.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
bgm.play();

$(".backImg").attr("usemap","#menunav");
$("#menuPage").append('<map name="menunav" id="menunav"></map>');
$("#menunav").append('<area id="startgame" shape="rect" coords="'+Math.round(xBack*0.217)+','+Math.round(yBack*0.14)+','+Math.round(xBack*0.8)+','+Math.round(yBack*0.323)+'">');
$("#menunav").append('<area id="continue" shape="rect" coords="'+Math.round(xBack*0.217)+','+Math.round(yBack*0.323)+','+Math.round(xBack*0.783)+','+Math.round(yBack*0.48)+'">');
$("#menunav").append('<area id="instruction" shape="rect" coords="'+Math.round(xBack*0.15)+','+Math.round(yBack*0.528)+','+Math.round(xBack*0.8)+','+Math.round(yBack*0.647)+'">');
$("#menunav").append('<area id="menuShop" shape="rect" coords="'+Math.round(xBack*0.167)+','+Math.round(yBack*0.668)+','+Math.round(xBack*0.8)+','+Math.round(yBack*0.744)+'">');

$("#startgame").click(startGame);
$("#back").click(restartGame);
$("#loseBack").click(restartGame);
$("#continue").click(function () {
	if (localStorage.haveSave !== "true"){
		alert("No save data");
		return;
	}
	hideMainMenu();
	loadGame();
	$("#controlButtons").show();
	$("#Inventory").show();
	if(usedMap === true){
		$("#toggleMapButton").show();
	}
});
$("#instruction").click(gameInstruction);

