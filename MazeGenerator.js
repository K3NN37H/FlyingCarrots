var mazeSize=17;
var maze=[mazeSize];
var endX, endY, endCounter=-1;
for(var i=0;i<mazeSize;i++)
{
    maze[i]=[mazeSize]
    for(var j=0;j<mazeSize;j++)
    {
        maze[i][j]=false;
    }
}

maze[0][1]=true;
maze[1][1]=true;
makeMaze(1,1,0);
function makeMaze (cx,cy,counter)
{
 
    deadEnd(cx,cy,counter);
    counter++;
    printMaze();
    if(cx==1&&cy==1)
    {
        while(maze[cx+2][cy]===false||maze[cx][cy+2]===false)//can go down or right
        {
            var dir;
            dir=Math.floor(Math.random()*2+1);
            if(dir==1)
            {
                if(maze[cx][cy+2]===false)
                {
                    maze[cx][cy+1]=true;
                    maze[cx][cy+2]=true;
                    makeMaze(cx,cy+2,counter);
                }
            }
            if(dir==2)
            {
                if(maze[cx+2][cy]===false)
                {
                    maze[cx+1][cy]=true;
                    maze[cx+2][cy]=true;
                    makeMaze(cx+2,cy,counter);
                }
            }
        }
    }
    else if (cx===1&&cy==mazeSize-2)
    {
        while(maze[cx+2][cy]===false||maze[cx][cy-2]===false)//can go up or right
        {
            var dir;
            dir=Math.floor(Math.random()*2+1);
            if(dir==1)
            {
                if(maze[cx][cy-2]===false)
                {
                    maze[cx][cy-1]=true;
                    maze[cx][cy-2]=true;
                    makeMaze(cx,cy-2,counter);
                }
            }
            if(dir==2)
            {
                if(maze[cx+2][cy]===false)
                {
                    maze[cx+1][cy]=true;
                    maze[cx+2][cy]=true;
                    makeMaze(cx+2,cy,counter);
                }
            }
        }
    }
    else if (cx==mazeSize-2&&cy===1)
    {
        while(maze[cx][cy+2]===false||maze[cx-2][cy]===false)//can go down or left
        {
            var dir;
            dir=Math.floor(Math.random()*2+1);
            if(dir==1)
            {
                if(maze[cx][cy+2]===false)
                {
                    maze[cx][cy+1]=true;
                    maze[cx][cy+2]=true;
                    makeMaze(cx,cy+2,counter);
                }
            }
            if(dir==2)
            {
                if(maze[cx-2][cy]===false)
                {
                    maze[cx-1][cy]=true;
                    maze[cx-2][cy]=true;
                    makeMaze(cx-2,cy,counter);
                }
            }
        }
    }
    else if(cx==mazeSize-2&&cy==mazeSize-2)
    {
        while(maze[cx-2][cy]===false||maze[cx][cy-2]===false)//can go up or left
        {
           var dir;
            dir=Math.floor(Math.random()*2+1);
            if(dir==1)
            {
                if(maze[cx][cy-2]===false)
                {
                    maze[cx][cy-1]=true;
                    maze[cx][cy-2]=true;
                    makeMaze(cx,cy-2,counter);
                }
            }
            if(dir==2)
            {
                if(maze[cx-2][cy]===false)
                {
                    maze[cx-1][cy]=true;
                    maze[cx-2][cy]=true;
                    makeMaze(cx-2,cy,counter);
                }
            }
        }
    }
    else if(cx===1)
    {
        while(maze[cx+2][cy]===false||maze[cx][cy+2]===false||maze[cx][cy-2]===false)//can go up down right
        {
           var dir;
            dir=Math.floor(Math.random()*3+1);
            if(dir==1)
            {
                if(maze[cx][cy+2]===false)
                {
                    maze[cx][cy+1]=true;
                    maze[cx][cy+2]=true;
                    makeMaze(cx,cy+2,counter);
                }
            }
            if(dir==2)
            {
                if(maze[cx+2][cy]===false)
                {
                    maze[cx+1][cy]=true;
                    maze[cx+2][cy]=true;
                    makeMaze(cx+2,cy,counter);
                }
            }
            if(dir==3)
            {
                if(maze[cx][cy-2]===false)
                {
                    maze[cx][cy-1]=true;
                    maze[cx][cy-2]=true;
                    makeMaze(cx,cy-2,counter);
                }
            }
        }
    }
    else if(cx==mazeSize-2)
    {
        while(maze[cx][cy+2]===false||maze[cx-2][cy]===false||maze[cx][cy-2]===false)//down up left
        {
           var dir;
            dir=Math.floor(Math.random()*3+1);
            if(dir==1)
            {
                if(maze[cx][cy+2]===false)
                {
                    maze[cx][cy+1]=true;
                    maze[cx][cy+2]=true;
                    makeMaze(cx,cy+2,counter);
                }
            }
            if(dir==2)
            {
                if(maze[cx-2][cy]===false)
                {
                    maze[cx-1][cy]=true;
                    maze[cx-2][cy]=true;
                    makeMaze(cx-2,cy,counter);
                }
            }
            if(dir==3)
            {
                if(maze[cx][cy-2]===false)
                {
                    maze[cx][cy-1]=true;
                    maze[cx][cy-2]=true;
                    makeMaze(cx,cy-2,counter);
                }
            }
        }
    }
    else if(cy===1)
    {
        while(maze[cx+2][cy]===false||maze[cx][cy+2]===false||maze[cx-2][cy]===false)//down left right
        {
           var dir;
            dir=Math.floor(Math.random()*3+1);
            if(dir==1)
            {
                if(maze[cx][cy+2]===false)
                {
                    maze[cx][cy+1]=true;
                    maze[cx][cy+2]=true;
                    makeMaze(cx,cy+2,counter);
                }
            }
            if(dir==2)
            {
                if(maze[cx+2][cy]===false)
                {
                    maze[cx+1][cy]=true;
                    maze[cx+2][cy]=true;
                    makeMaze(cx+2,cy,counter);
                }
            }
            if(dir==3)
            {
                if(maze[cx-2][cy]===false)
                {
                    maze[cx-1][cy]=true;
                    maze[cx-2][cy]=true;
                    makeMaze(cx-2,cy,counter);
                }
            }
        }
    }
    else if(cy==mazeSize-2)
    {
        while(maze[cx+2][cy]===false||maze[cx-2][cy]===false||maze[cx][cy-2]===false)
        {
           var dir;
            dir=Math.floor(Math.random()*3+1);
            if(dir==1)
            {
                if(maze[cx][cy-2]===false)
                {
                    maze[cx][cy-1]=true;
                    maze[cx][cy-2]=true;
                    makeMaze(cx,cy-2,counter);
                }
            }
            if(dir==2)
            {
                if(maze[cx+2][cy]===false)
                {
                    maze[cx+1][cy]=true;
                    maze[cx+2][cy]=true;
                    makeMaze(cx+2,cy,counter);
                }
            }
            if(dir==3)
            {
                if(maze[cx-2][cy]===false)
                {
                    maze[cx-1][cy]=true;
                    maze[cx-2][cy]=true;
                    makeMaze(cx-2,cy,counter);
                }
            }
        }
    }
    else
    {
        while(maze[cx+2][cy]===false||maze[cx][cy+2]===false||maze[cx-2][cy]===false||maze[cx][cy-2]===false)
        {
            var dir;
            dir=Math.floor(Math.random()*4+1);
            if(dir==1)
            {
                if(maze[cx][cy+2]===false)
                {
                    maze[cx][cy+1]=true;
                    maze[cx][cy+2]=true;
                    makeMaze(cx,cy+2,counter);
                }
            }
            if(dir==2)
            {
                if(maze[cx+2][cy]===false)
                {
                    maze[cx+1][cy]=true;
                    maze[cx+2][cy]=true;
                    makeMaze(cx+2,cy,counter);
                }
            }
            if(dir==3)
            {
                if(maze[cx-2][cy]===false)
                {
                    maze[cx-1][cy]=true;
                    maze[cx-2][cy]=true;
                    makeMaze(cx-2,cy,counter);
                }
            }
            if(dir==4)
            {
                if(maze[cx][cy-2]===false)
                {
                    maze[cx][cy-1]=true;
                    maze[cx][cy-2]=true;
                    makeMaze(cx,cy-2,counter);
                }
            }
        }
    }
}

function printMaze()
{
    var temp="";
    for(var i=0;i<mazeSize;i++)
    {
        for(var j=0;j<mazeSize;j++)
        {
            if(maze[j][i]===false)
            {
                temp+="@ ";
            }
            if(maze[j][i]===true)
            {
                temp+="_ ";
            }
        }
        console.log(temp);
        temp="";
    }
    console.log("****************************************************");
}

function deadEnd(cx,cy, counter)
{
    console.log(counter);
    if(counter>endCounter)
    {
        endX=cx;
        endY=cy;
        endCounter=counter;
        
    }
    console.log(endX+", "+endY);
}

function mazeDrawer()
{
    var counter=0;
    for(var i=0;i<mazeSize;i++)
    {
         $("#mapContainer").append('<tr>');
        for(var j=0;j<mazeSize;j++)
        {
           
            if(maze[j][i]===false)
            {
                $("#mapContainer").append('<th id=wall></th>');
            }
            if(maze[j][i]===true)
            {
                $("#mapContainer").append('<th id=floor></th>');
            }
        }
        $("#mapContainer").append('</tr>');
    }
}









