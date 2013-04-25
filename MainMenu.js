hideGame();

var score = 0;
var totalScore = 100000;

var difficulty = 1
function typeQuestion(difficulty)
{
    var level=Math.floor((Math.random()*difficulty)+1);
    if(level===1)
    {
        addition();
    }
    else if(level===2)
    {
        subtraction();
    }
    else if(level===3)
    {
        multiplication();
    }
    else if(level===4)
    {
        division();
    }
}


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
    $("#scoreDisplay").hide();
    $("#shop").hide();
    $("#shopBackDuringTheGame").hide();
    $("#menuShopBack").hide();
    $("#Inventory").hide();
	$("#bullDozer").hide();

}
function showGame()
{
    $("#menuPage").hide();
    $("#totalScoreButton").hide();
    $("#controlButtons").show();
    $("#difficultyDisplay").hide();
    $("#scoreDisplay").show();
    $("#Inventory").show();
    createMaze();
    mazeDrawer();
}
function optionShowGame(){
    $("#optionPage").hide();
    $("#Inventory").show();
    $("#totalScoreButton").hide();
    $("#controlButtons").show();
    $("#difficultyDisplay").hide();
    $("#scoreDisplay").show();
    createMaze();
    mazeDrawer();
}
function restartGame(){
    score = 0;
    $("#scorebutton").text("Your score is "+ score); 
    $("#finalScoreButton").text("Your final score is "+ score); 
    $("#endGame").hide();
    $("#menuPage").show();
    $("#difficultyDisplay").show();
    $("#totalScoreButton").show();
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
   $("#backOption").css("height",10+"%");
   $("#backOption").css("width", 15+"%");
   $("#backOption").css("border-radius",10);
   $("#backOption").click(optionBack);

   $("#optionPage").append('<button class="gamebutton" id=startOption>'+"Start Game"+'</button>');
   $("#startOption").css("position","absolute");
   $("#startOption").css("left",15+"%");
   $("#startOption").css("top",75+"%");
   $("#startOption").css("height",10+"%");
   $("#startOption").css("width", 15+"%");
   $("#startOption").css("border-radius",10);
   $("#startOption").click(optionShowGame);
   
function easyLevelOption(){
    mazeSize=11;
    numZombie=6;
    numBull=3;   
    ModeDisplay="Easy";
   $("#modebutton").text("Current mode is "+ ModeDisplay);
    createMaze();
    mazeDrawer();
}

function normalLevelOption(){
    mazeSize=15;
    numZombie=10;
    numBull=5;
    ModeDisplay="Normal";
   $("#modebutton").text("Current mode is "+ ModeDisplay);
    createMaze();
    mazeDrawer();
}

function hardLevelOption(){
    mazeSize=21;
    numZombie=14;
    numBull=8;
    ModeDisplay="Hard";
   $("#modebutton").text("Current mode is "+ ModeDisplay);
    createMaze();
    mazeDrawer();
}

function optionBack(){
    $("#optionPage").hide();
    $("#menuPage").show();
}
   
   var LevelDisplay="Level"+difficulty;
   var ModeDisplay ="Normal"
   
   $("#difficultyDisplay").append('<button class="gamebutton" id=difficultybutton></button>');
   $("#difficultybutton").text("Current difficulty is "+ LevelDisplay);   
   $("#difficultybutton").css("position","absolute");
   $("#difficultybutton").css("left",75+"%");
   $("#difficultybutton").css("top",15+"%");
   $("#difficultybutton").css("height",6+"%");
   $("#difficultybutton").css("width", 20+"%");
   $("#difficultybutton").css("border-radius",10);

   $("#scoreDisplay").append('<button class="gamebutton" id=scorebutton></button>');
   $("#scorebutton").text("Your score is "+ score);   
   $("#scorebutton").css("position","absolute");
   $("#scorebutton").css("left",75+"%");
   $("#scorebutton").css("top",13+"%");
   $("#scorebutton").css("height",6+"%");
   $("#scorebutton").css("width", 20+"%");
   $("#scorebutton").css("border-radius",10);


   $("#mainBody").append('<button class="gamebutton" id=totalScoreButton></button>');
   $("#totalScoreButton").text("Your total score is "+ totalScore);   
   $("#totalScoreButton").css("position","absolute");
   $("#totalScoreButton").css("left",75+"%");
   $("#totalScoreButton").css("top",5+"%");
   $("#totalScoreButton").css("height",6+"%");
   $("#totalScoreButton").css("width", 20+"%");
   $("#totalScoreButton").css("border-radius",10);

   $("#optionPage").append('<button class="gamebutton" id=modebutton></button>');
   $("#modebutton").text("Current mode is "+ ModeDisplay);   
   $("#modebutton").css("position","absolute");
   $("#modebutton").css("left",75+"%");
   $("#modebutton").css("top",23+"%");
   $("#modebutton").css("height",6+"%");
   $("#modebutton").css("width", 20+"%");
   $("#modebutton").css("border-radius",10);
