/*
    Timothy Gee
    tijgee
    4/12/19
    main.js
*/
var game = new Phaser.Game(800, 633, Phaser.Canvas);

var player;
		var platforms;
		var cursors;	
		var x = 0;		
		var y = 0;		
		//var score = 0;	
		var scoreText;
		var menuText;
		var overText;
		var starAmount = 12;
		var sound;
		var fireball;
        var fire;
        var fireball2;
        var fire2;
		var timer = 0;
		var total = 0;
        var spacefield;
        var check2 = true;
        var ledge;
        var skeleton;
        var music;
        var scream, scream2;
        var bossmusic;
        var dumbcheck = true;
        var aot;
        var dumbcheck2 = true;
        var menuText2;
        var menuText3;

var GameOver = function(game) {};
GameOver.prototype =
{
	preload: function()
	{
		console.log('GameOver: preload');
	},//end preload

	init: function()
	{
		overText = game.add.text(16, 16, 'Game Over. Score:' + score + ' Press Spacebar to play again!', { fontSize: '32px', fill: '#000' });
	},

	create: function()
	{
		if (dumbcheck == false)
		{
		bossmusic.stop();
	}
	else if (dumbcheck2 == false)
	{
		aot.stop();
	}
	else
	{
		music.stop();
	}
		scream2.play();
		console.log('GameOver: create');
		game.stage.backgroundColor = "#facade";
		score = 0;
	},//end create

	update: function()
	{
		if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
		{
			game.state.start('Play');
		}//end if statement
	}//end update function
}//end gameOver

var MainMenu = function(game) {};
MainMenu.prototype =
{
	preload: function()
	{
		console.log('MainMenu: preload');
		game.load.image('sky', 'assets/img/sky4.jpg');    //credit to Steve on pexels.com
    	game.load.image('ground', 'assets/img/coolplatform.png');
	   	game.load.image('fire', 'assets/img/fire.png');
        game.load.image('fireball', 'assets/img/fireball.png');
	    game.load.spritesheet('knight', 'assets/img/knight.png', 42, 42);	//sprite by Warren Clark on itch.io
	    game.load.spritesheet('skeleton', 'assets/img/skeleton.png', 22, 33 )
	    game.load.audio('sound', 'assets/audio/sound.mp3');	
	    game.load.audio('music', 'assets/audio/music.mp3');	//credit to Bensound
	    game.load.audio('scream','assets/audio/scream.mp3'); //credit to soundbits
	    game.load.audio('scream2','assets/audio/scream2.mp3'); //credit to soundbits
	    game.load.audio('bossmusic','assets/audio/bossmusic.mp3'); //credit to bensound
	    game.load.audio('aot', 'assets/audio/aot.mp3'); 	//Ok I know this is Attack on Titan op but I had to.


	},//end preload

	init: function()
	{
		
	},	//end init
	create: function()
	{
		console.log('MainMenu: create');
		game.stage.backgroundColor = "#facade";
		menuText = game.add.text(16, 16, 'Screaming Knight in Distress, The GAME!.', { fontSize: '32px', fill: '#000' });
		menuText2 = game.add.text(16, 46, 'Use arrow keys to move and jump. Avoid enemies!', { fontSize: '32px', fill: '#000' });
		menuText3 = game.add.text(16, 76	,'Press Spacebar to play!', { fontSize: '32px', fill: '#000' });
},
	update: function()
	{
		if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
		{
			game.state.start('Play');
		}//end if statement
	}//end update funciton
}//end mainmenu prototype

