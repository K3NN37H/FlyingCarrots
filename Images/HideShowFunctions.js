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

function showPopup(){
	hideMainMenu();
	$("#backgroundImg"+backgroundCount).css("opacity","0.65");
	$("body").append('<div id="popup" style="position:absolute;top:15%;left:15%;width:60%;height:60%;background:#FFC8F2;border:solid 1px black;border-radius:10px;box-shadow: 10px 10px 5px #444444;"></div>');
	$("#popup").append('<button id="closePopup" style="position:absolute;right:0%;bottom:0%;height:15%;width:15%">RECULER</button>');
	$("#closePopup").click(hidePopup);
}

function hidePopup(){
	$("#backgroundImg"+backgroundCount).css("opacity","1");
	$("#popup").remove();
	showMainMenu();
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