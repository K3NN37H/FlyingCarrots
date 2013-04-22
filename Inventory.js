	$("#Inventory").append('<button class="gamebutton" id=carrotDisplay></button>');
	$("#carrotDisplay").text("Carrots: "+ inventory[MORECARROT]); 
	$("#carrotDisplay").css("position","absolute");
	$("#carrotDisplay").css("left",20+"%");
	$("#carrotDisplay").css("top",94+"%");
	$("#carrotDisplay").css("height",6+"%");
	$("#carrotDisplay").css("width", 10+"%");
	
	
	$("#Inventory").append('<button class="gamebutton" id=bullDozerDisplay></button>');
	$("#bullDozerDisplay").text("Bulldozer: "+ inventory[BULLDOZER]); 
	$("#bullDozerDisplay").css("position","absolute");
	$("#bullDozerDisplay").css("left",50+"%");
	$("#bullDozerDisplay").css("top",94+"%");
	$("#bullDozerDisplay").css("height",6+"%");
	$("#bullDozerDisplay").css("width", 10+"%");
	
	
	$("#Inventory").append('<button class="gamebutton" id=flameCarrotDisplay></button>');
	$("#flameCarrotDisplay").text("FlameCarrots: "+ inventory[FLAMECARROT]); 
	$("#flameCarrotDisplay").css("position","absolute");
	$("#flameCarrotDisplay").css("left",30+"%");
	$("#flameCarrotDisplay").css("top",94+"%");
	$("#flameCarrotDisplay").css("height",6+"%");
	$("#flameCarrotDisplay").css("width", 10+"%");
	
	
	$("#Inventory").append('<button class="gamebutton" id=buyMapDisplay></button>');
	$("#buyMapDisplay").text("Map: "+ inventory[MAP]); 
	$("#buyMapDisplay").css("position","absolute");
	$("#buyMapDisplay").css("left",40+"%");
	$("#buyMapDisplay").css("top",94+"%");
	$("#buyMapDisplay").css("height",6+"%");
	$("#buyMapDisplay").css("width", 10+"%");
	// $("#buyMapDisplay").click(useItem);
	
	$("#Inventory").append('<button class="gamebutton" id=levelSkipDisplay></button>');
	$("#levelSkipDisplay").text("Level Skip: "+ inventory[LEVELSKIP]); 
	$("#levelSkipDisplay").css("position","absolute");
	$("#levelSkipDisplay").css("left",60+"%");
	$("#levelSkipDisplay").css("top",94+"%");
	$("#levelSkipDisplay").css("height",6+"%");
	$("#levelSkipDisplay").css("width", 10+"%");
