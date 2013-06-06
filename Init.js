//Stuff From Main Menu
hideGame();
menuMusic();
function levelSelectClick(){
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
}

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

$("#difficultybutton").text("Niveau courrant est "+ LevelDisplay);   
$("#scorebutton").text("Votre score est "+ score);   
$("#totalScoreButton").text("Votre point est "+ points);
//stuff from shop

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


$("#finalScoreButton").text("Votre score final est "+ score);   

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

//from inventory
$("#upBull").click(function(){resetBull("up");});
$("#rightBull").click(function(){resetBull("right");});
$("#leftBull").click(function(){resetBull("left");});
$("#toggleMapButton").click(toggleMap);

$("#carrotDisplay").text("Carrottes: "+ inventory[MORECARROT]); 

$("#bullDozerDisplay").text("Bulldozer: "+ inventory[BULLDOZER]); 
$("#bullDozerDisplay").click(function(){useItem("bulldozer")});
$("#upBull").hide();
$("#rightBull").hide();
$("#leftBull").hide();

$("#flameCarrotDisplay").text("Carrottes Flamme: "+ inventory[FLAMECARROT]); 

$("#buyMapDisplay").text("Carte: "+ inventory[MAP]); 
$("#buyMapDisplay").click(function(){useItem("map")});

$("#levelSkipDisplay").text("Sauter un Niveau: "+ inventory[LEVELSKIP]); 
$("#levelSkipDisplay").click(function (){
       if(inventory[LEVELSKIP]>0)
       {levelFinish();
       inventory[LEVELSKIP]--;
       $("#levelSkipDisplay").text("Sauter un Niveau: "+ inventory[LEVELSKIP]); 
        currentLocal="floor";
        usedMap=false;
        recentmove="right";
    if (difficulty===1&&difficultyMode===2){
        startLevelTwo()
    }
    if (difficulty===1&&difficultyMode===3){
        startLevelThree()
    }
    if (difficulty===2&&difficultyMode===1){
        startLevelFour()
    }
    if (difficulty===2&&difficultyMode===2){
        startLevelFive()
    }
    if (difficulty===2&&difficultyMode===3){
        startLevelSix()
    }
    if (difficulty===3&&difficultyMode===1){
        startLevelSeven()
    }
    if (difficulty===3&&difficultyMode===2){
        startLevelEight()
    }
    if (difficulty===3&&difficultyMode===3){
        startLevelNine()
    }
    if (difficulty===4&&difficultyMode===1){
        startLevelTen()
    }
    if (difficulty===4&&difficultyMode===2){
       startLevelEleven()
    }
    if (difficulty===4&&difficultyMode>2){
        startLevelTwelve()
    }
        setImg();
        $("#toggleMapButton").css("display","none");
        mapToggle=0;
        score=0
        refreshScore();
        $("#mapContainer").hide();
            $("#buyMapDisplay").removeAttr("disabled","");
        }
    });
