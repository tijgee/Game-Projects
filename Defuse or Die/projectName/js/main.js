// TEAM NUMBER 46
// TEAM NAME: DEFUSERS
// Johnny Luo (Programmer)
// Reese Chong (Artist)
// Timothy Gee (Programmer)
// Benjamin Tran (Artist)
// GITHUB REPO: https://github.com/jluo42/FinalGame

"use strict";
var game = new Phaser.Game(1200, 800, Phaser.AUTO);
var menuText;
var score = 0;
var scoreText;
//var timer;
//var total = 0;

var MainMenu = function(game){};
MainMenu.prototype = {
	preload: function() {
		//load all the images
		game.load.image('bomb', 'assets/img/bomb.png');
		game.load.image('BombTray', 'assets/img/BombTray.png');
		game.load.image('bombWire', 'assets/img/bombWire.png');
		game.load.image('Disarmbackground', 'assets/img/DisarmBackground.png');
		game.load.image('MainMenu01', 'assets/img/MainMenu01.png');
		game.load.image('UIColor', 'assets/img/UIColorChart.png');
		game.load.image('warning', 'assets/img/warning.png');
		game.load.audio('click', 'assets/audio/click.mp3');
		game.load.audio('backAudio', 'assets/audio/backAudio.mp3');
		game.load.audio('beep', 'assets/audio/beep.mp3');
		game.load.audio('error', 'assets/audio/error.mp3');
		game.load.audio('explosion', 'assets/audio/explosion.mp3');
		game.load.audio('cheer', 'assets/audio/cheer.mp3');
		game.load.atlas('bob', 'assets/img/Bob.png', 'assets/img/Bob.json'); 
		game.load.atlas('Beanie', 'assets/img/Beanie.png', 'assets/img/Beanie.json');
		game.load.atlas('Taylor', 'assets/img/Taylor.png', 'assets/img/Taylor.json');
		game.load.atlas('buffy', 'assets/img/Buffy.png', 'assets/img/Buffy.json');
		game.load.atlas('BombMan', 'assets/img/BombMan.png', 'assets/img/BombMan.json'); 
		game.load.atlas('cop', 'assets/img/Cop.png', 'assets/img/Cop.json');
		game.load.atlas('chopper', 'assets/img/Chopper.png', 'assets/img/Chopper.json');
		game.load.atlas('copCar', 'assets/img/PoliceCar.png', 'assets/img/PoliceCar.json');
		game.load.atlas('van', 'assets/img/NewsVanspritesheet.png', 'assets/img/NewsVansprites.json');
		game.load.atlas('wires', 'assets/img/Wires.png', 'assets/img/Wires.json');
		game.load.atlas('green', 'assets/img/colors.png', 'assets/img/colors.json');
		game.load.atlas('errorBackground', 'assets/img/Error.png', 'assets/img/Error.json');

	},
	create: function() {
		 game.stage.backgroundColor  = '#736357';
		 //set MainMenu
		 game.add.image(0,0, 'MainMenu01');	
		 menuText = game.add.text(820, 380, 'Press Spacebar \n     To Play', { fontSize: '35px', fill: '#000' });
		// menuInstruction = game.add.text(300, 300, 'The Keycodes represents a number in the number keypad. \nFor example the number 101 would be #5 on the number pad. \nDecode all the keycodes and press and hold all \nfour of the keycodes to defuse the bomb. \nDO NOT LET GO OF THE NUMBERS. ', { fontSize: '25px', fill: '#000' });
		//adding background music and looping it all the way.
		//add music and loop background music.
		//backgroundMusic = game.add.audio('backAudio');
		//backgroundMusic.loopFull();
	},

	update: function() {
		//Press spacebar to start.
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      		game.state.start('Runner');
		}

	}
}

/*var BombCut = function(game){};
BombCut.prototype = {
	create: function() {
		bombWire = game.add.sprite(-200,0, 'bombWire');
		bombWire.scale.setTo(1,1);
	}
}*/

//initalize variables.
var menuInstruction;
var Disarmbackground;
var backgroundMusic;
var bomb;
var bombMan, bombMan2, taylor, beanie, cop, bob, buffy;
var bombWire, wires;
var click;
var chopper, chopper2;
var van, van2;
var copCar, copCar1, copCar2;
var displayNum1, displayNum2, displayNum3, displayNum4;
var numPresent = false;
var bombNumText;
var rndbombNum;
var userInput;
var num1;
var num2; 
var num3;
var num4;
var num5;
var num6;
var num7;
var num8;
var num9;
var num10;
var keyNum0, keyNum1, keyNum2, keyNum3, keyNum4, keyNum5, keyNum6, keyNum7, keyNum8, keyNum9;
var keyText1, keyText2, keyText3, keyText4;
var keyNumInstruct;
var numPadArray;
var check;
var beep;
var error;
var explosion;
var green;
var greencheck;
var redcheck;
var graycheck;
var pinkcheck;
var yellowcheck;
var whitecheck;
var bluecheck;
var browncheck;
var purplecheck;
var orangecheck;
var warning;
var warningcheck = true;
//var timeRemaining;
var timeReduction = false;
var timerTracker;
var timerTracker2;
var timeRemaining;
var playCount = 0;
var cheer;
var cursors;

