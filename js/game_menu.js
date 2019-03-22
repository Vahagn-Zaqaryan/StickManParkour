function Game() {
    this.name = 'StickMan Parkour';
    this.screen_size = 'full';
    this.moreGame_URL = 'https://www.learn4good.com/games/stickman/parkour-running.htm';
    this.button_sound = function() {
        console.log('Game start');
        var clickSound = $("<audio/>").appendTo('body');
        clickSound[0].src = "sounds/click_sound.mp3";
        $('button').on("mouseover mouseleave", function(e){
            clickSound[0].play();
            clickSound[0].volume = 0.1;
        });
        var mainSound = $("<audio/>").appendTo('body');
            mainSound[0].src = "sounds/music.mp3";
            mainSound[0].play();
            mainSound[0].loop = 'loop';
            mainSound[0].volume = 0.2;
        $('#play_button').on("click", function(){
            $(mainSound[0]).stop().animate({volume: 0.0}, 500);
        });
    }
    this.start_menu = function() {
        $('body').css({'background-image' : 'url(./img/bg.jpg)'});
        var menu_box = $('<div/>').attr('class', 'menu_box').appendTo('.canvas'),
            menu = $('<div/>').attr('class', 'menu').appendTo(menu_box),
            game_name = $('<div/>').text(this.name).attr('class', 'game_name').appendTo(menu),
            buttons = $('<div/>').attr('class', 'buttons').appendTo(menu),
            button1 = $('<button/>').attr('id', 'play_button').appendTo(buttons).text(' Play'),
            button2 = $('<button/>').text(' How To Play').attr('id', 'bhshdgdhj').appendTo(buttons),
            icon_play = $('<img/>').attr('src', './img/play.png').prependTo(button1),
            link = $('<a/>').attr('target', '_blank').attr('href', this.moreGame_URL).appendTo(buttons),
            button3 = $('<button/>').text('More Games').appendTo(link);
            this.button_sound();
            console.log('Game End');
    }
}