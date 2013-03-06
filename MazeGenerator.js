mazeSize=20;
maze=[mazeSize];
for(var i=0;i<mazeSize;i++)
{
    maze[i]=[mazeSize]
    for(var j=0;j<mazeSize;j++)
    {
        maze[i][j]=false;
    }
}
maze[0][0]=true;
makeMaze(0,0);
function makeMaze (cx,cy)
{
    if(cx==0&&cy==0)
    {
        while(maze[cx+2][cy]||maze[cx][cy+2])
        {
           
        }
    }
    else if (cx==0&&cy=mazeSize-1)
    {
        while(maze[cx+2][cy]||maze[cx][cy-2])
        {
           
        }
    }
    else if (cx==mazeSize-1&&cy==0)
    {
        while(maze[cx][cy+2]||maze[cx-2][cy])
        {
           
        }
    }
    else if(cx==mazeSize-1&&cy==mazeSize-1)
    {
        while(maze[cx-2][cy]||maze[cx][cy-2])
        {
           
        }
    }
    else if(cx==0)
    {
        while(maze[cx+2][cy]||maze[cx][cy+2]||maze[cx][cy-2])
        {
           
        }
    }
    else if(cx==mazeSize-1)
    {
        while(maze[cx][cy+2]||maze[cx-2][cy]||maze[cx][cy-2])
        {
           
        }
    }
    else if(cy==0)
    {
        while(maze[cx+2][cy]||maze[cx][cy+2]||maze[cx-2][cy])
        {
           
        }
    }
    else if(cy==mazeSize-1)
    else
    {
        while(maze[cx+2][cy]||maze[cx][cy+2]||maze[cx-2][cy]||maze[cx][cy-2])
        {
           
        }
    }
}