var Play = function(game) {};
Play.prototype = {
	init: function() {
		//reset score
		score = 0;
		numPresent = false;
		timeReduction = false;

	},
	
	preload: function() {
		console.log("MainMenu: play");
	},



	create: function() {
		playCount++;
		if (playCount == 4){
								game.state.start('GameWin');
							}
		backgroundMusic = game.add.audio('backAudio');
		backgroundMusic.loopFull();

		if(playCount == 2){
			backgroundMusic._sound.playbackRate.value = 3.0;
		}

		else if (playCount == 3)
		{
			backgroundMusic._sound.playbackRate.value = 5.0;
		}


		//time event for warning.
		game.time.events.add(Phaser.Timer.SECOND * 4, checkwarning, this);

		//enabling physics for the game
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		//create background
		Disarmbackground = game.add.sprite(0,0,'errorBackground', 'Background');
		Disarmbackground.height = game.height;
		Disarmbackground.width = game.width;
		Disarmbackground.animations.add('redError', [0,1,2], 3, true);

		//create beanie sprite and animations
		beanie = game.add.sprite(900,300, 'Beanie', 'sprite1');
		beanie.scale.setTo(.12,.12);
		beanie.animations.add('beanieCry', [0,1,2], 5, true);

		//create taylor sprite and animations
		taylor = game.add.sprite(150,300, 'Taylor', 'sprite2');
		taylor.scale.setTo(.12,.12);
		taylor.animations.add('cry', [0,1,2], 5, true);

		/*var civilian04 = game.add.sprite(1000,350, 'civilian04');
		civilian04.scale.setTo(.12,.12);*/

		//create diffuser sprite and animations
		bombMan = game.add.sprite(game.world.centerX-50, 250, 'BombMan', 'sprite2');
		bombMan.scale.setTo(.15,.15);
		bombMan.animations.add('sweat', [1,2,3], 10, true);

		//create cop sprite and animations
		cop = game.add.sprite(game.world.centerX-300, 300, 'cop', 'sprite1');
		cop.scale.setTo(.25,.25);
		cop.animations.add('donut', [0,1,2,3], 5, true);

		//create bob sprite and animations
		bob = game.add.sprite(1000,330, 'bob', 'sprite1');
		bob.animations.add('panic', [0,1,2,3], 5, true);

		//creating chopper sprite atlas
		chopper = game.add.sprite(0,0, 'chopper', 'Chopper1');
		chopper.scale.setTo(-0.08,0.08);
		this.physics.arcade.enable(chopper);
		chopper.enableBody = true;
		chopper.body.velocity.x = 100;

		//set chopper animations
		chopper.animations.add('chopperFly', [0,1], 5, true);

		//creating news van
		van = game.add.sprite(20,425, 'van', 'NewsVan1');
		van.scale.setTo(0.20, 0.20);

		//creating the police car.
		copCar = game.add.sprite(775,425, 'copCar', 'PoliceCar1');
		copCar.scale.setTo(0.25, 0.25);
		
		//create second cop car with animations
		copCar1 = game.add.sprite(-100,575, 'copCar', 'PoliceCar1');
		copCar1.scale.setTo(-0.25, 0.25);
		game.physics.arcade.enable(copCar1);
		copCar1.body.velocity.x = 250;
		copCar1.animations.add('copDrive', [0,1,2], 10, true);


		//bomb added to the top left.
		bomb = game.add.sprite(940,-20, 'bomb');
		//set scale to fit screen
		bomb.scale.setTo(.25,.25);

		//create UI color chart
		var color = game.add.sprite(0,50, 'UIColor');
		color.scale.setTo(.35,.30);


		//bomb added to the top left.
		//bombWire = game.add.sprite(560,-100, 'bombWire');
		//bombWire.scale.setTo(.5,.5);

		//display bombNum UI text.
		displayNum1 = game.add.text(1020,55, '0', {fontSize: '40px', fill: '#000'});
		displayNum2 = game.add.text(1040,55, '0', {fontSize: '40px', fill: '#000'});
		displayNum3 = game.add.text(1060,55, '0', {fontSize: '40px', fill: '#000'});
		displayNum4 = game.add.text(1080,55, '0', {fontSize: '40px', fill: '#000'});

		//scoretext
		scoreText = game.add.text(10, 10, '0% PassCode', { fontSize: '32px', fill: '#000' });

		//userInput = game.input.keyboard;
		keyNum0 = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_0);
		keyNum1 = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_1);
		keyNum2 = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_2);
		keyNum3 = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_3);
		keyNum4 = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_4);
		keyNum5 = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_5);
		keyNum6 = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_6);
		keyNum7 = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_7);
		keyNum8 = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_8);
		keyNum9 = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_9);

		//add all the nums to an array and having the variable randomly pick a index of the array.
		numPadArray = [keyNum0, keyNum1, keyNum2, keyNum3, keyNum4, keyNum5, keyNum6, keyNum7, keyNum8, keyNum9];
		shuffle(numPadArray);
		num1 = numPadArray[0];
		num2 = numPadArray[1];
		num3 = numPadArray[2];
		num4 = numPadArray[3];
		num5 = numPadArray[4];
		num6 = numPadArray[5];
		num7 = numPadArray[6];
		num8 = numPadArray[7];
		num9 = numPadArray[8];
		num10 = numPadArray[9];

		//the UI color checks is true
		greencheck = true;
		redcheck = true;
		graycheck = true;
		pinkcheck = true
		yellowcheck = true;
		whitecheck = true;
		bluecheck = true;
		browncheck = true;
		purplecheck = true;
		orangecheck = true;


		//creating the text with keyCodes
		keyText1 = game.add.text(350, 635, num1.keyCode, {font: "40px Arial", fill: "#000"}); 
		keyText2 = game.add.text(500, 635, num2.keyCode, {font: "40px Arial", fill: "#000"}); 
		keyText3 = game.add.text(675, 635, num3.keyCode, {font: "40px Arial", fill: "#000"}); 
		keyText4 = game.add.text(850, 635, num4.keyCode, {font: "40px Arial", fill: "#000"}); 

		//checks for repeating numbers on the sequence. If so, get a new code.
		/*if (num1 == num2 || num1 == num3 || num1 == num4 || num2 == num3 || num2 == num4 || num3 == num4)
		{
			getNewCode();
		}
		*/

		
		

		//bomb sounds
		beep = game.add.audio('beep');
		error = game.add.audio('error');
		explosion = game.add.audio('explosion');
		
		//text UI for in-game instructions 
		keyNumInstruct = game.add.text(48, 725, "0      1      2      3       4       5       6      7       8      9", {font: "50px Arial", fill: "#000"});

		//game.add.text(400,550, "Cut the Red Wire \nConnect the Red Wire to the Green \n\n\nCut the Blue Wire \nConnect Blue to Yellow", {font: "25px Arial", fill: "#000"});
		//timer implementations
		//playCount ++;
		var me = this;
		me.startTime = new Date();

		if (playCount == 1){
		me.totalTime = 50;
		}

		else if (playCount == 2){
			me.totalTime = 16;
		}

		else{
			me.totalTime = 7;
		}

		me.timeElapsed = 0;
		me.createTimer();
		me.gameTimer = game.time.events.loop(100, function(){
		me.updateTimer();
		});
		
		//sound for click
		click = game.add.audio('click');
	},

	//function for the timer
	createTimer: function(){

		
        var me = this;

        //UI for the timer.
        me.timeLabel = me.game.add.text(me.game.world.centerX-5, 0, "00:00", {font: "75px Arial", fill: "#000"}); 
        me.timeLabel.anchor.setTo(0.5, 0);
        me.timeLabel.align = 'center';

    },
    //function to update the timer
   updateTimer: function(){

        var me = this;

        var currentTime = new Date();
        var timeDifference = me.startTime.getTime() - currentTime.getTime();

        //Time elapsed in seconds
        me.timeElapsed = Math.abs(timeDifference / 1000);

        //Time remaining in seconds
         timeRemaining = me.totalTime - me.timeElapsed; 

        //Convert seconds into minutes and seconds
        var minutes = Math.floor(timeRemaining / 60);
        var seconds = Math.floor(timeRemaining) - (60 * minutes);

        //Display minutes, add a 0 to the start if less than 10
        var result = (minutes < 10) ? "0" + minutes : minutes; 

        //Display seconds, add a 0 to the start if less than 10
        result += (seconds < 10) ? ":0" + seconds : ":" + seconds; 

        me.timeLabel.text = result;

        //reduce time if character messes up on mechanic 1;


        if (timeReduction == true)
        {
        	//timeRemaining -= 5;
        	me.totalTime -=5;

        	timeReduction = false;
        }

        if(me.timeElapsed >= me.totalTime){
        	explosion.play();
        	backgroundMusic.stop();
    	game.state.start('GameOver');
		}
		//console.log(timeRemaining);
		timerTracker = timeRemaining;
		//console.log(timerTracker);

		timerTracker2 = timeRemaining;

		
    },

	update: function() {		

		/*if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      		game.state.start('WireCut');
		}*/

		console.log(playCount);

		if (timeRemaining < 60 && warningcheck == false )
        {
        	warning = game.add.sprite(315, 365, 'warning');
        	warning.scale.setTo(0.3,0.3);
        	warningcheck = true;
        }
		//helicopter animation
		chopper.animations.play('chopperFly');
		//copCar animations
		copCar1.animations.play('copDrive');
		//play the bombman sweat animations
		bombMan.animations.play('sweat');
		//play taylor cry animations
		taylor.animations.play('cry');
		//play beanie animations
		beanie.animations.play('beanieCry');
		//play cop animations
		cop.animations.play('donut');
		//play office worker animations
		bob.animations.play('panic');

		//wraps the helicopter around the map
		game.world.wrap(chopper, 0, true);
		//wraps the cop car
		game.world.wrap(copCar1, 0 , true);
		
		/*if(total == 1)
		{
			total = 0;
			game.state.start('GameOver');
		}*/

		if(userInput == keyNum2) {
			game.state.start('GameOver');
		}


		//ColorUi ColorChange

		//Green
		if (numPadArray[0] == keyNum3 && greencheck == true)
		{
			green = game.add.sprite(311.5,629,'green','green');
			green.scale.setTo(.37,.32);
			keyText1 = game.add.text(350, 635, num1.keyCode, {font: "40px Arial", fill: "#000"}); 
			greencheck = false;
		}

		if (numPadArray[1] == keyNum3 && greencheck == true)
		{
			green = game.add.sprite(488,629,'green','green');
			green.scale.setTo(.37,.32);
			keyText2 = game.add.text(500, 635, num2.keyCode, {font: "40px Arial", fill: "#000"}); 
			greencheck = false;
		}

		if (numPadArray[2] == keyNum3 && greencheck == true)
		{
			green = game.add.sprite(667,629,'green','green');
			green.scale.setTo(.37,.32);
			keyText3 = game.add.text(675, 635, num3.keyCode, {font: "40px Arial", fill: "#000"}); 
			greencheck = false;
		}

		if (numPadArray[3] == keyNum3 && greencheck == true)
		{
			green = game.add.sprite(835,629,'green', 'green');
			green.scale.setTo(.37,.32);
			keyText4 = game.add.text(850, 635, num4.keyCode, {font: "40px Arial", fill: "#000"}); 
			greencheck = false;
		}

		
			//Red
		if (numPadArray[0] == keyNum0 && redcheck == true)
		{
			green = game.add.sprite(311.5,629,'green', 'red');
			green.scale.setTo(.37,.32);
			keyText1 = game.add.text(350, 635, num1.keyCode, {font: "40px Arial", fill: "#000"}); 
			redcheck = false;
		}
		if (numPadArray[1] == keyNum0 && redcheck == true)
		{
			green = game.add.sprite(488,629,'green', 'red');
			green.scale.setTo(.37,.32);
			keyText2 = game.add.text(500, 635, num2.keyCode, {font: "40px Arial", fill: "#000"}); 
			redcheck = false;
		}
		if (numPadArray[2] == keyNum0 && redcheck == true)
		{
			green = game.add.sprite(667,629,'green', 'red');
			green.scale.setTo(.37,.32);
			keyText3 = game.add.text(675, 635, num3.keyCode, {font: "40px Arial", fill: "#000"}); 
			redcheck = false;
		}
		if (numPadArray[3] == keyNum0 && redcheck == true)	
		{
			green = game.add.sprite(835,629,'green', 'red');
			green.scale.setTo(.37,.32);
			keyText4 = game.add.text(850, 635, num4.keyCode, {font: "40px Arial", fill: "#000"}); 
			redcheck = false;
		}
		
			//Gray
		if (numPadArray[0] == keyNum8 && graycheck == true)
		{
			green = game.add.sprite(311.5,629,'green','gray');
			green.scale.setTo(.37,.32);
			keyText1 = game.add.text(350, 635, num1.keyCode, {font: "40px Arial", fill: "#000"}); 
			graycheck = false;
		}
		if (numPadArray[1] == keyNum8 && graycheck == true)
		{
			green = game.add.sprite(488,629.,'green', 'gray');
			green.scale.setTo(.37,.32);
			keyText2 = game.add.text(500, 635, num2.keyCode, {font: "40px Arial", fill: "#000"}); 
			graycheck = false;
		}
		if (numPadArray[2] == keyNum8 && graycheck == true)
		{
			green = game.add.sprite(667,629.,'green', 'gray');
			green.scale.setTo(.37,.32);
			keyText3 = game.add.text(675, 635, num3.keyCode, {font: "40px Arial", fill: "#000"}); 
			graycheck = false;
		}
		if (numPadArray[3] == keyNum8 && graycheck == true)
		{
			green = game.add.sprite(835,629.,'green', 'gray');
			green.scale.setTo(.37,.32);
			keyText4 = game.add.text(850, 635, num4.keyCode, {font: "40px Arial", fill: "#000"}); 
			graycheck = false;
		}
			//Pink
			if (numPadArray[0] == keyNum6 && pinkcheck == true)
		{
			green = game.add.sprite(311.5,629,'green', 'pink');
			green.scale.setTo(.37,.32);
			keyText1 = game.add.text(350, 635, num1.keyCode, {font: "40px Arial", fill: "#000"}); 
			pinkcheck = false;
		}
		if (numPadArray[1] == keyNum6 && pinkcheck == true)
		{
			green = game.add.sprite(488,629,'green', 'pink');
			green.scale.setTo(.37,.32);
			keyText2 = game.add.text(500, 635, num2.keyCode, {font: "40px Arial", fill: "#000"}); 
			pinkcheck = false;
		}
		if (numPadArray[2] == keyNum6 && pinkcheck == true)
		{
			green = game.add.sprite(667,629,'green', 'pink');
			green.scale.setTo(.37,.32);
			keyText3 = game.add.text(675, 635, num3.keyCode, {font: "40px Arial", fill: "#000"}); 
			pinkcheck = false;
		}
		if (numPadArray[3] == keyNum6 && pinkcheck == true)
		{
			green = game.add.sprite(835,629,'green', 'pink');
			green.scale.setTo(.37,.32);
			keyText4 = game.add.text(850, 635, num4.keyCode, {font: "40px Arial", fill: "#000"}); 
			pinkcheck = false;
		}

		
		//Yellow
		if (numPadArray[0] == keyNum2 && yellowcheck == true)
		{
			green = game.add.sprite(311.5,629,'green','yellow');
			green.scale.setTo(.37,.32);
			keyText1 = game.add.text(350, 635, num1.keyCode, {font: "40px Arial", fill: "#000"}); 
			yellowcheck = false;
		}
		if (numPadArray[1] == keyNum2 && yellowcheck == true)
		{
			green = game.add.sprite(488,629,'green', 'yellow');
			green.scale.setTo(.37,.32);
			keyText2 = game.add.text(500, 635, num2.keyCode, {font: "40px Arial", fill: "#000"}); 
			yellowcheck = false;
		}
		if (numPadArray[2] == keyNum2 && yellowcheck == true)
		{
			green = game.add.sprite(667,629,'green', 'yellow');
			green.scale.setTo(.37,.32);
			keyText3 = game.add.text(675, 635, num3.keyCode, {font: "40px Arial", fill: "#000"}); 
			yellowcheck = false;
		}
		if (numPadArray[3] == keyNum2 && yellowcheck == true)
		{
			green= game.add.sprite(835,629,'green', 'yellow');
			green.scale.setTo(.37,.32);
			keyText4 = game.add.text(850, 635, num4.keyCode, {font: "40px Arial", fill: "#000"}); 
			yellowcheck = false;
		}
		//white
		if (numPadArray[0] == keyNum9 && whitecheck == true)
		{
			green = game.add.sprite(311.5,629,'green', 'white');
			green.scale.setTo(.37,.32);
			keyText1 = game.add.text(350, 635, num1.keyCode, {font: "40px Arial", fill: "#000"}); 
			whitecheck = false;
		}
		if (numPadArray[1] == keyNum9 && whitecheck == true)
		{
			green = game.add.sprite(488,629,'green','white');
			green.scale.setTo(.37,.32);
			keyText2 = game.add.text(500, 635, num2.keyCode, {font: "40px Arial", fill: "#000"}); 
			whitecheck = false;
		}
		if (numPadArray[2] == keyNum9 && whitecheck == true)
		{
			green = game.add.sprite(667,629,'green', 'white');
			green.scale.setTo(.37,.32);
			keyText3 = game.add.text(675, 635, num3.keyCode, {font: "40px Arial", fill: "#000"}); 
			whitecheck = false;
		}
		if (numPadArray[3] == keyNum9 && whitecheck == true)
		{
			green = game.add.sprite(835,629,'green', 'white');
			green.scale.setTo(.37,.32);
			keyText4 = game.add.text(850, 635, num4.keyCode, {font: "40px Arial", fill: "#000"}); 
			whitecheck = false;
		}
		
		//blue
		if (numPadArray[0] == keyNum4 && bluecheck == true)
		{
			green = game.add.sprite(311.5,629,'green','blue');
			green.scale.setTo(.37,.32);
			keyText1 = game.add.text(350, 635, num1.keyCode, {font: "40px Arial", fill: "#000"}); 
			bluecheck = false;
		}
		if (numPadArray[1] == keyNum4 && bluecheck == true)
		{
			green = game.add.sprite(488,629.,'green', 'blue');
			green.scale.setTo(.37,.32);
			keyText2 = game.add.text(500, 635, num2.keyCode, {font: "40px Arial", fill: "#000"}); 
			bluecheck = false;
		}
		if (numPadArray[2] == keyNum4 && bluecheck == true)
		{
			green = game.add.sprite(667,629.,'green','blue');
			green.scale.setTo(.37,.32);
			keyText3 = game.add.text(675, 635, num3.keyCode, {font: "40px Arial", fill: "#000"}); 
			bluecheck = false;
		}
		if (numPadArray[3] == keyNum4 && bluecheck == true)
		{
			green = game.add.sprite(835,629.,'green', 'blue');
			green.scale.setTo(.37,.32);
			keyText4 = game.add.text(850, 635, num4.keyCode, {font: "40px Arial", fill: "#000"}); 
			bluecheck = false;
		}
		//brown
		if (numPadArray[0] == keyNum7 && browncheck == true)
		{
			green = game.add.sprite(311.5,629,'green','brown');
			green.scale.setTo(.37,.32);
			keyText1 = game.add.text(350, 635, num1.keyCode, {font: "40px Arial", fill: "#000"}); 
			browncheck = false;
		}
		if (numPadArray[1] == keyNum7 && browncheck == true)
		{
			green = game.add.sprite(488,629.,'green', 'brown');
			green.scale.setTo(.37,.32);
			keyText2 = game.add.text(500, 635, num2.keyCode, {font: "40px Arial", fill: "#000"}); 
			browncheck = false;
		}
		if (numPadArray[2] == keyNum7 && browncheck == true)
		{
			green = game.add.sprite(667,629,'green', 'brown');
			green.scale.setTo(.37,.32);
			keyText3 = game.add.text(675, 635, num3.keyCode, {font: "40px Arial", fill: "#000"}); 
			browncheck = false;
		}
		if (numPadArray[3] == keyNum7 && browncheck == true)
		{
			green = game.add.sprite(835,629.,'green', 'brown');
			green.scale.setTo(.37,.32);
			keyText4 = game.add.text(850, 635, num4.keyCode, {font: "40px Arial", fill: "#000"}); 
			browncheck = false;
		}
		//purple
		if (numPadArray[0] == keyNum5 && purplecheck == true)
		{
			green = game.add.sprite(311.5,629,'green', 'purple');
			green.scale.setTo(.37,.32);
			keyText1 = game.add.text(350, 635, num1.keyCode, {font: "40px Arial", fill: "#000"}); 
			purplecheck = false;
		}
		if (numPadArray[1] == keyNum5 && purplecheck == true)
		{
			green = game.add.sprite(488,629,'green', 'purple');
			green.scale.setTo(.37,.32);
			keyText2 = game.add.text(500, 635, num2.keyCode, {font: "40px Arial", fill: "#000"}); 
			purplecheck = false;
		}
		if (numPadArray[2] == keyNum5 && purplecheck == true)
		{
			green = game.add.sprite(667,629,'green','purple');
			green.scale.setTo(.37,.32);
			keyText3 = game.add.text(675, 635, num3.keyCode, {font: "40px Arial", fill: "#000"}); 
			purplecheck = false;
		}
		if (numPadArray[3] == keyNum5 && purplecheck == true)
		{
			green = game.add.sprite(835,629,'green','purple');
			green.scale.setTo(.37,.32);
			keyText4 = game.add.text(850, 635, num4.keyCode, {font: "40px Arial", fill: "#000"}); 
			purplecheck = false;
		}
		//orange
			if (numPadArray[0] == keyNum1 && orangecheck == true)
		{
			green = game.add.sprite(311.5,629,'green', 'orange');
			green.scale.setTo(.37,.32);
			keyText1 = game.add.text(350, 635, num1.keyCode, {font: "40px Arial", fill: "#000"}); 
			orangecheck = false;
		}
		if (numPadArray[1] == keyNum1 && orangecheck == true)
		{
			green = game.add.sprite(488,629,'green','orange');
			green.scale.setTo(.37,.32);
			keyText2 = game.add.text(500, 635, num2.keyCode, {font: "40px Arial", fill: "#000"}); 
			orangecheck = false;
		}
		if (numPadArray[2] == keyNum1 && orangecheck == true)
		{
			green = game.add.sprite(667,629,'green', 'orange');
			green.scale.setTo(.37,.32);
			keyText3 = game.add.text(675, 635, num3.keyCode, {font: "40px Arial", fill: "#000"}); 
			orangecheck = false;
		}
		if (numPadArray[3] == keyNum1 && orangecheck == true)
		{
			green = game.add.sprite(835,629,'green' ,'orange');
			green.scale.setTo(.37,.32);
			keyText4 = game.add.text(850, 635, num4.keyCode, {font: "40px Arial", fill: "#000"}); 
			orangecheck = false;
		}
		
		//key presses for the mechanic of the game.		
		if ( game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_0)﻿ || game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_1) || game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_2) || game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_3)﻿﻿﻿
		|| game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_4﻿ ) || game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_5) || game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_6)﻿ || game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_7)﻿
		|| game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_8)﻿ || game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_9)﻿ )
		{
			check = true;
		}

		else
		{

			check = false;
		}
		
		//if the first number is down.
		if(num1.isDown == true){
			console.log('hit');
			//click.play();
			//beep.play();
			displayText(num1, displayNum1);
			//if the first and second is down
			if(num2.isDown == true) {
				console.log('hit');
				//click.play();
				//beep.play();
				displayText(num2, displayNum2);
				//if the first second and third is down
				if(num3.isDown == true) {
					console.log('hit');
					//click.play();
					//beep.play();
					displayText(num3, displayNum3);
					//if all numbers are down
					if(num4.isDown == true) {
						console.log('hit');
						//click.play();
						beep.play();
						displayText(num4, displayNum4);

						if (playCount == 1){
							score += 50;
						}

						else if (playCount == 2){
							score+=50;
						}

						else{
							score += 100;
						}

   						//scoreText.text = score + '% Diffused';
   						scoreText.text = score + '% Progressed';

   						//win condition
   						if (score >= 100)
   						{
   							game.state.start('WireCut');
   						}
   						game.paused = true;
   						game.paused = false;
   						game.time.events.add(Phaser.Timer.SECOND * 4, getNewCode, this);
					}

					else
						if (num1.isDown == false || num2.isDown == false || num3.isDown == false)
						{
							//checks if the inputs are false
							checker();
						}

						if (num5.isDown == true || num6.isDown == true || num7.isDown == true || num8.isDown == true || num9.isDown == true || num10.isDown == true)
							//checks if the inputs are false
							checker();
				}

				else
				{
					if (num1.isDown == false || num2.isDown == false)
					{
						//checks if the inputs are false
						checker();
					}

					if(num4.isDown == true || num5.isDown == true || num6.isDown == true || num7.isDown == true || num8.isDown == true || num9.isDown == true || num10.isDown == true)
						//checks if the inputs are false
						checker();

				}
			}
				
				else{
					if (num1.isDown == false)
					{
						//checks if the inputs are false
						checker();
					}

					if(num3.isDown == true || num4.isDown == true || num5.isDown == true || num6.isDown == true || num7.isDown == true || num8.isDown == true || num9.isDown == true || num10.isDown == true)
						//checks if the inputs are false
						checker();
				}
		
			
		} 
		else{
			if (check == true)
			{
				//check = false;
				checker();
			}
		}

	}
}

