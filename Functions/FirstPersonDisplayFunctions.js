//this function is called whenever a player moves onto a new tile.
//it will call a function to check the orientation of the walls, then fade out the current
//image and set it to the new image.
function setImg()
{
    numWalls();//check for number of walls
	// fade out the first image
	if (disableMoveAnim){
		$("#backgroundImg"+backgroundCount).css("opacity", "0");
	} else {
		$("#backgroundImg"+backgroundCount).animate({opacity:0,width:"200%",height:"200%",left:"-50%",top:"-25%"},1000,function () {$("#backgroundImg"+backgroundCount).css({left:"0%",top:"0%",height:"100%",width:"100%"});});
	}
	//check which background is currently being displayed
	if (backgroundCount === 1) {
		backgroundCount = 2;
	}
	else {
		backgroundCount = 1;
	}
	//set the appropriate image to the hidden background divider.
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
	//fade in the second image
	$("#backgroundImg"+backgroundCount).css({left:"0%",top:"0%",height:"100%",width:"100%"});
	if (disableMoveAnim){
		$("#backgroundImg"+backgroundCount).css("opacity", "1");
	} else {
		$("#backgroundImg"+backgroundCount).animate({opacity:1},1000,function () {});
	}
}

//this function will check for the number of walls, and where the walls are, from the players perspective
function numWalls()
{
    leftWall=false;
    rightWall=false;
    forewardWall=false;
    backwardWall=false;
	//check for players current orientation
    if(recentmove==="up")
    {
		//check for where is the walls. If the tile is not defined (ie, next to edge of
		//maze, then it is treated as a wall.
        try
        {
            if(maze[playerX][playerY-1]==="wall"||maze[playerX][playerY-1]===undefined)
            {
                forewardWall=true;
            }
        }
        catch(err){forewardWall=true;}
        try
        {
            if(maze[playerX][playerY+1]==="wall"||maze[playerX][playerY+1]===undefined)
            {
                backwardWall=true;
            }
        }
        catch(err){backwardWall=true;}
        try
        {
            if(maze[playerX-1][playerY]==="wall"||maze[playerX-1][playerY]===undefined)
            {
                leftWall=true;
            }
        }
        catch(err){leftWall=true;}
        try
        {
            if(maze[playerX+1][playerY]==="wall"||maze[playerX+1][playerY]===undefined)
            {
                rightWall=true;
            }
        }
        catch(err){rightWall=true;}
    }
	//facing down.
    else if(recentmove==="down")
    {
        try
        {
            if(maze[playerX][playerY+1]==="wall"||maze[playerX][playerY+1]===undefined)
            {
                forewardWall=true;
            }
        }
        catch(err){forewardWall=true;}
        try
        {
            if(maze[playerX][playerY-1]==="wall"||maze[playerX][playerY-1]===undefined)
            {
                backwardWall=true;
            }
        }
        catch(err){backwardWall=true;}
        try
        {
            if(maze[playerX+1][playerY]==="wall"||maze[playerX+1][playerY]===undefined)
            {
                leftWall=true;
            }
        }
        catch(err){leftWall=true;}
        try
        {
            if(maze[playerX-1][playerY]==="wall"||maze[playerX-1][playerY]===undefined)
            {
                rightWall=true;
            }
        }
        catch(err){rightWall=true;}
    }//facing left
    else if(recentmove==="left")
    {
        try
        {
            if(maze[playerX-1][playerY]==="wall"||maze[playerX-1][playerY]===undefined)
            {
                forewardWall=true;
            }
        }
        catch(err){forewardWall=true;}
        try
        {
            if(maze[playerX+1][playerY]==="wall"||maze[playerX+1][playerY]===undefined)
            {
                backwardWall=true;
            }
        }
        catch(err){backwardWall=true;}
        try
        {
            if(maze[playerX][playerY+1]==="wall"||maze[playerX][playerY+1]===undefined)
            {
                leftWall=true;
            }
        }
        catch(err){leftWall=true;}
        try
        {
            if(maze[playerX][playerY-1]==="wall"||maze[playerX][playerY-1]===undefined)
            {
                rightWall=true;
            }
        }
        catch(err){rightWall=true;}
    }//facing right
    else if(recentmove==="right")
    {
        try
        {
            if(maze[playerX+1][playerY]==="wall"||maze[playerX+1][playerY]===undefined)
            {
                forewardWall=true;
            }
        }
        catch(err){forewardWall=true;}
        try
        {
            if(maze[playerX-1][playerY]==="wall"||maze[playerX-1][playerY]===undefined)
            {
                backwardWall=true;
            }
        }
        catch(err){backwardWall=true;}
        try
        {
            if(maze[playerX][playerY-1]==="wall"||maze[playerX][playerY-1]===undefined)
            {
                leftWall=true;
            }
        }
        catch(err){leftWall=true;}
        try
        {
            if(maze[playerX][playerY+1]==="wall"||maze[playerX][playerY+1]===undefined)
            {
                rightWall=true;
            }
        }
        catch(err){rightWall=true;}
    }
}