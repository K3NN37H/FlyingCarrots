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
		if(forewardWall===false&&leftWall===false&&rightWall===false)
		{
		}
		else
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
}

function bulldozer()
{
	$("#bullDozer").show();
	numWalls();
	if(recentmove==="up")
    {
        try
        {
            if(maze[playerX][playerY-1]==="wall"&&maze[playerX][playerY-1]!=undefined)
            {
                $("#upBull").show();
            }
        }
        catch(err){}
        try
        {
            if(maze[playerX-1][playerY]==="wall"&&maze[playerX-1][playerY]!=undefined)
            {
               $("#leftBull").show();
            }
        }
        catch(err){}
		try
        {
            if(maze[playerX+1][playerY]==="wall"&&maze[playerX+1][playerY]!=undefined)
            {
               $("#rightBull").show();
            }
        }
        catch(err){}
    }
    else if(recentmove==="down")
    {
		try
        {
            if(maze[playerX][playerY+1]==="wall"&&maze[playerX][playerY+1]!=undefined)
            {
               $("#upBull").show();
            }
        }
        catch(err){}
		try
        {
            if(maze[playerX+1][playerY]==="wall"&&maze[playerX+1][playerY]!=undefined)
            {
               $("#leftBull").show();
            }
        }
        catch(err){}
		try
        {
            if(maze[playerX-1][playerY]==="wall"&&maze[playerX-1][playerY]!=undefined)
            {
               $("#rightBull").show();
            }
        }
        catch(err){}
    }
    else if(recentmove==="left")
    {
		try
        {
            if(maze[playerX-1][playerY]==="wall"&&maze[playerX-1][playerY]!=undefined)
            {
               $("#upBull").show();
            }
        }
        catch(err){}
		try
        {
            if(maze[playerX][playerY+1]==="wall"&&maze[playerX][playerY+1]!=undefined)
            {
               $("#leftBull").show();
            }
        }
        catch(err){}
		try
        {
            if(maze[playerX][playerY-1]==="wall"&&maze[playerX][playerY-1]!=undefined)
            {
               $("#rightBull").show();
            }
        }
        catch(err){}
    }
    else if(recentmove==="right")
    {
		try
        {
            if(maze[playerX+1][playerY]==="wall"&&maze[playerX+1][playerY]!=undefined)
            {
               $("#upBull").show();
            }
        }
        catch(err){}
		try
        {
            if(maze[playerX][playerY-1]==="wall"&&maze[playerX][playerY-1]!=undefined)
            {
               $("#leftBull").show();
            }
        }
        catch(err){}
		try
        {
            if(maze[playerX][playerY+1]==="wall"&&maze[playerX][playerY+1]!=undefined)
            {
               $("#rightBull").show();
            }
        }
        catch(err){}
    }
}
//Clicking on level skip will let the player go to the next level directly.
//if the player use level skip in level 12, he will go to level 12 again but which will have a different maze.
function levelSkipper()
{
	if(inventory[LEVELSKIP]>0)
       {levelFinish();
       inventory[LEVELSKIP]--;
       $("#levelSkipDisplay").text("Sauter un Niveau: "+ inventory[LEVELSKIP]); 
        currentLocal="floor";
        usedMap=false;
        recentmove="right";
    if (difficulty===1&&difficultyMode===2){
        LevelDisplay=2;
    }
    if (difficulty===1&&difficultyMode===3){
        LevelDisplay=3;
    }
    if (difficulty===2&&difficultyMode===1){
        LevelDisplay=4;
   }
    if (difficulty===2&&difficultyMode===2){
        LevelDisplay=5;
    }
    if (difficulty===2&&difficultyMode===3){
        LevelDisplay=6;
    }
    if (difficulty===3&&difficultyMode===1){
       LevelDisplay=7;
    }
    if (difficulty===3&&difficultyMode===2){
        LevelDisplay=8;
    }
    if (difficulty===3&&difficultyMode===3){
        LevelDisplay=9;
    }
    if (difficulty===4&&difficultyMode===1){
        LevelDisplay=10;
    }
    if (difficulty===4&&difficultyMode===2){
       LevelDisplay=11;
    }
    if (difficulty===4&&difficultyMode>2){
        LevelDisplay=12;
    }
        var temp = {
            data:{
                diff: difficulty, size: difficultyMode, level: LevelDisplay
            }
        };
        setLevel(temp);
        setImg();
        $("#toggleMapButton").css("display","none");
        mapToggle=0;
        score=0
        refreshScore();
        if(LevelDisplay>maxLevel)
        {
            maxLevel=LevelDisplay;
        }
        savePlayerData();
        $("#mapContainer").hide();
            $("#buyMapDisplay").removeAttr("disabled","");
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
	$("#upBull").hide();
    $("#rightBull").hide();
    $("#leftBull").hide();
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