//function that randomizes the indexs in the array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // swap elements
  }
}

//function that checks for the input of the user in the sequences.
function checker()	{
	//new punish, instead of losing time, lost game instantly
	explosion.play();
    backgroundMusic.stop();
	game.state.start('GameOver');
	/*
	error.play();
	timeReduction = true;
	game.paused = true;
	game.paused = false;
	scoreText.text = score + '% Diffused';
	getNewCode();
	*/
}

//function that displays the UI bomb numbers on the screen.
function displayText(numCode, displayNum) {
	if(numCode.keyCode == 96) {
	displayNum.text = '0';
	} 
	if(numCode.keyCode == 97) {
	displayNum.text = '1';
	}
	if(numCode.keyCode == 98) {
	displayNum.text = '2';
	}
	if(numCode.keyCode == 99) {
	displayNum.text = '3';
	}
	if(numCode.keyCode == 100) {
	displayNum.text = '4';
	}
	if(numCode.keyCode == 101) {
	displayNum.text = '5';
	}
	if(numCode.keyCode == 102) {
	displayNum.text = '6';
	}
	if(numCode.keyCode == 103) {
	displayNum.text = '7';
	}
	if(numCode.keyCode == 104) {
	displayNum.text = '8';
	}
	if(numCode.keyCode == 105) {
	displayNum.text = '9';
	}
}
//function that updates the score counter
function updateCounter() {

    total++;

}

