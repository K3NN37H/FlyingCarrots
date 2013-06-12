//For each difficulty there are 3 levels.
//easy levels (which are level 1,4,7,10) will have small maze size and less enemies.
//normal levels (which are level 2,5,8,11) will have larger maze size and more enemies.
//hard levels (which are level 3,6,9,12) will have largest maze size and most enemies.

function easyLevelOption(){
    mazeSize=11;
    numZombie=6;
    numBull=3;   
//    ModeDisplay="Easy";
//   $("#modebutton").text("Current mode is "+ ModeDisplay);
    createMaze();
    mazeDrawer();
}

function normalLevelOption(){
    mazeSize=15;
    numZombie=10;
    numBull=5;
//    ModeDisplay="Normal";
//   $("#modebutton").text("Current mode is "+ ModeDisplay);
    createMaze();
    mazeDrawer();
}

function hardLevelOption(){
    mazeSize=21;
    numZombie=20;
    numBull=10;
//    ModeDisplay="Hard";
//   $("#modebutton").text("Current mode is "+ ModeDisplay);
    createMaze();
    mazeDrawer();
}
