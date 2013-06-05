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

//stuff from shop

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

//stuff from MapDisplayer

$(document).keydown(mover);
$("#up").click(function () {
    mover({which:"38"});
});
$("#down").click(function () {
	mover({which:"40"});
});
$("#left").click(function () {
	mover({which:"37"});
});
$("#right").click(function () {
	mover({which:"39"});
});  

$("#endGame").append('<button class="gamebutton" id=finalScoreButton></button>');
$("#finalScoreButton").text("Votre score final est "+ score);   
$("#finalScoreButton").css("position","absolute");
$("#finalScoreButton").css("left",45+"%");
$("#finalScoreButton").css("top",15+"%");
$("#finalScoreButton").css("height",6+"%");
$("#finalScoreButton").css("width", 20+"%");
$("#finalScoreButton").css("border-radius",10);

//stuff from music
bgm.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);

//Stuff from debug

// set up debug controls
//$("body").append('<div id="debugControls" style="z-index:100;display:none;position:absolute;right:0%;top:25%;"></div>');
//$("#debugControls").append('<button class="gamebutton" id="disSling">'+"Toggle Slingshot"+'</button>');
//$("#debugControls").append('<button class="gamebutton" id="disMoveAnim">'+"Toggle Move Animations"+'</button>');
//$("#debugControls").append('<button class="gamebutton" id="pointsAdd">'+"Add 10000 points"+'</button>');
//$("#optionPage").append('<button class="gamebutton" id="debugOption">'+"Debug Mode"+'</button>');

$("#disSling").click(function () {
	disableSlingshot = !disableSlingshot;
});

$("#disMoveAnim").click(function () {
	disableMoveAnim = !disableMoveAnim;
});

$("#pointsAdd").click(function () {
	addScore(10000);
});

$("#debugOption").click(function () {
	$("#debugControls").toggle();
});

//first person display
$("#saveButton").click(saveButton);
function saveButton(){
	saveGame();
	alert("Game saved");
}