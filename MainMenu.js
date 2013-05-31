hideGame();
maxLevel=1;
$("#LevelTwo").attr("disabled","disabled");
$("#LevelThree").attr("disabled","disabled");
$("#LevelFour").attr("disabled","disabled");
$("#LevelFive").attr("disabled","disabled");
$("#LevelSix").attr("disabled","disabled");
$("#LevelSeven").attr("disabled","disabled");
$("#LevelEight").attr("disabled","disabled");
$("#LevelNine").attr("disabled","disabled");
$("#LevelTen").attr("disabled","disabled");
$("#LevelEleven").attr("disabled","disabled");
$("#LevelTwelve").attr("disabled","disabled");
var haveSave;
var playing = false;
var difficulty = 1;
var difficultyMode = 1;
bgm = new Audio('Images/goblinking.mp3');
bgm.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        bgm.play();
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
var xBack = $("#backgroundImg1").width();
var yBack = $("#backgroundImg1").height();
$(".backImg").attr("usemap","#menunav");
$("#menuPage").append('<map name="menunav" id="menunav"></map>');
$("#menunav").append('<area id="startgame" shape="rect" coords="'+Math.round(xBack*0.217)+','+Math.round(yBack*0.14)+','+Math.round(xBack*0.8)+','+Math.round(yBack*0.323)+'">');
$("#menunav").append('<area id="continue" shape="rect" coords="'+Math.round(xBack*0.217)+','+Math.round(yBack*0.323)+','+Math.round(xBack*0.783)+','+Math.round(yBack*0.48)+'">');
$("#menunav").append('<area id="instruction" shape="rect" coords="'+Math.round(xBack*0.15)+','+Math.round(yBack*0.528)+','+Math.round(xBack*0.8)+','+Math.round(yBack*0.647)+'">');
$("#menunav").append('<area id="menuShop" shape="rect" coords="'+Math.round(xBack*0.167)+','+Math.round(yBack*0.668)+','+Math.round(xBack*0.8)+','+Math.round(yBack*0.744)+'">');
$("#startgame").click(startGame);
$("#back").click(restartGame);
$("#loseBack").click(restartGame);
$("#continue").click(function () {
	if (localStorage.haveSave !== "true"){
		alert("No save data");
		return;
	}
	hideMainMenu();
	loadGame();
	$("#controlButtons").show();
	$("#Inventory").show();
	if(usedMap === true){
		$("#toggleMapButton").show();
	}
});
$("#option").click(changeMazeSize);
$("#instruction").click(gameInstruction);
$("#instructionback").click(exitinstruction);
$("#LevelOne").click({diff:1,size:1,level:1},setLevel);
$("#LevelTwo").click(startLevelTwo);
$("#LevelThree").click(startLevelThree);
$("#LevelFour").click(startLevelFour);
$("#LevelFive").click(startLevelFive);
$("#LevelSix").click(startLevelSix);
$("#LevelSeven").click(startLevelSeven);
$("#LevelEight").click(startLevelEight);
$("#LevelNine").click(startLevelNine);
$("#LevelTen").click(startLevelTen);
$("#LevelEleven").click(startLevelEleven);
$("#LevelTwelve").click(startLevelTwelve);

$("#logoSplash").click(function () {
	$(this).hide();
});
window.setTimeout(function () {
	$("#logoSplash").hide();
}, 2500);

function showMainMenu(){
	$("#backgroundImg"+backgroundCount).attr("src","Images/Menu.png");
	$("#menuPage").show();
	$("#backgroundImg2").css({left:"0%",top:"0%",height:"100%",width:"100%"});
	$("#backgroundImg2").attr("usemap","#menunav");
}

function hideMainMenu(){
	$("#menuPage").hide();
	$(".backImg").removeAttr("usemap");
}

function startGame()
{
	bgm.pause();
    hideMainMenu();
    $("#totalScoreButton").hide();
    $("#levelChoosing").show();
    
} 

