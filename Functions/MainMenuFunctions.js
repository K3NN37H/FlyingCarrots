
function startGame()
{
    hideMainMenu();
    $("#totalScoreButton").hide();
    $("#levelChoosing").show();   
}

function setLevel(event){
	var diff = event.data.diff;
	var size = event.data.size;
	var level = event.data.level;
	difficulty = diff;
	difficultyMode = size;
	LevelDisplay = level;
	if (difficultyMode === 1){
		easyLevelOption();
	} else if (difficultyMode === 2){
		normalLevelOption();
	} else if (difficultyMode === 3){
		hardLevelOption();
	}
	levelChoosingHide();
	showGame();
	ingameMusic();
}

function gameInstruction(){
	showPopup();
	$("#popup").append("<p>Un jour, tu joues avec ton cerf volante. Le vent est très fort et le vent prend le cerf volante dans une caverne.Les autre bonhomme de neige disent que cette caverne est remplis avec les monstres, qui vole les cerf volants. Ça c'est ton cerf volante favoris, alors tu décides de chercher pour ton cerf volante.</p><p>Le cerf volante est dans le centre de la labyrinthe. Quand tu racontes un monstre il y a une question de mathématique. Si tu types la correcte réponse, tu peux lancer une carotte. Si tu as un réponse incorrecte, tu perds une carotte. Pour lancer la carotte tu tires en arrière et laisser la corde. Tu commence avec 10 carottes. Si tu perds toutes tes carottes, et tu ne peut pas acheter des nouveau carrotes, tu as perdue, et besion de recommencer à niveau 1.</p>");
	$("#popup").append("<p>Pour t'aider, il y a un magasin où tu peut acheter des objets pour t'aider dans la caverne. Dans le magasin, il y a:<p/>")
	$("#popup").append("<p>-Carrottes flamme x5 : Tu peut utiliser pendant combat pour sauter les questions, et aller directement au le lance-pierre.</p>");
	$("#popup").append("<p>-Carrottes x10: Tu besoin les carrottes pour combattre les monstres dans la caverne, si tu n'as pas des carrottes, et ne peut pas acheter plus, tu va perdre.</p>");
	$("#popup").append("<p>-Carte: Avec la carte, tu peut voir le position des monstres et le cerf-volant pour le niveau courrant.</p>");
	$("#popup").append("<p>-Bulldozer: Avec le bullzoder, tu peut l'utilister pour détruire un mur dans la caverne, alors tu peut marcher sure ce carreau.</p>");
	$("#popup").append("<p>-Sauter un niveau: Laisser le jouer saute un niveau. Quand c'est utiliser, vous serrez remis au début de nouveu niveau.</p>");
	/*
    $("#instructionpage").show();
    $("#totalScoreButton").hide();
    $("#difficultyDisplay").hide();*/
}

function showOptions(){
	showPopup();
	$("#popup").append('<button class="optionButton" id="animToggle">Movement Animations: ON</button>');
	$("#animToggle").click(function () {
		disableMoveAnim = !disableMoveAnim;
		if (disableMoveAnim){
			$(this).text("Movement Animations: OFF");
		} else if (!disableMoveAnim){
			$(this).text("Movement Animations: ON");
		}
	});
	$("#popup").append('<br><button class="optionButton" id="musicToggle">Music: ON</button>');
	$("#musicToggle").click(function () {
		mute = !mute;
		if (mute){
			stopMusic();
			$(this).text("Music: OFF");
		} else if (!mute){
			playMusic();
			$(this).text("Music: ON");
		}
	});
}

function levelChoosingHide(){
    $("#levelChoosing").hide();
    $("#difficultybutton").text("Niveau courrant est "+ LevelDisplay);
}