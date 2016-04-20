// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png'; //REQ #1
        this.x = x;
        this.y = y;
        this.width = 101;
        this.height = 101;//171;
        this.speed = getRandomInt(2,4);
};
    //method sets enemy's initial location   REQ #2
// Enemy.prototype.setLocation = function(x,y){
//     this.x = x;
//     this.y = y;
// };  

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //this.x += 100*dt;


     if (this.x > 500) {
        this.x = -100;
     } 

    this.x += this.speed; 
    //this.x = this.speed * dt;
};

Enemy.prototype.checkCollisions = function() {
     if  (

           ( (this.x + (this.width/2) ) >= player.x) && 
            (this.x <= (player.x + (player.width/2) )) &&
          ((this.y + (this.height/2) )>= player.y) && 
            (this.y <= (player.y + (player.height/2) ))
          
           ){
                player.x = 200;
                player.y = 400;
        }


}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
 Player = function(x,y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.width = 50; //101;
    this.height = 101;//171;
};

Player.prototype.update = function(){
ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.render = function() {
 ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

 Player.prototype.handleInput = function(input) {
      switch (input) {
        case 'left':
            if (this.x > 0) {
            this.x -=100;
        };
            break;

        case 'up':
            if (this.y < 100) {   //"edge case"
                this.y = 500;
            };

            if (this.y > 0) {  //"default case"
              this.y -=90;
            };
           break;

        case 'right':
            if (this.x < 400) {
                this.x  +=100;
            };
            break;

        case 'down':
            if (this.y < 400) {
               this.y +=100; 
            }
             break;          
      };
 };

// Player.prototype.checkCollisions = function(allEnemies) {
//     for (var i =0; i < allEnemies.length; i++) {
//         return this.x < allEnemies[i].x + allEnemies[i].width 
//         && this.x + this.width > allEnemies[i].x
//         && this.y < allEnemies[i].y + allEnemies[i].height
//         && this.height + this.y > allEnemies[i].y;
        
//     }
     
// };

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var player = new Player(200,400);

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
//var allEnemies = [enemy1,enemy2,enemy3];
var allEnemies = [new Enemy(0, 63), new Enemy(200, 146), new Enemy(400, 229)];



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
