//Stuff From Main Menu
hideGame();
menuMusic();
$("#Level1").click({diff:1,size:1,level:1},setLevel);
$("#Level2").click({diff:1,size:2,level:2},setLevel);
$("#Level3").click({diff:1,size:3,level:3},setLevel);
$("#Leve4").click({diff:2,size:1,level:4},setLevel);
$("#Level5").click({diff:2,size:2,level:5},setLevel);
$("#Level6").click({diff:2,size:3,level:6},setLevel);
$("#Level7").click({diff:3,size:1,level:7},setLevel);
$("#Level8").click({diff:3,size:2,level:8},setLevel);
$("#Level9").click({diff:3,size:3,level:9},setLevel);
$("#Level10").click({diff:4,size:1,level:10},setLevel);
$("#Level11").click({diff:4,size:2,level:11},setLevel);
$("#Level12").click({diff:4,size:3,level:12},setLevel);

$("#Level2").attr("disabled","disabled");
$("#Level3").attr("disabled","disabled");
$("#Level4").attr("disabled","disabled");
$("#Level5").attr("disabled","disabled");
$("#Level6").attr("disabled","disabled");
$("#Level7").attr("disabled","disabled");
$("#Level8").attr("disabled","disabled");
$("#Level9").attr("disabled","disabled");
$("#Level10").attr("disabled","disabled");
$("#Level11").attr("disabled","disabled");
$("#Level12").attr("disabled","disabled");

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
	$("#totalScoreButton").hide();
	loadGame();
	$("#controlButtons").show();
	$("#Inventory").show();
	if(usedMap === true){
		$("#toggleMapButton").show();
	}
});
$("#instruction").click(gameInstruction);

