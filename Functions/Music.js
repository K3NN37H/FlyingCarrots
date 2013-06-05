//decline = lose
//move = win
//constancy =dungeon
//adventure = main menu.

var song;
var bgm = new Audio();
var mute = false;

bgm.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
function ingameMusic()
{
	stopMusic();
	bgm.src = 'Images/Darkness.mp3';
	playMusic();
}
function battleMusic()
{
	stopMusic();
	bgm.src = 'Images/Battle.mp3';
	playMusic();
}
function menuMusic()
{
	stopMusic();
	bgm.src = 'Images/Adventure.mp3'
	playMusic();
}
function levelMusic()
{
	stopMusic();
	bgm.src = 'Images/Constancy.mp3'
	playMusic();
}
function defeatMusic()
{
	stopMusic();
	bgm.src = 'Images/Decline.mp3'
	playMusic();
}
function victoryMusic()
{
	stopMusic();
	bgm.src = 'Images/Move.mp3'
	playMusic();
}
function playMusic()
{
	if(mute===false)
	{
		bgm.play();
	}
}
function stopMusic()
{
	bgm.pause();
}