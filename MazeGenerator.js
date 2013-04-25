$("#startgame").click(startGame);

function startGame(){
    $("#menuPage").hide();
}

var mazeSize=15;
var numZombie=10;
var numBull=5;
var maze=[mazeSize];
var endX, endY, endCounter;
var playerX;
var playerY;

function createMaze()
{
    endCounter=-1;
    playerX=0;
    playerY=1;
    for(var i=0;i<mazeSize;i++)
    {
        maze[i]=[mazeSize];
        for(var j=0;j<mazeSize;j++)
        {
            maze[i][j]="wall";
        }
    }
    maze[0][1]="floor";
    maze[1][1]="floor";
    makeMaze(1,1,0);
    maze[0][1]="player";
    maze[endX][endY]="kite";
    inputEnemies();
    mazeDrawer();
}
function makeMaze (cx,cy,counter)
{
    deadEnd(cx,cy,counter);
    counter++;
    if(cx==1&&cy==1)
    {
        while(maze[cx+2][cy]==="wall"||maze[cx][cy+2]==="wall")//can go down or right
        {
            var dir;
            dir=Math.floor(Math.random()*2+1);
            if(dir==1)
            {
                if(maze[cx][cy+2]==="wall")
                {
                    maze[cx][cy+1]="floor";
                    maze[cx][cy+2]="floor";
                    makeMaze(cx,cy+2,counter);
                }
            }
            if(dir==2)
            {
                if(maze[cx+2][cy]==="wall")
                {
                    maze[cx+1][cy]="floor";
                    maze[cx+2][cy]="floor";
                    makeMaze(cx+2,cy,counter);
                }
            }
        }
    }
    else if (cx===1&&cy==mazeSize-2)
    {
        while(maze[cx+2][cy]==="wall"||maze[cx][cy-2]==="wall")//can go up or right
        {
            var dir;
            dir=Math.floor(Math.random()*2+1);
            if(dir==1)
            {
                if(maze[cx][cy-2]==="wall")
                {
                    maze[cx][cy-1]="floor";
                    maze[cx][cy-2]="floor";
                    makeMaze(cx,cy-2,counter);
                }
            }
            if(dir==2)
            {
                if(maze[cx+2][cy]==="wall")
                {
                    maze[cx+1][cy]="floor";
                    maze[cx+2][cy]="floor";
                    makeMaze(cx+2,cy,counter);
                }
            }
        }
    }
    else if (cx==mazeSize-2&&cy===1)
    {
        while(maze[cx][cy+2]==="wall"||maze[cx-2][cy]==="wall")//can go down or left
        {
            var dir;
            dir=Math.floor(Math.random()*2+1);
            if(dir==1)
            {
                if(maze[cx][cy+2]==="wall")
                {
                    maze[cx][cy+1]="floor";
                    maze[cx][cy+2]="floor";
                    makeMaze(cx,cy+2,counter);
                }
            }
            if(dir==2)
            {
                if(maze[cx-2][cy]==="wall")
                {
                    maze[cx-1][cy]="floor";
                    maze[cx-2][cy]="floor";
                    makeMaze(cx-2,cy,counter);
                }
            }
        }
    }
    else if(cx==mazeSize-2&&cy==mazeSize-2)
    {
        while(maze[cx-2][cy]==="wall"||maze[cx][cy-2]==="wall")//can go up or left
        {
           var dir;
            dir=Math.floor(Math.random()*2+1);
            if(dir==1)
            {
                if(maze[cx][cy-2]==="wall")
                {
                    maze[cx][cy-1]="floor";
                    maze[cx][cy-2]="floor";
                    makeMaze(cx,cy-2,counter);
                }
            }
            if(dir==2)
            {
                if(maze[cx-2][cy]==="wall")
                {
                    maze[cx-1][cy]="floor";
                    maze[cx-2][cy]="floor";
                    makeMaze(cx-2,cy,counter);
                }
            }
        }
    }
    else if(cx===1)
    {
        while(maze[cx+2][cy]==="wall"||maze[cx][cy+2]==="wall"||maze[cx][cy-2]==="wall")//can go up down right
        {
           var dir;
            dir=Math.floor(Math.random()*3+1);
            if(dir==1)
            {
                if(maze[cx][cy+2]==="wall")
                {
                    maze[cx][cy+1]="floor";
                    maze[cx][cy+2]="floor";
                    makeMaze(cx,cy+2,counter);
                }
            }
            if(dir==2)
            {
                if(maze[cx+2][cy]==="wall")
                {
                    maze[cx+1][cy]="floor";
                    maze[cx+2][cy]="floor";
                    makeMaze(cx+2,cy,counter);
                }
            }
            if(dir==3)
            {
                if(maze[cx][cy-2]==="wall")
                {
                    maze[cx][cy-1]="floor";
                    maze[cx][cy-2]="floor";
                    makeMaze(cx,cy-2,counter);
                }
            }
        }
    }
    else if(cx==mazeSize-2)
    {
        while(maze[cx][cy+2]==="wall"||maze[cx-2][cy]==="wall"||maze[cx][cy-2]==="wall")//down up left
        {
           var dir;
            dir=Math.floor(Math.random()*3+1);
            if(dir==1)
            {
                if(maze[cx][cy+2]==="wall")
                {
                    maze[cx][cy+1]="floor";
                    maze[cx][cy+2]="floor";
                    makeMaze(cx,cy+2,counter);
                }
            }
            if(dir==2)
            {
                if(maze[cx-2][cy]==="wall")
                {
                    maze[cx-1][cy]="floor";
                    maze[cx-2][cy]="floor";
                    makeMaze(cx-2,cy,counter);
                }
            }
            if(dir==3)
            {
                if(maze[cx][cy-2]==="wall")
                {
                    maze[cx][cy-1]="floor";
                    maze[cx][cy-2]="floor";
                    makeMaze(cx,cy-2,counter);
                }
            }
        }
    }
    else if(cy===1)
    {
        while(maze[cx+2][cy]==="wall"||maze[cx][cy+2]==="wall"||maze[cx-2][cy]==="wall")//down left right
        {
           var dir;
            dir=Math.floor(Math.random()*3+1);
            if(dir==1)
            {
                if(maze[cx][cy+2]==="wall")
                {
                    maze[cx][cy+1]="floor";
                    maze[cx][cy+2]="floor";
                    makeMaze(cx,cy+2,counter);
                }
            }
            if(dir==2)
            {
                if(maze[cx+2][cy]==="wall")
                {
                    maze[cx+1][cy]="floor";
                    maze[cx+2][cy]="floor";
                    makeMaze(cx+2,cy,counter);
                }
            }
            if(dir==3)
            {
                if(maze[cx-2][cy]==="wall")
                {
                    maze[cx-1][cy]="floor";
                    maze[cx-2][cy]="floor";
                    makeMaze(cx-2,cy,counter);
                }
            }
        }
    }
    else if(cy==mazeSize-2)
    {
        while(maze[cx+2][cy]==="wall"||maze[cx-2][cy]==="wall"||maze[cx][cy-2]==="wall")
        {
           var dir;
            dir=Math.floor(Math.random()*3+1);
            if(dir==1)
            {
                if(maze[cx][cy-2]==="wall")
                {
                    maze[cx][cy-1]="floor";
                    maze[cx][cy-2]="floor";
                    makeMaze(cx,cy-2,counter);
                }
            }
            if(dir==2)
            {
                if(maze[cx+2][cy]==="wall")
                {
                    maze[cx+1][cy]="floor";
                    maze[cx+2][cy]="floor";
                    makeMaze(cx+2,cy,counter);
                }
            }
            if(dir==3)
            {
                if(maze[cx-2][cy]==="wall")
                {
                    maze[cx-1][cy]="floor";
                    maze[cx-2][cy]="floor";
                    makeMaze(cx-2,cy,counter);
                }
            }
        }
    }
    else
    {
        while(maze[cx+2][cy]==="wall"||maze[cx][cy+2]==="wall"||maze[cx-2][cy]==="wall"||maze[cx][cy-2]==="wall")
        {
            var dir;
            dir=Math.floor(Math.random()*4+1);
            if(dir==1)
            {
                if(maze[cx][cy+2]==="wall")
                {
                    maze[cx][cy+1]="floor";
                    maze[cx][cy+2]="floor";
                    makeMaze(cx,cy+2,counter);
                }
            }
            if(dir==2)
            {
                if(maze[cx+2][cy]==="wall")
                {
                    maze[cx+1][cy]="floor";
                    maze[cx+2][cy]="floor";
                    makeMaze(cx+2,cy,counter);
                }
            }
            if(dir==3)
            {
                if(maze[cx-2][cy]==="wall")
                {
                    maze[cx-1][cy]="floor";
                    maze[cx-2][cy]="floor";
                    makeMaze(cx-2,cy,counter);
                }
            }
            if(dir==4)
            {
                if(maze[cx][cy-2]==="wall")
                {
                    maze[cx][cy-1]="floor";
                    maze[cx][cy-2]="floor";
                    makeMaze(cx,cy-2,counter);
                }
            }
        }
    }
}