//function that grabs a new code for the mechanic whenever it is compeleted.
function getNewCode() {
	//game.paused = false;
		shuffle(numPadArray);
		num1 = numPadArray[0];
		num2 = numPadArray[1];
		num3 = numPadArray[2];
		num4 = numPadArray[3];
		num5 = numPadArray[4];
		num6 = numPadArray[5];
		num7 = numPadArray[6];
		num8 = numPadArray[7];
		num9 = numPadArray[8];
		num10 = numPadArray[9];

		//resets the UI variables
		greencheck = true;
		redcheck = true;
		graycheck = true;
		pinkcheck = true;
		yellowcheck = true;
		whitecheck = true;
		bluecheck = true;
		browncheck = true;
		purplecheck = true;
		orangecheck = true;


		//score += 15;

}

//functions for the warning sprite
function checkwarning()
{
	warningcheck = false;
}

//intitalize wire-cutting variables
var test, testbomb;
var speed;
var startConnect = false;
var bombTray, yellow, red, blue, green;
var cutWireArray, cut1, cut2, cut3, cut4;
var connectLeft1, connectRight1;
var cutInstructions;
var check, wirecheck1, wirecheck2, wirecheck3, wirecheck4;
var connect1 = true, connect2 = true, connect3 = true, connect4 = true, allConnect = true;
var connect = true;
var shuffleOnce = true;

