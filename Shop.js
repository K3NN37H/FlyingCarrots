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
$("#shopButton").click(enterShop);
$("#shopBackButton").click(exitShop);
$("#buymap").click(function(){purchase("map")});
$("#buybulldozer").click(function(){purchase 	("bulldozer")});
$("#buymoreCarrot").click(function(){purchase("morecarrot")});
$("#buyfireCarrot").click(function(){purchase("flamecarrot")});
$("#buyLevelSkip").click(function(){purchase("levelskip")});
$("#menuShop").click(menuEnterShop);
$("#menuShopBackButton").click(menuExitShop);

function enterShop()
{    mapToggle=0;
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
}
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
}

function menuEnterShop(){
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
    $("#difficultyDisplay").show();
	$("#buyMapDisplay").removeAttr("disabled","");
    $("#backgroundImg"+backgroundCount).attr("src","Images/Menu.png");
}