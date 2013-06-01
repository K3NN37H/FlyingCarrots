   $("#difficultyDisplay").append('<button class="gamebutton" id=difficultybutton></button>');
   $("#difficultybutton").text("Niveau courrant est "+ LevelDisplay);   
   $("#difficultybutton").css("position","absolute");
   $("#difficultybutton").css("left",75+"%");
   $("#difficultybutton").css("top",8+"%");
   $("#difficultybutton").css("height",5+"%");
   $("#difficultybutton").css("width", 20+"%");
   $("#difficultybutton").css("border-radius",10);

   $("#scoreDisplay").append('<button class="gamebutton" id=scorebutton></button>');
   $("#scorebutton").text("Votre score est "+ score);   
   $("#scorebutton").css("position","absolute");
   $("#scorebutton").css("left",75+"%");
   $("#scorebutton").css("top",13+"%");
   $("#scorebutton").css("height",5+"%");
   $("#scorebutton").css("width", 20+"%");
   $("#scorebutton").css("border-radius",10);


   $("#mainBody").append('<button class="gamebutton" id=totalScoreButton></button>');
   $("#totalScoreButton").text("Votre point est "+ points);   
   $("#totalScoreButton").css("position","absolute");
   $("#totalScoreButton").css("left",75+"%");
   $("#totalScoreButton").css("top",1+"%");
   $("#totalScoreButton").css("height",5+"%");
   $("#totalScoreButton").css("width", 20+"%");
   $("#totalScoreButton").css("border-radius",10);