var WireCut = function(game) {}; 
WireCut.prototype = {
	init: function() {
		connect1 = true, connect2 = true, connect3 = true, connect4 = true, allConnect = true;
		shuffleOnce = true;
		startConnect = false;
		warningcheck = false;
	},

	preload: function() {

	},

	create: function() {
		//add background
		var disarmbackground = game.add.sprite(0,0,'Disarmbackground');
		disarmbackground.height = game.height;
		disarmbackground.width = game.width;

		//create bombTray Sprite
		bombTray = game.add.sprite(-400,-225,'BombTray');
		bombTray.scale.setTo(1.25,1.25);

		//create yellow wire sprite
		yellow = game.add.sprite(850,210, 'wires', 'Y');
		yellow.name = 'Yellow';
		connect = true;
		yellow.anchor.setTo(0.5,0.5);
		yellow.scale.setTo(1.25,1);
		//yellow.inputEnabled = true;
		//yellow.events.onInputDown.add(WireListener, {'check1': 1}, this);

		//yellow.input.enableDrag(true);
		//create red wire sprite
		red = game.add.sprite(845,670, 'wires', 'R');
		red.name = 'Red';
		red.anchor.setTo(0.5,0.5);
		red.inputEnabled = true;
		red.scale.setTo(1.25,1);
		//red.events.onInputDown.add(WireListener, {'check1': 2}, this);
		//red.input.enableDrag(true);

		//create blue wire sprite
		blue = game.add.sprite(850, 500, 'wires', 'B');
		blue.name = 'Blue';
		blue.anchor.setTo(0.5,0.5);
		blue.scale.setTo(1.25,1);
		blue.inputEnabled = true;
		//blue.events.onInputDown.add(WireListener, check3, this);

		//create a green wire sprite
		green = game.add.sprite(850, 350, 'wires', 'G');
		green.name = 'Green';
		green.anchor.setTo(0.5,0.5);
		green.inputEnabled = true;
		green.scale.setTo(1.25,1);
		//green.events.onInputDown.add(WireListener, check4, this);
		//green.input.enableDrag(true);

		//add the wires to the array and mix them around
		cutWireArray = [yellow, red, blue, green];
		shuffle(cutWireArray);

		//assign random cut instructions
		cut1 = cutWireArray[0];
		cut2 = cutWireArray[1];
		cut3 = cutWireArray[2];
		cut4 = cutWireArray[3];
		console.log(cut1.name);
		//give cut instructions
		cutInstructions = game.add.text(130, 165, "Cut the \n" + cut1.name + " Wire", {font: "40px Arial", fill: "#000"});
		
		//Assign the first instruction for the wire
		if(cut1 == yellow) {
			console.log('hit yellow');
			yellow.inputEnabled = true;
			yellow.events.onInputDown.add(WireListener, {'check1': 1}, this);
		} else if(cut1 == red) {
			console.log('hit red');
			red.inputEnabled = true;
			red.events.onInputDown.add(WireListener, {'check1': 2}, this);
		} else if(cut1 == blue) {
			console.log('hit blue');
			blue.inputEnabled = true;
			blue.events.onInputDown.add(WireListener, {'check1': 3}, this);
		} else if(cut1 == green) {
			console.log('hit green');
			green.inputEnabled = true;
			green.events.onInputDown.add(WireListener, {'check1': 4}, this);
		}
	
		//Assign the second instruction for the wire
		if(cut2 == yellow) {
			console.log('hit yellow');
			yellow.inputEnabled = true;
			yellow.events.onInputDown.add(WireListener, {'check2': 1}, this);
		} else if(cut2 == red) {
			console.log('hit red');
			red.inputEnabled = true;
			red.events.onInputDown.add(WireListener, {'check2': 2}, this);
		} else if(cut2 == blue) {
			console.log('hit blue');
			blue.inputEnabled = true;
			blue.events.onInputDown.add(WireListener, {'check2': 3}, this);
		} else if(cut2 == green) {
			console.log('hit green');
			green.inputEnabled = true;
			green.events.onInputDown.add(WireListener, {'check2': 4}, this);
		}
		
		//Assign the third instruction for the wire
		if(cut3 == yellow) {
			console.log('hit yellow');
			yellow.inputEnabled = true;
			yellow.events.onInputDown.add(WireListener, {'check3': 1}, this);
		} else if(cut3 == red) {
			console.log('hit red');
			red.inputEnabled = true;
			red.events.onInputDown.add(WireListener, {'check3': 2}, this);
		} else if(cut3 == blue) {
			console.log('hit blue');
			blue.inputEnabled = true;
			blue.events.onInputDown.add(WireListener, {'check3': 3}, this);
		} else if(cut3 == green) {
			console.log('hit green');
			green.inputEnabled = true;
			green.events.onInputDown.add(WireListener, {'check3': 4}, this);
		}

		//Assign the last instruction for the wire
		if(cut4 == yellow) {
			console.log('hit yellow');
			yellow.inputEnabled = true;
			yellow.events.onInputDown.add(WireListener, {'check4': 1}, this);
		} else if(cut4 == red) {
			console.log('hit red');
			red.inputEnabled = true;
			red.events.onInputDown.add(WireListener, {'check4': 2}, this);
		} else if(cut4 == blue) {
			console.log('hit blue');
			blue.inputEnabled = true;
			blue.events.onInputDown.add(WireListener, {'check4': 3}, this);
		} else if(cut4 == green) {
			console.log('hit green');
			green.inputEnabled = true;
			green.events.onInputDown.add(WireListener, {'check4': 4}, this);
		}

		//time updates for the game UI timer
		var me = this;
		me.startTime = new Date();
		//me.totalTime = timerTracker;
		me.totalTime = 30;
		me.timeElapsed = 0;
		me.createTimer();
		me.gameTimer = game.time.events.loop(100, function(){
		me.updateTimer();
		});


		

	},

	//function for the timer
	createTimer: function(){

        var me = this;

        me.timeLabel = me.game.add.text(me.game.world.centerX-5, 0, "00:00", {font: "75px Arial", fill: "#000"}); 
        me.timeLabel.anchor.setTo(0.5, 0);
        me.timeLabel.align = 'center';

    },
    //function to update the timer
   updateTimer: function(){

        var me = this;

        var currentTime = new Date();
        var timeDifference = me.startTime.getTime() - currentTime.getTime();

        //Time elapsed in seconds
        me.timeElapsed = Math.abs(timeDifference / 1000);

        //Time remaining in seconds
        var timeRemaining = me.totalTime - me.timeElapsed; 

        //Convert seconds into minutes and seconds
        var minutes = Math.floor(timeRemaining / 60);
        var seconds = Math.floor(timeRemaining) - (60 * minutes);

        //Display minutes, add a 0 to the start if less than 10
        var result = (minutes < 10) ? "0" + minutes : minutes; 

        //Display seconds, add a 0 to the start if less than 10
        result += (seconds < 10) ? ":0" + seconds : ":" + seconds; 

        me.timeLabel.text = result;

        //reduce time if character messes up on mechanic 1;

        if (timeReduction == true)
        {
        	//timeRemaining -= 5;
        	me.totalTime -=5;

        	timeReduction = false;
        }

        if(me.timeElapsed >= me.totalTime){
        	explosion.play();
        	backgroundMusic.stop();
    	game.state.start('GameOver');
		}

		if (timeRemaining < 60 && warningcheck == false )
        {
        	warning = game.add.sprite(510, 55, 'warning');
        	warning.scale.setTo(0.08,0.08);
        	warningcheck = true;
        }

		
		//console.log(timeRemaining);
		//timerTracker = me.totalTime;

    },

	update: function() {

		//if all the wires are not connected shuffle the array once
		if(allConnect == false){
			if(shuffleOnce == true) {
				shuffleOnce = false;
				shuffle(leftArray);
				shuffle(rightArray);
			}
			cutInstructions.fontSize = 20;
			cutInstructions.text = "Connect the\n" + leftArray[0].name + "\nto the \n" + rightArray[0].name;
			startConnect = true;
			
			//cut the first to four wire in order.
			if(game.physics.arcade.collide(leftArray[0], rightArray[0])) {
				cutInstructions.text = "Connect the\n" + leftArray[1].name + "\nto the \n" + rightArray[1].name;
				if(game.physics.arcade.collide(leftArray[1], rightArray[1])) {
					cutInstructions.text = "Connect the\n" + leftArray[2].name + "\nto the \n" + rightArray[2].name;
					if(game.physics.arcade.collide(leftArray[2], rightArray[2])) {
						cutInstructions.text = "Connect the\n" + leftArray[3].name + "\nto the \n" + rightArray[3].name;
							if(game.physics.arcade.collide(leftArray[3], rightArray[3])) {
								backgroundMusic.stop();
								game.state.start('Play');
							}
					}
				}
			}
			

		}

	
	},


}

