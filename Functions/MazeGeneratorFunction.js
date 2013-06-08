//this function is called whenver a new maze is to be generated, all other functions can be seen as private functions, called by this function.
function createMaze()
{
    endCounter=-1;
    playerX=0;
    playerY=1;//sets the related variables back to their default values
    for(var i=0;i<mazeSize;i++)//the array (made in variables.js) is turned into a 2d array, then initialized as all walls
    {
        maze[i]=[mazeSize];
        for(var j=0;j<mazeSize;j++)
        {
            maze[i][j]="wall";
        }
    }
    maze[0][1]="floor";
    maze[1][1]="floor";//sets the starting positions as a floor
    makeMaze(1,1,0);//starts the random maze generation process. 
    maze[0][1]="player";
    maze[endX][endY]="kite";
    inputEnemies();
    mazeDrawer();
}
/**This is the recurssive maze generation function. It will turn a tile into the floor, then move in a random direction
then turn that tile into a floor. When it reaches a point where it can no longer cut then it
will go back to the last point where it can, and start carving from there.**/
function makeMaze (cx,cy,counter)
{
    deadEnd(cx,cy,counter);//check if the current floor is the furstest away from the start
    counter++;//increase the counter by 1. The counter will track how far away the current space is from the start.
    //if on top left corner of maze
	if(cx==1&&cy==1)
    {
        while(maze[cx+2][cy]==="wall"||maze[cx][cy+2]==="wall")//can go down or right
        {
            var dir;
            dir=Math.floor(Math.random()*2+1);//chose a random direction to go in
            if(dir==1)
            {
                if(maze[cx][cy+2]==="wall")
                {
                    maze[cx][cy+1]="floor";//change the tile to a floor tile
                    maze[cx][cy+2]="floor";//chage to floor tile
                    makeMaze(cx,cy+2,counter);//call function from new spot
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
	//if on bottom left of maze
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
	//if on top right of maze
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
	//if on bottom right of maze
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
	//if along left wall
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
	//if along right wall
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
    }//if along top
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
	//if along bottom
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
	//anywhere else in the maze
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
//check if the current tile is the furthest away from the the start position,
//if it is then this will be used as the victory title.
function deadEnd(cx,cy, counter)
{
    if(counter>endCounter)
    {
        endX=cx;
        endY=cy;
        endCounter=counter;
    }
}
//after the maze is generated the monsters are place. There is a robotic bunny
//right before the exit, and then the other enemies are scattered randomly.
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