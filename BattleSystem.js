function initBattle()
{
	if (disableSlingshot) {
		destroyBattle();
		return;
	}
	var xSize = $("#battleInterface").width();
	var ySize = $("#battleInterface").height();
	$("#battleInterface").show();
	$("#battleInterface").append('<canvas id="slingshot" width="'+xSize+'px" height="'+ySize+'px"></canvas>');
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
		bcan.moveTo(0,10);
		bcan.lineTo(x,y);
		bcan.lineTo(xSize,10);
		bcan.stroke();
	});
	$("#slingshot").on("touchend", function(e) {
		e.preventDefault();
		var orig = e.originalEvent;
		var blah = document.getElementById("slingshot");
		var bcan = blah.getContext("2d");
		bcan.clearRect(0,0,xSize,ySize);
		bcan.beginPath();
		bcan.moveTo(0,10);
		bcan.lineTo(xSize,10);
		bcan.stroke();
		//var x = e.pageX - $(this).offset().left;
		//var y = e.pageY - $(this).offset().top;
		var x = orig.changedTouches[0].pageX - $(this).offset().left;
		var y = orig.changedTouches[0].pageY - $(this).offset().top;
		if ($("#carrot").length === 0)
		{
			$("body").append('<div id="carrot" style="position:absolute;background-color:red;"></div>');
		}
		$("#carrot").css("left", orig.changedTouches[0].pageX);
		$("#carrot").css("top", orig.changedTouches[0].pageY);
		$("#carrot").animate({left:$("body").width()/2+(xSize/2-x),top:$("#battleInterface").offset().top-(y-10)*2},500, function () {});
		window.setTimeout(function () {
		if ($("#headArea").offset().left < $("body").width()/2+(xSize/2-x) && $("#headArea").offset().top < $("#battleInterface").offset().top-(y-10)*2 && $("#headArea").offset().left+$("#headArea").width() > $("body").width()/2+(xSize/2-x) && $("#headArea").offset().top+$("#headArea").height() > $("#battleInterface").offset().top-(y-10)*2)
		{
			alert("HIT Head");
		}
		else if ($("#bodyArea").offset().left < $("body").width()/2+(xSize/2-x) && $("#bodyArea").offset().top < $("#battleInterface").offset().top-(y-10)*2 && $("#bodyArea").offset().left+$("#bodyArea").width() > $("body").width()/2+(xSize/2-x) && $("#bodyArea").offset().top+$("#bodyArea").height() > $("#battleInterface").offset().top-(y-10)*2)
		{
			alert("HIT Body");
		}
		else if ($("#legArea").offset().left < $("body").width()/2+(xSize/2-x) && $("#legArea").offset().top < $("#battleInterface").offset().top-(y-10)*2 && $("#legArea").offset().left+$("#legArea").width() > $("body").width()/2+(xSize/2-x) && $("#legArea").offset().top+$("#legArea").height() > $("#battleInterface").offset().top-(y-10)*2)
		{
			alert("HIT Leg");
		}
		$("#battleInterface").append('<button id="leaveBattle" style="position:absolute;top:50%;left:50%;">OK</button>');
		$("#leaveBattle").click(function (e) {
			destroyBattle();
			$("#controlButtons").show();
		});
		},1000);
		$(this).off();
	});
	var blah = document.getElementById("slingshot");
	var bcan = blah.getContext("2d");
	bcan.clearRect(0,0,xSize,ySize);
	bcan.beginPath();
	bcan.moveTo(0,10);
	bcan.lineTo(xSize,10);
	bcan.stroke();
	if (currentLocal === "zombie" || currentLocal === "bull" || currentLocal === "bunny")
	{
		$("body").append('<div id="areas" style="position:absolute;height:65%;width:100%;"></div>');
		$("#areas").append('<div class="areas" id="headArea" style="width:100px;height:33%;"></div>');
		$("#areas").append('<div class="areas" id="bodyArea" style="width:100px;height:33%;top:33%"></div>');
		$("#areas").append('<div class="areas" id="legArea" style="width:100px;height:33%;top:66%"></div>');
	}
}

function destroyBattle()
{
	$("#battleInterface").empty();
	$("#battleInterface").hide();
	$("#areas").empty();
	$("#areas").remove();
	$("#carrot").remove();     
           if(currentLocal=="zombie")
        {
            score+=50;
            totalScore+=50;
            $("#scorebutton").text("Your score is "+ score);
        	$("#finalScoreButton").text("Your final score is "+ score); 
        	$("#totalScoreButton").text("Your total score is "+ totalScore);   
    	}
   		if(currentLocal=="bull"){
       		score+=200;
       		totalScore+=200;
       		$("#scorebutton").text("Your score is "+ score); 
       		$("#finalScoreButton").text("Your final score is "+ score); 
        	$("#totalScoreButton").text("Your total score is "+ totalScore);   
    	}
   		if(currentLocal=="bunny"){
       		score+=500;
       		totalScore+=500;
       		$("#scorebutton").text("Your score is "+ score); 
       		$("#finalScoreButton").text("Your final score is "+ score); 
        	$("#totalScoreButton").text("Your total score is "+ totalScore);   
    	}
        currentLocal="floor"; 
        $("#controlButtons").show();
    	$("#scoreDisplay").show();
        inventory[0]--;
        $("#carrotDisplay").text("Carrots: "+ inventory[MORECARROT]);
        gameLose()
}