var yellowLeft, yellowRight, redLeft, redRight, blueLeft, blueRight, greenLeft, greenRight;
var leftArray = [], rightArray = [];
//listen function that checks when the wire is clicked on mouse input
function WireListener() {		
	wirecheck1 = this.check1;
	wirecheck2 = this.check2;
	wirecheck3 = this.check3;
	wirecheck4 = this.check4;

/*Checks for the wires that cut in order from wirecheck1 to wirecheck4, checks which wire sprite was click
and assigns it that color value wire to the array from Left wires and Right Wires*/
if(connect1 == true) {
	if(wirecheck1 == 1) {
		cutInstructions.text = "Cut the \n" + cut2.name + " Wire";
		console.log("this is  yellow check ");
		game.debug.body(yellow);
		yellow.destroy();
		yellowLeft = game.add.sprite(620,200, 'wires', 'Y(L)');
		yellowLeft.name = "Left Yellow Wire";
		yellowLeft.anchor.setTo(0.5,0.5);
		yellowLeft.inputEnabled = true;
		yellowLeft.input.enableDrag(true);
		game.physics.arcade.enable(yellowLeft);
		leftArray[0] = yellowLeft;

		yellowRight = game.add.sprite(1050, 190, 'wires', 'Y(R)');
		yellowRight.name = "Right Yellow Wire";
		yellowRight.anchor.setTo(0.5,0.5);
		yellowRight.inputEnabled = true;
		yellowRight.input.enableDrag(true);
		game.physics.arcade.enable(yellowRight);
		rightArray[0] = yellowRight;
		connect1 = false;
		wirecheck1++;
	} else if(wirecheck1 == 2) {
		cutInstructions.text = "Cut the \n" + cut2.name + " Wire";
		console.log("this is  red check ");
		game.debug.body(red);
		red.destroy();
		redLeft = game.add.sprite(620, 710, 'wires', 'R(L)');
		redLeft.name = "Left Red Wire";
		redLeft.anchor.setTo(0.5,0.5);
		redLeft.inputEnabled = true;
		redLeft.input.enableDrag(true);
		game.physics.arcade.enable(redLeft);
		leftArray[0] = redLeft;

		redRight = game.add.sprite(1060, 700, 'wires', 'R(R)');
		redRight.name = "Right Red Wire";
		redRight.anchor.setTo(0.5,0.5);
		redRight.inputEnabled = true;
		redRight.input.enableDrag(true);
		game.physics.arcade.enable(redRight);
		rightArray[0] = redRight;
		connect1 = false;
		wirecheck1++;
	} else if(wirecheck1 == 3) {
		cutInstructions.text = "Cut the \n" + cut2.name + " Wire";
		console.log('this is blue check');
		blue.destroy();
		blueLeft = game.add.sprite(620, 550, 'wires', 'B(L)');
		blueLeft.name = "Left Blue Wire";
		blueLeft.anchor.setTo(0.5,0.5);
		blueLeft.inputEnabled = true;
		blueLeft.input.enableDrag(true);
		game.physics.arcade.enable(blueLeft);
		leftArray[0] = blueLeft;

		blueRight = game.add.sprite(1050, 475, 'wires', 'B(R)');
		blueRight.name = "Right Blue Wire";
		blueRight.anchor.setTo(0.5,0.5);
		blueRight.inputEnabled = true;
		blueRight.input.enableDrag(true);
		game.physics.arcade.enable(blueRight);
		rightArray[0] = blueRight;
		connect1 = false;
		wirecheck1++

	} else if(wirecheck1 == 4) {
		cutInstructions.text = "Cut the \n" + cut2.name + " Wire";
		console.log('this is green check');
		green.destroy();
		greenLeft = game.add.sprite(620, 400, 'wires', 'G(L)');
		greenLeft.name = "Left Green Wire";
		greenLeft.anchor.setTo(0.5,0.5);
		greenLeft.inputEnabled = true;
		greenLeft.input.enableDrag(true);
		game.physics.arcade.enable(greenLeft);
		leftArray[0] = greenLeft;

		greenRight = game.add.sprite(1050, 300, 'wires', 'G(R)');
		greenRight.name = "Right Green Wire";
		greenRight.anchor.setTo(0.5,0.5);
		greenRight.inputEnabled = true;
		greenRight.input.enableDrag(true);
		game.physics.arcade.enable(greenRight);
		rightArray[0] = greenRight;
		connect1 = false;
		wirecheck1++
	}
}

if(connect1 == false){
	if(wirecheck2 == 1) {
		console.log("this is  yellow check ");
		cutInstructions.text = "Cut the \n" + cut3.name + " Wire";
		game.debug.body(yellow);
		yellow.destroy();
		//spawn left cut yellow wire
		yellowLeft = game.add.sprite(620,200, 'wires', 'Y(L)');
		yellowLeft.name = "Left Yellow Wire";
		yellowLeft.anchor.setTo(0.5,0.5);
		yellowLeft.inputEnabled = true;
		yellowLeft.input.enableDrag(true);
		game.physics.arcade.enable(yellowLeft);
		leftArray[1] = yellowLeft;
		//spawn right cut yellow wire
		yellowRight = game.add.sprite(1050, 190, 'wires', 'Y(R)');
		yellowRight.name = "Right Yellow Wire";
		yellowRight.anchor.setTo(0.5,0.5);
		yellowRight.inputEnabled = true;
		yellowRight.input.enableDrag(true);
		game.physics.arcade.enable(yellowRight);
		rightArray[1] = yellowRight;
		wirecheck2++;
		connect2 = false;
	} else if(wirecheck2 == 2) {
		console.log("this is  red check ");
		cutInstructions.text = "Cut the \n" + cut3.name + " Wire";
		red.destroy();
		redLeft = game.add.sprite(620, 710, 'wires', 'R(L)');
		redLeft.name = "Left Red Wire";
		redLeft.anchor.setTo(0.5,0.5);
		redLeft.inputEnabled = true;
		redLeft.input.enableDrag(true);
		game.physics.arcade.enable(redLeft);
		leftArray[1] = redLeft;

		redRight = game.add.sprite(1060, 700, 'wires', 'R(R)');
		redRight.name = "Right Red Wire";
		redRight.anchor.setTo(0.5,0.5);
		redRight.inputEnabled = true;
		redRight.input.enableDrag(true);
		game.physics.arcade.enable(redRight);
		rightArray[1] = redRight;
		wirecheck2++;
		connect2 = false;
	} else if(wirecheck2 == 3) {
		console.log('this is blue check');
		cutInstructions.text = "Cut the \n" + cut3.name + " Wire";
		blue.destroy();
		blueLeft = game.add.sprite(620, 550, 'wires', 'B(L)');
		blueLeft.name = "Left Blue Wire";
		blueLeft.anchor.setTo(0.5,0.5);
		blueLeft.inputEnabled = true;
		blueLeft.input.enableDrag(true);
		game.physics.arcade.enable(blueLeft);
		leftArray[1] = blueLeft;

		blueRight = game.add.sprite(1050, 475, 'wires', 'B(R)');
		blueRight.name = "Right Blue Wire";
		blueRight.anchor.setTo(0.5,0.5);
		blueRight.inputEnabled = true;
		blueRight.input.enableDrag(true);
		game.physics.arcade.enable(blueRight);
		rightArray[1] = blueRight;
		wirecheck2++;
		connect2 = false;
	} else if(wirecheck2 == 4) {
		console.log('this is green check');
		cutInstructions.text = "Cut the \n" + cut3.name + " Wire";
		green.destroy();
		greenLeft = game.add.sprite(620, 400, 'wires', 'G(L)');
		greenLeft.name = "Left Green Wire";
		greenLeft.anchor.setTo(0.5,0.5);
		greenLeft.inputEnabled = true;
		greenLeft.input.enableDrag(true);
		game.physics.arcade.enable(greenLeft);
		leftArray[1] = greenLeft;

		greenRight = game.add.sprite(1050, 300, 'wires', 'G(R)');
		greenRight.name = "Right Green Wire";
		greenRight.anchor.setTo(0.5,0.5);
		greenRight.inputEnabled = true;
		greenRight.input.enableDrag(true);
		game.physics.arcade.enable(greenRight);
		rightArray[1] = greenRight;
		wirecheck2++;
		connect2 = false;
	}
}

if(connect2 == false) {
	if(wirecheck3 == 1) {
		console.log("this is  yellow check ");
		cutInstructions.text = "Cut the \n" + cut4.name + " Wire";
		game.debug.body(yellow);
		yellow.destroy();
		//spawn left cut yellow wire
		yellowLeft = game.add.sprite(620,200, 'wires', 'Y(L)');
		yellowLeft.name = "Left Yellow Wire";
		yellowLeft.anchor.setTo(0.5,0.5);
		yellowLeft.inputEnabled = true;
		yellowLeft.input.enableDrag(true);
		game.physics.arcade.enable(yellowLeft);
		leftArray[2] = yellowLeft;
		//spawn right cut yellow wire
		yellowRight = game.add.sprite(1050, 190, 'wires', 'Y(R)');
		yellowRight.name = "Right Yellow Wire";
		yellowRight.anchor.setTo(0.5,0.5);
		yellowRight.inputEnabled = true;
		yellowRight.input.enableDrag(true);
		game.physics.arcade.enable(yellowRight);
		rightArray[2] = yellowRight;
		wirecheck3++;
		connect3 = false;
	} else if(wirecheck3 == 2) {
		console.log("this is  red check ");
		cutInstructions.text = "Cut the \n" + cut4.name + " Wire";
		game.debug.body(red);
		red.destroy();
		redLeft = game.add.sprite(620, 710, 'wires', 'R(L)');
		redLeft.name = "Left Red Wire";
		redLeft.anchor.setTo(0.5,0.5);
		redLeft.inputEnabled = true;
		redLeft.input.enableDrag(true);
		game.physics.arcade.enable(redLeft);
		leftArray[2] = redLeft;

		redRight = game.add.sprite(1060, 700, 'wires', 'R(R)');
		redRight.name = "Right Red Wire";
		redRight.anchor.setTo(0.5,0.5);
		redRight.inputEnabled = true;
		redRight.input.enableDrag(true);
		game.physics.arcade.enable(redRight);
		rightArray[2] = redRight;
		wirecheck3++;
		connect3 = false;
	} else if(wirecheck3 == 3) {
		console.log('this is blue check');
		cutInstructions.text = "Cut the \n" + cut4.name + " Wire";
		blue.destroy();
		blueLeft = game.add.sprite(620, 550, 'wires', 'B(L)');
		blueLeft.name = "Left Blue Wire";
		blueLeft.anchor.setTo(0.5,0.5);
		blueLeft.inputEnabled = true;
		blueLeft.input.enableDrag(true);
		game.physics.arcade.enable(blueLeft);
		leftArray[2] = blueLeft;

		blueRight = game.add.sprite(1050, 475, 'wires', 'B(R)');
		blueRight.name = "Right Blue Wire";
		blueRight.anchor.setTo(0.5,0.5);
		blueRight.inputEnabled = true;
		blueRight.input.enableDrag(true);
		game.physics.arcade.enable(blueRight);
		rightArray[2] = blueRight;
		wirecheck3++;
		connect3 = false;

	} else if(wirecheck3 == 4) {
		console.log('this is green check');
		cutInstructions.text = "Cut the \n" + cut4.name + " Wire";
		green.destroy();
		greenLeft = game.add.sprite(620, 400, 'wires', 'G(L)');
		greenLeft.name = "Left Green Wire";
		greenLeft.anchor.setTo(0.5,0.5);
		greenLeft.inputEnabled = true;
		greenLeft.input.enableDrag(true);
		game.physics.arcade.enable(greenLeft);
		leftArray[2] = greenLeft;

		greenRight = game.add.sprite(1050, 300, 'wires', 'G(R)');
		greenRight.name = "Right Green Wire";
		greenRight.anchor.setTo(0.5,0.5);
		greenRight.inputEnabled = true;
		greenRight.input.enableDrag(true);
		game.physics.arcade.enable(greenRight);
		rightArray[2] = greenRight;
		wirecheck3++;
		connect3 = false;
	}
}

if(connect3 == false) {
	if(wirecheck4 == 1) {
		console.log("this is  yellow check ");
		game.debug.body(yellow);
		yellow.destroy();
		//spawn left cut yellow wire
		yellowLeft = game.add.sprite(620,200, 'wires', 'Y(L)');
		yellowLeft.name = "Left Yellow Wire";
		yellowLeft.anchor.setTo(0.5,0.5);
		yellowLeft.inputEnabled = true;
		yellowLeft.input.enableDrag(true);
		game.physics.arcade.enable(yellowLeft);
		leftArray[3] = yellowLeft;

		//spawn right cut yellow wire
		yellowRight = game.add.sprite(1050, 190, 'wires', 'Y(R)');
		yellowRight.name = "Right Yellow Wire";
		yellowRight.anchor.setTo(0.5,0.5);
		yellowRight.inputEnabled = true;
		yellowRight.input.enableDrag(true);
		game.physics.arcade.enable(yellowRight);
		rightArray[3] = yellowRight;
		allConnect = false;
		wirecheck4++;
	} else if(wirecheck4 == 2) {
		console.log("this is  red check ");
		game.debug.body(red);
		red.destroy();
		redLeft = game.add.sprite(620, 710, 'wires', 'R(L)');
		redLeft.name = "Left Red Wire";
		redLeft.anchor.setTo(0.5,0.5);
		redLeft.inputEnabled = true;
		redLeft.input.enableDrag(true);
		game.physics.arcade.enable(redLeft);
		leftArray[3] = redLeft;

		redRight = game.add.sprite(1060, 700, 'wires', 'R(R)');
		redRight.name = "Right Red Wire";
		redRight.anchor.setTo(0.5,0.5);
		redRight.inputEnabled = true;
		redRight.input.enableDrag(true);
		game.physics.arcade.enable(redRight);
		rightArray[3] = redRight;
		allConnect = false;
		wirecheck4++;
	} else if(wirecheck4 == 3) {
		console.log('this is blue check');
		blue.destroy();
		blueLeft = game.add.sprite(620, 550, 'wires', 'B(L)');
		blueLeft.name = "Left Blue Wire";
		blueLeft.anchor.setTo(0.5,0.5);
		blueLeft.inputEnabled = true;
		blueLeft.input.enableDrag(true);
		game.physics.arcade.enable(blueLeft);
		leftArray[3] = blueLeft;

		blueRight = game.add.sprite(1050, 475, 'wires', 'B(R)');
		blueRight.name = "Right Blue Wire";
		blueRight.anchor.setTo(0.5,0.5);
		blueRight.inputEnabled = true;
		blueRight.input.enableDrag(true);
		game.physics.arcade.enable(blueRight);
		rightArray[3] = blueRight;
		allConnect = false;
		wirecheck4++;
	} else if(wirecheck4 == 4) {
		console.log('this is green check');
		green.destroy();
		greenLeft = game.add.sprite(620, 400, 'wires', 'G(L)');
		greenLeft.name = "Left Green Wire";
		greenLeft.anchor.setTo(0.5,0.5);
		greenLeft.inputEnabled = true;
		greenLeft.input.enableDrag(true);
		game.physics.arcade.enable(greenLeft);
		leftArray[3] = greenLeft;

		greenRight = game.add.sprite(1050, 300, 'wires', 'G(R)');
		greenRight.name = "Right Green Wire";
		greenRight.anchor.setTo(0.5,0.5);
		greenRight.inputEnabled = true;
		greenRight.input.enableDrag(true);
		game.physics.arcade.enable(greenRight);
		rightArray[3] = greenRight;
		allConnect = false;
		wirecheck4++;
	}


}
	
}

