angular.module('starter.game', [])

.controller('GameGoMarketCtrl', function($scope) {
	/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * {object} = e({object},defualt,down,function(){}) 0<- 버튼을 클릭하면 이벤트가 발생한다.
 */
/////////////////////////////////////////////////////////////////////////////////////////////
	var width = window.innerWidth // 윈도우에 가로 길이를 가져옵니다.
	var height = window.innerHeight // 윈도우에 세로 길이를 가져옵니다.
/////////////////////////////////////////////////////////////////////////////////////////////
	var stage = new PIXI.Stage(0xffffff) // 기본 프레임 // 배경색
	var renderer = PIXI.autoDetectRenderer(width,height) // 자동으로 body에 canvas를 때려 박는다.
	$('#game-detail')[0].appendChild(renderer.view) // 때려 박기...
/////////////////////////////////////////////////////////////////////////////////////////////
	var bup = PIXI.Texture.fromImage('img/game/b1.png')
	var bdown = PIXI.Texture.fromImage('img/game/b2.png')
	var button = new PIXI.Sprite(bup);
	var color = "#" + parseInt(Math.random()*0xffffff).toString(16);
	var text = new PIXI.Text("null",{ font: "bold 200px Arial", fill:color, align: "center"});
/////////////////////////////////////////////////////////////////////////////////////////////
	var point = ['시장','학교','목욕탕','지하철','노래방'];
	var time = 0;
/////////////////////////////////////////////////////////////////////////////////////////////
	init() // 초기화 실행
/////////////////////////////////////////////////////////////////////////////////////////////
function init() { // 초기화 험슈슈 입니다.
	state = 1; // 시작했습니다.

	var keyword = point[parseInt(Math.random() * point.length)];
	var toEnglish = function(keyword) {
		var map = {
			'시장': 'market',
			'학교': 'school',
			'목욕탕': 'bath',
			'지하철': 'subway',
			'노래방': 'singingroom'
		};
		return map[keyword];
	};
	var bg = (keyword!='지하철') ? PIXI.Sprite.fromImage('img/game/Market/'+toEnglish(keyword) + '.jpg') : PIXI.Sprite.fromImage('img/game/Market/' +toEnglish(keyword) + '.png');
	stage.addChild(bg)
	bg.position.x = width/2
	bg.position.y = height/2
	bg.scale.x = 2
	bg.scale.y = 2
	bg.anchor.x = 0.5
	bg.anchor.y = 0.5
	bg.visible = false;

	stage.addChild(button)
	button.position.x = width/2
	button.position.y = height/2
	button = e(button,bup,bdown,function() {
		setTimeout(function() {
		state = 2
		text.visible = 1},400)
		button.visible = false;
		bg.visible = true;
	});

	stage.addChild(text);
	text.setText(keyword + "에 가면~")
	text.anchor.x = 0.5;
	text.anchor.y = 0.5;
	text.position.x = width/2;
	text.position.y = height/2;
	text.visible = 0;

	run() // Thread를 시작합니닷!
}

function update() { // 업데이트! Thread를 통해 지속적인 업데이트를 진행합니다.
	switch(state) {
		case 0 :
		// 기초 업데이트 but 사실상 실행되지 않음!
		 	break;
		case 1 :
			break;
		case 2 :
			time++
			text.rotation = Math.sin(time/10)/3;
			break;
		case 3 :
			break;
		case 4 :
			break;
		case 5 :
			break;
	}
}

	function run() {
		requestAnimFrame(run)
		update()
		renderer.render(stage)
	}

})

