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
            }
        }
    }
    if(currentLocal==="zombie"||currentLocal==="bull"||currentLocal==="bunny")
    {
        typeQuestion(difficulty);
        $("#controlButtons").hide();
        $("#scoreDisplay").hide();
    }
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
            currentLocal="floor";
            recentmove="right";
            createMaze();
            mazeDrawer();
            setImg();
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

   $("#Inventory").append('<button class="gamebutton" id=carrotDisplay></button>');
   $("#carrotDisplay").text("Carrots: "+ inventory[MORECARROT]); 
   $("#carrotDisplay").css("position","absolute");
   $("#carrotDisplay").css("left",20+"%");
   $("#carrotDisplay").css("top",94+"%");
   $("#carrotDisplay").css("height",6+"%");
   $("#carrotDisplay").css("width", 10+"%");


   $("#Inventory").append('<button class="gamebutton" id=bullDozerDisplay></button>');
   $("#bullDozerDisplay").text("Bulldozer: "+ inventory[BULLDOZER]); 
   $("#bullDozerDisplay").css("position","absolute");
   $("#bullDozerDisplay").css("left",50+"%");
   $("#bullDozerDisplay").css("top",94+"%");
   $("#bullDozerDisplay").css("height",6+"%");
   $("#bullDozerDisplay").css("width", 10+"%");

      
   $("#Inventory").append('<button class="gamebutton" id=flameCarrotDisplay></button>');
   $("#flameCarrotDisplay").text("FlameCarrots: "+ inventory[FLAMECARROT]); 
   $("#flameCarrotDisplay").css("position","absolute");
   $("#flameCarrotDisplay").css("left",30+"%");
   $("#flameCarrotDisplay").css("top",94+"%");
   $("#flameCarrotDisplay").css("height",6+"%");
   $("#flameCarrotDisplay").css("width", 10+"%");

   
   $("#Inventory").append('<button class="gamebutton" id=buyMapDisplay></button>');
   $("#buyMapDisplay").text("Map: "+ inventory[MAP]); 
   $("#buyMapDisplay").css("position","absolute");
   $("#buyMapDisplay").css("left",40+"%");
   $("#buyMapDisplay").css("top",94+"%");
   $("#buyMapDisplay").css("height",6+"%");
   $("#buyMapDisplay").css("width", 10+"%");

   
   $("#Inventory").append('<button class="gamebutton" id=levelSkipDisplay></button>');
   $("#levelSkipDisplay").text("Level Skip: "+ inventory[LEVELSKIP]); 
   $("#levelSkipDisplay").css("position","absolute");
   $("#levelSkipDisplay").css("left",60+"%");
   $("#levelSkipDisplay").css("top",94+"%");
   $("#levelSkipDisplay").css("height",6+"%");
   $("#levelSkipDisplay").css("width", 10+"%");