//game state for GameOver
var GameOver = function(game) {};
GameOver.prototype = {
	preload: function() {
		game.load.image('GameOverScreen', 'assets/img/GameOverScreen.png')
	},

	create: function() {
		//playCount = 0;
		game.add.image(0,0, 'GameOverScreen');
		menuText = game.add.text(200, 750, 'YOU HAVE DIED!!! Press Spacebar to play again', { fontSize: '32px', fill: '#FFF' });
			
	},

	update: function() {
		//Press spacebar to restart
			if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			playCount = 0;
      		game.state.start('Runner');

		}
	}
}

//game win state
var GameWin = function(game) {};
GameWin.prototype = {
	preload: function(){
		game.load.image('WinScreen', 'assets/img/WinScreen.png');
	},

	create: function(){
		backgroundMusic.stop();
		cheer = game.add.audio('cheer');
		cheer.play();
		game.add.image(0,0, 'WinScreen');
		var timeText = game.add.text(400, 215, 'With ' + timerTracker2 + ' Seconds Left!', { fontSize: '40px', fill: '#000' });
		menuText = game.add.text(10, 720, 'You have defused the bomb ' + '                                Press Spacebar to play again', { fontSize: '32px', fill: '#FFF' });
	},

	update: function(){
		//Press spacebar to restart the game.
			if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
				playCount = 0;
      		game.state.start('Play');
	}
	}
}