var Play = function(game) {
	
};
Play.prototype = {
preload: function()  //load img and png files for use
{
    //Main Menu now preloads everything

},//end function preload

//initialize variables
init: function()
{
	console.log('Play: init');
	this.score = 0;
},//end init


create: function() //create game objects
{
	//music
	scream = game.add.audio('scream');
	scream2 = game.add.audio('scream2');
	sound = game.add.audio('sound');
	music = game.add.audio('music');
	bossmusic = game.add.audio('bossmusic');
	aot = game.add.audio('aot');
	music.loopFull();

	//set score to 0
	score = 0;
    //enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //add background

    spacefield = game.add.tileSprite(0,0,7762,5177, 'sky');
    spacefield.scale.x=0.2;
    spacefield.scale.y=0.2;
    spacefield.autoScroll(-200,0);
    

    //group includes ground and platforms
    platforms = game.add.group();

    //enable physics on group
    platforms.enableBody = true;



    // create ground
    var ground = platforms.create(0, game.world.height-2, 'ground');

    //Scale ground to fit the game
    ground.scale.setTo(2, 2);

    //Make the ground not able to fall down when player collides
    ground.body.immovable = true;





    //create 4 ledges
    ledge = platforms.create(900, 300, 'ground');	//bottom platform
    ledge.body.immovable = true;

    ledge = platforms.create(-200, 100, 'ground');		//2nd platform
    ledge.body.immovable = true;


    game.physics.arcade.enable(ledge);
    ledge.body.velocity.x = 70;

 
    //add player and enemies
    player = game.add.sprite(42, game.world.height - 150, 'knight');
    player.scale.x = 1.8;
    player.scale.y = 1.8;
   

    skeleton = game.add.sprite(700, 615, 'skeleton');
    skeleton.anchor.x = 0.5;
    skeleton.anchor.y = 0.5;
    skeleton.scale.x = -1.5;
    skeleton.scale.y = 1.5;
    game.physics.arcade.enable(skeleton);
  //	skeleton.body.gravity.y = 1250;
 //   skeleton.body.collideWorldBounds = true;
    skeleton.animations.add('run', [0,1,2,3,4,5,6,7,8,9,10,11,12], 13, true);
    //skeleton.body.velocity.x = -80;


    //enable physcis on player and enemies
    game.physics.arcade.enable(player);
   

    //player collision hitbox adjustment
    player.body.setSize(15, 30, 15, 10);

    //bounce and gravity physics
   
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 1250;

    player.body.collideWorldBounds = true;


    //set sprite animations
    player.animations.add('run', [0,1,2,3,4,5,6,7], 10, true);
   
    //add star and diamond group
   
  
   // fireball = game.add.group();

    //enable physics for both star and diamond
 
    x = Math.random() * 799;	//randomize x position Range: 0-799
    y = Math.random() + 80 * 3 ;	//randomize y position Range: 80-240
   
    //create fireball
  fireball = game.add.sprite(Math.random() * 800 + 800, Math.random() * 600 + 10, 'fireball');
  fireball.scale.x = 0.2;
  fireball.scale.y = 0.2;
  game.physics.enable(fireball);
  fireball.body.velocity.x = -70;

//create fire
  fire = game.add.sprite(Math.random() * 800 + 500, Math.random() * 600 - 200 , 'fire');
  fire.scale.x = 0.03;
  fire.scale.y = 0.03;

  game.physics.enable(fire);
  fire.body.velocity.x = -70;

  //timers to trigger difficulty
  game.time.events.add(Phaser.Timer.SECOND*5, this.stage2, this);
  game.time.events.add(Phaser.Timer.SECOND*10, this.stage3, this);
  game.time.events.add(Phaser.Timer.SECOND*20, this.stage4,this);
  game.time.events.add(Phaser.Timer.SECOND*30, this.stage5, this);
  game.time.events.add(Phaser.Timer.SECOND*40, this.stage6, this);

    // score
    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#674' });

    // player movement controls
    cursors = game.input.keyboard.createCursorKeys();

   
    
},//end method create



//debug sprite collision
render: function()
{
	//game.debug.bodyInfo(player, 42, 42);
	  //game.debug.bodyInfo(fireball, 32, 32);
	 // game.debug.body(player);
    //game.debug.body(fireball);
},

update: function() 
{
	//collision
game.physics.arcade.overlap(player, fireball, this.fireballcollide,null,this);
game.physics.arcade.overlap(player, fire, this.firecollide,null,this);
game.physics.arcade.overlap(player, fireball2, this.fireballcollide2,null,this);
game.physics.arcade.overlap(player, fire2, this.firecollide2,null,this);
game.physics.arcade.overlap(player, skeleton, this.skeletoncollide,null,this);
    score += 0;

    //spacefield.tileposition.x += backgroundv;
   


    //  Player and enemy collisions
    var hitPlatform = game.physics.arcade.collide(player, platforms);
  
   

    //game.physics.arcade.overlap(player, fireball, this.fireballcollide,null,this);



    // reset velocity
    player.body.velocity.x = 0;
   // fireball.body.velocity.x = -100;

   if (ledge.body.x > 700)
   {
    ledge.body.x = -300;
    ledge.body.y = Math.random() * 400;
   }//end if statement

   //skeleton properties
   if (skeleton.body.x < 0)
   {
   		skeleton.body.x = 800;
   		
   }//end if statement
    

    //projectiles that wrap around screen
    if (fire.body.x < -100)
    {
        fire.body.x = Math.random() *200 + 800;
        fire.body.y = Math.random() *600 + 10;
        score +=10;
        scoreText.text = 'Score: ' + score;
    }//end if statement

    if (fireball.body.x < -50)
    {
        fireball.body.x = Math.random() *200 +800;
        fireball.body.y = Math.random() *600 + 10;
        score+=10;
        scoreText.text = 'Score: ' + score;
    }//end if statement

    if (check2 == false)
    {
     if (fire2.body.x < -100)
    {
        fire2.body.x = Math.random() *200 + 800;
        fire2.body.y = Math.random() *600 + 10;
        score+=10;
        scoreText.text = 'Score: ' + score;
    }//end nested if statement

    if (fireball2.body.x < -50)
    {
        fireball2.body.x = Math.random() *200 +800;
        fireball2.body.y = Math.random() *600 + 10;
        score+=10;
        scoreText.text = 'Score: ' + score;
    }//end nested if statement
}//end if statement
    
	//play animations
    player.animations.play('run');
    skeleton.animations.play('run');



    if (cursors.left.isDown)
    {
        // Move left
        player.body.velocity.x = -200;
    }//end if statement

    else if (cursors.right.isDown)
    {
        //  Move right
        player.body.velocity.x = 200;
    }//end else if statement

  
    
    //  Checks if player is grounded. If so, allows player to jump
    if (cursors.up.isDown && player.body.touching.down && hitPlatform)
    {
        player.body.velocity.y = -1000;
        scream.play();
    }//end if statement


    

},//end update method
init: function()
{
	dumbcheck = true;
	dumbcheck2 = true;
},//end init
//end MainMenu Prototype

render: function()
{

    // Display
   // game.debug.spriteBounds(skeleton);
   // game.debug.spriteCorners(player, true, true);

},


//collision methods

skeletoncollide: function(player,skeleton)
{
	//kill skeleton
	skeleton.kill();
	//music.stop();
	game.state.start('GameOver');
	check2 = true;
},


fireballcollide: function (player, fireball)
{
	//kill fireball
	fireball.kill();
	//music.stop();
	game.state.start('GameOver');
    check2 = true;
},

firecollide: function (plyaer, fire)
{
	//kill fire
    fire.kill();
   // music.stop();
    game.state.start('GameOver');
    check2 = true;
},

fireballcollide2: function (player, fireball2)
{
    fireball2.kill();
   // music.stop();
    game.state.start('GameOver');
    check2 = true;
},

firecollide2: function (plyaer, fire2)
{
	//killfire2
    fire2.kill();
    //music.stop();
    game.state.start('GameOver');
    check2 = true;
},


//Creates more projectiles
 stage2: function()
{
  fireball2 = game.add.sprite(Math.random() * 800 + 800, Math.random() * 600 + 10, 'fireball');
  fireball2.scale.x = 0.2;
  fireball2.scale.y = 0.2;
  game.physics.enable(fireball2);
  fireball2.body.velocity.x = -70;


  fire2 = game.add.sprite(Math.random() * 800 + 500, Math.random() * 600 - 200 , 'fire');
  fire2.scale.x = 0.03;
  fire2.scale.y = 0.03;
  game.physics.enable(fire2);
  fire2.body.velocity.x=-70;
  check2 = false;
},

//Makes Projectiles Faster
 stage3: function()
{
    fire.body.velocity.x = -100;
    fire2.body.velocity.x = -100;
    fireball.body.velocity.x = -100;
    fireball2.body.velocity.x = -100;

},

//Skeleton joines the fray!
stage4: function()
{

    skeleton.body.velocity.x = -80;
},

//Faster projectiles, different music
stage5: function()
{
	music.stop();

	bossmusic.loopFull();
	dumbcheck = false;
	skeleton.body.velocity.x = -180;
	fire.body.velocity.x = -180;
	fire2.body.velocity.x = -180;
	fireball.body.velocity.x = -180;
	fireball2.body.velocity.x = -180;
},

//faster projectiles different music
stage6: function()
{
	bossmusic.stop();
	dumbcheck = true;
	dumbcheck2 = false;
	aot.loopFull();
	skeleton.body.velocity.x = -300;
	fire.body.velocity.x = -300;
	fire2.body.velocity.x = -300;
	fireball.body.velocity.x = -300;
	fireball2.body.velocity.x = -300;
}
}//end Play state


//game states
game.state.add('MainMenu', MainMenu);
game.state.add('Play', Play);
game.state.add('GameOver', GameOver);
game.state.start('MainMenu');