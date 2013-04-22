function initBattle()
{
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
		$("#carrot").css("left",$("body").width()/2+(xSize/2-x));
		$("#carrot").css("top",$("#battleInterface").offset().top-(y-10)*2);
		if ($("#headArea").offset().left < $("#carrot").offset().left && $("#headArea").offset().top < $("#carrot").offset().top && $("#headArea").offset().left+$("#headArea").width() > $("#carrot").offset().left && $("#headArea").offset().top+$("#headArea").height() > $("#carrot").offset().top)
		{
			alert("HIT Head");
		}
		else if ($("#bodyArea").offset().left < $("#carrot").offset().left && $("#bodyArea").offset().top < $("#carrot").offset().top && $("#bodyArea").offset().left+$("#bodyArea").width() > $("#carrot").offset().left && $("#bodyArea").offset().top+$("#bodyArea").height() > $("#carrot").offset().top)
		{
			alert("HIT Body");
		}
		else if ($("#legArea").offset().left < $("#carrot").offset().left && $("#legArea").offset().top < $("#carrot").offset().top && $("#legArea").offset().left+$("#legArea").width() > $("#carrot").offset().left && $("#legArea").offset().top+$("#legArea").height() > $("#carrot").offset().top)
		{
			alert("HIT Leg");
		}
		$("#battleInterface").append('<button id="leaveBattle" style="position:absolute;top:50%;left:50%;">OK</button>');
		$("#leaveBattle").click(function (e) {
			destroyBattle();
			$("#controlButtons").show();
		});
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
}