function setLevel(event){
	var diff = event.data.diff;
	var size = event.data.size;
	var level = event.data.level;
	difficulty = diff;
	difficultyMode = size;
	LevelDisplay = level;
	if (difficultyMode === 1){
		easyLevelOption();
	} else if (difficultyMode === 2){
		normalLevelOption();
	} else if (difficultyMode === 3){
		hardLevelOption();
	}
	levelChoosingHide();
	showGame();
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

function showPopup(){
	hideMainMenu();
	$("#backgroundImg"+backgroundCount).css("opacity","0.65");
	$("body").append('<div id="popup" style="position:absolute;top:15%;left:15%;width:60%;height:60%;background:#FFC8F2;border:solid 1px black;border-radius:10px;box-shadow: 10px 10px 5px #444444;"></div>');
	$("#popup").append("<p>Un jour, tu joues avec ton cerf volante. Le vent est très fort et le vent prend le cerf volante dans une caverne.Les autre bonhomme de neige disent que cette caverne est remplis avec les monstres, qui vole les cerf volants. Ça c'est ton cerf volante favoris, alors tu décides de chercher pour ton cerf volante.</p><p>Le cerf volante est dans le centre de la labyrinthe. Quand tu racontes un monstre il y a une question de mathématique. Si tu types la correcte réponse, tu peux lancer une carotte. Si tu as un réponse incorrecte, tu perds une carotte. Pour lancer la carotte tu tires en arrière et laisser la corde. Tu commence avec 10 carottes. Si tu perds toutes tes carottes, et tu ne peut pas acheter des nouveau carrotes, tu as perdue, et besion de recommencer à niveau 1.</p>");
	$("#popup").append("<p>Pour t'aider, il y a un magasin où tu peut acheter des objets pour t'aider dans la caverne. Dans le magasin, il y a:<p/>")
	$("#popup").append("<p>-Carrottes flamme x5 : Tu peut utiliser pendant combat pour sauter les questions, et aller directement au le lance-pierre.</p>");
	$("#popup").append("<p>-Carrottes x10: Tu besoin les carrottes pour combattre les monstres dans la caverne, si tu n'as pas des carrottes, et ne peut pas acheter plus, tu va perdre.</p>");
	$("#popup").append("<p>-Carte: Avec la carte, tu peut voir le position des monstres et le cerf-volant pour le niveau courrant.</p>");
	$("#popup").append("<p>-Bulldozer: Avec le bullzoder, tu peut l'utilister pour détruire un mur dans la caverne, alors tu peut marcher sure ce carreau.</p>");
	$("#popup").append("<p>-Sauter un niveau: Laisser le jouer saute un niveau. Quand c'est utiliser, vous serrez remis au début de nouveu niveau.</p>");
	$("#popup").append('<button id="closePopup" style="position:absolute;right:0%;bottom:0%;height:15%;width:15%">RECULER</button>');
	$("#closePopup").click(hidePopup);
}

function hidePopup(){
	$("#backgroundImg"+backgroundCount).css("opacity","1");
	$("#popup").remove();
	showMainMenu();
}

function gameInstruction(){
	showPopup();
	/*
    $("#instructionpage").show();
    $("#totalScoreButton").hide();
    $("#difficultyDisplay").hide();*/
}
function levelChoosingHide(){
    $("#levelChoosing").hide();
    $("#difficultybutton").text("Niveau courrant est "+ LevelDisplay);
}

function exitinstruction(){
	hidePopup();
	/*
    $("#instructionpage").hide();
    $("#totalScoreButton").show();
    $("#difficultyDisplay").show();*/
}
function hideGame()
{
    $("#controlButtons").hide();
    $("#mathAnswer").hide();
    $("#instructionpage").hide();
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
    $("#loseGame").hide();
    $("#levelChoosing").hide();
    $("#backGround").hide();

}
function showGame()
{
    $("#totalScoreButton").hide();
    $("#controlButtons").show();
    $("#scoreDisplay").show();
    $("#Inventory").show();
    $("#backgroundImg"+backgroundCount).attr("src","Images/forwardcorridor.jpg");
    usedMap=false;
    $("#toggleMapButton").css("display","none");
    $("#buyMapDisplay").removeAttr("disabled","");
    createMaze();
    mazeDrawer();
	playing = true;
}
function optionShowGame(){
    $("#optionPage").hide();
    $("#levelChoosing").show();
}
function restartGame(){
	playing = false;
    score = 0;
    $("#scorebutton").text("Votre score est "+ score); 
    $("#finalScoreButton").text("Votre score final est "+ score); 
    $("#endGame").hide();
    showMainMenu();
    $("#loseGame").hide();
    $("#backGround").hide();
    $("#backgroundContainer").show();
    $("#difficultyDisplay").show();
    $("#totalScoreButton").show();
    $("#backgroundImg"+backgroundCount).attr("src","Images/Menu.png");
}

function changeMazeSize(){
    hideMainMenu();
    $("#optionPage").show();
   
 
}

//   $("#optionPage").append('<button class="gamebutton" id=easyLevel>'+"Easy"+'</button>');
//   $("#easyLevel").css("position","absolute");
//   $("#easyLevel").css("left",25+"%");
//   $("#easyLevel").css("top",15+"%");
//   $("#easyLevel").css("height",6+"%");
//   $("#easyLevel").css("width", 6+"%");
//   $("#easyLevel").css("border-radius",10);
//   $("#easyLevel").click(easyLevelOption);
   
//  $("#optionPage").append('<button class="gamebutton" id=normalLevel>'+"Normal"+'</button>');
//   $("#normalLevel").css("position","absolute");
//   $("#normalLevel").css("left",45+"%");
//   $("#normalLevel").css("top",15+"%");
//   $("#normalLevel").css("height",6+"%");
//   $("#normalLevel").css("width", 6+"%");
//   $("#normalLevel").css("border-radius",10);
//   $("#normalLevel").click(normalLevelOption);
   
//   $("#optionPage").append('<button class="gamebutton" id=hardLevel>'+"Hard"+'</button>');
//   $("#hardLevel").css("position","absolute");
//   $("#hardLevel").css("left",65+"%");
//   $("#hardLevel").css("top",15+"%");
//   $("#hardLevel").css("height",6+"%");
//   $("#hardLevel").css("width", 6+"%");
//   $("#hardLevel").css("border-radius",10);
//   $("#hardLevel").click(hardLevelOption);
   
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

function optionBack(){
    $("#optionPage").hide();
    showMainMenu()
}
   
   var LevelDisplay=1;
//   var ModeDisplay ="Normal"
   
   $("#difficultyDisplay").append('<button class="gamebutton" id=difficultybutton></button>');
   $("#difficultybutton").text("Niveau courrant est "+ LevelDisplay);   
   $("#difficultybutton").css("position","absolute");
   $("#difficultybutton").css("left",75+"%");
   $("#difficultybutton").css("top",8+"%");
   $("#difficultybutton").css("height",5+"%");
   $("#difficultybutton").css("width", 20+"%");
   $("#difficultybutton").css("border-radius",10);

   $("#scoreDisplay").append('<button class="gamebutton" id=scorebutton></button>');
   $("#scorebutton").text("Votre score est "+ score);   
   $("#scorebutton").css("position","absolute");
   $("#scorebutton").css("left",75+"%");
   $("#scorebutton").css("top",13+"%");
   $("#scorebutton").css("height",5+"%");
   $("#scorebutton").css("width", 20+"%");
   $("#scorebutton").css("border-radius",10);


   $("#mainBody").append('<button class="gamebutton" id=totalScoreButton></button>');
   $("#totalScoreButton").text("Votre point est "+ points);   
   $("#totalScoreButton").css("position","absolute");
   $("#totalScoreButton").css("left",75+"%");
   $("#totalScoreButton").css("top",1+"%");
   $("#totalScoreButton").css("height",5+"%");
   $("#totalScoreButton").css("width", 20+"%");
   $("#totalScoreButton").css("border-radius",10);

//   $("#optionPage").append('<button class="gamebutton" id=modebutton></button>');
//   $("#modebutton").text("Current mode is "+ ModeDisplay);   
//   $("#modebutton").css("position","absolute");
 //  $("#modebutton").css("left",75+"%");
//   $("#modebutton").css("top",23+"%");
//  $("#modebutton").css("height",5+"%");
//   $("#modebutton").css("width", 20+"%");
//   $("#modebutton").css("border-radius",10);
