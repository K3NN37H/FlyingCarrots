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
}
function purchase(item)
{
    console.log(item);
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
    $("#menuShopBack").show();
    $("#difficultyDisplay").hide();
}

function menuExitShop(){
    $("#shop").hide();
    $("#menuPage").show();
    $("#menuShopBack").hide();
    $("#difficultyDisplay").show();
}