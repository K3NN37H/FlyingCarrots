/*global playerX, playerY, prevX, prevY, prevO, maze, currentLocal, recentmove */

function savePlayerData(){
	"use strict";
	localStorage.score = score; // current score
	localStorage.points = points; // spendable points
	localStorage.inventory = inventory; // inventory
}

function loadPlayerData(){
	"use strict";
	score = parseInt(localStorage.score);
	points = parseInt(localStorage.points);
	var tempInv = localStorage.inventory.split(",");
	inventory = [];
	for (var i = 0; i < 5; i++){
		inventory[i] = parseInt(tempInv[i]);
	}
}

function saveMaze(){
	"use strict";
	savePlayerData();
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
	loadPlayerData();
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
	for(var i = 0;i<15;i++){
		tempMaze[i]=[];
		for(var j=0;j<15;j++){
			tempMaze[i][j]=savedMaze[k];
			k++;
		}
	}
	maze = tempMaze;
	mazeDrawer();
}