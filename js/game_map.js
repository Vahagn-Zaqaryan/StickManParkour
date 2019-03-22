var player = new Player();//Creating new player
var dinosaur_big = new Enemy('Dinosaur-Rex', 5, 10, 3370);//first dinosaur enemy
var dinosaur_medium = new Enemy('Dinosaur', 3, 5, 2225);//second dinosaur enemy
var dinosaur_small = new Enemy('Dinosaur', 1, 3, 1035);//third dinosaur enemy
var enemy = [dinosaur_big, dinosaur_medium, dinosaur_small];//Array for enemys
var vars = {};//Class for positions
var cordinat = 200;//enemy movement pixel number
var move = true;//This for know enemy move direction 
vars['dinosaur_10'] = enemy[0].position + 200;//first dinosaur last position in map
vars['dinosaur_5'] = enemy[1].position + 200;//second dinosaur last position in map
vars['dinosaur_3'] = enemy[2].position + 200;//third dinosaur last position in map
function Map() {//Class for all ---MAP---
    this.name = 'Game Map';//The name of Class
    this.map = function() {//Method map
        var main = $('<div/>').attr('class', 'main'),//All game map is in this div
        map = $('<div/>').attr('class', 'map').appendTo(main),//Map part
        //Control Panel Of Game
        control_panel = $('<div/>').attr('class', 'control_panel').css({'width' : '100%','bottom' : '0', 'z-index' : '999'}).appendTo(main),//Control part of game
        platform = $('<div/>').attr('class', 'control_panel').css({'width' : '4000px','bottom' : '0'}).appendTo(main),//The platform where walking player
        health = $('<div/>').attr('class', 'health_bar').appendTo(control_panel);//This the bar where prints health number
        // First Floor
        block_1_1 = $('<div/>').attr('class', 'black_blocks').css({'width' : '150px','bottom' : '82px','left' : '250px'}).appendTo(map),
        block_1_2 = $('<div/>').attr('class', 'black_blocks').css({'width' : '150px','bottom' : '82px','left' : '402px'}).appendTo(map),
        block_1_2 = $('<div/>').attr('class', 'black_blocks').css({'width' : '150px','bottom' : '82px','left' : '704px'}).appendTo(map),
        block_1_3 = $('<div/>').attr('class', 'black_blocks').css({'width' : '150px','bottom' : '82px','left' : '856px'}).appendTo(map),
        block_1_4 = $('<div/>').attr('class', 'black_blocks').css({'width' : '150px','bottom' : '82px','left' : '1306px'}).appendTo(map),
        block_1_5 = $('<div/>').attr('class', 'black_blocks').css({'width' : '150px','bottom' : '82px','left' : '1458px'}).appendTo(map),
        block_1_6 = $('<div/>').attr('class', 'black_blocks').css({'width' : '150px','bottom' : '82px','left' : '1610px'}).appendTo(map),
        block_1_7 = $('<div/>').attr('class', 'black_blocks').css({'width' : '150px','bottom' : '82px','left' : '1910px'}).appendTo(map),
        block_1_8 = $('<div/>').attr('class', 'black_blocks').css({'width' : '150px','bottom' : '82px','left' : '2062px'}).appendTo(map),
        block_1_9 = $('<div/>').attr('class', 'black_blocks').css({'width' : '150px','bottom' : '82px','left' : '2462px'}).appendTo(map),
        block_1_10 = $('<div/>').attr('class', 'black_blocks').css({'width' : '150px','bottom' : '82px','left' : '3192px'}).appendTo(map),
        block_1_11 = $('<div/>').attr('class', 'black_blocks').css({'width' : '150px','bottom' : '82px','left' : '3848px'}).appendTo(map),
        block_1_12 = $('<div/>').attr('class', 'black_blocks').css({'width' : '150px','bottom' : '82px','left' : '3696px'}).appendTo(map),
        //Second Floor
        block_2_1 = $('<div/>').attr('class', 'black_blocks').css({'width' : '150px','bottom' : '164px','left' : '704px'}).appendTo(map),
        block_2_2 = $('<div/>').attr('class', 'black_blocks').css({'width' : '150px','bottom' : '164px','left' : '402px'}).appendTo(map),
        block_2_3 = $('<div/>').attr('class', 'black_blocks').css({'width' : '150px','bottom' : '164px','left' : '1458px'}).appendTo(map),
        block_2_4 = $('<div/>').attr('class', 'black_blocks').css({'width' : '150px','bottom' : '164px','left' : '1610px'}).appendTo(map),
        block_2_5 = $('<div/>').attr('class', 'black_blocks').css({'width' : '150px','bottom' : '164px','left' : '1910px'}).appendTo(map),
        block_2_6 = $('<div/>').attr('class', 'black_blocks').css({'width' : '150px','bottom' : '164px','left' : '2682px'}).appendTo(map),
        block_2_7 = $('<div/>').attr('class', 'black_blocks').css({'width' : '150px','bottom' : '164px','left' : '3848px'}).appendTo(map),
        //Second Floor
        block_3_1 = $('<div/>').attr('class', 'black_blocks').css({'width' : '150px','bottom' : '246px','left' : '2902px'}).appendTo(map),
        block_3_2 = $('<div/>').attr('class', 'black_blocks').css({'width' : '150px','bottom' : '246px','left' : '1610px'}).appendTo(map),
        //Clouds
        cloud1 = $('<img/>').attr('src', './img/cloud2.png').css({'width' : '170px','left' : '106px','position' : 'absolute','top' : '10px'}).appendTo(map),
        cloud2 = $('<img/>').attr('src', './img/cloud1.png').css({'width' : '170px','left' : '356px','position' : 'absolute','top' : '100px'}).appendTo(map),
        cloud3 = $('<img/>').attr('src', './img/cloud2.png').css({'width' : '170px','left' : '556px','position' : 'absolute','top' : '50px'}).appendTo(map),
        cloud4 = $('<img/>').attr('src', './img/cloud2.png').css({'width' : '170px','left' : '856px','position' : 'absolute','top' : '110px'}).appendTo(map),
        cloud5 = $('<img/>').attr('src', './img/cloud1.png').css({'width' : '170px','left' : '1056px','position' : 'absolute','top' : '120px'}).appendTo(map),
        cloud6 = $('<img/>').attr('src', './img/cloud2.png').css({'width' : '170px','left' : '1256px','position' : 'absolute','top' : '70px'}).appendTo(map),
        cloud7 = $('<img/>').attr('src', './img/cloud1.png').css({'width' : '170px','left' : '1456px','position' : 'absolute','top' : '80px'}).appendTo(map),
        cloud8 = $('<img/>').attr('src', './img/cloud2.png').css({'width' : '170px','left' : '1656px','position' : 'absolute','top' : '130px'}).appendTo(map),
        cloud9 = $('<img/>').attr('src', './img/cloud1.png').css({'width' : '170px','left' : '1856px','position' : 'absolute','top' : '50px'}).appendTo(map),
        cloud10 = $('<img/>').attr('src', './img/cloud2.png').css({'width' : '170px','left' : '2056px','position' : 'absolute','top' : '10px'}).appendTo(map),
        cloud11 = $('<img/>').attr('src', './img/cloud1.png').css({'width' : '170px','left' : '2256px','position' : 'absolute','top' : '80px'}).appendTo(map),
        cloud12 = $('<img/>').attr('src', './img/cloud2.png').css({'width' : '170px','left' : '2456px','position' : 'absolute','top' : '10px'}).appendTo(map),
        cloud13 = $('<img/>').attr('src', './img/cloud1.png').css({'width' : '170px','left' : '2656px','position' : 'absolute','top' : '120px'}).appendTo(map),
        cloud14 = $('<img/>').attr('src', './img/cloud1.png').css({'width' : '170px','left' : '2856px','position' : 'absolute','top' : '40px'}).appendTo(map),
        cloud15 = $('<img/>').attr('src', './img/cloud2.png').css({'width' : '170px','left' : '3056px','position' : 'absolute','top' : '60px'}).appendTo(map),
        cloud16 = $('<img/>').attr('src', './img/cloud1.png').css({'width' : '170px','left' : '3256px','position' : 'absolute','top' : '20px'}).appendTo(map),
        cloud17 = $('<img/>').attr('src', './img/cloud2.png').css({'width' : '170px','left' : '3456px','position' : 'absolute','top' : '160px'}).appendTo(map),
        cloud18 = $('<img/>').attr('src', './img/cloud1.png').css({'width' : '170px','left' : '3656px','position' : 'absolute','top' : '120px'}).appendTo(map),
        cloud19 = $('<img/>').attr('src', './img/cloud2.png').css({'width' : '170px','left' : '3806px','position' : 'absolute','top' : '40px'}).appendTo(map),
        //Traps
        trap1 = $('<img/>').attr('class', 'img_trap').attr('src', './img/trap.png').css({'left' : '1760px'}).appendTo(map),
        trap2 = $('<img/>').attr('class', 'img_trap').attr('src', './img/trap.png').appendTo(map),
        trap3 = $('<img/>').attr('src', './img/water.gif').css({ 'left': '2600px','bottom': '60px','position': 'absolute','height': '60px','z-index': '-9'}).appendTo(map),
        trap4 = $('<img/>').attr('src', './img/water.gif').css({ 'left': '2790px','bottom': '60px','position': 'absolute','height': '60px','z-index': '-9'}).appendTo(map),
        trap5 = $('<img/>').attr('src', './img/water.gif').css({ 'left': '2980px','bottom': '60px','position': 'absolute','height': '60px','z-index': '-9'}).appendTo(map),
        trap6 = $('<img/>').attr('src', './img/water.gif').css({ 'left': '3040px','bottom': '60px','position': 'absolute','height': '60px','z-index': '-9'}).appendTo(map),
        //End Point
        flag = $('<img/>').attr('class', 'img_flag').attr('src', './img/flag.png').appendTo(map);//The flag where is end game
        dinosaur_big.position_put(map);//with this method is putting enemy
        dinosaur_small.position_put(map);//with this method is putting enemy
        dinosaur_medium.position_put(map);//with this method is putting enemy
        /*---COLLITION BLOCKS AND TRAPS---*/
        var walls = [platform, block_1_1, block_1_2, block_1_3, block_1_4, block_1_5, block_1_6, block_1_7, block_1_8, block_1_9, block_1_10, block_1_11, block_1_12, block_2_1, block_2_2, block_2_3, block_2_4, block_2_5, block_2_6, block_2_7, block_3_1, block_3_2];  
        var traps = [trap1, trap2, trap3, trap4, trap5, trap6];
        /*----PLAYER MOVEMENT----*/
        function move(e) {
            player.health_bar(health);//Method for showing player health
            for (var i in directions) {
                //Checking directions of movement
                /*----LEFT----*/
                if (dynamic.position().left > 0 && i == 37)
                {
                    dynamic.css("left", (dynamic.position().left - speedX) + 'px');
                    collisionL();//Checking collition from left
                    screenMove();//Moveing map
                }
                /*----RIGTH----*/
                if (dynamic.position().left < ($('.map').width() - dynamic.width()) && i == 39)
                {
                    dynamic.css("left", (dynamic.position().left + speedX) + 'px');
                    collisionR();//Checking collition from rigth
                    screenMove();//Moveing map
                }
                /*----BOTTOM----*/
                if (dynamic.position().top > 0 && i == 38 && jumpState == false)
                {
                    jumpState = true;
                    dynamic.css("top", dynamic.position().top - 6);
                }
            }//end of for
            checkCollisionTraps();//Checking collitions for TRAPS no line 80
            checkCollision();//Checking collitions for WALLS no line 79
            jump();//Jumping function
            /*----AUTO ENEMY MOVEMENT----*/
            for (var i in enemy) {
                var speed = enemy[i].speed;//Movement speed
                var position_enemy = enemy[i].position;//Enemy position reletive is MAP on line 16
                var id = enemy[i].cartridge;//ID of tag ids
                //Checking differens between the LAST POSITION (on line 9, 10, 11) and Enemy position (on line 113)
                var difference = (Math.abs(vars['dinosaur_' + id]) - enemy[i].position);
                //console.log(difference);
                if (cordinat == difference) {
                    move = true;//Changing move on line 8
                }
                if (difference == 0){
                    move = false;//Changing move on line 8
                }
                if (move) {//Checking move is 0 or 1 (0 - false, 1 - true)
                    //Flip enemys image
                    $('#enemy' + id).children('img').removeClass('flipped');
                    speed = Math.abs(enemy[i].speed);//Changing speed to positive
                }else{
                    //Flip enemys image
                    $('#enemy' + id).children('img').addClass('flipped');
                    speed = (enemy[i].speed)*(-1);//Changing speed to negative
                }
                enemy[i].position = (position_enemy + speed);//Changing position of enemy like a number
                $('#enemy' + id).css({'left' : (enemy[i].position) + 'px'});//Changing position of enemy for CSS
                //console.log(id + ' ' + (position_enemy + speed) + 'px' + ' ' + speed);
                /*----ENEMY COLLISION----*/
                //The distence between center of player and enemy vertical
                WHITH_DIFFERENCE = dynamic.width()/2 + 25/2;
                //The distence between center of player and enemy horizonal
                HEIGHT_DIFFERENCE = dynamic.height()/2 + 55/2;
                
                //Position of enemy form left
                STATIC_HOR_CENTER = enemy[i].position + 25/2;
                //Position of enemy form top
                STATIC_VER_CENTER = $(window).height() - 80;

                //Position of player form left
                DYNAMIC_HOR_CENTER = dynamic.position().left + dynamic.width()/2;
                //Position of player form top
                DYNAMIC_VER_CENTER = dynamic.position().top + dynamic.height();
                //Checkig collition from top and left
                 if(Math.abs(DYNAMIC_VER_CENTER - STATIC_VER_CENTER) <= 5 && 
                    Math.abs(DYNAMIC_HOR_CENTER - STATIC_HOR_CENTER) <= WHITH_DIFFERENCE)
                {
                    console.log('eat');
                    if (jumpState == false) {
                        var kill_health = true;
                    }else{
                        var kill_health = false;
                    }
                    if (kill_health) {
                        player.health_kill();
                    }else{
                       console.log('taken'); 
                    }//Else end
                }//Collision checking if end
            }//end of for
        }//end of function move
        var interval = setInterval(move, 10);//interval for MOVE(on line 82) 10ms
        /*----PLAYER MOVEMENT END----*/

        settings = $('<img/>').attr('class', 'game_sett').attr('id', 'game_sett').attr('src', './img/settings.png').appendTo(control_panel),
        $(settings).on('click', function(){
            $('#settings_panel').show();
            $('.canvas').addClass('blur');
        });

        //Player div
        var dynamic = $('<div/>').attr('class', 'player').attr('id', 'player').prependTo(map);;
        var directions = {};//Class for button directions

        var speedX = player.speedX;//Speed to left for player
        var speedY = player.speedY;//Speed to top for player

        var gravity = player.gravity;//Gravity pixel number
        var jumpState = player.jumpState;//Jumbstate boolian

        //Some information about player and walls
        var STATIC_HOR_CENTER;
        var STATIC_VER_CENTER;

        var WHITH_DIFFERENCE;
        var HEIGHT_DIFFERENCE;

        var DYNAMIC_HOR_CENTER;
        var DYNAMIC_VER_CENTER;

        /*----BUTTON PRESS PART----*/
        $('html').keyup(stop).keydown(charMovement);

        function charMovement(e) {
            directions[e.which] = true;//Add in attr in Class 
        }
        function stop(e) {
            delete directions[e.which];//Delete in attr in Class 
        }
        /*----COLLISION DETECTING FOR WALLS FROM RIGTH----*/
        function collisionR() {
            for (var i in walls) {
                //Some information about player and walls
                STATIC_VER_CENTER = walls[i].position().top;
                DYNAMIC_VER_CENTER = dynamic.position().top;
                STATIC_HOR_CENTER = walls[i].position().left + walls[i].width()/2;
                DYNAMIC_HOR_CENTER = dynamic.position().left + dynamic.width()/2;
                WHITH_DIFFERENCE = dynamic.width()/2 + walls[i].width()/2;
                HEIGHT_DIFFERENCE = dynamic.height()/2 + walls[i].height()/2;
                //console.log(player.state);
                if (Math.abs(DYNAMIC_HOR_CENTER - STATIC_HOR_CENTER) <= WHITH_DIFFERENCE && (STATIC_VER_CENTER - DYNAMIC_VER_CENTER) <= 0) {
                    if (i != 0) {
                        dynamic.css('left', walls[i].position().left - dynamic.width());
                        //console.log(Math.abs(STATIC_VER_CENTER - DYNAMIC_VER_CENTER));
                    }else{

                    }//end of else
                }//end of if 
            }//end of for
        }//end of function collisionR on line 208
        /*----COLLISION DETECTING FOR WALLS FROM RIGTH----*/
        function collisionL() {
            for (var i in walls) {
                //Some information about player and walls
                STATIC_VER_CENTER = walls[i].position().top;
                DYNAMIC_VER_CENTER = dynamic.position().top;
                STATIC_HOR_CENTER = walls[i].position().left + walls[i].width()/2;
                DYNAMIC_HOR_CENTER = dynamic.position().left + dynamic.width()/2;
                WHITH_DIFFERENCE = dynamic.width()/2 + walls[i].width()/2;
                HEIGHT_DIFFERENCE = dynamic.height()/2 + walls[i].height()/2;
                //console.log(player.state);
                //console.log(Math.abs(STATIC_VER_CENTER - DYNAMIC_VER_CENTER));
                if (Math.abs(DYNAMIC_HOR_CENTER - STATIC_HOR_CENTER) <= WHITH_DIFFERENCE && (STATIC_VER_CENTER - DYNAMIC_VER_CENTER) <= 0) {
                    if (i != 0) {
                        dynamic.css('left', (walls[i].position().left + walls[i].width()));
                    }else{

                    }//end of else
                }//end of if
            }//end of for
        }//end of function collisionL on line 229
        /*----SCREEN MOVEMENT----*/
        function screenMove() {
            //Horizonal position of player
            var STATIC_HOR_POSITION = dynamic.position().left;
            //Map position from left
            var MAP_POSITION = $('.map').position().left;
            //Map whith
            var MAP_WHITH = $('.map').width();
            //Screen window
            var WINDOW_WHITH = $(window).width();
            var DYNAMIC_POSITION = (dynamic.position().left - Math.abs(MAP_POSITION));
            //console.log(DYNAMIC_POSITION);
            var offset = player.speedX;//number of speed for map moving
            if(STATIC_HOR_POSITION >= WINDOW_WHITH/2){
                if (Math.abs(MAP_POSITION) == (MAP_WHITH - WINDOW_WHITH)) {
                    offset = 0;
                }
                else if(WINDOW_WHITH/2 >= DYNAMIC_POSITION){
                    offset = 0;
                }else{
                    offset = player.speedX;
                }
                $('.map').css({'left' : (MAP_POSITION - offset)});
            }
            if (DYNAMIC_POSITION <= 0) {
                //console.log('yes');
                //console.log((DYNAMIC_POSITION + 3) + 'px');
                dynamic.css("left", Math.abs(MAP_POSITION));
            }//end if 
        }//end of function screenMove on line 250
        /*----COLLISION DETECTING FOR WALLS FROM TOP----*/
        function checkCollision() {
            for (var i in walls) {
                //Some information about player and walls
                STATIC_HOR_CENTER = walls[i].position().left + walls[i].width()/2;
                STATIC_VER_CENTER = walls[i].position().top;

                WHITH_DIFFERENCE = dynamic.width()/2 + walls[i].width()/2;
                HEIGHT_DIFFERENCE = dynamic.height()/2 + walls[i].height()/2;
                
                DYNAMIC_HOR_CENTER = dynamic.position().left + dynamic.width()/2;
                DYNAMIC_VER_CENTER = dynamic.position().top + dynamic.height();

                if(Math.abs(DYNAMIC_VER_CENTER - STATIC_VER_CENTER) <= 5 && 
                    Math.abs(DYNAMIC_HOR_CENTER - STATIC_HOR_CENTER) <= WHITH_DIFFERENCE)
                {
                    $('#status').text('TRUE');
                    jumpState = false;
                    dynamic.css('top', walls[i].position().top - dynamic.height());
                    speedY = 7;
                    break;
                }else{
                    $('#status').text('FALSE');
                    if (jumpState == false) {
                        speedY = 0;
                        jumpState = true;
                    }//end of if
                }//end of else
            }//end of for   
        }//end of function checkCollision on line 280
        /*----COLLISION DETECTING FOR TRAPS FROM TOP----*/
        function checkCollisionTraps() {
            for (var i in traps) {
                //Some information about player and traps
                STATIC_HOR_CENTER = traps[i].position().left + traps[i].width()/2;
                STATIC_VER_CENTER = traps[i].position().top;

                WHITH_DIFFERENCE = dynamic.width()/2 + traps[i].width()/2;
                HEIGHT_DIFFERENCE = dynamic.height()/2 + traps[i].height()/2;
                
                DYNAMIC_HOR_CENTER = dynamic.position().left + dynamic.width()/2;
                DYNAMIC_VER_CENTER = dynamic.position().top + dynamic.height();

                if(Math.abs(DYNAMIC_VER_CENTER - STATIC_VER_CENTER) <= 5 && 
                    Math.abs(DYNAMIC_HOR_CENTER - STATIC_HOR_CENTER) <= WHITH_DIFFERENCE)
                {
                    player.kill();
                    break;
                }//end of if
            }//end of for
        }//end of function checkCollisionTraps on line 310
        /*----JUMPING PROCESS----*/
        function jump() {
            if (jumpState) {
                if (speedY > -7) {
                    speedY -= gravity;
                }
                dynamic.css('top', dynamic.position().top - speedY);
            }//end of if
        }//end of function jump on line 331
        $('.canvas').fadeOut(500, function() {
            $(this).fadeOut().delay(250).empty().fadeIn(500);
            $('.canvas').append(main);
        });
        $('body').css({'background-image' : 'url()'});
    }//end of method
}//end of CLASS MAP 