.controller('GameWorldSingCtrl', function($scope) {
	/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * {object} = e({object},defualt,down,function(){}) 0<- 버튼을 클릭하면 이벤트가 발생한다.
 */
/////////////////////////////////////////////////////////////////////////////////////////////
	var width = window.innerWidth; // 윈도우에 가로 길이를 가져옵니다.
	var height = window.innerHeight; // 윈도우에 세로 길이를 가져옵니다.
/////////////////////////////////////////////////////////////////////////////////////////////
	var stage = new PIXI.Stage(0xffffff); // 기본 프레임 // 배경색
	var renderer = PIXI.autoDetectRenderer(width,height); // 자동으로 body에 canvas를 때려 박는다.
	$('#game-detail')[0].appendChild(renderer.view); // 때려 박기...
/////////////////////////////////////////////////////////////////////////////////////////////
	var bup = PIXI.Texture.fromImage('img/game/b1.png');
	var bdown = PIXI.Texture.fromImage('img/game/b2.png');
	var button = new PIXI.Sprite(bup);
	var color = "#" + parseInt(Math.random()*0xffffff).toString(16);
	var text = new PIXI.Text("null",{ font: "bold 130px Arial", fill:color, align: "center"});
	var bg = PIXI.Sprite.fromImage('img/game/Singing/logo.jpg');
	var object;
/////////////////////////////////////////////////////////////////////////////////////////////
	var objects = ['핸드폰','지갑','젓가락','숟가락','소주','물컵','맥주'];
	var time = 0;
/////////////////////////////////////////////////////////////////////////////////////////////
	init() // 초기화 실행
/////////////////////////////////////////////////////////////////////////////////////////////
function init() { // 초기화 험슈슈 입니다.
	state = 1; // 시작했습니다.


	stage.addChild(bg)
	bg.position.x = width/2
	bg.position.y = height/5
	bg.anchor.x = 0.5
	bg.anchor.y = 0.5
	bg.alpha = 0.5

	var toEnglish = function(keyword) {
		var map = {'핸드폰': 'phone',
		'지갑': 'wallet',
		'젓가락': 'chopstick',
		'숟가락': 'spoon',
		'소주': 'soju',
		'물컵': 'glass',
		'맥주': 'beer'};
		return map[keyword];
	};
	var keyword = objects[parseInt(Math.random() * objects.length)];
	object = PIXI.Sprite.fromImage('img/game/Singing/'+toEnglish(keyword) + ".jpg")
	stage.addChild(object);
	object.position.x = width/2;
	object.position.y = height + 300;
	object.anchor.x = 0.5
	object.anchor.y = 0.5

	stage.addChild(button)
	button.position.x = width/2
	button.position.y = height/2
	button = e(button,bup,bdown,function() {
		setTimeout(function() {
		state = 2
		text.visible = 1},400)
		button.visible = false;
	});

	stage.addChild(text);
	text.setText(keyword)
	text.anchor.x = 0.5;
	text.anchor.y = 0.5;
	text.position.x = width/2;
	text.position.y = height + 500;
	text.visible = 0;


	run() // Thread를 시작합니닷!
}

function update() { // 업데이트! Thread를 통해 지속적인 업데이트를 진행합니다.
	switch(state) {
		case 0 :
		// 기초 업데이트 but 사실상 실행되지 않음!
		 	break;
		case 1 :
			break;
		case 2 :
			time++
			if(object.position.y > height/2) {
				object.position.y-=10
				text.position.y -= 10
			}
			break;
		case 3 :
			break;
		case 4 :
			break;
		case 5 :
			break;
	}
}

	function run() {
		requestAnimFrame(run)
		update()
		renderer.render(stage)
	}


})

