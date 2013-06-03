/*global playerX, playerY, prevX, prevY, prevO, maze, currentLocal, recentmove */

loadPlayerData();

function savePlayerData(){
	"use strict";
	localStorage.haveData = true;
	localStorage.points = points; // spendable points
	localStorage.inventory = inventory; // inventory
	localStorage.maxLevel = maxLevel;
}

function loadPlayerData(){
	"use strict";
	if(localStorage.haveData !== "true"){
		return;
	}
	points = parseInt(localStorage.points);
	var tempInv = localStorage.inventory.split(",");
	inventory = [];
	for (var i = 0; i < 5; i++){
		inventory[i] = parseInt(tempInv[i]);
	}
	$("#carrotDisplay").text("Carrottes: "+ inventory[MORECARROT]); 
	$("#bullDozerDisplay").text("Bulldozer: "+ inventory[BULLDOZER]); 
	$("#flameCarrotDisplay").text("Carrottes Flamme: "+ inventory[FLAMECARROT]); 
	$("#buyMapDisplay").text("Carte: "+ inventory[MAP]); 
	$("#levelSkipDisplay").text("Sauter un Niveau: "+ inventory[LEVELSKIP]); 
	if(inventory[0]<= 0 )
	{
		$(document).ready(function(){
		$("#backGround").show();
		showShop();
        $("#shopBackButton").attr("disabled","disabled");
		$("#shopHiders").show();
		});
	}
	maxLevel = parseInt(localStorage.maxLevel);
	
}

function saveGame(){
	"use strict";
	savePlayerData();
	localStorage.score = score; // current score
	localStorage.haveSave = true;
	localStorage.mazeSize = mazeSize;
	localStorage.usedMap = usedMap;
	localStorage.difficulty = difficulty;
	localStorage.difficultyMode = difficultyMode;
	localStorage.LevelDisplay = LevelDisplay;
	localStorage.playerX = playerX; // player X coordinates
	localStorage.playerY = playerY; // player Y coordinates
	localStorage.prevX = prevX; // previous X coords
	localStorage.prevY = prevY; // previous Y coords
	localStorage.prevO = prevO; // previous facing direction
	localStorage.maze = maze; // maze data
	localStorage.currentLocal = currentLocal; // object at current location
	localStorage.recentmove = recentmove; // previous direction travelled
}

function loadGame(){
	"use strict";
	if(localStorage.haveSave !== "true"){
		return;
	}
	loadPlayerData();
	score = parseInt(localStorage.score);
	difficulty = parseInt(localStorage.difficulty);
	difficultyMode = parseInt(localStorage.difficultyMode);
	LevelDisplay = parseInt(localStorage.LevelDisplay);
	mazeSize = parseInt(localStorage.mazeSize);
	usedMap = localStorage.usedMap;
	if (usedMap === "false"){
		usedMap = false;
	} else if(usedMap === "true"){
		usedMap = true;
	}
	playerX = parseInt(localStorage.playerX);
	playerY = parseInt(localStorage.playerY);
	prevX = parseInt(localStorage.prevX);
	prevY = parseInt(localStorage.prevY);
	prevO = localStorage.prevO;
	currentLocal = localStorage.currentLocal;
	recentmove = localStorage.recentmove;
	var k = 0;
	var tempMaze = [];
	var savedMaze = localStorage.maze.split(",");
	for(var i = 0;i<mazeSize;i++){
		tempMaze[i]=[];
		for(var j=0;j<mazeSize;j++){
			tempMaze[i][j]=savedMaze[k];
			k++;
		}
	}
	maze = tempMaze;
	setImg();
	mazeDrawer();
	playing = true; // this needs to be set for the shop to work properly
}