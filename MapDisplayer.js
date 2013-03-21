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
    console.log();
    if(text=="38")
    {
        if(maze[playerX][playerY-1]!=="wall")
        {
            maze[playerX][playerY]="floor";
            maze[playerX][playerY-1]="player";
            playerY--;
        }
    }
    else if(text=="40")
    {
        if(maze[playerX][playerY+1]!=="wall")
        {
            maze[playerX][playerY]="floor";
            maze[playerX][playerY+1]="player";
            playerY++;
        }
    }
    else if(text=="37")
    {
        if(maze[playerX-1][playerY]!=="wall")
        {
            maze[playerX][playerY]="floor";
            maze[playerX-1][playerY]="player";
            playerX--;
        }
    }
    else if(text=="39")
    {
        if(maze[playerX+1][playerY]!=="wall")
        {
            maze[playerX][playerY]="floor";
            maze[playerX+1][playerY]="player";
            playerX++;
        }
    }
    console.log("entered");
    mazeDrawer();
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
                mapHtml += '<td class="floor">♥</td>';
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
