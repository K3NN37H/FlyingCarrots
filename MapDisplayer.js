var currentLocal="floor";
var prevX, prevY;
var recentmove="right";
mazeDrawer();
$(document).keydown(mover);
$("#up").click(function () {
    mover({which:"38"});
});
$("#down").click(function () {
	mover({which:"40"});
});
$("#left").click(function () {
	mover({which:"37"});
});
$("#right").click(function () {
	mover({which:"39"});
});  
function mover(event)
{
    var text=event.which;
    if(recentmove=="up")
    {
        if(text=="38")
        {
            if(maze[playerX][playerY-1]!=="wall")
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX][playerY-1];
                maze[playerX][playerY-1]="player";
                prevX=playerX;
                prevY=playerY;
                playerY--;
                recentmove="up";
            }
        }
        else if(text=="40")
        {
            if(maze[playerX][playerY+1]!=="wall")
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX][playerY+1];
                maze[playerX][playerY+1]="player";
                prevX=playerX;
                prevY=playerY;
                playerY++;
                recentmove="down";
            }
        }
        else if(text=="37")
        {
            if(maze[playerX-1][playerY]!=="wall")
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX-1][playerY];
                maze[playerX-1][playerY]="player";
                prevX=playerX;
                prevY=playerY;
                playerX--;
                recentmove="left";
            }
        }
        else if(text=="39")
        {
            if(maze[playerX+1][playerY]!=="wall")
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX+1][playerY];
                maze[playerX+1][playerY]="player";
                prevX=playerX;
                prevY=playerY;
                playerX++;
                recentmove="right";
            }
        }
    }    
    else if(recentmove=="down")
    {
        if(text=="40")
        {
            if(maze[playerX][playerY-1]!=="wall")
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX][playerY-1];
                maze[playerX][playerY-1]="player";
                prevX=playerX;
                prevY=playerY;
                playerY--;
                recentmove="up";
            }
        }
        else if(text=="38")
        {
            if(maze[playerX][playerY+1]!=="wall")
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX][playerY+1];
                maze[playerX][playerY+1]="player";
                prevX=playerX;
                prevY=playerY;
                playerY++;
                recentmove="down";
            }
        }
        else if(text=="39")
        {
            if(maze[playerX-1][playerY]!=="wall")
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX-1][playerY];
                maze[playerX-1][playerY]="player";
                prevX=playerX;
                prevY=playerY;
                playerX--;
                recentmove="left";
            }
        }
        else if(text=="37")
        {
            if(maze[playerX+1][playerY]!=="wall")
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX+1][playerY];
                maze[playerX+1][playerY]="player";
                prevX=playerX;
                prevY=playerY;
                playerX++;
                recentmove="right";
            }
        }
    }   
    else if(recentmove=="left")
    {
        if(text=="39")
        {
            if(maze[playerX][playerY-1]!=="wall")
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX][playerY-1];
                maze[playerX][playerY-1]="player";
                prevX=playerX;
                prevY=playerY;
                playerY--;
                recentmove="up";
            }
        }
        else if(text=="37")
        {
            if(maze[playerX][playerY+1]!=="wall")
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX][playerY+1];
                maze[playerX][playerY+1]="player";
                prevX=playerX;
                prevY=playerY;
                playerY++;
                recentmove="down";
            }
        }
        else if(text=="38")
        {
            if(maze[playerX-1][playerY]!=="wall")
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX-1][playerY];
                maze[playerX-1][playerY]="player";
                prevX=playerX;
                prevY=playerY;
                playerX--;
                recentmove="left";
            }
        }
        else if(text=="40")
        {
            
            if(maze[playerX+1][playerY]!=="wall")
            {
                console.log("entered");
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX+1][playerY];
                maze[playerX+1][playerY]="player";
                prevX=playerX;
                prevY=playerY;
                playerX++;
                recentmove="right";
            }
        }
    }
    else if(recentmove=="right")
    {
        if(text=="37")
        {
            if(maze[playerX][playerY-1]!=="wall")
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX][playerY-1];
                maze[playerX][playerY-1]="player";
                prevX=playerX;
                prevY=playerY;
                playerY--;
                recentmove="up";
            }
        }
        else if(text=="39")
        {
            if(maze[playerX][playerY+1]!=="wall")
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX][playerY+1];
                maze[playerX][playerY+1]="player";
                prevX=playerX;
                prevY=playerY;
                playerY++;
                recentmove="down";
            }
        }
        else if(text=="40")
        {
            if(maze[playerX-1][playerY]!=="wall")
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX-1][playerY];
                maze[playerX-1][playerY]="player";
                prevX=playerX;
                prevY=playerY;
                playerX--;
                recentmove="left";
            }
        }
        else if(text=="38")
        {
            if(maze[playerX+1][playerY]!=="wall")
            {
                maze[playerX][playerY]=currentLocal;
                currentLocal=maze[playerX+1][playerY];
                maze[playerX+1][playerY]="player";
                prevX=playerX;
                prevY=playerY;
                playerX++;
                recentmove="right";
            }
        }
    }
    console.log(recentmove);
    if(currentLocal==="enemy")
    {
        subtraction();
        $("#controlButtons").hide();
    }
    mazeDrawer();
    setImg();
    endGame();
}


function mazeDrawer()
{
    $("#mapContainer").empty();
    var mapHtml = "";
    for(var i=0;i<mazeSize;i++)
    {
        mapHtml += '<tr>';
        for(var j=0;j<mazeSize;j++)
        {
            if(maze[j][i]==="player")
            {
                if(recentmove=="up")
                {
                    mapHtml += '<td class="floor">^</td>';
                }
                if(recentmove=="down")
                {
                    mapHtml += '<td class="floor">v</td>';
                }
                if(recentmove=="left")
                {
                    mapHtml += '<td class="floor"><</td>';
                }
                if(recentmove=="right")
                {
                    mapHtml += '<td class="floor">></td>';
                }
            }
            if(maze[j][i]==="enemy")
            {
                mapHtml += '<td class="floor">◙</td>';
            }
            else if(maze[j][i]==="kite")
            {
                 mapHtml += '<td class="floor">◊</td>';
            }
            else if(maze[j][i]==="wall")
            {
                mapHtml += '<td class="wall"></td>';
            }
            
            else if(maze[j][i]==="floor")
            {
                mapHtml += '<td class="floor"></td>';
            }
        }
        mapHtml += '</tr>';
        $("#mapContainer").append(mapHtml);
        mapHtml="";
    }
}

function endGame()
{
    if(playerX==endX)
    {
        if(playerY==endY)
        {
            $("#controlButtons").hide();
            $("#multipleChoice").hide();
            $("#mapContainer").hide();
            $("#endGame").show();
            currentLocal="floor";
            recentmove="right";
            createMaze();
            mazeDrawer();
            setImg();
        }
    }
}
