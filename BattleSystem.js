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
		var x = e.pageX - $(this).offset().left;
		var y = e.pageY - $(this).offset().top;
		//console.log(e.pageX);
		//console.log($(this).offset().left);
		//console.log(e.pageY);
		//console.log($(this).offset().top);
		//console.log(x);
		//console.log(y);
		//console.log("-----------");
		//var x = orig.changedTouches[0].pageX - $(this).offset().left;
		//var y = orig.changedTouches[0].pageY - $(this).offset().top;
		var blah = document.getElementById("slingshot");
		var bcan = blah.getContext("2d");
		bcan.clearRect(0,0,xSize,ySize);
		bcan.beginPath();
		bcan.moveTo(0,10);
		bcan.lineTo(x,y);
		bcan.lineTo(xSize,10);
		bcan.stroke();
	});
	$("#slingshot").on("mouseout", function(e) {
		e.preventDefault();
		var blah = document.getElementById("slingshot");
		var bcan = blah.getContext("2d");
		bcan.clearRect(0,0,xSize,ySize);
		bcan.beginPath();
		bcan.moveTo(0,10);
		bcan.lineTo(xSize,10);
		bcan.stroke();
		var x = e.pageX - $(this).offset().left;
		var y = e.pageY - $(this).offset().top;
		//var x = orig.changedTouches[0].pageX - $(this).offset().left;
		//var y = orig.changedTouches[0].pageY - $(this).offset().top;
		if ($("#carrot").length === 0)
		{
			$("body").append('<div id="carrot" style="position:absolute;background-color:red;"></div>');
		}
		$("#carrot").css("left",$("body").width()/2+(xSize/2-x));
		$("#carrot").css("top",$("#battleInterface").offset().top-(y-10)*2);
	});
}

function destroyBattle()
{
	$("#battleInterface").empty();
	$("#carrot").remove();
}