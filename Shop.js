var numItems= 5;
var inventory = [numItems];
var MORECARROT="0";
var FLAMECARROT="1";
var MAP="2";
var BULLDOZER="3";
var LEVELSKIP="4";
inventory[0]=10;
for(var i=1;i<numItems;i++)
{
    inventory[i]=0;
}
$("#shop").append('<map name="shopnav" id="shopnav"></map>');
$("#shopnav").append('<area id="buyfireCarrot" shape="rect" coords="'+Math.round(xBack*0.1)+','+Math.round(yBack*0.6)+','+Math.round(xBack*0.22)+','+Math.round(yBack*0.85)+'">');
$("#shopnav").append('<area id="buymoreCarrot" shape="rect" coords="'+Math.round(xBack*0.221)+','+Math.round(yBack*0.6)+','+Math.round(xBack*0.36)+','+Math.round(yBack*0.85)+'">');
$("#shopnav").append('<area id="buymap" shape="rect" coords="'+Math.round(xBack*0.361)+','+Math.round(yBack*0.6)+','+Math.round(xBack*0.53)+','+Math.round(yBack*0.85)+'">');
$("#shopnav").append('<area id="buybulldozer" shape="rect" coords="'+Math.round(xBack*0.531)+','+Math.round(yBack*0.6)+','+Math.round(xBack*0.7)+','+Math.round(yBack*0.85)+'">');
$("#shopnav").append('<area id="buyLevelSkip" shape="rect" coords="'+Math.round(xBack*0.701)+','+Math.round(yBack*0.6)+','+Math.round(xBack*0.87)+','+Math.round(yBack*0.85)+'">');
$("#shopButton").click(showShop);
$("#shopBackButton").click(hideShop);
$("#buymap").click(function(){purchase("map")});
$("#buybulldozer").click(function(){purchase 	("bulldozer")});
$("#buymoreCarrot").click(function(){purchase("morecarrot")});
$("#buyfireCarrot").click(function(){purchase("flamecarrot")});
$("#buyLevelSkip").click(function(){purchase("levelskip")});
$("#menuShop").click(showShop);
$("#menuShopBackButton").click(hideShop);

function showShop(){
	$("#backgroundImg"+backgroundCount).attr("src","Images/Shop.png");
	$("#backgroundImg2").css({left:"0%",top:"0%",height:"100%",width:"100%"});
	$("#backgroundImg2").attr("usemap","#shopnav");
	$("#controlButtons").hide();
	$("#shop").show();
	$("#Inventory").show();
	$("#totalScoreButton").show();
	$("#shopBackDuringTheGame").show();
	$("#buyMapDisplay").attr("disabled","disabled");
    $("#bullDozerDisplay").attr("disabled","disabled");
    $("#levelSkipDisplay").attr("disabled","disabled");
	mapToggle = 0;
}
/*
function menuEnterShop(){
	$(".backImg").attr("usemap","#shopnav");
    $("#menuPage").hide();
    $("#shop").show();
    $("#Inventory").show();
    $("#menuShopBack").show();
    $("#buyMapDisplay").attr("disabled","disabled");
    $("#difficultyDisplay").hide();
    $("#backgroundImg"+backgroundCount).attr("src","Images/Shop.png");
}

function enterShop()
{    
	$(".backImg").attr("usemap","#shopnav");
	mapToggle=0;
    hideGame();
    $("#shop").show();
    $("#shopBackDuringTheGame").show();
    $("#totalScoreButton").show();
    $("#Inventory").show();
    console.log("entered");
    $("#buyMapDisplay").attr("disabled","disabled");
    $("#bullDozerDisplay").attr("disabled","disabled");
    $("#levelSkipDisplay").attr("disabled","disabled");
    $("#backgroundImg"+backgroundCount).attr("src","Images/Shop.png");
}*/
function purchase(item)
{
    console.log(item);
    
    if(item=="map"&&points>=10000)
    {
        spendPoints(10000);
        inventory[MAP]++;
        $("#buyMapDisplay").text("Map: "+ inventory[MAP]); 
    }
    else if(item=="bulldozer"&&points>=10000)
    {
    	spendPoints(10000);
        inventory[BULLDOZER]++;
        $("#bullDozerDisplay").text("Bulldozer: "+ inventory[BULLDOZER]);  
    }
    else if(item=="morecarrot"&&points>=500)
    {
    	spendPoints(500);
    	inventory[MORECARROT]+=10;
    	$("#carrotDisplay").text("Carrots: "+ inventory[MORECARROT]);
        $("#shopBackButton").removeAttr("disabled","");
        $("#buymap").removeAttr("disabled","");
        $("#buybulldozer").removeAttr("disabled","");
        $("#buyfireCarrot").removeAttr("disabled","");
        $("#buyLevelSkip").removeAttr("disabled","");
    }
    else if(item=="flamecarrot"&&points>=2000)
    {
    	spendPoints(2000);
    	inventory[FLAMECARROT]+=5;
    	$("#flameCarrotDisplay").text("FlameCarrots: "+ inventory[FLAMECARROT]); 
    }
    else if(item=="levelskip"&&points>=20000)
    {
    	spendPoints(20000);
    	inventory[LEVELSKIP]++;
    	$("#levelSkipDisplay").text("Level Skip: "+ inventory[LEVELSKIP]); 
    }
}
/*
function exitShop(){
    $("#shop").hide();  
    $("#shopBackDuringTheGame").hide();
    $("#controlButtons").show();
    $("#scoreDisplay").show();
    $("#totalScoreButton").hide();
   	if(usedMap===false)
   	{
    	$("#buyMapDisplay").removeAttr("disabled","");
   	}
    $("#bullDozerDisplay").removeAttr("disabled","");
    $("#levelSkipDisplay").removeAttr("disabled","");
    setImg()
}*/

function hideShop(){
	$(".backImg").removeAttr("usemap");
	$("#shop").hide();
	$("#shopBackDuringTheGame").hide();
	if (playing) {
		
		setImg();
		$("#controlButtons").show();
		$("#scoreDisplay").show();
		$("#totalScoreButton").hide();
	}
	else {
		$("#Inventory").hide();
		
		showMainMenu();
	}
	if(usedMap===false)
	{
		$("#buyMapDisplay").removeAttr("disabled","");
	}
	$("#bullDozerDisplay").removeAttr("disabled","");
	$("#levelSkipDisplay").removeAttr("disabled","");
	$("#difficultyDisplay").show();
}
/*
function menuEnterShop(){
	$(".backImg").attr("usemap","#shopnav");
    $("#menuPage").hide();
    $("#shop").show();
    $("#Inventory").show();
    $("#menuShopBack").show();
    $("#buyMapDisplay").attr("disabled","disabled");
    $("#difficultyDisplay").hide();
    $("#backgroundImg"+backgroundCount).attr("src","Images/Shop.png");
}

function menuExitShop(){
    $("#shop").hide();
    $("#menuPage").show();
    $("#Inventory").hide();
    $("#menuShopBack").hide();
	$("#buyMapDisplay").removeAttr("disabled","");
    $("#backgroundImg"+backgroundCount).attr("src","Images/Menu.png");
	$(".backImg").attr("usemap","#menunav");
}*/