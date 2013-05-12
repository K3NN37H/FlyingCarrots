
var a,b,c = 0;
var numQuestion=0;

//var random1=0;
//var random2=1;
//var correctNumber=2;
var question;
var answer = "";

function addition()
{
	a= Math.floor((Math.random()*50)+1);
	b= Math.floor((Math.random()*50)+1);
    c = a + b;
    
    question="What is the answer for "+ a +" + " + b + " ?";

//var answer=prompt( "What is the answer for "+ a +" + " + b + " ?")
//if ( answer == c){
//    gameButtonClick()
//}
//else {
//     wrongbutton()
//}
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
    
    question="What is the answer for "+ b +" - " + a + " ?";
    
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

    question="What is the answer for "+ a +" × " + b + " ?";
    
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
    
   question="What is the answer for "+ b +" ÷ " + a + " ?";

$("#difficultyDisplay").hide();
   $("#mapContainer").hide(); 
   mapToggle=0;
   buttonMaker();
$("#multipleChoice").show();
$("#mathAnswer").show();
}
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
			if(Math.round(Math.random())===1)
			{
				imgSrc="Zombie_female shrunk copy.png";
			}	
			else
			{
				imgSrc="Zombie_male shrunk copy.png";
			}
		}
		else if(currentLocal==="bull")
		{
			imgSrc="bull img shrunk copy.png";
		}
		else if(currentLocal==="bunny")
		{
			imgSrc="bunny size fix copy.png";
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
			$("#legArea").css("bottom",bottom+"%");
			$("#legArea").css("width","20%");
			$("#legArea").css("height","17%");
			
			$("#bodyArea").css("left", (left+2)+"%");
			$("#bodyArea").css("bottom",(bottom+19)+"%");
			$("#bodyArea").css("width","25%");
			$("#bodyArea").css("height","20%");
			
			$("#headArea").css("left", left+"%");
			$("#headArea").css("bottom",(bottom+40)+"%");
			$("#headArea").css("width","13%");
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
function buttonMaker()
{
   $("#multipleChoice").append('<button class="gamebutton" id=question>'+question+'</button>');
   $("#question").css("position","absolute");
   $("#question").css("left",55+"%");
   $("#question").css("top",2+"%");
   $("#question").css("height",8+"%");
   $("#question").css("width", 40+"%");
   $("#question").css("border-radius",10);
   


   $("#mathAnswer").append('<button class="gamebutton" id=answerDisplay></button>');
   $("#answerDisplay").text("The answer is " + answer);
   $("#answerDisplay").css("position","absolute");
   $("#answerDisplay").css("left",60+"%");
   $("#answerDisplay").css("top",20+"%");
   $("#answerDisplay").css("height",8+"%");
   $("#answerDisplay").css("width", 30+"%");
   $("#answerDisplay").css("border-radius",10);

   $("#multipleChoice").append('<button class="gamebutton" id=one>'+"1"+'</button>');
   $("#one").css("position","absolute");
   $("#one").css("left",65+"%");
   $("#one").css("top",55+"%");
   $("#one").css("height",6+"%");
   $("#one").css("width", 6+"%");
   $("#one").css("border-radius",10);
  // $("#one").click(numberInput(1));
   $("#one").click(function (){
       numberInput(1);
   });
   
   $("#multipleChoice").append('<button class="gamebutton" id=two>'+"2"+'</button>');
   $("#two").css("position","absolute");
   $("#two").css("left",75+"%");
   $("#two").css("top",55+"%");
   $("#two").css("height",6+"%");
   $("#two").css("width", 6+"%");
   $("#two").css("border-radius",10);
   //$("#two").click(numberInput(2));
   //$("#two").click({param1:2},numberInput);
   $("#two").click(function (){
       numberInput(2);
   });
   
   $("#multipleChoice").append('<button class="gamebutton" id=three>'+"3"+'</button>');
   $("#three").css("position","absolute");
   $("#three").css("left",85+"%");
   $("#three").css("top",55+"%");
   $("#three").css("height",6+"%");
   $("#three").css("width", 6+"%");
   $("#three").css("border-radius",10);
   //$("#three").click(numberInput(3));
   $("#three").click(function (){
       numberInput(3);
   });
   
   $("#multipleChoice").append('<button class="gamebutton" id=four>'+"4"+'</button>');
   $("#four").css("position","absolute");
   $("#four").css("left",65+"%");
   $("#four").css("top",65+"%");
   $("#four").css("height",6+"%");
   $("#four").css("width", 6+"%");
   $("#four").css("border-radius",10);
  // $("#four").click(numberInput(4));
   $("#four").click(function (){
       numberInput(4);
   });
   
   $("#multipleChoice").append('<button class="gamebutton" id=five>'+"5"+'</button>');
   $("#five").css("position","absolute");
   $("#five").css("left",75+"%");
   $("#five").css("top",65+"%");
   $("#five").css("height",6+"%");
   $("#five").css("width", 6+"%");
   $("#five").css("border-radius",10);
   //$("#five").click(numberInput(5));
   $("#five").click(function (){
       numberInput(5);
   });
   
   $("#multipleChoice").append('<button class="gamebutton" id=six>'+"6"+'</button>');
   $("#six").css("position","absolute");
   $("#six").css("left",85+"%");
   $("#six").css("top",65+"%");
   $("#six").css("height",6+"%");
   $("#six").css("width", 6+"%");
   $("#six").css("border-radius",10);
  // $("#six").click(numberInput(6));
   $("#six").click(function (){
       numberInput(6);
   });
   
   $("#multipleChoice").append('<button class="gamebutton" id=seven>'+"7"+'</button>');
   $("#seven").css("position","absolute");
   $("#seven").css("left",65+"%");
   $("#seven").css("top",75+"%");
   $("#seven").css("height",6+"%");
   $("#seven").css("width", 6+"%");
   $("#seven").css("border-radius",10);
   //$("#seven").click(numberInput(7));
   $("#seven").click(function (){
       numberInput(7);
   });
   
   $("#multipleChoice").append('<button class="gamebutton" id=eight>'+"8"+'</button>');
   $("#eight").css("position","absolute");
   $("#eight").css("left",75+"%");
   $("#eight").css("top",75+"%");
   $("#eight").css("height",6+"%");
   $("#eight").css("width", 6+"%");
   $("#eight").css("border-radius",10);
   //$("#eight").click(numberInput(8));
   $("#eight").click(function (){
       numberInput(8);
   });
   
   $("#multipleChoice").append('<button class="gamebutton" id=nine>'+"9"+'</button>');
   $("#nine").css("position","absolute");
   $("#nine").css("left",85+"%");
   $("#nine").css("top",75+"%");
   $("#nine").css("height",6+"%");
   $("#nine").css("width", 6+"%");
   $("#nine").css("border-radius",10);
   //$("#nine").click(numberInput(9));
   $("#nine").click(function (){
       numberInput(9);
   });
   
   $("#multipleChoice").append('<button class="gamebutton" id=zero>'+"0"+'</button>');
   $("#zero").css("position","absolute");
   $("#zero").css("left",75+"%");
   $("#zero").css("top",85+"%");
   $("#zero").css("height",6+"%");
   $("#zero").css("width", 6+"%");
   $("#zero").css("border-radius",10);
   //$("#zero").click(numberInput(0));
   $("#zero").click(function (){
       numberInput(0);
   });
   
   $("#multipleChoice").append('<button class="gamebutton" id=delete>'+"delete"+'</button>');
   $("#delete").css("position","absolute");
   $("#delete").css("left",65+"%");
   $("#delete").css("top",85+"%");
   $("#delete").css("height",6+"%");
   $("#delete").css("width", 6+"%");
   $("#delete").css("border-radius",10);
//   $("#deleteAll").click(cleanAnswer());
   $("#delete").click(function (){
      deleteAnswer();
   });
   
   $("#multipleChoice").append('<button class="gamebutton" id=enterAnswer>'+"enter"+'</button>');
   $("#enterAnswer").css("position","absolute");
   $("#enterAnswer").css("left",85+"%");
   $("#enterAnswer").css("top",85+"%");
   $("#enterAnswer").css("height",6+"%");
   $("#enterAnswer").css("width", 6+"%");
   $("#enterAnswer").css("border-radius",10);
//   $("#enterAnswer").click(enterAnswer());
   $("#enterAnswer").click(function (){
      enterAnswer();
   });

   $("#multipleChoice").append('<button class="gamebutton" id=useFlameCarrot>'+"Flame Carrots"+'</button>');
   $("#useFlameCarrot").css("position","absolute");
   $("#useFlameCarrot").css("left",25+"%");
   $("#useFlameCarrot").css("top",85+"%");
   $("#useFlameCarrot").css("height",6+"%");
   $("#useFlameCarrot").css("width", 6+"%");
   $("#useFlameCarrot").css("border-radius",10);
   $("#useFlameCarrot").click(function (){
      if(inventory[1]>0){
          numQuestion=3;
          gameButtonClick();
          inventory[1]--;
          inventory[0]++;
         $("#flameCarrotDisplay").text("FlameCarrots: "+ inventory[FLAMECARROT]);
         $("#carrotDisplay").text("Carrots: "+ inventory[MORECARROT]);
          }
   });
//    var d = Math.floor((Math.random()*3)+1);
//    var e = Math.floor((Math.random()*3)+1);

//   if(e===1)
//   {
//      var num1=c+ Math.floor((Math.random()*5)+1);
//      var num2=c- Math.floor((Math.random()*5)+1);
//    }
//
//    if(e===2)
//    {
 //       var num1=c+ Math.floor((Math.random()*5)+1);
 //       var num2=c+ Math.floor((Math.random()*5)+1);
 //       if(num1==num2)
 //       {
 //           num1=num2+1
 //       }
 //   }
    
 //   if(e===3)
 //   {
 //       var num1=c- Math.floor((Math.random()*5)+1);
 //       var num2=c- Math.floor((Math.random()*5)+1);
 //       if(num1==num2)
 //       {
 //           num1=num2-1
 //       }
 //   }
 //   
 //   if(d===1)
 //   {
 //       $("#multipleChoice").append('<button class="gamebutton" id='+random1+'>'+num1+'</button>');
 //       $("#"+random1).css("position", "absolute");
 //       $("#"+random1).css("left",20+"%");
 //       $("#"+random1).css("top",10+"%");
 //       $("#"+random1).css("height",10+"%");
 //       $("#"+random1).css("width", 10+"%");
 //       $("#"+random1).css("border-radius",10);
 //       $("#"+random1).click(wrongbutton);
 //       
 //       $("#multipleChoice").append('<button class="gamebutton" id='+random2+'>'+num2+'</button>');
 //       $("#"+random2).css("position", "absolute");
 //       $("#"+random2).css("left",50+"%");
 //       $("#"+random2).css("top",10+"%");
 //       $("#"+random2).css("height",10+"%");
 //       $("#"+random2).css("width", 10+"%");
 //       $("#"+random2).css("border-radius",10);
 //       $("#"+random2).click(wrongbutton);
 //       
 //       $("#multipleChoice").append('<button class="gamebutton" id='+correctNumber+'>'+c+'</button>');
 //       $("#"+correctNumber).css("position", "absolute");
 //       $("#"+correctNumber).css("left",80+"%");
 //       $("#"+correctNumber).css("top",10+"%");
 //       $("#"+correctNumber).css("height",10+"%");
 //       $("#"+correctNumber).css("width", 10+"%");
 //       $("#"+correctNumber).css("border-radius",10);
 //       $("#"+correctNumber).click(gameButtonClick);
 //   }
 //   else if(d===2){
 //       $("#multipleChoice").append('<button class="gamebutton" id='+random1+'>'+num1+'</button>');
 //       $("#"+random1).css("position", "absolute");
 //       $("#"+random1).css("left",20+"%");
 //      $("#"+random1).css("top",10+"%");
 //       $("#"+random1).css("height",10+"%");
 //       $("#"+random1).css("width", 10+"%");
 //       $("#"+random1).css("border-radius",10);
 //       $("#"+random1).click(wrongbutton);
 //       
 //       $("#multipleChoice").append('<button class="gamebutton" id='+random2+'>'+num2+'</button>');
 //       $("#"+random2).css("position", "absolute");
 //       $("#"+random2).css("left",80+"%");
 //       $("#"+random2).css("top",10+"%");
 //       $("#"+random2).css("height",10+"%");
 //       $("#"+random2).css("width", 10+"%");
 //       $("#"+random2).css("border-radius",10);
 //       $("#"+random2).click(wrongbutton);
 //       
 //       $("#multipleChoice").append('<button class="gamebutton" id='+correctNumber+'>'+c+'</button>');
 //       $("#"+correctNumber).css("position", "absolute");
 //       $("#"+correctNumber).css("left",50+"%");
 //       $("#"+correctNumber).css("top",10+"%");
 //       $("#"+correctNumber).css("height",10+"%");
 //       $("#"+correctNumber).css("width", 10+"%");
 //       $("#"+correctNumber).css("border-radius",10);
 //       $("#"+correctNumber).click(gameButtonClick);
 //   }
 //   if(d===3){
 //       $("#multipleChoice").append('<button class="gamebutton" id='+random1+'>'+num1+'</button>');
 //       $("#"+random1).css("position", "absolute");
 //       $("#"+random1).css("left",80+"%");
 //       $("#"+random1).css("top",10+"%");
 //       $("#"+random1).css("height",10+"%");
 //       $("#"+random1).css("width", 10+"%");
 //       $("#"+random1).css("border-radius",10);
 //       $("#"+random1).click(wrongbutton);
 //       
 //       $("#multipleChoice").append('<button class="gamebutton" id='+random2+'>'+num2+'</button>');
 //       $("#"+random2).css("position", "absolute");
 //       $("#"+random2).css("left",50+"%");
 //       $("#"+random2).css("top",10+"%");
 //       $("#"+random2).css("height",10+"%");
 //       $("#"+random2).css("width", 10+"%");
 //       $("#"+random2).css("border-radius",10);
 //       $("#"+random2).click(wrongbutton);
 //       
 //       $("#multipleChoice").append('<button class="gamebutton" id='+correctNumber+'>'+c+'</button>');
 //       $("#"+correctNumber).css("position", "absolute");
 //       $("#"+correctNumber).css("left",20+"%");
 //       $("#"+correctNumber).css("top",10+"%");
 //       $("#"+correctNumber).css("height",10+"%");
 //       $("#"+correctNumber).css("width", 10+"%");
 //       $("#"+correctNumber).css("border-radius",10);
 //       $("#"+correctNumber).click(gameButtonClick);
 //   }

}



function numberInput(event){
    answer += "" + event;

   $("#answerDisplay").text("The answer is " + answer);

}

function deleteAnswer(){

    answer = answer.substring (0,answer.length-1);

   $("#answerDisplay").text("The answer is " + answer);

}

function enterAnswer(){
    if(answer ==c){
        gameButtonClick();
    }
    else{
        wrongbutton();
    }
}


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


function wrongbutton(){
	$("#areas").empty();
    maze[playerX][playerY]=currentLocal;
    playerX=prevX;
    playerY=prevY;
    recentmove=prevO;
    currentLocal=maze[playerX][playerY];
    maze[playerX][playerY]="player";
    mazeDrawer();
    $("#multipleChoice").empty();
    $("#mathAnswer").empty();
    $("#controlButtons").show();
    $("#scoreDisplay").show();
    $("#difficultyDisplay").show();
    setImg();
    answer=""
    numQuestion=0;
    inventory[0]--;
    $("#carrotDisplay").text("Carrots: "+ inventory[MORECARROT]);
    gameLose()
}

function gameLose(){
    if(inventory[0] === 0 ){
            if(points<500){
            $("#controlButtons").hide();
            $("#multipleChoice").hide();
            $("#mapContainer").hide();
            $("#scoreDisplay").hide();
            $("#loseGame").show();
            $("#Inventory").hide();
            currentLocal="floor";
            recentmove="right";
            createMaze();
            mazeDrawer();
            setImg();
            difficulty=1
            inventory[0]=10
            $("#carrotDisplay").text("Carrots: "+ inventory[MORECARROT]);
            $("#finalScoreButton2").text("Your final score is "+ score);}
            else{
                enterShop();
                $("#shopBackButton").attr("disabled","disabled");
                $("#buymap").attr("disabled","disabled");
                $("#buybulldozer").attr("disabled","disabled");
                $("#buyfireCarrot").attr("disabled","disabled");
                $("#buyLevelSkip").attr("disabled","disabled");
            }
    }
}
    $("#loseGame").append('<button class="gamebutton" id=finalScoreButton2></button>');
    $("#finalScoreButton2").text("Your final score is "+ score);   
	$("#finalScoreButton2").css("position","absolute");
	$("#finalScoreButton2").css("left",45+"%");
	$("#finalScoreButton2").css("top",15+"%");
	$("#finalScoreButton2").css("height",5+"%");
	$("#finalScoreButton2").css("width", 20+"%");
	$("#finalScoreButton2").css("border-radius",10);	
