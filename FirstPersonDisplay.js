/*global maze, playerX, playerY */
var leftWall,rightWall,forewardWall,backwardWall;
function setImg()
{
    numWalls(); 
    if(leftWall===true&&rightWall===true&&forewardWall===false)//straight corridor
    {
        $("#backgroundImg").attr("src","Images/forwardcorridor.jpg");
    }
    else if(forewardWall===true&&leftWall===true&&rightWall===false)//corner right corridor
    {
        $("#backgroundImg").attr("src","Images/conercorridor.jpg");
    }
    else if(forewardWall===true&&leftWall===false&&rightWall===true)//corner left corridor
    {
        $("#backgroundImg").attr("src","Images/conercorridorreverse.jpg");
    }
    else if(forewardWall===true&&leftWall===false&&rightWall===false)//3 way front corridor
    {
        $("#backgroundImg").attr("src","Images/3wayfront.jpg");
    }
    else if(forewardWall===false&&leftWall===true&&rightWall===false)//3 way right corridor
    {
        $("#backgroundImg").attr("src","Images/3wayside.jpg");
    }
    else if(forewardWall===false&&leftWall===false&&rightWall===true)//3 way left corridor
    {
        $("#backgroundImg").attr("src","Images/3waysideinverse.jpg");
    }
    else if(forewardWall===false&&leftWall===false&&rightWall===false)//4 way corridor
    {
        $("#backgroundImg").attr("src","Images/intersectioncorridor.jpg");
    }
    else if(forewardWall===true&&leftWall===true&&rightWall===true)//dead end corridor
    {
        $("#backgroundImg").attr("src","Images/deadendp.jpg");
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
