var currentLocal="floor";
var prevX, prevY, prevO;
var recentmove="right";


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
                prevO=recentmove;
                playerY--;
                recentmove="up";
				setImg();
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
                prevO=recentmove;
                playerY++;
                recentmove="down";
				setImg();
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
                prevO=recentmove;
                playerX--;
                recentmove="left";
				setImg();
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
            if(maze[playerX][playerY-1]!=="wall")
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
            if(maze[playerX][playerY+1]!=="wall")
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
            if(maze[playerX-1][playerY]!=="wall")
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
            if(maze[playerX+1][playerY]!=="wall")
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
            if(maze[playerX][playerY-1]!=="wall")
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
            if(maze[playerX][playerY+1]!=="wall")
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
            if(maze[playerX-1][playerY]!=="wall")
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
            
            if(maze[playerX+1][playerY]!=="wall")
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
            if(maze[playerX][playerY-1]!=="wall")
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
            if(maze[playerX][playerY+1]!=="wall")
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
            if(maze[playerX-1][playerY]!=="wall")
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
            if(maze[playerX+1][playerY]!=="wall")
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
    if(text=="37"||text=="38"||text=="39"||text=="40"){
        if(currentLocal==="zombie"||currentLocal==="bull"||currentLocal==="bunny")
        {   
           $("#multipleChoice").empty();
           $("#mathAnswer").empty();
            typeQuestion(difficulty);
            $("#controlButtons").hide();
            $("#scoreDisplay").hide();
        }
    
    mazeDrawer();
    endGame();}
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
            else if(maze[j][i]==="zombie")
            {
                mapHtml += '<td class="floor">Z</td>';
            }
            else if(maze[j][i]==="bull")
            {
                mapHtml += '<td class="floor">B</td>';
            }
            else if(maze[j][i]==="bunny")
            {
                mapHtml += '<td class="floor">R</td>';
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
            $("#scoreDisplay").hide();
            $("#endGame").show();
            $("#Inventory").hide();
            currentLocal="floor";
            recentmove="right";
            createMaze();
            mazeDrawer();
            setImg();
            levelFinish()
        }
    }
}
	$("#endGame").append('<button class="gamebutton" id=finalScoreButton></button>');
	$("#finalScoreButton").text("Your final score is "+ score);   
	$("#finalScoreButton").css("position","absolute");
	$("#finalScoreButton").css("left",45+"%");
	$("#finalScoreButton").css("top",15+"%");
	$("#finalScoreButton").css("height",6+"%");
	$("#finalScoreButton").css("width", 20+"%");
	$("#finalScoreButton").css("border-radius",10);	
	
function levelFinish(){
    if(difficulty<4){
        difficulty++
        LevelDisplay="Level"+difficulty
        $("#difficultybutton").text("Current difficulty is "+ LevelDisplay);
    }
}
