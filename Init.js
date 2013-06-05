//Stuff From Main Menu
hideGame();
menuMusic();
$("#Level1").click({diff:1,size:1,level:1},setLevel);
$("#Level2").click({diff:1,size:2,level:2},setLevel);
$("#Level3").click({diff:1,size:3,level:3},setLevel);
$("#Level4").click({diff:2,size:1,level:4},setLevel);
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

for(var i = 1; i<=maxLevel;i++)
{
	$("#Level"+i).removeAttr("disabled");
}

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
$("#menunav").append('<area id="options" shape="rect" coords="'+Math.round(xBack*0.025)+','+Math.round(yBack*0.0215)+','+Math.round(xBack*0.075)+','+Math.round(yBack*0.086)+'">');

$("#startgame").click(startGame);
$("#menuShop").click(showShop);
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
	ingameMusic();
	$("#controlButtons").show();
	$("#Inventory").show();
	if(usedMap === true){
		$("#toggleMapButton").show();
	}
});
$("#instruction").click(gameInstruction);
$("#options").click(showOptions);

var numItems= 5;
var inventory = [numItems];
var MORECARROT="0";
var FLAMECARROT="1";
var MAP="2";
var BULLDOZER="3";
var LEVELSKIP="4";
inventory[0]=10;
var xBack = $("#backgroundImg1").width();
var yBack = $("#backgroundImg1").height();
for(var i=1;i<numItems;i++)
{
    inventory[i]=0;
}
$("#shop").append('<map name="shopnav" id="shopnav"></map>');
$("#shopnav").append('<area id="buyfireCarrot" shape="rect" coords="'+Math.round(xBack*0.1)+','+Math.round(yBack*0.6)+','+Math.round(xBack*0.22)+','+Math.round(yBack*0.85)+'">');
$("#shopnav").append('<area id="buymoreCarrot" shape="rect" coords="'+Math.round(xBack*0.221)+','+Math.round(yBack*0.6)+','+Math.round(xBack*0.36)+','+Math.round(yBack*0.85)+'">');
$("#shopnav").append('<area id="buymap" shape="rect" coords="'+Math.round(xBack*0.361)+','+Math.round(yBack*0.6)+','+Math.round(xBack*0.53)+','+Math.round(yBack*0.85)+'">');
$("#shopnav").append('<area id="buybulldozer" shape="rect" coords="'+Math.round(xBack*0.531)+','+Math.round(yBack*0.6)+','+Math.round(xBack*0.7)+','+Math.round(yBack*0.85)+'">');
$("#shopnav").append('<area id="buyLevelSkip" shape="rect" coords="'+Math.round(xBack*0.701)+','+Math.round(yBack*0.6)+','+Math.round(xBack*0.87)+','+Math.round(yBack*0.85)+'">');
$("#shopButton").click(showShop);
$("#shopBackButton").click(hideShop);
$("#buymap").click(function(){purchase("map")});
$("#buybulldozer").click(function(){purchase 	("bulldozer")});
$("#buymoreCarrot").click(function(){purchase("morecarrot")});
$("#buyfireCarrot").click(function(){purchase("flamecarrot")});
$("#buyLevelSkip").click(function(){purchase("levelskip")});
$("#menuShop").click(showShop);
$("#menuShopBackButton").click(hideShop);