.controller('GameSpinCtrl', function($scope) {
	////////////////////////////////////////////////////////////////////////////////////////////
/**
 * {object} = e({object},defualt,down,function(){}) 0<- 버튼을 클릭하면 이벤트가 발생한다.
 */
/////////////////////////////////////////////////////////////////////////////////////////////
	var width = window.innerWidth // 윈도우에 가로 길이를 가져옵니다.
	var height = window.innerHeight // 윈도우에 세로 길이를 가져옵니다.
/////////////////////////////////////////////////////////////////////////////////////////////
	var stage = new PIXI.Stage(0xffffff) // 기본 프레임 // 배경색
	var renderer = PIXI.autoDetectRenderer(width,height) // 자동으로 body에 canvas를 때려 박는다.
	$('#game-detail')[0].appendChild(renderer.view) // 때려 박기...
/////////////////////////////////////////////////////////////////////////////////////////////
	var bup = PIXI.Texture.fromImage('img/game/b1.png')
	var bdown = PIXI.Texture.fromImage('img/game/b2.png')
	var button = new PIXI.Sprite(bup);
	var object = PIXI.Sprite.fromImage('img/game/Spin/soju.jpg');
/////////////////////////////////////////////////////////////////////////////////////////////
	var time = 0;
	var n = 400 + Math.random()*10;// 회전량
/////////////////////////////////////////////////////////////////////////////////////////////
	init() // 초기화 실행
/////////////////////////////////////////////////////////////////////////////////////////////
function init() { // 초기화 험슈슈 입니다.
	state = 1; // 시작했습니다.

	stage.addChild(object);
	object.position.x = width/2;
	object.position.y = height/2;
	object.anchor.x = 0.5
	object.anchor.y = 0.5

	stage.addChild(button)
	button.position.x = width/2
	button.position.y = height/2
	button = e(button,bup,bdown,function() {
		setTimeout(function() {
		state = 2
	},400)
		button.visible = false;
	});

	run() // Thread를 시작합니닷!
}

function update() { // 업데이트! Thread를 통해 지속적인 업데이트를 진행합니다.
	switch(state) {
		case 0 :
		// 기초 업데이트 but 사실상 실행되지 않음!
		 	break;
		case 1 :
			break;
		case 2 :
		if (--n>0) {
			var m = n/600
			object.rotation += m;
		}
			time++
			break;
		case 3 :
			break;
		case 4 :
			break;
		case 5 :
			break;
	}
}

	function run() {
		requestAnimFrame(run)
		update()
		renderer.render(stage)
	}


})

.controller('GameMrSongCtrl', function($scope) {
	/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * {object} = e({object},defualt,down,function(){}) 0<- 버튼을 클릭하면 이벤트가 발생한다.
 */
/////////////////////////////////////////////////////////////////////////////////////////////
	var width = window.innerWidth // 윈도우에 가로 길이를 가져옵니다.
	var height = window.innerHeight // 윈도우에 세로 길이를 가져옵니다.
/////////////////////////////////////////////////////////////////////////////////////////////
	var stage = new PIXI.Stage(0xffffff) // 기본 프레임 // 배경색
	var renderer = PIXI.autoDetectRenderer(width,height) // 자동으로 body에 canvas를 때려 박는다.
	$('#game-detail')[0].appendChild(renderer.view) // 때려 박기...
/////////////////////////////////////////////////////////////////////////////////////////////
	var bup = PIXI.Texture.fromImage('img/game/b1.png')
	var bdown = PIXI.Texture.fromImage('img/game/b2.png')
	var button = new PIXI.Sprite(bup);
	var color = "#" + parseInt(Math.random()*0xffffff).toString(16);
	var text = new PIXI.Text("null",{ font: "bold 100px Arial", fill:color, align: "center"});
		var bg = PIXI.Sprite.fromImage('img/game/MrSong/bg.jpg');
/////////////////////////////////////////////////////////////////////////////////////////////
	var point = ['학생','여자','기획자','쏴장님','해적','검은발','흑발','개발자'];
	var time = 0;
/////////////////////////////////////////////////////////////////////////////////////////////
	init() // 초기화 실행
/////////////////////////////////////////////////////////////////////////////////////////////
function init() { // 초기화 험슈슈 입니다.
	state = 1; // 시작했습니다.

	stage.addChild(bg)
	bg.position.x = width/2
	bg.position.y = height/2
	bg.scale.x = 2
	bg.scale.y = 2
	bg.anchor.x = 0.5
	bg.anchor.y = 0.5
	bg.alpha = 0.5

	stage.addChild(button)
	button.position.x = width/2
	button.position.y = height/7*4
	button = e(button,bup,bdown,function() {
		setTimeout(function() {
		state = 2
		text.setText(point[parseInt(Math.random() * point.length)] + " 인사람 접어!")
		text.visible = 1
	},4)

	});

	stage.addChild(text);

	text.anchor.x = 0.5;
	text.anchor.y = 0.5;
	text.position.x = width/2;
	text.position.y = height/7*3;
	text.visible = 0;

	run() // Thread를 시작합니닷!
}

function update() { // 업데이트! Thread를 통해 지속적인 업데이트를 진행합니다.
	switch(state) {
		case 0 :
		// 기초 업데이트 but 사실상 실행되지 않음!
		 	break;
		case 1 :
			break;
		case 2 :
			time++
			text.rotation = Math.sin(time/10)/3;
			break;
		case 3 :
			break;
		case 4 :
			break;
		case 5 :
			break;
	}
}

	function run() {
		requestAnimFrame(run)
		update()
		renderer.render(stage)
	}

})

