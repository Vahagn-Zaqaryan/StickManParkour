function Game_settings() {
    this.name = 'Game Settings';
    this.type = 'pop_up';
    this.music = false;
    this.buttons = function() {
        var center = $('<center/>').prependTo('body');
            settings_panel_sp = $('<div/>').attr('class', 'settings_panel').attr('id', 'settings_panel').appendTo('center');
            menu_box_sp = $('<div/>').attr('class', 'menu_box').attr('id', 'S_P_menu_box').appendTo('.settings_panel'),
            menu_sp = $('<div/>').attr('class', 'menu').appendTo(menu_box_sp),
            game_name_sp = $('<div/>').text(this.name).attr('class', 'game_name').appendTo(menu_sp),
            buttons_sp = $('<div/>').attr('class', 'buttons').appendTo(menu_sp),
            button1_sp = $('<button/>').attr('id', 'Resume').appendTo(buttons_sp).text('Resume'),
            button2_sp = $('<button/>').text('Off Sound').appendTo(buttons_sp),
            button3_sp = $('<button/>').text('Quit').appendTo(buttons_sp);
    }
    this.setting_panel = function() {
        var gameSound = $("<audio/>").appendTo('body');
            gameSound[0].src = "sounds/game_play.mp3";
            gameSound[0].play();
            gameSound[0].loop = 'loop';
            gameSound[0].volume = 0.5;
        $(document).keyup(function(e) { 
            if (e.which == 27) {
                $('#settings_panel').hide();
                $('.canvas').removeClass('blur');
            }           
        });
        this.buttons();
        $(button1_sp).on('click', function(){
            $('#settings_panel').hide();
            $('.canvas').removeClass('blur');
        });
        $(button2_sp).on('click', function(){
            if(this.music){
                this.music = false;
                button2_sp.text('Off Sound');
                $(gameSound[0]).stop().animate({volume: 0.5}, 500);
            }else{
                this.music = true;
                button2_sp.text('On Sound');
                $(gameSound[0]).stop().animate({volume: 0.0}, 500);
            }
        });
        $(button3_sp).on('click', function(){
            $('#settings_panel').hide();
            $(settings_panel_sp).remove();
            $('.canvas').removeClass('blur');
            $('.canvas').empty();
            $(gameSound[0]).stop().animate({volume: 0.0}, 500);
            game.start_menu();
            $('#play_button').on("click", game_word);   
            this.health = 5; 
        }); 
    }
}