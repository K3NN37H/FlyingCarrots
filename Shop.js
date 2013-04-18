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
$("#buybulldozer").click(function(){purchase("bulldozer")});
$("#buymorecarrot").click(function(){purchase("morecarrot")});
$("#buyfirecarrot").click(function(){purchase("firecarrot")});
$("#menuShop").click(menuEnterShop);
$("#menuShopBackButton").click(menuExitShop);

function enterShop()
{
    hideGame();
    $("#shop").show();
    $("#shopBackDuringTheGame").show();
    $("#totalScoreButton").show();
    $("#Inventory").show();
}
function purchase(item)
{
    console.log(item);
    if(item=="map"&&totalScore>=10000)
    {
        totalScore-=10000;
        inventory[MAP]++;
        $("#buyMapDisplay").text("Map: "+ inventory[MAP]);
        $("#totalScoreButton").text("Your total score is "+ totalScore);   
    }
    if(item=="bulldozer"&&totalScore>=10000)
    {
        totalScore-=10000;
        inventory[BULLDOZER]++;
        $("#bullDozerDisplay").text("Bulldozer: "+ inventory[BULLDOZER]); 
        $("#totalScoreButton").text("Your total score is "+ totalScore);   
    }
    
}

function exitShop(){
    $("#shop").hide();  
    $("#shopBackDuringTheGame").hide();
    $("#controlButtons").show();
    $("#mapContainer").show();
    $("#scoreDisplay").show();
    $("#totalScoreButton").hide();
}

function menuEnterShop(){
    $("#menuPage").hide();
    $("#shop").show();
    $("#Inventory").show();
    $("#menuShopBack").show();
    $("#difficultyDisplay").hide();
}

function menuExitShop(){
    $("#shop").hide();
    $("#menuPage").show();
    $("#Inventory").hide();
    $("#menuShopBack").hide();
    $("#difficultyDisplay").show();

}