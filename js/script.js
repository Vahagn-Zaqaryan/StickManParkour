/*----GAME----*/
/*----StickMan Parkour----*/
/*----12.02.2017 17:00----*/
var game = new Game();//NEW game 
var game_settings = new Game_settings();//NEW game settings
var map = new Map();//NEW map
function game_word(e) {
	map.map();
	game_settings.setting_panel();
}
$(document).ready(function(){
	game.start_menu();
    $('#play_button').on("click", game_word);
});