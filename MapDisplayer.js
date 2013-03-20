/* @global $, maze, playerX, playerY */
var playerX=0;
var playerY=1;
// call function to display the maze
mazeDrawer();
// listen for keyboard events to move around the maze
$(document).keydown(mover);
// listen for clicks on movement buttons to move around the maze
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

// Moves player around the map depending on the keyboard event received
function mover(event)
{
    var text=event.which;
    
    if(text=="38")
    {
        {
        if(maze[playerX][playerY-1]===true)
            playerY--;
        }
    }
    else if(text=="40")
    {
        if(maze[playerX][playerY+1]===true)
        {
            playerY++;
        }
    }
    else if(text=="37")
    {
        if(maze[playerX-1][playerY]===true)
        {
            playerX--;
        }
    }
    else if(text=="39")
    {
        if(maze[playerX+1][playerY]===true)
        {
            playerX++;
        }
    }
    addition();
    mazeDrawer();
}

// Generates an HTML table to display the map and appends it to mapContainer div
function mazeDrawer()
{
    $("#mapContainer").empty();
    var mapHtml = "";
    for(var i=0;i<mazeSize;i++)
    {
        mapHtml += '<tr>';
        for(var j=0;j<mazeSize;j++)
        {
            if(j==playerX&&i==playerY)
            {
                mapHtml += '<td class="floor">♥</td>';
            }
            else if(j==endX&&i==endY)
            {
                 mapHtml += '<td class="floor">◊</td>';
            }
            else if(maze[j][i]===false)
            {
                mapHtml += '<td class="wall"></td>';
            }
            
            else if(maze[j][i]===true)
            {
                mapHtml += '<td class="floor"></td>';
            }
        }
        mapHtml += '</tr>';
        $("#mapContainer").append(mapHtml);
        mapHtml="";
    }
}
