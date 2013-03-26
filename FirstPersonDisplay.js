var xWall;
var yWall;
function setImg()
{
    numWalls();    if(xWall===2||yWall===2)
    {
        $("#display").attr("src","forwardcorridor.jpg");
    }
    else if(xWall===1&&yWall===1)
    {
        $("#display").attr("src","conercorridor.jpg");
    }
}
function numWalls()
{
    xWall=0;
    yWall=0;
    try
    {
        if(maze[playerX][playerY-1]===false)
        {console.log(xWall+" "+yWall);
            yWall++;
        }
    }
    catch(err){}
    try
    {
        if(maze[playerX][playerY+1]===false)
        {
            yWall++;
        }
    }
    catch(err){}
    try
    {console.log(xWall+" "+yWall);
        if(maze[playerX-1][playerY]===false)
        {
            xWall++;
        }
    }
    catch(err){}
    try
    {console.log(xWall+" "+yWall);
        if(maze[playerX+1][playerY]===false)
        {
            xWall++;
        }
    }
    catch(err){}
}
