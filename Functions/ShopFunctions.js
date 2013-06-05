function purchase(item)
{
    console.log(item);
    
    if(item=="map"&&points>=10000)
    {
        spendPoints(10000);
        inventory[MAP]++;
        $("#buyMapDisplay").text("Carte: "+ inventory[MAP]); 
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
    	$("#carrotDisplay").text("Carrottes: "+ inventory[MORECARROT]);
        $("#shopBackButton").removeAttr("disabled","");
        $("#buymap").removeAttr("disabled","");
        $("#buybulldozer").removeAttr("disabled","");
        $("#buyfireCarrot").removeAttr("disabled","");
        $("#buyLevelSkip").removeAttr("disabled","");
        $("#shopHiders").hide();
    }
    else if(item=="flamecarrot"&&points>=2000)
    {
    	spendPoints(2000);
    	inventory[FLAMECARROT]+=5;
    	$("#flameCarrotDisplay").text("Carrottes Flamme: "+ inventory[FLAMECARROT]); 
    }
    else if(item=="levelskip"&&points>=20000)
    {
    	spendPoints(20000);
    	inventory[LEVELSKIP]++;
    	$("#levelSkipDisplay").text("Sauter un Niveau: "+ inventory[LEVELSKIP]); 
    }
}