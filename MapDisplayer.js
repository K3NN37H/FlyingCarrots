var playerX=0;
var playerY=1;
mazeDrawer();
  $(document).keydown(mover);
function mover(event)
{
    var text=event.which;
    
    if(text=="38")
    {
        if(maze[playerX][playerY-1]===true)
        {
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