.controller('GameGoodKoreanCtrl', function($scope) {
	/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * {object} = e({object},defualt,down,function(){}) 0<- 버튼을 클릭하면 이벤트가 발생한다.
 */
/////////////////////////////////////////////////////////////////////////////////////////////
	var width = window.innerWidth // 윈도우에 가로 길이를 가져옵니다.
	var height = window.innerHeight // 윈도우에 세로 길이를 가져옵니다.
/////////////////////////////////////////////////////////////////////////////////////////////
	var stage = new PIXI.Stage(0xffffff) // 기본 프레임 // 배경색
	var renderer = PIXI.autoDetectRenderer(width,height) // 자동으로 body에 canvas를 때려 박는다.
	$('#game-detail')[0].appendChild(renderer.view) // 때려 박기...
/////////////////////////////////////////////////////////////////////////////////////////////
	var bup = PIXI.Texture.fromImage('img/game/b1.png')
	var bdown = PIXI.Texture.fromImage('img/game/b2.png')
	var button = new PIXI.Sprite(bup);
	var color = "#" + parseInt(Math.random()*0xffffff).toString(16);
	var text = new PIXI.Text("null",{ font: "bold 300px Arial", fill:color, align: "center"});
	var bg = PIXI.Sprite.fromImage('img/game/Korean/bg.png');
/////////////////////////////////////////////////////////////////////////////////////////////
	var chars = ['ㄱ','ㄴ','ㄷ','ㄹ','ㅁ','ㅂ','ㅅ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
	var time = 0;
/////////////////////////////////////////////////////////////////////////////////////////////
	init() // 초기화 실행
/////////////////////////////////////////////////////////////////////////////////////////////
function init() { // 초기화 험슈슈 입니다.
	state = 1; // 시작했습니다.

	stage.addChild(bg)
	bg.position.x = width/2
	bg.position.y = height/2
	bg.anchor.x = 0.5
	bg.anchor.y = 0.5

	stage.addChild(button)
	button.position.x = width/2
	button.position.y = height/2
	button = e(button,bup,bdown,function() {
		setTimeout(function() {
		state = 2
		text.visible = 1},400)
		button.visible = false;

	});

	stage.addChild(text);
	text.setText(chars[parseInt(Math.random()*chars.length)] + chars[parseInt(Math.random()*chars.length)])
	text.anchor.x = 0.5;
	text.anchor.y = 0.5;
	text.position.x = width/2;
	text.position.y = height/2;
	text.visible = 0;

	run() // Thread를 시작합니닷!
}

function update() { // 업데이트! Thread를 통해 지속적인 업데이트를 진행합니다.
	switch(state) {
		case 0 :
		// 기초 업데이트 but 사실상 실행되지 않음!
		 	break;
		case 1 :
			break;
		case 2 :
			time++
			text.rotation = Math.sin(time/10)/3;
			break;
		case 3 :
			break;
		case 4 :
			break;
		case 5 :
			break;
	}
}

	function run() {
		requestAnimFrame(run)
		update()
		renderer.render(stage)
	}

})

.controller('GameAttackBotlCtrl', function($scope) {
})

.controller('GameBombCtrl', function($scope) {
	/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * {object} = e({object},defualt,down,function(){}) 0<- 버튼을 클릭하면 이벤트가 발생한다.
 */
/////////////////////////////////////////////////////////////////////////////////////////////
	var width = window.innerWidth // 윈도우에 가로 길이를 가져옵니다.
	var height = window.innerHeight // 윈도우에 세로 길이를 가져옵니다.
/////////////////////////////////////////////////////////////////////////////////////////////
	var stage = new PIXI.Stage(0xffffff) // 기본 프레임 // 배경색
	var renderer = PIXI.autoDetectRenderer(width,height) // 자동으로 body에 canvas를 때려 박는다.
	$('#game-detail')[0].appendChild(renderer.view) // 때려 박기...
/////////////////////////////////////////////////////////////////////////////////////////////
	// var background = PIXI.Sprite.formImage('../assets/background.png')
	var bomb = PIXI.Sprite.fromImage('img/game/Bomb/bomb.png')
	var bup = PIXI.Texture.fromImage('img/game/Bomb/b1.png')
	var bdown = PIXI.Texture.fromImage('img/game/Bomb/b2.png')
	var time = new PIXI.Text('00.00',{ font: "bold 220px Arvo", fill: "#ff3d3d", align: "center", stroke: "#000000", strokeThickness: 30 })
	var button = new PIXI.Sprite(bup);
	var tt = PIXI.Sprite.fromImage('img/game/Bomb/bye.jpg');
	var bombSprite
/////////////////////////////////////////////////////////////////////////////////////////////
	var state = 0  // 기본 상태 ex) 1 - run , 2 - stop
	var timeInt = 2223 //초 단위 ? 하지만 폰성능에 따라 다름 // 맞기 싫으면 홀수로 해라...
/////////////////////////////////////////////////////////////////////////////////////////////
	init() // 초기화 실행
/////////////////////////////////////////////////////////////////////////////////////////////
function init() { // 초기화 험슈슈 입니다.
	state = 1; // 시작했습니다.
	stage.addChild(bomb)
	bomb.position.x = width/2
	bomb.position.y = height/2
	bomb.anchor.x = 0.5
	bomb.anchor.y = 0.5
	bomb.scale.x = 0.8;
	bomb.scale.y = 0.8;

	stage.addChild(time)
	time.position.x = width/2 ;
	time.position.y = height/2
	time.anchor.x = 0.5;
	time.anchor.y = 0.5;
	time.visible = false;

	var assetsToLoader = [ "img/game/Bomb/bombsprite.json"];
	loader = new PIXI.AssetLoader(assetsToLoader);
	loader.onComplete = function () {
		var s = [];
		for (var i = 0 ; i < 10 ; i++) {
			var texture = PIXI.Texture.fromFrame('image_01-'+(i+1)+'(드래그함).tiff');
			s.push(texture);
		}
		bombSprite = new PIXI.MovieClip(s);
		bombSprite.animationSpeed = 0.25;
		bombSprite.position.x = width/2
		bombSprite.position.y = height/2
		bombSprite.anchor.x = 0.5
		bombSprite.anchor.y = 0.5
		bombSprite.scale.x = 2
		bombSprite.scale.y = 2
		bombSprite.play();
		bombSprite.visible = 0
		stage.addChild(bombSprite);

		stage.addChild(tt);
		tt.position.x = width + 400;
		tt.position.y = height/5*4
		tt.anchor.x = 0.5;
		tt.anchor.y = 0.5;

		}
	loader.load();

	stage.addChild(button)
	button.position.x = width/2
	button.position.y = height/5*4
	button = e(button,bup,bdown,function() {
		state = 2;
		time.visible = true;
		button.visible = false;
	});

	run() // Thread를 시작합니닷!
}

function update() { // 업데이트! Thread를 통해 지속적인 업데이트를 진행합니다.
	time.setText(timeInt/100);
	bomb.rotation = Math.sin(timeInt/8)/10
	switch(state) {
		case 0 :
		// 기초 업데이트 but 사실상 실행되지 않음!
		 	break;
		case 1 :
			break;
		case 2 :
			if((timeInt-=2) < 0) {
				state = 3;
				time.visible = false;
				bombSprite.visible = true
			}
			break;
		case 3 :
			setTimeout(function () {
				state = 4
			},1000)
			break;
		case 4 :
			if(tt.position.x > width/2) {
				tt.position.x-=30
			}
			break;
		case 5 :
			break;
	}
}

	function run() {
		requestAnimFrame(run)
		update()
		renderer.render(stage)
	}




});
