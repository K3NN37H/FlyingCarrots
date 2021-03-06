
function startGame()
{
	showPopup();
	//var levelTemp = $("#levelChoosing").detach();
	$("#popup").append($("#levelChoosing"));
	levelSelectClick();
	$("body").append($("#levelChoosing").clone());
	$("#popup > #levelChoosing").show();
	//$("#levelChoosing").show();
    //hideMainMenu();
    //$("#totalScoreButton").hide();
    //$("#levelChoosing").show();   
}

function setLevel(event){
	hidePopup();
	hideMainMenu();
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
	$("#popupContent").append("<p>Un jour, tu joues avec ton cerf volante. Le vent est très fort et le vent prend le cerf volante dans une caverne.Les autre bonhomme de neige disent que cette caverne est remplis avec les monstres, qui vole les cerf volants. Ça c'est ton cerf volante favoris, alors tu décides de chercher pour ton cerf volante.</p><p>Le cerf volante est dans le centre de la labyrinthe. Quand tu racontes un monstre il y a une question de mathématique. Si tu types la correcte réponse, tu peux lancer une carotte. Si tu as un réponse incorrecte, tu perds une carotte. Pour lancer la carotte tu tires en arrière et laisser la corde. Tu commence avec 10 carottes. Si tu perds toutes tes carottes, et tu ne peut pas acheter des nouveau carrotes, tu as perdue, et besion de recommencer à niveau 1.</p>");
	$("#popupContent").append("<p>Pour t'aider, il y a un magasin où tu peut acheter des objets pour t'aider dans la caverne. Dans le magasin, il y a:<p/>")
	$("#popupContent").append("<p>-Carrottes flamme x5 : Tu peut utiliser pendant combat pour sauter les questions, et aller directement au le lance-pierre.</p>");
	$("#popupContent").append("<p>-Carrottes x10: Tu besoin les carrottes pour combattre les monstres dans la caverne, si tu n'as pas des carrottes, et ne peut pas acheter plus, tu va perdre.</p>");
	$("#popupContent").append("<p>-Carte: Avec la carte, tu peut voir le position des monstres et le cerf-volant pour le niveau courrant.</p>");
	$("#popupContent").append("<p>-Bulldozer: Avec le bullzoder, tu peut l'utilister pour détruire un mur dans la caverne, alors tu peut marcher sure ce carreau.</p>");
	$("#popupContent").append("<p>-Sauter un niveau: Laisser le jouer saute un niveau. Quand c'est utiliser, vous serrez remis au début de nouveu niveau.</p>");
	/*
    $("#instructionpage").show();
    $("#totalScoreButton").hide();
    $("#difficultyDisplay").hide();*/
}

function showOptions(){
	showPopup();
	$("#popupContent").append('<button class="optionButton" id="animToggle">Animation de mouvement: ON</button>');
	$("#animToggle").click(function () {
		disableMoveAnim = !disableMoveAnim;
		if (disableMoveAnim){
			$(this).text("Animation de mouvement: OFF");
		} else if (!disableMoveAnim){
			$(this).text("Animation de mouvement: ON");
		}
	});
	$("#popupContent").append('<br><button class="optionButton" id="musicToggle">Musique: ON</button>');
	$("#musicToggle").click(function () {
		mute = !mute;
		if (mute){
			stopMusic();
			$(this).text("Musique: OFF");
		} else if (!mute){
			playMusic();
			$(this).text("Musique: ON");
		}
	});
	$("#popupContent").append('<br><br><br><button class="optionButton" id="clearSaveData">Effacer les données</button><br><br>');
	$("#popupContent").append('<p><strong>Game published by <em>Le Studio D\'espace</em></strong></p>');
	$("#popupContent").append('<p style="font-size:75%;">Game coded by K3NN37H (Kenneth C.), PinguNinja (Andrew Wong), yjyjohn (Junyi Yang)</p>');
	$("#popupContent").append('<p style="font-size:90%;"><em>"Move Forward", "Call to Adventure", "Ghostpocalypse - 7 Master", "Decline", "Darkness is Coming"</em> by Kevin MacLeod (incompetech.com)<br>Licensed under Creative Commons: By Attribution 3.0<br>http://creativecommons.org/licenses/by/3.0/</p>');
	$("#clearSaveData").click(function () {
		var clearOk = confirm("Êtes-vous sûr?");
		if (clearOk) {
			clearAllData();
		}
	});
}

function levelChoosingHide(){
    $("#levelChoosing").hide();
    $("#difficultybutton").text("Niveau courrant est "+ LevelDisplay);
}