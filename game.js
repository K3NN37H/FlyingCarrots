
var a,b,c = 0;
var random1=0;
var random2=1;
var correctNumber=2;
var question;
function addition(){
	a= Math.floor((Math.random()*50)+1);
	b= Math.floor((Math.random()*50)+1);
    c = a + b;
    
    question="What is the answer for "+ a +" + " + b + " ?";
    
    buttonMaker();
    

}

function subtraction(){
    a= Math.floor((Math.random()*100)+1);
    c= Math.floor((Math.random()*100)+1);
    b= a + c;
    
    question="What is the answer for "+ b +" - " + a + " ?";
    
    buttonMaker();

}

function multiplication(){
    a= Math.floor((Math.random()*10)+1);
    b= Math.floor((Math.random()*10)+1);
    c= a * b;

    question="What is the answer for "+ a +" × " + b + " ?";

    buttonMaker();

}


function division(){
    a= Math.floor((Math.random()*10)+1);
    c= Math.floor((Math.random()*10)+1);
    b = a * c;
    
     question="What is the answer for "+ b +" ÷ " + a + " ?";
    
    buttonMaker();

}

function buttonMaker()
{
    $("#multipleChoice").append('<button class="gamebutton" id=question>'+question+'</button>');
    $("#question").css("position","absolute");
    $("#question").css("left",25+"%");
    $("#question").css("top",2+"%");
    $("#question").css("height",5+"%");
    $("#question").css("width", 60+"%");
    $("#question").css("border-radius",10);

    var d = Math.floor((Math.random()*3)+1);
    var e = Math.floor((Math.random()*3)+1);

    if(e===1)
    {
        var num1=c+ Math.floor((Math.random()*5)+1);
        var num2=c- Math.floor((Math.random()*5)+1);
    }

    if(e===2)
    {
        var num1=c+ Math.floor((Math.random()*5)+1);
        var num2=c+ Math.floor((Math.random()*5)+1);
        if(num1==num2)
        {
            num1=num2+1
        }
    }
    
    if(e===3)
    {
        var num1=c- Math.floor((Math.random()*5)+1);
        var num2=c- Math.floor((Math.random()*5)+1);
        if(num1==num2)
        {
            num1=num2-1
        }
    }
    
    if(d===1)
    {
        $("#multipleChoice").append('<button class="gamebutton" id='+random1+'>'+num1+'</button>');
        $("#"+random1).css("position", "absolute");
        $("#"+random1).css("left",20+"%");
        $("#"+random1).css("top",10+"%");
        $("#"+random1).css("height",10+"%");
        $("#"+random1).css("width", 10+"%");
        $("#"+random1).css("border-radius",10);
        $("#"+random1).click(wrongbutton);
        
        $("#multipleChoice").append('<button class="gamebutton" id='+random2+'>'+num2+'</button>');
        $("#"+random2).css("position", "absolute");
        $("#"+random2).css("left",50+"%");
        $("#"+random2).css("top",10+"%");
        $("#"+random2).css("height",10+"%");
        $("#"+random2).css("width", 10+"%");
        $("#"+random2).css("border-radius",10);
        $("#"+random2).click(wrongbutton);
        
        $("#multipleChoice").append('<button class="gamebutton" id='+correctNumber+'>'+c+'</button>');
        $("#"+correctNumber).css("position", "absolute");
        $("#"+correctNumber).css("left",80+"%");
        $("#"+correctNumber).css("top",10+"%");
        $("#"+correctNumber).css("height",10+"%");
        $("#"+correctNumber).css("width", 10+"%");
        $("#"+correctNumber).css("border-radius",10);
        $("#"+correctNumber).click(gameButtonClick);
    }
    else if(d===2){
        $("#multipleChoice").append('<button class="gamebutton" id='+random1+'>'+num1+'</button>');
        $("#"+random1).css("position", "absolute");
        $("#"+random1).css("left",20+"%");
        $("#"+random1).css("top",10+"%");
        $("#"+random1).css("height",10+"%");
        $("#"+random1).css("width", 10+"%");
        $("#"+random1).css("border-radius",10);
        $("#"+random1).click(wrongbutton);
        
        $("#multipleChoice").append('<button class="gamebutton" id='+random2+'>'+num2+'</button>');
        $("#"+random2).css("position", "absolute");
        $("#"+random2).css("left",80+"%");
        $("#"+random2).css("top",10+"%");
        $("#"+random2).css("height",10+"%");
        $("#"+random2).css("width", 10+"%");
        $("#"+random2).css("border-radius",10);
        $("#"+random2).click(wrongbutton);
        
        $("#multipleChoice").append('<button class="gamebutton" id='+correctNumber+'>'+c+'</button>');
        $("#"+correctNumber).css("position", "absolute");
        $("#"+correctNumber).css("left",50+"%");
        $("#"+correctNumber).css("top",10+"%");
        $("#"+correctNumber).css("height",10+"%");
        $("#"+correctNumber).css("width", 10+"%");
        $("#"+correctNumber).css("border-radius",10);
        $("#"+correctNumber).click(gameButtonClick);
    }
    if(d===3){
        $("#multipleChoice").append('<button class="gamebutton" id='+random1+'>'+num1+'</button>');
        $("#"+random1).css("position", "absolute");
        $("#"+random1).css("left",80+"%");
        $("#"+random1).css("top",10+"%");
        $("#"+random1).css("height",10+"%");
        $("#"+random1).css("width", 10+"%");
        $("#"+random1).css("border-radius",10);
        $("#"+random1).click(wrongbutton);
        
        $("#multipleChoice").append('<button class="gamebutton" id='+random2+'>'+num2+'</button>');
        $("#"+random2).css("position", "absolute");
        $("#"+random2).css("left",50+"%");
        $("#"+random2).css("top",10+"%");
        $("#"+random2).css("height",10+"%");
        $("#"+random2).css("width", 10+"%");
        $("#"+random2).css("border-radius",10);
        $("#"+random2).click(wrongbutton);
        
        $("#multipleChoice").append('<button class="gamebutton" id='+correctNumber+'>'+c+'</button>');
        $("#"+correctNumber).css("position", "absolute");
        $("#"+correctNumber).css("left",20+"%");
        $("#"+correctNumber).css("top",10+"%");
        $("#"+correctNumber).css("height",10+"%");
        $("#"+correctNumber).css("width", 10+"%");
        $("#"+correctNumber).css("border-radius",10);
        $("#"+correctNumber).click(gameButtonClick);
    }

}


function gameButtonClick()
{


    console.log("Correct")
    $("#multipleChoice").empty();
    $("#controlButtons").show();
    currentLocal="floor";
}

function wrongbutton(){
    
    console.log("wrong")
    maze[playerX][playerY]=currentLocal;
    playerX=prevX;
    playerY=prevY;
    currentLocal=maze[playerX][playerY];
    maze[playerX][playerY]="player";
    mazeDrawer();
    $("#multipleChoice").empty();
    $("#controlButtons").show();
    setImg();
}