var Runner = function(game) {};
Runner.prototype = {
	preload: function(){
		game.load.image('Disarmbackground2', 'assets/img/DisarmBackground.png');
		game.load.atlas('BombMan2', 'assets/img/BombMan.png', 'assets/img/BombMan.json'); 
	},

	create: function(){
		//background
		var Disarmbackground2 = game.add.tileSprite(0,0, 3432, 2514, 'Disarmbackground2');
		//Disarmbackground2.scale(game.width/3432/game.height/2514);
		Disarmbackground2.scale.x = 0.34965035;
		Disarmbackground2.scale.y = 0.31821798;
		Disarmbackground2.autoScroll(-400,0);

		//place our dude
		bombMan2 = game.add.sprite(game.world.centerX-50, 250, 'BombMan2', 'sprite2');
		bombMan2.scale.setTo(.13,.13);
		bombMan2.animations.add('sweat', [1,2,3], 10, true);

		//player physics
		game.physics.arcade.enable(bombMan2);
		bombMan2.body.bounce.y = 0.2;
   		bombMan2.body.gravity.y = 1250;
   		bombMan2.body.collideWorldBounds = true;

   		//player movement
   		cursors = game.input.keyboard.createCursorKeys();

   		//cop car
   		copCar2 = game.add.sprite(1000,575, 'copCar', 'PoliceCar1');
		copCar2.scale.setTo(0.25, 0.25);
		game.physics.arcade.enable(copCar2);
		copCar2.body.velocity.x = -250;
		copCar2.animations.add('copDrive', [0,1,2], 10, true);

		//van
		//creating news van
		van2 = game.add.sprite(20,425, 'van', 'NewsVan1');
		van2.scale.setTo(-0.20, 0.20);
		game.physics.arcade.enable(van2);
		van2.body.velocity.x = -250;

		//chopper
		chopper2 = game.add.sprite(1300,50, 'chopper', 'Chopper1');
		chopper2.scale.setTo(0.08,0.08);
		this.physics.arcade.enable(chopper2);
		chopper2.enableBody = true;
		chopper2.animations.add('chopperFly', [0,1], 5, true);
		chopper2.body.velocity.x = -300;

		//timer
		var me = this;
		me.startTime = new Date();
		me.totalTime = 20;
		me.timeElapsed = 0;
		me.createTimer();
		me.gameTimer = game.time.events.loop(100, function(){
		me.updateTimer();
		});

	},

		//function for the timer
	createTimer: function(){

		
        var me = this;

        //UI for the timer.
        me.timeLabel = me.game.add.text(me.game.world.centerX-5, 0, "00:00", {font: "75px Arial", fill: "#000"}); 
        me.timeLabel.anchor.setTo(0.5, 0);
        me.timeLabel.align = 'center';

    },
    //function to update the timer
   updateTimer: function(){

        var me = this;

        var currentTime = new Date();
        var timeDifference = me.startTime.getTime() - currentTime.getTime();

        //Time elapsed in seconds
        me.timeElapsed = Math.abs(timeDifference / 1000);

        //Time remaining in seconds
         timeRemaining = me.totalTime - me.timeElapsed; 

        //Convert seconds into minutes and seconds
        var minutes = Math.floor(timeRemaining / 60);
        var seconds = Math.floor(timeRemaining) - (60 * minutes);

        //Display minutes, add a 0 to the start if less than 10
        var result = (minutes < 10) ? "0" + minutes : minutes; 

        //Display seconds, add a 0 to the start if less than 10
        result += (seconds < 10) ? ":0" + seconds : ":" + seconds; 

        me.timeLabel.text = result;

        //reduce time if character messes up on mechanic 1;

        if(me.timeElapsed >= me.totalTime){
        	
    	game.state.start('Play');
		}
		//console.log(timeRemaining);
		timerTracker = timeRemaining;
		//console.log(timerTracker);

		timerTracker2 = timeRemaining;

		
    },

	update: function(){
		//play animation
		bombMan2.animations.play('sweat');
		chopper2.animations.play('chopperFly');

		//reset velocity
		bombMan2.body.velocity.x = 0;

		//collisions
		game.physics.arcade.overlap(bombMan2, copCar2, this.copCar2collide,null,this);
		game.physics.arcade.overlap(bombMan2, van2, this.van2collide,null,this);
		game.physics.arcade.overlap(bombMan2, chopper2, this.chopper2collide,null,this);



		//wrap around world
		 if (copCar2.body.x < -300){
        copCar2.body.x = Math.random() *200 +1220;
    }

    	if (van2.body.x < -300){
    		van2.body.x = Math.random() * 300 + 1300;
    	}

    	if (chopper2.body.x < -300){
    		chopper2.body.x = Math.random() * 400 + 1400;
    	}

		//player movements
    if (cursors.left.isDown){
        bombMan2.body.velocity.x = -300;
    }

    else if (cursors.right.isDown){
        //  Move right
        bombMan2.body.velocity.x = 300;
    }

  
    
    //  Checks if player is grounded. If so, allows player to jump
    if (cursors.up.isDown){
        bombMan2.body.velocity.y = -500;
        
    }
	},

	copCar2collide: function (bombMan2, copCar2){
	//kill copcar
	copCar2.kill();
	game.state.start('GameOver');
    
},

van2collide: function (bombMan2, van2){
	//kill van
	van2.kill();
	game.state.start('GameOver');
    
},

chopper2collide: function(bombMan2, chopper2){
	//kill chopper
	chopper2.kill();
	game.state.start('GameOver');
}
}

//Game States
game.state.add('MainMenu', MainMenu);
game.state.add('Play', Play);
game.state.add('WireCut', WireCut);
game.state.add('GameOver', GameOver);
game.state.add('GameWin', GameWin);
game.state.add('Runner', Runner);
game.state.start('MainMenu');