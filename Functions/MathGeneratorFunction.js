// different types of question for different difficulty
function typeQuestion(difficulty)
{   
//for difficulty equals 1, level will only be 1.There will only be addition problem.
//for difficulty equals 2, level will only be 1 or 2.There will be addition or subtraction problem appear randomly.
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
// question generator
function addition()
{
	a= Math.floor((Math.random()*50)+1);
	b= Math.floor((Math.random()*50)+1);
    c = a + b;
    
    question="C'est quoi la réponse pour "+ a +" + " + b + " ?";

//var answer=prompt( "What is the answer for "+ a +" + " + b + " ?")
//if ( answer == c){
//    gameButtonClick()
//}
//else {
//     wrongbutton()
//}

//hide the difficulty display and the map.
//show up the number pad and math question
   $("#difficultyDisplay").hide();
   $("#mapContainer").hide(); 
   mapToggle=0;
    buttonMaker();
    $("#multipleChoice").show();
    $("#mathAnswer").show();
}


function subtraction(){
    a= Math.floor((Math.random()*100)+1);
    c= Math.floor((Math.random()*100)+1);
    b= a + c;
    
    question="C'est quoi la réponse pour "+ b +" - " + a + " ?";
    
       $("#difficultyDisplay").hide();
   $("#mapContainer").hide(); 
   mapToggle=0;
    buttonMaker();
   $("#multipleChoice").show();
   $("#mathAnswer").show();
}

function multiplication(){
    
    a= Math.floor((Math.random()*20)+1);
    b= Math.floor((Math.random()*10)+1);
    c= a * b;

    question="C'est quoi la réponse pour "+ a +" × " + b + " ?";
    
       $("#difficultyDisplay").hide();
   $("#mapContainer").hide(); 
   mapToggle=0;

    buttonMaker();
$("#multipleChoice").show();
$("#mathAnswer").show();

}


function division(){
    a= Math.floor((Math.random()*10)+1);
    c= Math.floor((Math.random()*20)+1);
    b = a * c;
    
   question="C'est quoi la réponse pour "+ b +" ÷ " + a + " ?";
   
$("#difficultyDisplay").hide();
   $("#mapContainer").hide(); 
   mapToggle=0;
   buttonMaker();
$("#multipleChoice").show();
$("#mathAnswer").show();
}

//draw monster when engage an enemy
function monsterDrawer()
{
	if (currentLocal === "zombie" || currentLocal === "bull" || currentLocal === "bunny")
	{
		var imgSrc
		var left = Math.round(Math.random()*40+22);
		var bottom = Math.round(Math.random()*5);
		$("body").append('<div id="areas" style="position:absolute;height:65%;width:100%;z-index:-1"></div>');
		$("#areas").append('<div class="area" id="headArea"></div>');
		$("#areas").append('<div class="area" id="bodyArea"></div>');
		$("#areas").append('<div class="area" id="legArea"></div>');
		if(currentLocal==="zombie")
		{   
            //there are a male zombie and a female zombie
            //Random choose from these two.
			if(Math.round(Math.random())===1)
			{
				imgSrc="Zombiefemaleshrunkcopy.png";
			}	
			else
			{
				imgSrc="Zombiemaleshrunkcopy.png";
			}
		}
		else if(currentLocal==="bull")
		{
			imgSrc="bullimgshrunkcopy.png";
		}
		else if(currentLocal==="bunny")
		{
			imgSrc="bunnysizefixcopy.png";
		}
		
		$("#areas").append('<img id="monsterImg" src="Images/'+imgSrc+'"></img>');
		$("#monsterImg").css("left",left+"%");
		$("#monsterImg").css("bottom",bottom+"%");
		if(currentLocal==="zombie")
		{
			$("#monsterImg").css("width","10%");
			$("#monsterImg").css("height","70%");
			
			$("#legArea").css("left", (left+2)+"%");
			$("#legArea").css("bottom",bottom+"%");
			$("#legArea").css("width","5%");
			$("#legArea").css("height","25%");
			
			$("#bodyArea").css("left", left+"%");
			$("#bodyArea").css("bottom",(bottom+25)+"%");
			$("#bodyArea").css("width","10%");
			$("#bodyArea").css("height","30%");
			
			$("#headArea").css("left", left+"%");
			$("#headArea").css("bottom",(bottom+50)+"%");
			$("#headArea").css("width","10%");
			$("#headArea").css("height","20%");
		}
		if(currentLocal==="bull")
		{
			$("#monsterImg").css("width","35%");
			$("#monsterImg").css("height","60%");
			
			$("#legArea").css("left", (left+5)+"%");
			$("#legArea").css("bottom",bottom+3+"%");
			$("#legArea").css("width","20%");
			$("#legArea").css("height","17%");
			
			$("#bodyArea").css("left", (left+4)+"%");
			$("#bodyArea").css("bottom",(bottom+19)+"%");
			$("#bodyArea").css("width","21%");
			$("#bodyArea").css("height","18%");
			
			$("#headArea").css("left", (left+1)+"%");
			$("#headArea").css("bottom",(bottom+37)+"%");
			$("#headArea").css("width","10%");
			$("#headArea").css("height","20%");
		}
		if(currentLocal ==="bunny")
		{
			$("#monsterImg").css("width","10%");
			$("#monsterImg").css("height","50%");
			
			$("#legArea").css("left", (left)+"%");
			$("#legArea").css("bottom",bottom+"%");
			$("#legArea").css("width","9%");
			$("#legArea").css("height","5%");
			
			$("#bodyArea").css("left", (left)+"%");
			$("#bodyArea").css("bottom",(bottom+5)+"%");
			$("#bodyArea").css("width","10%");
			$("#bodyArea").css("height","22%");
			
			$("#headArea").css("left", (left+1)+"%");
			$("#headArea").css("bottom",(bottom+27)+"%");
			$("#headArea").css("width","8%");
			$("#headArea").css("height","22%");
		}
		
		
	}
}

//buttons for number pad, math question, and math answer.
function buttonMaker()
{  
   // button for showing up question
   $("#multipleChoice").append('<button class="gamebutton" id=question>'+question+'</button>');
   

   // button for showing up the answer the player types in
   $("#mathAnswer").append('<button class="gamebutton" id=answerDisplay></button>');
   $("#answerDisplay").text("La réponse est " + answer);

   // number pad
   $("#multipleChoice").append('<button class="calculatorButton" id=one>'+"1"+'</button>');
   $("#one").click(function (){
       numberInput(1);
   });
   
   $("#multipleChoice").append('<button class="calculatorButton" id=two>'+"2"+'</button>');
   $("#two").click(function (){
       numberInput(2);
   });
   
   $("#multipleChoice").append('<button class="calculatorButton" id=three>'+"3"+'</button>');
   $("#three").click(function (){
       numberInput(3);
   });
   
   $("#multipleChoice").append('<button class="calculatorButton" id=four>'+"4"+'</button>');
   $("#four").click(function (){
       numberInput(4);
   });
   
   $("#multipleChoice").append('<button class="calculatorButton" id=five>'+"5"+'</button>');
   $("#five").click(function (){
       numberInput(5);
   });
   
   $("#multipleChoice").append('<button class="calculatorButton" id=six>'+"6"+'</button>');
   $("#six").click(function (){
       numberInput(6);
   });
   
   $("#multipleChoice").append('<button class="calculatorButton" id=seven>'+"7"+'</button>');
   $("#seven").click(function (){
       numberInput(7);
   });
   
   $("#multipleChoice").append('<button class="calculatorButton" id=eight>'+"8"+'</button>');
   $("#eight").click(function (){
       numberInput(8);
   });
   
   $("#multipleChoice").append('<button class="calculatorButton" id=nine>'+"9"+'</button>');
   $("#nine").click(function (){
       numberInput(9);
   });
   
   $("#multipleChoice").append('<button class="calculatorButton" id=zero>'+"0"+'</button>');
   $("#zero").click(function (){
       numberInput(0);
   });
   
   $("#multipleChoice").append('<button class="calculatorButton" id=delete>'+"Effacer"+'</button>');
   $("#delete").click(function (){
      deleteAnswer();
   });
   
   $("#multipleChoice").append('<button class="calculatorButton" id=enterAnswer>'+"Inscrire"+'</button>');
   $("#enterAnswer").click(function (){
      enterAnswer();
   });

//button for using flame carrots(skiping question)
   $("#multipleChoice").append('<button class="calculatorButton" id=useFlameCarrot>'+"Carottes Flamme"+'</button>');
   $("#useFlameCarrot").click(function (){
      if(inventory[1]>0){
          numQuestion=3;
          useFlameCarrot=true;
          gameButtonClick();         
          }
   });
}

//input and delete answer for math question
function numberInput(event){
    answer += "" + event;

   $("#answerDisplay").text("La réponse est " + answer);

}
function deleteAnswer(){

    answer = answer.substring (0,answer.length-1);

   $("#answerDisplay").text("La réponse est " + answer);

}

//enter the answer and check the answer.
function enterAnswer(){
    if(answer ==c){
        gameButtonClick();
    }
    else{
        wrongbutton();
    }
}

// answer the question right and then they will go to the sling shot.(player needs to answer more questions for bulls and bunnies)
function gameButtonClick()
{
    $("#multipleChoice").empty();
    $("#mathAnswer").empty();
	
    answer="";
    if(currentLocal=="bull"&&numQuestion<1)
    {
        typeQuestion(difficulty);
        numQuestion++;
        $("#scoreDisplay").hide();
        $("#controlButtons").hide();   
        
    }
    else if(currentLocal=="bunny"&&numQuestion<2)
    {
        typeQuestion(difficulty);
        numQuestion++;
        $("#scoreDisplay").hide();
        $("#controlButtons").hide();   
        
    }
    else
    {
        numQuestion=0;
		$("#controlButtons").hide();
       initBattle();    
    }
}

// answer math question wrong.(lose one carrot and go back one step)
function wrongbutton(){
	$("#areas").empty();
    maze[playerX][playerY]=currentLocal;
    playerX=prevX;
    playerY=prevY;
    recentmove=prevO;
    currentLocal=maze[playerX][playerY];
    maze[playerX][playerY]="player";
    mazeDrawer();
    destroyBattle()
    $("#multipleChoice").empty();
    $("#mathAnswer").empty();
    $("#controlButtons").show();
    $("#scoreDisplay").show();
    $("#difficultyDisplay").show();
    $("#Inventory").show();
	ingameMusic();
    setImg();
    answer=""
    numQuestion=0;
    inventory[0]--;
    $("#carrotDisplay").text("Carrottes: "+ inventory[MORECARROT]);
    gameLose();
}

//running out of carrots
function gameLose()
{
    if(inventory[0]<= 0 )
	{
        //don't have enough point to buy 10 more carrots
        //lock level 2 to 12 again, and the player will keep their inventory and gain 10 normal carrots
		if(points<500)
		{
			$("#controlButtons").hide();
			$("#multipleChoice").hide();
			$("#mapContainer").hide();
			$("#scoreDisplay").hide();
			$("#loseGame").show();
			$("#Inventory").hide();
			$("#backGround").show();
			$("#backgroundContainer").hide();
			currentLocal="floor";
			recentmove="right";
			createMaze();
			mazeDrawer();
			setImg();
			difficulty=1
			difficultyMode = 1
			$("#Level2").attr("disabled","disabled");
			$("#Level3").attr("disabled","disabled");
			$("#Level4").attr("disabled","disabled");
			$("#Level5").attr("disabled","disabled");
			$("#Level6").attr("disabled","disabled");
			$("#Level7").attr("disabled","disabled");
			$("#Level8").attr("disabled","disabled");
			$("#Level9").attr("disabled","disabled");
			$("#Level10").attr("disabled","disabled");
			$("#Level11").attr("disabled","disabled");
			$("#Level12").attr("disabled","disabled");
			inventory[0]=10;
			$("#carrotDisplay").text("Carrottes: "+ inventory[MORECARROT]);
			$("#finalScoreButton2").text("Votre score final est "+ score);
			defeatMusic();
			$("#backgroundImage").attr("src","Images/Defeat.jpg");
			maxLevel=1;
			savePlayerData();
		}
            //have enough points to buy 10 more carrots
            //the player will force to go to the shop and can only buy the normal carrots first
            else{
                showShop();
                $("#shopBackButton").attr("disabled","disabled");
//                $("#buymap").attr("disabled","disabled");
//                $("#buybulldozer").attr("disabled","disabled");
//                $("#buyfireCarrot").attr("disabled","disabled");
//                $("#buyLevelSkip").attr("disabled","disabled");
                $("#shopHiders").show();
            }
    }
}