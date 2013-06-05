function mover(event)
{
    var text=event.which;
    if(recentmove=="up")
    {
        if(text=="38")
        {
            if(maze[playerX][playerY-1]!=="wall"&&maze[playerX][playerY-1]!==undefined)
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX][playerY-1];
                maze[playerX][playerY-1]="player";
                prevX=playerX;
                prevY=playerY;
                prevO=recentmove;
                playerY--;
                recentmove="up";
                    setImg();

            }
        }
        else if(text=="40")
        {
            if(maze[playerX][playerY+1]!=="wall"&&maze[playerX][playerY+1]!==undefined)
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX][playerY+1];
                maze[playerX][playerY+1]="player";
                prevX=playerX;
                prevY=playerY;
                prevO=recentmove;
                playerY++;
                recentmove="down";
                    setImg();

            }
        }
        else if(text=="37")
        {
            if(maze[playerX-1][playerY]!=="wall"&&maze[playerX-1][playerY]!==undefined)
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX-1][playerY];
                maze[playerX-1][playerY]="player";
                prevX=playerX;
                prevY=playerY;
                prevO=recentmove;
                playerX--;
                recentmove="left";
                    setImg();

            }
        }
        else if(text=="39")
        {
            if(maze[playerX+1][playerY]!=="wall"&&maze[playerX+1][playerY]!==undefined)
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX+1][playerY];
                maze[playerX+1][playerY]="player";
                prevX=playerX;
                prevY=playerY;
                prevO=recentmove;
                playerX++;
                recentmove="right";
                    setImg();

            }
        }
    }    
    else if(recentmove=="down")
    {
        if(text=="40")
        {
            if(maze[playerX][playerY-1]!=="wall"&&maze[playerX][playerY-1]!==undefined)
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX][playerY-1];
                maze[playerX][playerY-1]="player";
                prevX=playerX;
                prevY=playerY;
                prevO=recentmove;
                playerY--;
                recentmove="up";
                    setImg();

            }
        }
        else if(text=="38")
        {
            if(maze[playerX][playerY+1]!=="wall"&&maze[playerX][playerY+1]!==undefined)
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX][playerY+1];
                maze[playerX][playerY+1]="player";
                prevX=playerX;
                prevY=playerY;
                prevO=recentmove;
                playerY++;
                recentmove="down";
                    setImg();

            }
        }
        else if(text=="39")
        {
            if(maze[playerX-1][playerY]!=="wall"&&maze[playerX-1][playerY]!==undefined)
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX-1][playerY];
                maze[playerX-1][playerY]="player";
                prevX=playerX;
                prevY=playerY;
                prevO=recentmove;
                playerX--;
                recentmove="left";
                    setImg();

            }
        }
        else if(text=="37")
        {
            if(maze[playerX+1][playerY]!=="wall"&&maze[playerX+1][playerY]!==undefined)
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX+1][playerY];
                maze[playerX+1][playerY]="player";
                prevX=playerX;
                prevY=playerY;
                prevO=recentmove;
                playerX++;
                recentmove="right";
                    setImg();

            }
        }
    }   
    else if(recentmove=="left")
    {
        if(text=="39")
        {
            if(maze[playerX][playerY-1]!=="wall"&&maze[playerX][playerY-1]!==undefined)
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX][playerY-1];
                maze[playerX][playerY-1]="player";
                prevX=playerX;
                prevY=playerY;
                prevO=recentmove;
                playerY--;
                recentmove="up";
                    setImg();

            }
        }
        else if(text=="37")
        {
            if(maze[playerX][playerY+1]!=="wall"&&maze[playerX][playerY+1]!==undefined)
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX][playerY+1];
                maze[playerX][playerY+1]="player";
                prevX=playerX;
                prevY=playerY;
                prevO=recentmove;
                playerY++;
                recentmove="down";
                    setImg();

            }
        }
        else if(text=="38")
        {
            if(maze[playerX-1][playerY]!=="wall"&&maze[playerX-1][playerY]!==undefined)
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX-1][playerY];
                maze[playerX-1][playerY]="player";
                prevX=playerX;
                prevY=playerY;
                prevO=recentmove;
                playerX--;
                recentmove="left";
                    setImg();

            }
        }
        else if(text=="40")
        {
            
            if(maze[playerX+1][playerY]!=="wall"&&maze[playerX+1][playerY]!==undefined)
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX+1][playerY];
                maze[playerX+1][playerY]="player";
                prevX=playerX;
                prevY=playerY;
                prevO=recentmove;
                playerX++;
                recentmove="right";
                    setImg();

            }
        }
    }
    else if(recentmove=="right")
    {
        if(text=="37")
        {
            if(maze[playerX][playerY-1]!=="wall"&&maze[playerX][playerY-1]!==undefined)
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX][playerY-1];
                maze[playerX][playerY-1]="player";
                prevX=playerX;
                prevY=playerY;
                prevO=recentmove;
                playerY--;
                recentmove="up";
				setImg();

            }
        }
        else if(text=="39")
        {
            if(maze[playerX][playerY+1]!=="wall"&&maze[playerX][playerY+1]!==undefined)
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX][playerY+1];
                maze[playerX][playerY+1]="player";
                prevX=playerX;
                prevY=playerY;
                prevO=recentmove;
                playerY++;
                recentmove="down";
                    setImg();

            }
        }
        else if(text=="40")
        {
            if(maze[playerX-1][playerY]!=="wall"&&maze[playerX-1][playerY]!==undefined)
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX-1][playerY];
                maze[playerX-1][playerY]="player";
                prevX=playerX;
                prevY=playerY;
                prevO=recentmove;
                playerX--;
                recentmove="left";
                    setImg();

            }
        }
        else if(text=="38")
        {
            if(maze[playerX+1][playerY]!=="wall"&&maze[playerX+1][playerY]!==undefined)
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX+1][playerY];
                maze[playerX+1][playerY]="player";
                prevX=playerX;
                prevY=playerY;
                prevO=recentmove;
                playerX++;
                recentmove="right";
                    setImg();

            }
        }
    }
    if(text=="37"||text=="38"||text=="39"||text=="40")
	{
        if(currentLocal==="zombie"||currentLocal==="bull"||currentLocal==="bunny")
        {   
           $("#multipleChoice").empty();
           $("#mathAnswer").empty();
           $("#Inventory").hide();
		   battleMusic();
           monsterDrawer();
            typeQuestion(difficulty);
            $("#controlButtons").hide();
            $("#scoreDisplay").hide();
        }
       	mazeDrawer();
    	endGame();
	}
}
