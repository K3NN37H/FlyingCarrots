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
	
	$("#bullDozer").show();
	numWalls();
	if(forewardWall===false&&leftWall===false&&rightWall===false)
	{
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
		inventory[3]++;
	}
	else if(recentmove==="up")
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
//	if(leftWall===true&&rightWall===true&&forewardWall===false)//straight corridor
//    {
//    	console.log("entered");
//    	$("#upBull").hide();
//    }
//    else if(forewardWall===true&&leftWall===true&&rightWall===false)//corner right corridor
//    {
//    	$("#rightBull").hide();
//    }
//    else if(forewardWall===true&&leftWall===false&&rightWall===true)//corner left corridor
//    {
//    	$("#leftBull").hide();
//    }
//    else if(forewardWall===true&&leftWall===false&&rightWall===false)//3 way front corridor
//    {
//    	$("#leftBull").hide();
//    	$("#rightBull").hide();
//    }
//    else if(forewardWall===false&&leftWall===true&&rightWall===false)//3 way right corridor
//    {
//    	$("#upBull").hide();
//    	$("#rightBull").hide();
//    }
//    else if(forewardWall===false&&leftWall===false&&rightWall===true)//3 way left corridor
//    {
//    	$("#upBull").hide();
//    	$("#leftBull").hide();
//    }
//    else if(forewardWall===false&&leftWall===false&&rightWall===false)//4 way corridor
//    {
//    	inventory[BULLDOZER]++;
//		$("#bullDozerDisplay").text("Bulldozer: "+ inventory[BULLDOZER]);
//    }
//    else if(forewardWall===true&&leftWall===true&&rightWall===true)//dead end corridor
//    {
//    }
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