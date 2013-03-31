var xWall;
var yWall;
function setImg()
{
    numWalls();    
    if(xWall===2||yWall===2)//straight corridor
    {
        $("body").css("background-image",'url("forwardcorridor.jpg")');
    }
    else if(xWall===1&&yWall===1)//corner corridor
    {
        $("body").css("background-image",'url("conercorridor.jpg")');
    }
    else if((xWall===0&&yWall===1)||(xWall===1&&yWall===0))//3-way 
    {
        
    }
    else if(xWall===0&&yWall===0)//4-way
    {
        
    }
    else if((xWall===1&&yWall===2)||(xWall===2&&yWall===1))//dead end
    {
        
    }
}
function numWalls()
{
    xWall=0;
    yWall=0;
    try
    {
        if(maze[playerX][playerY-1]==="wall")
        {
            yWall++;
        }
    }
    catch(err){}
    try
    {
        if(maze[playerX][playerY+1]==="wall")
        {
            yWall++;
        }
    }
    catch(err){}
    try
    {
        if(maze[playerX-1][playerY]==="wall")
        {
            xWall++;
        }
    }
    catch(err){}
    try
    {
        if(maze[playerX+1][playerY]==="wall")
        {
            xWall++;
        }
    }
    catch(err){}
}
