//stuff from main menu
var maxLevel=1;
var haveSave;
var playing = false;
var difficulty = 1;
var difficultyMode = 1;
var LevelDisplay=1;

var xBack = $("#backgroundImg1").width();
var yBack = $("#backgroundImg1").height();

$("#menuPage").append('<map name="menunav" id="menunav"></map>');
$("#menunav").append('<area id="startgame" shape="rect" coords="'+Math.round(xBack*0.217)+','+Math.round(yBack*0.14)+','+Math.round(xBack*0.8)+','+Math.round(yBack*0.323)+'">');
$("#menunav").append('<area id="continue" shape="rect" coords="'+Math.round(xBack*0.217)+','+Math.round(yBack*0.323)+','+Math.round(xBack*0.783)+','+Math.round(yBack*0.48)+'">');
$("#menunav").append('<area id="instruction" shape="rect" coords="'+Math.round(xBack*0.15)+','+Math.round(yBack*0.528)+','+Math.round(xBack*0.8)+','+Math.round(yBack*0.647)+'">');
$("#menunav").append('<area id="menuShop" shape="rect" coords="'+Math.round(xBack*0.167)+','+Math.round(yBack*0.668)+','+Math.round(xBack*0.8)+','+Math.round(yBack*0.744)+'">');
$("#menunav").append('<area id="options" shape="rect" coords="'+Math.round(xBack*0.025)+','+Math.round(yBack*0.0215)+','+Math.round(xBack*0.075)+','+Math.round(yBack*0.086)+'">');

$("#difficultyDisplay").append('<button class="gamebutton" id=difficultybutton></button>');
$("#scoreDisplay").append('<button class="gamebutton" id=scorebutton></button>');
$("#mainBody").append('<button class="gamebutton" id=totalScoreButton></button>');
//stuff from shop
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

//stuff from map displayer
var currentLocal="floor";
var prevX, prevY, prevO;
var recentmove="right";

$("#endGame").append('<button class="gamebutton" id=finalScoreButton></button>');

//stuff from music
var song;
var bgm = new Audio();
var mute = false;

//stuff from debug
var disableSlingshot = false;
var disableMoveAnim = false;

//stuff from first person display
var leftWall,rightWall,forewardWall,backwardWall;
var backgroundCount = 1;

//stuff from score
var score = 0;
var points = 10000;

//from Inventory
var usedMap=false;
var mapToggle=0;
$("#Inventory").append('<button class="gamebutton" id=carrotDisplay></button>');
$("#Inventory").append('<button class="gamebutton" id=bullDozerDisplay></button>');
$("#Inventory").append('<button class="gamebutton" id=flameCarrotDisplay></button>');
$("#Inventory").append('<button class="gamebutton" id=buyMapDisplay></button>');
$("#Inventory").append('<button class="gamebutton" id=levelSkipDisplay></button>');