//function printMaze()
//{
//    var temp="";
//    for(var i=0;i<mazeSize;i++)
//    {
//        for(var j=0;j<mazeSize;j++)
//        {
//            if(maze[j][i]===false)
//            {
//                temp+="@ ";
//            }
//            if(maze[j][i]===true)
//            {
//                temp+="_ ";
//            }
//        }
//        console.log(temp);
//        temp="";
//    }
//    console.log("****************************************************");
//}

function deadEnd(cx,cy, counter)
{
    if(counter>endCounter)
    {
        endX=cx;
        endY=cy;
        endCounter=counter;
    }
}
function inputEnemies()
{
    if(maze[endX+1][endY]==="floor")
    {
        maze[endX+1][endY]="bunny";
    }
    else if(maze[endX-1][endY]==="floor")
    {
        maze[endX-1][endY]="bunny";
    }
    else if(maze[endX][endY+1]==="floor")
    {
        maze[endX][endY+1]="bunny";
    }
    else if(maze[endX][endY-1]==="floor")
    {
        maze[endX][endY-1]="bunny";
    }
    var enemyplaced=false;
    for(var i=0;i<numZombie;i++)
    {
        enemyplaced=false;
        while(enemyplaced===false)
        {
            var eneX=Math.floor(Math.random()*(mazeSize-1));
            var eneY=Math.floor(Math.random()*(mazeSize-1));
            if(maze[eneX][eneY]==="floor")
            {
                maze[eneX][eneY]="zombie";
                enemyplaced=true;
            }
        }
    }
    var enemyplaced=false;
    for(var i=0;i<numBull;i++)
    {
        enemyplaced=false;
        while(enemyplaced===false)
        {
            var eneX=Math.floor(Math.random()*(mazeSize-1));
            var eneY=Math.floor(Math.random()*(mazeSize-1));
            if(maze[eneX][eneY]==="floor")
            {
                maze[eneX][eneY]="bull";
                enemyplaced=true;
            }
        }
    }
}






