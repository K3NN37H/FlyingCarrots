/** BattleSystem.js - contains slingshot system
Dependencies: Score.js
*/

function initBattle()
{
    $("#Inventory").hide();
	if (disableSlingshot) {
		destroyBattle();
		return;
	}
	var xSize = $("#battleInterface").width();
	var ySize = $("#battleInterface").height();
    var hitTheEnemy = false
	$("#battleInterface").show();
	$("#battleInterface").append('<canvas id="slingshot" width="'+xSize+'px" height="'+ySize+'px"></canvas>');
	$("#slingshot").css("z-index","2");
	$("#slingshot").on("touchstart touchmove", function(e) {
		//Disable scrolling by preventing default touch behaviour
		e.preventDefault();
		var orig = e.originalEvent;
		//var x = e.pageX - $(this).offset().left;
		//var y = e.pageY - $(this).offset().top;
		//console.log(e.pageX);
		//console.log($(this).offset().left);
		//console.log(e.pageY);
		//console.log($(this).offset().top);
		//console.log(x);
		//console.log(y);
		//console.log("-----------");
		var x = orig.changedTouches[0].pageX - $(this).offset().left;
		var y = orig.changedTouches[0].pageY - $(this).offset().top;
		var blah = document.getElementById("slingshot");
		var bcan = blah.getContext("2d");
		bcan.clearRect(0,0,xSize,ySize);
		bcan.beginPath();
		bcan.moveTo(xSize/2-150,5);
		bcan.lineTo(x,y);
		bcan.lineTo(xSize/2+150,5);
		bcan.stroke();
		$("#draggingCarrot").css("left",(x-15)+"px");
		$("#draggingCarrot").css("top",(y-10)+"px");
	});
	$("#slingshot").on("touchend", function(e) {
		e.preventDefault();
		var orig = e.originalEvent;
		var blah = document.getElementById("slingshot");
		var bcan = blah.getContext("2d");
		bcan.clearRect(0,0,xSize,ySize);
		bcan.beginPath();
		bcan.moveTo(xSize/2-150,5);
		bcan.lineTo(xSize/2,10);
		bcan.lineTo(xSize/2+150,5);
		bcan.stroke();
		$("#draggingCarrot").hide();
		//var x = e.pageX - $(this).offset().left;
		//var y = e.pageY - $(this).offset().top;
		var x = orig.changedTouches[0].pageX - $(this).offset().left;
		var y = orig.changedTouches[0].pageY - $(this).offset().top;
		if ($("#carrot").length === 0)
		{
			$("body").append('<div id="carrot" style="position:absolute;"></div>');
			if(useFlameCarrot===false)
			{
				$("#carrot").append('<img id=carrotimg src="Images/carrotcopy.png"></img>');
			}
			else if(useFlameCarrot===true)
			{
				$("#carrot").append('<img id=carrotimg src="Images/flamecarrot.png"></img>');
				useFlameCarrot=false;
			}
		}
		$("#carrot").css("left", orig.changedTouches[0].pageX);
		$("#carrot").css("top", orig.changedTouches[0].pageY);
		$("#carrot").animate({left:$("body").width()/2+(xSize/2-x),top:$("#battleInterface").offset().top-(y-10)*2},500, function () {});
		window.setTimeout(function () {
		if ($("#headArea").offset().left < $("body").width()/2+(xSize/2-x) && $("#headArea").offset().top < $("#battleInterface").offset().top-(y-10)*2 && $("#headArea").offset().left+$("#headArea").width() > $("body").width()/2+(xSize/2-x) && $("#headArea").offset().top+$("#headArea").height() > $("#battleInterface").offset().top-(y-10)*2)
		{
			alert("HIT Head");
            hitTheEnemy = true
		}
		else if ($("#bodyArea").offset().left < $("body").width()/2+(xSize/2-x) && $("#bodyArea").offset().top < $("#battleInterface").offset().top-(y-10)*2 && $("#bodyArea").offset().left+$("#bodyArea").width() > $("body").width()/2+(xSize/2-x) && $("#bodyArea").offset().top+$("#bodyArea").height() > $("#battleInterface").offset().top-(y-10)*2)
		{
			alert("HIT Body");
            hitTheEnemy = true
		}
		else if ($("#legArea").offset().left < $("body").width()/2+(xSize/2-x) && $("#legArea").offset().top < $("#battleInterface").offset().top-(y-10)*2 && $("#legArea").offset().left+$("#legArea").width() > $("body").width()/2+(xSize/2-x) && $("#legArea").offset().top+$("#legArea").height() > $("#battleInterface").offset().top-(y-10)*2)
		{
			alert("HIT Leg");
            hitTheEnemy = true
		}
        else{
            alert("You missed it");
        }
		$("#battleInterface").append('<button id="leaveBattle" style="position:absolute;top:50%;left:50%;">OK</button>');
		$("#leaveBattle").click(function (e) {
            if(hitTheEnemy===true){
				destroyBattle();
        	 hitEnemy();   
			}
            else {
				destroyBattle();
                wrongbutton();
            }
		});
		},1000);
		$(this).off();
	});
	var blah = document.getElementById("slingshot");
	var bcan = blah.getContext("2d");
	bcan.clearRect(0,0,xSize,ySize);
	bcan.beginPath();
	bcan.moveTo(xSize/2-150,5);
	bcan.lineTo(xSize/2,10);
	bcan.lineTo(xSize/2+150,5);
	bcan.stroke();
	if(useFlameCarrot===false)
	{
		$("#battleInterface").append('<img id="draggingCarrot" src="Images/carrotcopy.png"></img>');
	}
	else if(useFlameCarrot===true)
	{	
		$("#battleInterface").append('<img id="draggingCarrot" src="Images/flamecarrot.png"></img>');
	}
	$("#draggingCarrot").css("position","absolute");
	$("#draggingCarrot").css("z-index","-1");
	$("#draggingCarrot").css("left",(xSize/2-15)+"px");
	$("#draggingCarrot").css("top","-10px");
	// if (currentLocal === "zombie" || currentLocal === "bull" || currentLocal === "bunny")
	// {
	// 	var imgSrc
	// 	if(currentLocal==="zombie")
	// 	{
	// 		if(Math.round(Math.random())===1)
	// 		{
	// 			imgSrc="Zombie_female shrunk.png";
	// 		{	
	// 		else
	// 		{
	// 			imgSrc="Zombie_male shrunk.png";
	// 		}
	// 	}
	// 	else if(currentLocal==="bull")
	// 	{
	// 		imgSrc="bull img shrunk.png";
	// 	}
	// 	else if(currentLocal==="bunny")
	// 	{
	// 		imgSrce="bunny size fix.png";
	// 	}
	// 	$("body").append('<div id="areas" style="position:absolute;height:65%;width:100%;"></div>');
	// 	$("#areas").append('<img id="monsterImg" style=""')
	// 	$("#areas").append('<div class="areas" id="headArea" style="width:100px;height:33%;"></div>');
	// 	$("#areas").append('<div class="areas" id="bodyArea" style="width:100px;height:33%;top:33%"></div>');
	// 	$("#areas").append('<div class="areas" id="legArea" style="width:100px;height:33%;top:66%"></div>');
	// }
}

function destroyBattle()
{
    $("#battleInterface").empty();
	$("#battleInterface").hide();
    $("#Inventory").show();
	$("#areas").empty();
	$("#areas").remove();
	$("#carrot").remove();    
    $("#controlButtons").show();
    $("#scoreDisplay").show();
    $("#difficultyDisplay").show();
    $("#Inventory").show();
	ingameMusic();
	savePlayerData();
}

function hitEnemy(){
               if(currentLocal=="zombie")
        {
            addScore(50*difficulty);
    	}
   		if(currentLocal=="bull"){
       		addScore(150+50*difficulty);
    	}
   		if(currentLocal=="bunny"){
       		addScore(400+100*difficulty);  
    	}
        currentLocal="floor"; 

        inventory[0]--;
		if (useFlameCarrot){
			inventory[1]--;
			inventory[0]++;
			$("#flameCarrotDisplay").text("Carrottes Flamme: "+ inventory[FLAMECARROT]);
			$("#carrotDisplay").text("Carrottes: "+ inventory[MORECARROT]);
		}
        $("#carrotDisplay").text("Carrottes: "+ inventory[MORECARROT]);
        gameLose();
}