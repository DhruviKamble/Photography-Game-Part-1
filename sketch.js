//very beginning of the game where you see a camera with a next button
var beginner, beginnerImg;
var nextImg, next1, next2;

//koko the koala
var koalaImg, koala;

//text of instructions, koko intro, and a hint at what will be at the end
var txt_introImg, txt_intro;
var txt_instructionsImg, txt_instructions;
var txt_end_hintImg, txt_end_hint;

//gameState where you see a camer with a next button
var gameState = "camera";

function preload() {
  beginnerImg = loadImage("camera.jpg");
  nextImg = loadImage("roll.jpg");

  koalaImg = loadImage("koala.png");

  txt_introImg = loadImage("text/intro.png");
  txt_instructionsImg = loadImage("text/how_it_works.png");
  txt_end_hintImg = loadImage("text/end_hint.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  beginner = createSprite(windowWidth/2, windowHeight/2);
  beginner.addImage("camera image", beginnerImg);
  beginner.scale = 4;
  beginner.visible = false;

  next1 = createSprite(windowWidth/1.1, windowHeight/6);
  next1.addImage("roll that says next", nextImg);
  next1.scale = 0.4;
  next1.visible = false;

  next2 = createSprite(windowWidth/1.1, windowHeight/1.2);
  next2.addImage("roll that says next", nextImg);
  next2.scale = 0.4;
  next2.visible = false;

  koala = createSprite(windowWidth/7, windowHeight/2);
  koala.addImage("koala on bamboo", koalaImg);
  koala.scale = 0.19;
  koala.visible = false;

  txt_intro = createSprite(windowWidth/2.5, windowHeight/5);
  txt_intro.addImage("koko's intro", txt_introImg);
  txt_intro.scale = 0.4;
  txt_intro.visible = false;

  txt_instructions = createSprite(windowWidth/1.3, windowHeight/2);
  txt_instructions.addImage("game instructions", txt_instructionsImg);
  txt_instructions.scale = 0.4;
  txt_instructions.visible = false;

  txt_end_hint = createSprite(windowWidth/2, windowHeight/1.3);
  txt_end_hint.addImage("hint about surprise", txt_end_hintImg);
  txt_end_hint.scale = 0.4;
  txt_end_hint.visible = false;
}

function draw() {
  background(0);
  drawSprites();

  if(gameState === "camera") {
    beginner.visible = true;
    next1.visible = true;

    if(mousePressedOver(next1)) {
      beginner.destroy();
      next1.destroy();
      
      gameState = "koala";
    }
  } else if(gameState === "koala") {
    koala.visible = true;
    txt_intro.visible = true;
    txt_instructions.visible = true;
    txt_end_hint.visible = true;
    next2.visible = true;

    if(mousePressedOver(next2)) {
      txt_intro.destroy();
      txt_instructions.destroy();
      txt_end_hint.destroy();
      next2.destroy();
      
      gameState = "round1";
    }
  } else if(gameState === "round1") {
    //there will be something else here in the next part, this is just a "filler"
    console.log("watch out for part 2 to see the next steps to this game 😊");

    textSize(25);
    fill("purple");
    text("watch out for part 2 to see the next steps to this game 😊", windowWidth/3, windowHeight/2);
  }
}