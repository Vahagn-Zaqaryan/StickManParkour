function Player() {
    this.name = 'StickMan';
    this.health = 5;
    this.cartridge = '20';
    this.speedX = 10;
    this.speedY = 0;
    this.gravity = 0.2;
    this.jumpState = true;
    this.state = true;
    var last_health = 0;
    i = 0;
    this.health_bar = function(health) {
        if (this.health < last_health) {
            $('.health_bar').empty();  
            i = 0;
        }
        if (this.health == 0) {
            this.kill();
            console.log('good');
        }
        for ( ; i < this.health; i++) {
            health_img = $('<img/>').attr('class', 'health_img').attr('src', './img/like.png').appendTo(health);  
            last_health++;
        }
    }
    this.health_kill = function() {
        this.speedX -= 2;
        this.health--;
    }
    this.kill = function() { 
        this.health = 5;
        console.log('Kill');
        //$('.canvas').fadeOut().delay(250).empty().fadeIn(500);
    }
}
function Enemy(name, health, cartridge, position) {
    this.name = name;
    this.health = health;
    this.cartridge = cartridge;
    this.speed = 1;
    this.position = position;
    this.position_put = function(map){
        $('<div/>').attr('id', 'enemy' + this.cartridge).attr('class', 'empty').css('left', this.position).appendTo(map).append($('<img/>').attr('src', './img/dinosaur.png'));
    }
}