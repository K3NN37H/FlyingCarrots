

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
    numZombie=14;
    numBull=8;
//    ModeDisplay="Hard";
//   $("#modebutton").text("Current mode is "+ ModeDisplay);
    createMaze();
    mazeDrawer();
}

function startLevelOne(){
    difficulty=1
    difficultyMode = 1
    LevelDisplay=1
    easyLevelOption()
    levelChoosingHide()
    showGame()
}
function startLevelTwo(){
    difficulty=1
    difficultyMode = 2
    LevelDisplay=2
    normalLevelOption()
    levelChoosingHide()
    showGame()
}
function startLevelThree(){
    difficulty=1
    difficultyMode = 3
    LevelDisplay=3
    hardLevelOption()
    levelChoosingHide()
    showGame()
}
function startLevelFour(){
    difficulty=2
    difficultyMode = 1
    LevelDisplay=4
    easyLevelOption()
    levelChoosingHide()
    showGame()
}
function startLevelFive(){
    difficulty=2
    difficultyMode = 2
    LevelDisplay=5
    normalLevelOption()
    levelChoosingHide()
    showGame()
}

function startLevelSix(){
    difficulty=2
    difficultyMode = 3
    LevelDisplay=6
    hardLevelOption()
    levelChoosingHide()
    showGame()
}
function startLevelSeven(){
    difficulty=3
    difficultyMode = 1
    LevelDisplay=7
    easyLevelOption()
    levelChoosingHide()
    showGame()
}
function startLevelEight(){
    difficulty=3
    difficultyMode = 2
    LevelDisplay=8
    normalLevelOption()
    levelChoosingHide()
    showGame()
}
function startLevelNine(){
    difficulty=3
    difficultyMode = 3
    LevelDisplay=9
    hardLevelOption()
    levelChoosingHide()
    showGame()
}
function startLevelTen(){
    difficulty=4
    difficultyMode = 1
    LevelDisplay=10
    easyLevelOption()
    levelChoosingHide()
    showGame()
}
function startLevelEleven(){
    difficulty=4
    difficultyMode = 2
    LevelDisplay=11
    normalLevelOption()
    levelChoosingHide()
    showGame()
}
function startLevelTwelve(){
    difficulty=4
    difficultyMode = 3
    LevelDisplay=12
    hardLevelOption()
    levelChoosingHide()
    showGame()
}
