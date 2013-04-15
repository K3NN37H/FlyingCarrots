$("#shopButton").click(enterShop);
$("#buymap").click(function(){purchase("map")});
$("#buybulldozer").click(function(){purchase("bulldozer")});
$("#buymorecarrot").click(function(){purchase("morecarrot")});
$("#buyfirecarrot").click(function(){purchase("firecarrot")});
function enterShop()
{
    hideGame();
    $("#shop").show();
    $("#totalScoreButton").show();
}
function purchase(item)
{
    console.log(item);
}