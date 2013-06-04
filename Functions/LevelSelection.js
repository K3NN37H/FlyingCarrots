

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
