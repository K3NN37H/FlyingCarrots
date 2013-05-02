
/*global maze, playerX, playerY */
var leftWall,rightWall,forewardWall,backwardWall;
var backgroundCount = 1;
function setImg()
{
    numWalls();
	// fade out the first image
	if (disableMoveAnim){
		$("#backgroundImg"+backgroundCount).css("opacity", "0");
	} else {
		$("#backgroundImg"+backgroundCount).animate({opacity:0,width:"200%",height:"200%",left:"-50%",top:"-25%"},1000,function () {$("#backgroundImg"+backgroundCount).css({left:"0%",top:"0%",height:"100%",width:"100%"});});
	}
	if (backgroundCount === 1) {
		backgroundCount = 2;
	}
	else {
		backgroundCount = 1;
	}
    if(leftWall===true&&rightWall===true&&forewardWall===false)//straight corridor
    {
        $("#backgroundImg"+backgroundCount).attr("src","Images/forwardcorridor.jpg");
    }
    else if(forewardWall===true&&leftWall===true&&rightWall===false)//corner right corridor
    {
        $("#backgroundImg"+backgroundCount).attr("src","Images/conercorridor.jpg");
    }
    else if(forewardWall===true&&leftWall===false&&rightWall===true)//corner left corridor
    {
        $("#backgroundImg"+backgroundCount).attr("src","Images/conercorridorreverse.jpg");
    }
    else if(forewardWall===true&&leftWall===false&&rightWall===false)//3 way front corridor
    {
        $("#backgroundImg"+backgroundCount).attr("src","Images/3wayfront.jpg");
    }
    else if(forewardWall===false&&leftWall===true&&rightWall===false)//3 way right corridor
    {
        $("#backgroundImg"+backgroundCount).attr("src","Images/3wayside.jpg");
    }
    else if(forewardWall===false&&leftWall===false&&rightWall===true)//3 way left corridor
    {
        $("#backgroundImg"+backgroundCount).attr("src","Images/3waysideinverse.jpg");
    }
    else if(forewardWall===false&&leftWall===false&&rightWall===false)//4 way corridor
    {
        $("#backgroundImg"+backgroundCount).attr("src","Images/intersectioncorridor.jpg");
    }
    else if(forewardWall===true&&leftWall===true&&rightWall===true)//dead end corridor
    {
        $("#backgroundImg"+backgroundCount).attr("src","Images/deadendp.jpg");
    }
	
	$("#backgroundImg"+backgroundCount).css({left:"0%",top:"0%",height:"100%",width:"100%"});
	if (disableMoveAnim){
		$("#backgroundImg"+backgroundCount).css("opacity", "1");
	} else {
		$("#backgroundImg"+backgroundCount).animate({opacity:1},1000,function () {});
	}
}
function numWalls()
{
    leftWall=false;
    rightWall=false;
    forewardWall=false;
    backwardWall=false;
    if(recentmove==="up")
    {
        try
        {
            if(maze[playerX][playerY-1]==="wall")
            {
                forewardWall=true;
            }
        }
        catch(err){}
        try
        {
            if(maze[playerX][playerY+1]==="wall")
            {
                backwardWall=true;
            }
        }
        catch(err){}
        try
        {
            if(maze[playerX-1][playerY]==="wall")
            {
                leftWall=true;
            }
        }
        catch(err){}
        try
        {
            if(maze[playerX+1][playerY]==="wall")
            {
                rightWall=true;
            }
        }
        catch(err){}
    }
    else if(recentmove==="down")
    {
        try
        {
            if(maze[playerX][playerY+1]==="wall")
            {
                forewardWall=true;
            }
        }
        catch(err){}
        try
        {
            if(maze[playerX][playerY-1]==="wall")
            {
                backwardWall=true;
            }
        }
        catch(err){}
        try
        {
            if(maze[playerX+1][playerY]==="wall")
            {
                leftWall=true;
            }
        }
        catch(err){}
        try
        {
            if(maze[playerX-1][playerY]==="wall")
            {
                rightWall=true;
            }
        }
        catch(err){}
    }
    else if(recentmove==="left")
    {
        try
        {
            if(maze[playerX-1][playerY]==="wall")
            {
                forewardWall=true;
            }
        }
        catch(err){}
        try
        {
            if(maze[playerX+1][playerY]==="wall")
            {
                backwardWall=true;
            }
        }
        catch(err){}
        try
        {
            if(maze[playerX][playerY+1]==="wall")
            {
                leftWall=true;
            }
        }
        catch(err){}
        try
        {
            if(maze[playerX][playerY-1]==="wall")
            {
                rightWall=true;
            }
        }
        catch(err){}
    }
    else if(recentmove==="right")
    {
        try
        {
            if(maze[playerX+1][playerY]==="wall")
            {
                forewardWall=true;
            }
        }
        catch(err){}
        try
        {
            if(maze[playerX-1][playerY]==="wall")
            {
                backwardWall=true;
            }
        }
        catch(err){}
        try
        {
            if(maze[playerX][playerY-1]==="wall")
            {
                leftWall=true;
            }
        }
        catch(err){}
        try
        {
            if(maze[playerX][playerY+1]==="wall")
            {
                rightWall=true;
            }
        }
        catch(err){}
    }
}