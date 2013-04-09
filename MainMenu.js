hideGame();
$("#startgame").click(startGame);
$("#back").click(restartGame);
$("#option").click(changeMazeSize);
function startGame()
{
    showGame();
    
}    
function hideGame()
{
    $("#controlButtons").hide();
    $("#mathAnswer").hide();
    $("#multipleChoice").hide();
    $("#mapContainer").hide();
    $("#endGame").hide();
    $("#optionPage").hide();
}
function showGame()
{
    $("#menuPage").hide();
    $("#controlButtons").show();
    $("#mapContainer").show();
    $("#difficultyDisplay").hide();
    createMaze();
    mazeDrawer();
}

function restartGame(){
    $("#endGame").hide();
    $("#menuPage").show();
    $("#difficultyDisplay").show();
}

function changeMazeSize(){
    $("#menuPage").hide();
    $("#optionPage").show();
   
 
}

   $("#optionPage").append('<button class="gamebutton" id=easyLevel>'+"Easy"+'</button>');
   $("#easyLevel").css("position","absolute");
   $("#easyLevel").css("left",25+"%");
   $("#easyLevel").css("top",15+"%");
   $("#easyLevel").css("height",6+"%");
   $("#easyLevel").css("width", 6+"%");
   $("#easyLevel").css("border-radius",10);
   $("#easyLevel").click(easyLevelOption);
   
   $("#optionPage").append('<button class="gamebutton" id=normalLevel>'+"Normal"+'</button>');
   $("#normalLevel").css("position","absolute");
   $("#normalLevel").css("left",45+"%");
   $("#normalLevel").css("top",15+"%");
   $("#normalLevel").css("height",6+"%");
   $("#normalLevel").css("width", 6+"%");
   $("#normalLevel").css("border-radius",10);
   $("#normalLevel").click(normalLevelOption);
   
   $("#optionPage").append('<button class="gamebutton" id=hardLevel>'+"Hard"+'</button>');
   $("#hardLevel").css("position","absolute");
   $("#hardLevel").css("left",65+"%");
   $("#hardLevel").css("top",15+"%");
   $("#hardLevel").css("height",6+"%");
   $("#hardLevel").css("width", 6+"%");
   $("#hardLevel").css("border-radius",10);
   $("#hardLevel").click(hardLevelOption);
   
   $("#optionPage").append('<button class="gamebutton" id=backOption>'+"Back"+'</button>');
   $("#backOption").css("position","absolute");
   $("#backOption").css("left",65+"%");
   $("#backOption").css("top",75+"%");
   $("#backOption").css("height",6+"%");
   $("#backOption").css("width", 6+"%");
   $("#backOption").css("border-radius",10);
   $("#backOption").click(optionBack);

function easyLevelOption(){
    mazeSize=11;
    numZombie=6;
    numBull=3;
    LevelDisplay="Easy";
   $("#difficultybutton").text("Current difficulty is "+ LevelDisplay); 
    createMaze();
    mazeDrawer();
}

function normalLevelOption(){
    mazeSize=15;
    numZombie=10;
    numBull=5;
    LevelDisplay="Normal";
    $("#difficultybutton").text("Current difficulty is "+ LevelDisplay); 
    createMaze();
    mazeDrawer();
}

function hardLevelOption(){
    mazeSize=21;
    numZombie=14;
    numBull=8;
    LevelDisplay="Hard";
    $("#difficultybutton").text("Current difficulty is "+ LevelDisplay); 
    createMaze();
    mazeDrawer();
}

function optionBack(){
    $("#optionPage").hide();
    $("#menuPage").show();
}
   
   var LevelDisplay="Normal";
   
   $("#difficultyDisplay").append('<button class="gamebutton" id=difficultybutton></button>');
   $("#difficultybutton").text("Current difficulty is "+ LevelDisplay);   
   $("#difficultybutton").css("position","absolute");
   $("#difficultybutton").css("left",75+"%");
   $("#difficultybutton").css("top",15+"%");
   $("#difficultybutton").css("height",6+"%");
   $("#difficultybutton").css("width", 20+"%");
   $("#difficultybutton").css("border-radius",10);


