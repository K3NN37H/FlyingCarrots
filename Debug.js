var disableSlingshot = false;
var disableMoveAnim = false;
$("#optionPage").append('<button class="gamebutton" id="debugOption">'+"Debug Mode"+'</button>');
// set up debug controls
$("body").append('<div id="debugControls" style="z-index:100;display:none;position:absolute;right:0%;top:25%;"></div>');
$("#debugControls").append('<button class="gamebutton" id="disSling">'+"Toggle Slingshot"+'</button>');
$("#debugControls").append('<button class="gamebutton" id="disMoveAnim">'+"Toggle Move Animations"+'</button>');
$("#debugControls").append('<button class="gamebutton" id="pointsAdd">'+"Add 10000 points"+'</button>');

$("#disSling").click(function () {
	disableSlingshot = !disableSlingshot;
});

$("#disMoveAnim").click(function () {
	disableMoveAnim = !disableMoveAnim;
});

$("#pointsAdd").click(function () {
	score += 10000;
	totalScore += 10000;
	$("#totalScoreButton").text("Your total score is "+totalScore);
	$("#scorebutton").text("Your score is "+score);
});

$("#debugOption").click(function () {
	$("#debugControls").toggle();
});
