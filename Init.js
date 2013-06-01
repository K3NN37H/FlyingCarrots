//Stuff From Main Menu
hideGame();
menuMusic();
$("#LevelOne").click({diff:1,size:1,level:1},setLevel);
$("#LevelTwo").click({diff:1,size:2,level:2},setLevel);
$("#LevelThree").click({diff:1,size:3,level:3},setLevel);
$("#LevelFour").click({diff:2,size:1,level:4},setLevel);
$("#LevelFive").click({diff:2,size:2,level:5},setLevel);
$("#LevelSix").click({diff:2,size:3,level:6},setLevel);
$("#LevelSeven").click({diff:3,size:1,level:7},setLevel);
$("#LevelEight").click({diff:3,size:2,level:8},setLevel);
$("#LevelNine").click({diff:3,size:3,level:9},setLevel);
$("#LevelTen").click({diff:4,size:1,level:10},setLevel);
$("#LevelEleven").click({diff:4,size:2,level:11},setLevel);
$("#LevelTwelve").click({diff:4,size:3,level:12},setLevel);

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

