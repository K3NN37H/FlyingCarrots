//stuff from main menu
var maxLevel=1;
var haveSave;
var playing = false;
var difficulty = 1;
var difficultyMode = 1;
var LevelDisplay=1;

var xBack = $("#backgroundImg1").width();
var yBack = $("#backgroundImg1").height();

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

//stuff from map displayer
var currentLocal="floor";
var prevX, prevY, prevO;
var recentmove="right";

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