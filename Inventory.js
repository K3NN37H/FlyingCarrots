var usedMap=false;
function useItem(item)
{
	if(item==="map"&&inventory[MAP]>0)
	{
		$("#toggleMapButton").css("display","inline");
		inventory[MAP]--;
		$("#buyMapDisplay").text("Carte: "+ inventory[MAP]);
		$("#buyMapDisplay").attr("disabled","disabled");
		usedMap=true;
	}
	else if(item==="bulldozer"&&inventory[BULLDOZER]>0)
	{
		inventory[BULLDOZER]--;
		$("#bullDozerDisplay").text("Bulldozer: "+ inventory[BULLDOZER]);
		$("#buyMapDisplay").attr("disabled","disabled");
        $("#bullDozerDisplay").attr("disabled","disabled");
        $("#levelSkipDisplay").attr("disabled","disabled");
        $("#up").attr("disabled","disabled");
        $("#down").attr("disabled","disabled");
        $("#right").attr("disabled","disabled");
        $("#left").attr("disabled","disabled");
        $("#shopButton").attr("disabled","disabled");
        bulldozer();
	}
}
function bulldozer()
{
	numWalls(); 
	$("#bullDozer").show();
	console.log("entered here");
	if(leftWall===true&&rightWall===true&&forewardWall===false)//straight corridor
    {
    	console.log("entered");
    	$("#upBull").hide();
    }
    else if(forewardWall===true&&leftWall===true&&rightWall===false)//corner right corridor
    {
    	$("#rightBull").hide();
    }
    else if(forewardWall===true&&leftWall===false&&rightWall===true)//corner left corridor
    {
    	$("#leftBull").hide();
    }
    else if(forewardWall===true&&leftWall===false&&rightWall===false)//3 way front corridor
    {
    	$("#leftBull").hide();
    	$("#rightBull").hide();
    }
    else if(forewardWall===false&&leftWall===true&&rightWall===false)//3 way right corridor
    {
    	$("#upBull").hide();
    	$("#rightBull").hide();
    }
    else if(forewardWall===false&&leftWall===false&&rightWall===true)//3 way left corridor
    {
    	$("#upBull").hide();
    	$("#leftBull").hide();
    }
    else if(forewardWall===false&&leftWall===false&&rightWall===false)//4 way corridor
    {
    	inventory[BULLDOZER]++;
		$("#bullDozerDisplay").text("Bulldozer: "+ inventory[BULLDOZER]);
    }
    else if(forewardWall===true&&leftWall===true&&rightWall===true)//dead end corridor
    {
    }
}
function resetBull(direction)
{
	if(direction==="up")
	{
		if(recentmove==="up")
		{
			maze[playerX][playerY-1]="floor";
		}
		else if(recentmove==="left")
		{
			maze[playerX-1][playerY]="floor";
		}
		else if(recentmove==="right")
		{
			maze[playerX+1][playerY]="floor";
		}
		else if(recentmove==="down")
		{
			maze[playerX][playerY+1]="floor";
		}
		mover({which:"38"});
	}
	else if(direction==="left")
	{
		if(recentmove==="up")
		{
			maze[playerX-1][playerY]="floor";
		}
		else if(recentmove==="left")
		{
			maze[playerX][playerY+1]="floor";
		}
		else if(recentmove==="right")
		{
			maze[playerX][playerY-1]="floor";
		}
		else if(recentmove==="down")
		{
			maze[playerX+1][playerY]="floor";
		}
		mover({which:"37"});
	}
	else if(direction==="right")
	{
		if(recentmove==="up")
		{
			maze[playerX+1][playerY]="floor";
		}
		else if(recentmove==="left")
		{
			maze[playerX][playerY-1]="floor";
		}
		else if(recentmove==="right")
		{
			maze[playerX][playerY+1]="floor";
		}
		else if(recentmove==="down")
		{
			maze[playerX-1][playerY]="floor";
		}
		mover({which:"39"});
	}
	$("#bullDozer").hide();
	$("#upBull").show();
    $("#rightBull").show();
    $("#leftBull").show();
	if(usedMap===false)
	{
    	$("#buyMapDisplay").removeAttr("disabled","");
	}
    $("#bullDozerDisplay").removeAttr("disabled","");
    $("#levelSkipDisplay").removeAttr("disabled","");
    $("#up").removeAttr("disabled","disabled");
    $("#down").removeAttr("disabled","disabled");
    $("#right").removeAttr("disabled","disabled");
    $("#left").removeAttr("disabled","disabled");
    $("#shopButton").removeAttr("disabled","disabled");
}

$("#upBull").click(function(){resetBull("up");});
$("#rightBull").click(function(){resetBull("right");});
$("#leftBull").click(function(){resetBull("left");});
$("#toggleMapButton").click(toggleMap)

var mapToggle=0;
function toggleMap()
{
	if(mapToggle===0)
	{
		$("#mapContainer").show();
		mapToggle++;
	}
	else if(mapToggle===1)
	{
		$("#mapContainer").hide();
		mapToggle--;
	}
}

// buttons shown the number of items the player has.
$("#Inventory").append('<button class="gamebutton" id=carrotDisplay></button>');
$("#carrotDisplay").text("Carrottes: "+ inventory[MORECARROT]); 
$("#carrotDisplay").css("position","absolute");
$("#carrotDisplay").css("left",20+"%");
$("#carrotDisplay").css("top",94+"%");
$("#carrotDisplay").css("height",6+"%");
$("#carrotDisplay").css("width", 10+"%");


$("#Inventory").append('<button class="gamebutton" id=bullDozerDisplay></button>');
$("#bullDozerDisplay").text("Bulldozer: "+ inventory[BULLDOZER]); 
$("#bullDozerDisplay").css("position","absolute");
$("#bullDozerDisplay").css("left",50+"%");
$("#bullDozerDisplay").css("top",94+"%");
$("#bullDozerDisplay").css("height",6+"%");
$("#bullDozerDisplay").css("width", 10+"%");
$("#bullDozerDisplay").click(function(){useItem("bulldozer")});


$("#Inventory").append('<button class="gamebutton" id=flameCarrotDisplay></button>');
$("#flameCarrotDisplay").text("Carrottes Flamme: "+ inventory[FLAMECARROT]); 
$("#flameCarrotDisplay").css("position","absolute");
$("#flameCarrotDisplay").css("left",30+"%");
$("#flameCarrotDisplay").css("top",94+"%");
$("#flameCarrotDisplay").css("height",6+"%");
$("#flameCarrotDisplay").css("width", 10+"%");


$("#Inventory").append('<button class="gamebutton" id=buyMapDisplay></button>');
$("#buyMapDisplay").text("Carte: "+ inventory[MAP]); 
$("#buyMapDisplay").css("position","absolute");
$("#buyMapDisplay").css("left",40+"%");
$("#buyMapDisplay").css("top",94+"%");
$("#buyMapDisplay").css("height",6+"%");
$("#buyMapDisplay").css("width", 10+"%");
$("#buyMapDisplay").click(function(){useItem("map")});

$("#Inventory").append('<button class="gamebutton" id=levelSkipDisplay></button>');
$("#levelSkipDisplay").text("Sauter un Niveau: "+ inventory[LEVELSKIP]); 
$("#levelSkipDisplay").css("position","absolute");
$("#levelSkipDisplay").css("left",60+"%");
$("#levelSkipDisplay").css("top",94+"%");
$("#levelSkipDisplay").css("height",6+"%");
$("#levelSkipDisplay").css("width", 10+"%");
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
