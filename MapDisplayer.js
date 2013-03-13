var playerX;
var playerY;

//mazeDrawer();
console.log("entered the drawer");
function mazeDrawer()
{
    
    var counter=0;
    for(var i=0;i<mazeSize;i++)
    {
         $("#mapContainer").append('<tr>');
        for(var j=0;j<mazeSize;j++)
        {
           
            if(maze[j][i]===false)
            {
                $("#mapContainer").append('<th id=wall></th>');
            }
            if(maze[j][i]===true)
            {
                $("#mapContainer").append('<th id=floor></th>');
            }
        }
        $("#mapContainer").append('</tr>');
    }
}