
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

