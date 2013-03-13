var playerX;
var playerY;

mazeDrawer();
console.log("entered the drawer");
function mazeDrawer()
{
    
    var counter=0;
    var mapHtml = "";
    for(var i=0;i<mazeSize;i++)
    {
        mapHtml += '<tr>';
        //$("#mapContainer").append('<tr>');
        for(var j=0;j<mazeSize;j++)
        {
           
            if(maze[j][i]===false)
            {
                mapHtml += '<td class="wall"></td>';
                //$("#mapContainer").append('<th id=wall></th>');
            }
            if(maze[j][i]===true)
            {
                mapHtml += '<td class="floor"></td>';
                //$("#mapContainer").append('<th id=floor></th>');
            }
        }
        mapHtml += '</tr>';
        $("#mapContainer").append(mapHtml);
        //$("#mapContainer").append('</tr>');
    }
}