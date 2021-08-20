var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["9ad7d56b-78a8-4012-b851-8ddeeeb842fc","283455cb-9a49-4c05-98d7-ccc9edbf4bd6","be09fb84-b36b-4bb5-8294-4a9a10b9eb4b","0bc89340-b153-4a33-ae8f-33933b96f004"],"propsByKey":{"9ad7d56b-78a8-4012-b851-8ddeeeb842fc":{"name":"marvin","sourceUrl":"assets/api/v1/animation-library/gamelab/4.t6IDgXj00fjxSiOZK.KXVz4qDwmz9l/category_fantasy/alienGreen.png","frameSize":{"x":66,"y":92},"frameCount":1,"looping":true,"frameDelay":2,"version":"4.t6IDgXj00fjxSiOZK.KXVz4qDwmz9l","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":92},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4.t6IDgXj00fjxSiOZK.KXVz4qDwmz9l/category_fantasy/alienGreen.png"},"283455cb-9a49-4c05-98d7-ccc9edbf4bd6":{"name":"bullet","sourceUrl":null,"frameSize":{"x":600,"y":600},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZHnrbJwE9o6cKa6B7o3PIP98oXQRwCsf","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/283455cb-9a49-4c05-98d7-ccc9edbf4bd6.png"},"be09fb84-b36b-4bb5-8294-4a9a10b9eb4b":{"name":"bullet2","sourceUrl":null,"frameSize":{"x":600,"y":600},"frameCount":1,"looping":true,"frameDelay":12,"version":"w6o.psWyUrKbLxO49PpHiXzJL9a4vxgH","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/be09fb84-b36b-4bb5-8294-4a9a10b9eb4b.png"},"0bc89340-b153-4a33-ae8f-33933b96f004":{"name":"spike","sourceUrl":"assets/api/v1/animation-library/gamelab/dKMso84t.chz9qgy.kbXYXCnkVWSBgqF/category_video_games/spike_top.png","frameSize":{"x":51,"y":87},"frameCount":1,"looping":true,"frameDelay":2,"version":"dKMso84t.chz9qgy.kbXYXCnkVWSBgqF","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":87},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dKMso84t.chz9qgy.kbXYXCnkVWSBgqF/category_video_games/spike_top.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var boundary1 = createSprite(50,30,150,5);
boundary1.shapeColor="red";

var boundary2 = createSprite(125,153,5,250);
boundary2.shapeColor="red";

var boundary3 = createSprite(270,276,290,5);
boundary3.shapeColor="red";

var boundary4 = createSprite(0,400,2,745);
boundary4.shapeColor="red";

var boundary5 = createSprite(400,400,2,250);
boundary5.shapeColor="red";

var floor1 = createSprite(100,80,50,5);
floor1.shapeColor="brown";
var floor2 = createSprite(93,180,70,5);
floor2.shapeColor="brown";
var floor3 = createSprite(20,130,70,5);
floor3.shapeColor="brown";
var floor4 = createSprite(20,230,70,5);
floor4.shapeColor="brown";
var floor5 = createSprite(93,276,70,5);
floor5.shapeColor="brown";

var marvin = createSprite(102,52,15,15);
marvin.setAnimation("marvin");
marvin.scale=0.4;

var door = createSprite(386,390,20,50);
door.shapeColor="green";

var bullet1 = createSprite(17,290,5,5);
bullet1.setAnimation("bullet2");
bullet1.scale=0.05;

var bullet2 = createSprite(380,310,5,5);
bullet2.setAnimation("bullet");
bullet2.scale=0.05;

var bullet3 = createSprite(17,330,5,5);
bullet3.setAnimation("bullet2");
bullet3.scale=0.05;

var bullet4 = createSprite(380,350,5,5);
bullet4.setAnimation("bullet");
bullet4.scale=0.05;

var spike1 = createSprite(20,110,20,20);
spike1.setAnimation("spike");
spike1.scale=0.4;

var spike2 = createSprite(98,160,20,20);
spike2.setAnimation("spike");
spike2.scale=0.4;

var spike3 = createSprite(16,210,20,20);
spike3.setAnimation("spike");
spike3.scale=0.4;

var spike4 = createSprite(98,256,20,20);
spike4.setAnimation("spike");
spike4.scale=0.4;

var lifes=5;

function bulletMovement(){
bullet1.velocityX=10;
bullet2.velocityX=-10;
bullet3.velocityX=10;
bullet4.velocityX=-10;
}


var gameState="start";

function draw() {
background("white");

textSize(18);
fill("maroon");
text("life : "+lifes,170,22);

if (gameState === "start"){
textSize(12);
stroke(0);
fill(0);
text("WELCOME, HELP MARVIN GET TO THE END!",136,78);
text("PRESS SPACE TO START",136,98);
if(keyDown("space")){
bulletMovement();
gameState="play";
}
}

if (gameState === "play"){
 


paddleMovement();



createEdgeSprites();
marvin.collide(edges);
marvin.collide(boundary1);
marvin.collide(boundary2);
marvin.collide(boundary3);
marvin.collide(floor1);
marvin.collide(floor2);
marvin.collide(floor3);
marvin.collide(floor4);
marvin.collide(floor5);
bullet1.bounceOff(edges);
bullet2.bounceOff(edges);
bullet3.bounceOff(edges);
bullet4.bounceOff(edges);

if(marvin.isTouching(spike1)||marvin.isTouching(spike2)||marvin.isTouching(spike3)||marvin.isTouching(spike4)){
marvin.x=102;
marvin.y=52;
lifes=lifes-1;
}

if(marvin.isTouching(bullet1)||marvin.isTouching(bullet2)||marvin.isTouching(bullet3)||marvin.isTouching(bullet4)){
marvin.x=102;
marvin.y=52;
lifes=lifes-1;
}
 if((lifes==0)||marvin.isTouching(door)){
 gameState="end";
 }
}

if (gameState === "end"){
fill("blue");
stroke("blue");
text("Game Over , press r to restart",138,110);
bullet1.velocityX=0;
bullet2.velocityX=0;
bullet3.velocityX=0;
bullet4.velocityX=0;
if (keyDown("r")){
lifes=5;
gameState="start";
}
}











drawSprites(); 
}


  function paddleMovement(){
  if(keyDown("left")){
    marvin.x = marvin.x-5;
    
  }
  
  if(keyDown("right")){
    marvin.x = marvin.x+5;
    
  }
  
  if(keyDown("up")){
   {
    marvin.y = marvin.y- 5;
   }
  }
  
  if(keyDown("down")){
    {
    marvin.y = marvin.y+5;
   }
  }
}

// function bulletMovement(){
// bullet1.velocityX=5;
// bullet2.velocityX=-5;
// bullet3.velocityX=5;
// bullet4.velocityX=-5;
// }

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
