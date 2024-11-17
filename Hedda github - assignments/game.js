//Game - let the monkey to the ground
//Hedda Petersson - pehe24kv

let monkeyX = 1300;
let monkeyY = -1300;
let state = "start";
let monkeyState = "happy";

//Game logic variable
let velocityY = 1;
let acceleration = 1;

//Canvas size
function setup() {
  createCanvas(700, 700);
}

//The different game screens
//Start screen
function startScreen() {
  backgroundGame();
  startButton();
  //Text
  fill(0, 102, 204);
  noStroke();
  push();
  textSize(50);
  text("MONKEY FALL", 275, -300, [100, 100]);
  pop();
  push();
  textSize(30);
  text("HELP THE MONKEY GET SAFELY TO THE GROUND", 100, -240, [100, 100]);
  pop();
}

//Game screen
function gameScreen() {
  backgroundGame();
  // if monkey variable is sad or not
  if (monkeyState === "happy") {
    monkey(monkeyX, monkeyY);
  } else if (monkeyState === "sad") {
    monkeySadGame(monkeyX, monkeyY);
  }
}

//Lost screen
function lostScreen() {
  backgroundGame();
  background(0, 0, 0, 90);
  //Monkey position
  push();
  translate(-850, 1500);
  scale(3);
  monkeySad(1300, -1300);
  pop();
  //Text
  fill(0, 0, 0);
  noStroke();
  push();
  textSize(50);
  text("OH NO...", 330, -300, [100, 100]);
  text("THE MONKEY FELL TOO FAST", 100, -240, [100, 100]);
  pop();
  push();
  textSize(30);
  text("(PRESS ON THE SCREEN TO RE-PLAY)", 150, -170, [100, 100]);
  pop();
}

//Won Screen
function wonScreen() {
  backgroundGame();
  background(255, 255, 255, 90);
  //Monkey position
  push();
  monkeyHappy(310, 300);
  pop();
  //Text
  fill(0, 102, 204);
  noStroke();
  push();
  textSize(50);
  text("YOU WON,", 310, -290, [100, 100]);
  text("YOU HELPED THE MONKEY GET", 100, -240, [100, 100]);
  text("SAFELY TO THE GROUND", 150, -190, [100, 100]);
  pop();
  push();
  textSize(30);
  text("(PRESS ON THE SCREEN TO GET TO THE MENU)", 80, -130, [100, 100]);
  pop();
}

//Re-play screen
function replayScreen() {
  // backgroundGame();
  // monkeySadGame(monkeySadGameX, monkeySadGameY);
  // // monkeySadGame(monkeySadGameX, monkeySadGameY);
  monkeyX = 1300;
  monkeyY = -1300;
  velocityY = 1;
  acceleration = 1;
}

// The following five lines was generated with ChtatGPT with modifications: https://chatgpt.com/share/6737bfb0-415c-800e-bc2c-b1d506131a29
// Accessed: 2024-11-16
// With help from emal24na
//Re-set game
function resetGame() {
  monkeyX = 1300;
  monkeyY = -1300;
  velocityY = 1;
  acceleration = 1;
}
//The game background with all the detail functions
function backgroundGame() {
  background(199, 233, 255);
  //grass
  translate(0, 175);
  fill(123, 174, 85);
  noStroke();
  rect(0, 450, 700, 160);
  fill(88, 148, 43);
  rect(0, 410, 700, 60);
  translate(50, 125);
  scale(0.7);
  push();
  //clouds
  cloud();
  push();
  translate(650, 100);
  cloud();
  pop();
  push();
  translate(200, 300);
  cloud();
  pop();
  push();
  translate(400, -100);
  cloud();
  pop();
  //trees
  translate(120, -10);
  tree2();
  pop();
  tree();
  push();
  translate(550, -10);
  tree2();
  pop();
  push();
  push();
  translate(820, -10);
  tree2();
  pop();
  push();
  translate(700, 0);
  tree();
  pop();
}

//The "details" functions
function startButton() {
  //Button
  push();
  fill(255, 219, 31);
  strokeWeight(15);
  stroke(255, 196, 31);
  rect(230, -150 + 60, 400, 250, 20);
  pop();

  //Text
  fill(0);
  noStroke();
  textSize(42);
  text("START THE GAME", 245, 15, [100, 100]);
}

function tree2() {
  //tree trunk
  push();
  fill(63, 117, 23);
  ellipse(82, 450, 160, 40);
  pop();
  push();
  fill(102, 51, 0);
  noStroke();
  beginShape();
  vertex(61, 83);
  bezierVertex(73, 395, 64, 405, 36, 458);
  vertex(36, 458);
  vertex(128, 458);
  bezierVertex(100, 405, 91, 415, 103, 83);
  vertex(103, 83);
  vertex(67, 83);
  endShape();
  pop();
  // --- bananas
  push();
  fill(255, 219, 31);
  stroke(255, 196, 31);
  // --- first row bananas
  ellipse(123, 190, 15, 40);
  //second row bananas
  ellipse(130, 170, 15, 40);
  ellipse(115, 170, 15, 40);
  // --- third row bananas
  ellipse(107, 150, 15, 40);
  ellipse(122, 150, 15, 40);
  ellipse(137, 150, 15, 40);
  // --- forth row bananas
  ellipse(100, 130, 15, 40);
  ellipse(115, 130, 15, 40);
  ellipse(130, 130, 15, 40);
  ellipse(145, 130, 15, 40);
  pop();
  //Leaves
  // --- Leaf 1
  fill(56, 118, 8);
  push();
  translate(80, 83);
  rotate(0.4);
  ellipse(100, 0, 200, 60);
  pop();
  // --- Leaf 2
  push();
  translate(80, 83);
  rotate(-0.4);
  ellipse(90, -15, 200, 60);
  pop();
  // --- Leaf 3
  push();
  translate(80, 83);
  rotate(-1.5);
  ellipse(90, -5, 200, 60);
  pop();
  // --- Leaf 4
  push();
  translate(80, 83);
  rotate(2.6);
  ellipse(90, 0, 200, 60);
  pop();
  // --- Leaf 5
  push();
  translate(80, 83);
  rotate(3.7);
  ellipse(90, 0, 200, 60);
  pop();
}

function tree() {
  //tree trunk
  push();
  fill(63, 117, 23);
  ellipse(82, 450, 160, 40);
  pop();
  push();
  fill(153, 76, 0);
  noStroke();
  beginShape();
  vertex(61, 83);
  bezierVertex(73, 395, 64, 405, 36, 458);
  vertex(36, 458);
  vertex(128, 458);
  bezierVertex(100, 405, 91, 415, 103, 83);
  vertex(103, 83);
  vertex(67, 83);
  endShape();
  pop();
  // --- bananas
  push();
  fill(255, 219, 31);
  stroke(255, 196, 31);
  // --- first row bananas
  ellipse(123, 190, 15, 40);
  //second row bananas
  ellipse(130, 170, 15, 40);
  ellipse(115, 170, 15, 40);
  // --- third row bananas
  ellipse(107, 150, 15, 40);
  ellipse(122, 150, 15, 40);
  ellipse(137, 150, 15, 40);
  // --- forth row bananas
  ellipse(100, 130, 15, 40);
  ellipse(115, 130, 15, 40);
  ellipse(130, 130, 15, 40);
  ellipse(145, 130, 15, 40);
  pop();
  //Leaves
  // --- Leaf 1
  fill(88, 148, 43);
  push();
  translate(80, 83);
  rotate(0.4);
  ellipse(100, 0, 200, 60);
  pop();
  // --- Leaf 2
  push();
  translate(80, 83);
  rotate(-0.4);
  ellipse(90, -15, 200, 60);
  pop();
  // --- Leaf 3
  push();
  translate(80, 83);
  rotate(-1.5);
  ellipse(90, -5, 200, 60);
  pop();
  // --- Leaf 4
  push();
  translate(80, 83);
  rotate(2.6);
  ellipse(90, 0, 200, 60);
  pop();
  // --- Leaf 5
  push();
  translate(80, 83);
  rotate(3.7);
  ellipse(90, 0, 200, 60);
  pop();
}

function bananas() {
  // --- bananas
  push();
  fill(255, 219, 31);
  stroke(255, 196, 31);
  // --- first row bananas
  ellipse(123, 190, 15, 40);
  //second row bananas
  ellipse(130, 170, 15, 40);
  ellipse(115, 170, 15, 40);
  // --- third row bananas
  ellipse(107, 150, 15, 40);
  ellipse(122, 150, 15, 40);
  ellipse(137, 150, 15, 40);
  // --- forth row bananas
  ellipse(100, 130, 15, 40);
  ellipse(115, 130, 15, 40);
  ellipse(130, 130, 15, 40);
  ellipse(145, 130, 15, 40);
  pop();
}

function cloud() {
  fill(255);
  ellipse(145, -200, 170, 90);
  ellipse(20, -200, 170, 90);
  ellipse(70, -250, 140, 90);
}

function monkey(x, y) {
  push();
  scale(0.3);
  //Tail
  push();
  noFill();
  stroke(168, 111, 67);
  strokeWeight(12);
  beginShape();
  vertex(x + 176, y + 188);
  bezierVertex(x + 351, y + 102, x + 137, y, x + 273, y - 110);
  endShape();
  pop();

  //Left arm
  push();
  strokeWeight(20);
  stroke(168, 111, 67);
  beginShape();
  vertex(x + 44, y + 38);
  bezierVertex(x - 42, y + 116, x + 22, y + 169, x + 48, y + 167);
  endShape();
  pop();
  stroke(119, 74, 40);
  strokeWeight(2);
  push();
  translate(x + 19, y + 106);
  rotate(0.1);
  ellipse(0, 0, 15, 50);
  pop();
  push();
  fill(168, 111, 67);
  strokeWeight(2);
  stroke(119, 74, 40);
  translate(x + 19, y + 106);
  rotate(0.8);
  ellipse(+30, -50, 140, 190);
  pop();

  //Right arm
  push();
  strokeWeight(20);
  stroke(168, 111, 67);
  beginShape();
  vertex(x - 44 + 200, y + 38);
  bezierVertex(
    x + 42 + 200,
    y + 116,
    x - 22 + 200,
    y + 169,
    x - 48 + 200,
    y + 167
  );
  endShape();
  pop();
  push();
  translate(x - 19, y + 106);
  rotate(-0.1);
  ellipse(200, 21, 15, 50);
  pop();
  push();
  fill(168, 111, 67);
  strokeWeight(2);
  stroke(119, 74, 40);
  translate(x + 140, y + 148);
  rotate(-0.8);
  ellipse(+30, -50, 140, 190);
  pop();

  //Left leg
  fill(168, 111, 67);
  strokeWeight(2);
  stroke(119, 74, 40);
  push();
  translate(x + 110, y + 300);
  rotate(0.3);
  ellipse(-70, -30, 45, 90);
  pop();
  push();
  fill(228, 207, 191);
  translate(x + 40, y + 294);
  rotate();
  arc(0, 0, 60, 40, PI, 0, CHORD);
  pop();

  //Right leg
  fill(168, 111, 67);
  strokeWeight(2);
  stroke(119, 74, 40);
  push();
  translate(x - 110, y + 300);
  rotate(-0.3);
  ellipse(+260, +20, 45, 90);
  pop();
  push();
  fill(228, 207, 191);
  translate(x - 90, y + 294);
  rotate();
  arc(0 + 250, 0, 60, 40, PI, 0, CHORD);
  pop();

  //Body
  ellipse(x + 100, y + 130, 170, 250);

  //Belly
  push();
  noStroke();
  fill(228, 207, 191);
  ellipse(x + 100, y + 145, 130, 190);
  pop();

  //Ears
  push();
  fill(228, 207, 191);
  circle(x + 10, y - 30, 70, 70);
  circle(x + 190, y - 30, 70, 70);
  noFill();
  beginShape();
  vertex(x + 5, y - 25);
  bezierVertex(x + 15, y - 80, x - 44, y - 4, x + 20, y - 25);
  endShape();
  pop();
  push();
  noFill();
  beginShape();
  vertex(x + 5, y - 25);
  bezierVertex(x + 15, y - 80, x - 44, y - 4, x + 20, y - 25);
  endShape();
  beginShape();
  vertex(x - 5 + 200, y - 25);
  bezierVertex(x - 15 + 200, y - 80, x + 44 + 200, y - 4, x - 20 + 200, y - 25);
  endShape();
  pop();

  //Head
  ellipse(x + 100, y, 190, 90);
  circle(x + 100, y - 40, 160, 160);
  push();
  fill(228, 207, 191);
  noStroke();
  circle(x + 100, y - 40, 130, 130);
  ellipse(x + 100, y, 170, 80);
  pop();

  //Eyes
  fill(0);
  noStroke();
  circle(x + 60, y - 35, 20);
  circle(x + 140, y - 35, 20);
  fill(255);
  circle(x + 55, y - 38, 5);
  circle(x + 137, y - 38, 5);

  //Nose
  fill(119, 74, 40);
  triangle(x + 100, y, x + 80, y - 10, x + 120, y - 10);

  //Mouth
  strokeWeight(3);
  stroke(119, 74, 40);
  line(x + 100, y, x + 100, y + 15);
  noFill();
  arc(x + 100, y + 10, 40, 10, 0, PI);
  pop();
}

function monkeySad(x, y) {
  push();
  scale(0.3);
  //Tail
  push();
  noFill();
  stroke(168, 111, 67);
  strokeWeight(12);
  beginShape();
  vertex(x + 176, y + 188);
  bezierVertex(x + 351, y + 102, x + 137, y, x + 273, y - 110);
  endShape();
  pop();

  //Left arm
  push();
  strokeWeight(20);
  stroke(168, 111, 67);
  beginShape();
  vertex(x + 44, y + 38);
  bezierVertex(x - 42, y + 116, x + 22, y + 169, x + 48, y + 167);
  endShape();
  pop();
  stroke(119, 74, 40);
  strokeWeight(2);
  push();
  translate(x + 19, y + 106);
  rotate(0.1);
  ellipse(0, 0, 15, 50);
  pop();
  push();
  fill(168, 111, 67);
  strokeWeight(2);
  stroke(119, 74, 40);
  translate(x + 19, y + 106);
  rotate(0.8);
  ellipse(+30, -50, 140, 190);
  pop();

  //Right arm
  push();
  strokeWeight(20);
  stroke(168, 111, 67);
  beginShape();
  vertex(x - 44 + 200, y + 38);
  bezierVertex(
    x + 42 + 200,
    y + 116,
    x - 22 + 200,
    y + 169,
    x - 48 + 200,
    y + 167
  );
  endShape();
  pop();
  push();
  translate(x - 19, y + 106);
  rotate(-0.1);
  ellipse(200, 21, 15, 50);
  pop();
  push();
  fill(168, 111, 67);
  strokeWeight(2);
  stroke(119, 74, 40);
  translate(x + 140, y + 148);
  rotate(-0.8);
  ellipse(+30, -50, 140, 190);
  pop();

  //Left leg
  fill(168, 111, 67);
  strokeWeight(2);
  stroke(119, 74, 40);
  push();
  translate(x + 110, y + 300);
  rotate(0.3);
  ellipse(-70, -30, 45, 90);
  pop();
  push();
  fill(228, 207, 191);
  translate(x + 40, y + 294);
  rotate();
  arc(0, 0, 60, 40, PI, 0, CHORD);
  pop();

  //Right leg
  fill(168, 111, 67);
  strokeWeight(2);
  stroke(119, 74, 40);
  push();
  translate(x - 110, y + 300);
  rotate(-0.3);
  ellipse(+260, +20, 45, 90);
  pop();
  push();
  fill(228, 207, 191);
  translate(x - 90, y + 294);
  rotate();
  arc(0 + 250, 0, 60, 40, PI, 0, CHORD);
  pop();

  //Body
  ellipse(x + 100, y + 130, 170, 250);

  //Belly
  push();
  noStroke();
  fill(228, 207, 191);
  ellipse(x + 100, y + 145, 130, 190);
  pop();

  //Ears
  push();
  fill(228, 207, 191);
  circle(x + 10, y - 30, 70, 70);
  circle(x + 190, y - 30, 70, 70);
  noFill();
  beginShape();
  vertex(x + 5, y - 25);
  bezierVertex(x + 15, y - 80, x - 44, y - 4, x + 20, y - 25);
  endShape();
  pop();
  push();
  noFill();
  beginShape();
  vertex(x + 5, y - 25);
  bezierVertex(x + 15, y - 80, x - 44, y - 4, x + 20, y - 25);
  endShape();
  beginShape();
  vertex(x - 5 + 200, y - 25);
  bezierVertex(x - 15 + 200, y - 80, x + 44 + 200, y - 4, x - 20 + 200, y - 25);
  endShape();
  pop();

  //Head
  ellipse(x + 100, y, 190, 90);
  circle(x + 100, y - 40, 160, 160);
  push();
  fill(228, 207, 191);
  noStroke();
  circle(x + 100, y - 40, 130, 130);
  ellipse(x + 100, y, 170, 80);
  pop();

  //Eyes
  fill(0);
  noStroke();
  circle(x + 60, y - 35, 20);
  circle(x + 140, y - 35, 20);
  fill(255);
  circle(x + 55, y - 38, 5);
  circle(x + 137, y - 38, 5);

  //Nose
  fill(119, 74, 40);
  triangle(x + 100, y, x + 80, y - 10, x + 120, y - 10);

  //Mouth
  strokeWeight(3);
  stroke(119, 74, 40);
  line(x + 100, y, x + 100, y + 15);
  noFill();
  arc(x + 100, y + 20, 40, 10, PI, 0);

  //Plaster
  push();
  translate(x + 40, y);
  rotate(0.9);
  fill(255, 255, 255);
  noStroke();
  ellipse(0, 0, 20, 50);
  fill(255, 229, 204);
  rect(-10, -7, 20, 20);
  pop();

  //Bandage
  fill(255, 255, 255);
  noStroke();
  //bandage first layer
  arc(x + 100, y - 50, 160, 142, PI, 0);

  //Cut
  stroke(255, 153, 153);
  strokeWeight(3);
  line(x + 160, y, x + 125, y + 12);
  pop();
}

function monkeySadGame(x, y) {
  push();
  scale(0.3);
  //Tail
  push();
  noFill();
  stroke(168, 111, 67);
  strokeWeight(12);
  beginShape();
  vertex(x + 176, y + 188);
  bezierVertex(x + 351, y + 102, x + 137, y, x + 273, y - 110);
  endShape();
  pop();

  //Left arm
  push();
  strokeWeight(20);
  stroke(168, 111, 67);
  beginShape();
  vertex(x + 44, y + 38);
  bezierVertex(x - 42, y + 116, x + 22, y + 169, x + 48, y + 167);
  endShape();
  pop();
  stroke(119, 74, 40);
  strokeWeight(2);
  push();
  translate(x + 19, y + 106);
  rotate(0.1);
  ellipse(0, 0, 15, 50);
  pop();
  push();
  fill(168, 111, 67);
  strokeWeight(2);
  stroke(119, 74, 40);
  translate(x + 19, y + 106);
  rotate(0.8);
  ellipse(+30, -50, 140, 190);
  pop();

  //Right arm
  push();
  strokeWeight(20);
  stroke(168, 111, 67);
  beginShape();
  vertex(x - 44 + 200, y + 38);
  bezierVertex(
    x + 42 + 200,
    y + 116,
    x - 22 + 200,
    y + 169,
    x - 48 + 200,
    y + 167
  );
  endShape();
  pop();
  push();
  translate(x - 19, y + 106);
  rotate(-0.1);
  ellipse(200, 21, 15, 50);
  pop();
  push();
  fill(168, 111, 67);
  strokeWeight(2);
  stroke(119, 74, 40);
  translate(x + 140, y + 148);
  rotate(-0.8);
  ellipse(+30, -50, 140, 190);
  pop();

  //Left leg
  fill(168, 111, 67);
  strokeWeight(2);
  stroke(119, 74, 40);
  push();
  translate(x + 110, y + 300);
  rotate(0.3);
  ellipse(-70, -30, 45, 90);
  pop();
  push();
  fill(228, 207, 191);
  translate(x + 40, y + 294);
  rotate();
  arc(0, 0, 60, 40, PI, 0, CHORD);
  pop();

  //Right leg
  fill(168, 111, 67);
  strokeWeight(2);
  stroke(119, 74, 40);
  push();
  translate(x - 110, y + 300);
  rotate(-0.3);
  ellipse(+260, +20, 45, 90);
  pop();
  push();
  fill(228, 207, 191);
  translate(x - 90, y + 294);
  rotate();
  arc(0 + 250, 0, 60, 40, PI, 0, CHORD);
  pop();

  //Body
  ellipse(x + 100, y + 130, 170, 250);

  //Belly
  push();
  noStroke();
  fill(228, 207, 191);
  ellipse(x + 100, y + 145, 130, 190);
  pop();

  //Ears
  push();
  fill(228, 207, 191);
  circle(x + 10, y - 30, 70, 70);
  circle(x + 190, y - 30, 70, 70);
  noFill();
  beginShape();
  vertex(x + 5, y - 25);
  bezierVertex(x + 15, y - 80, x - 44, y - 4, x + 20, y - 25);
  endShape();
  pop();
  push();
  noFill();
  beginShape();
  vertex(x + 5, y - 25);
  bezierVertex(x + 15, y - 80, x - 44, y - 4, x + 20, y - 25);
  endShape();
  beginShape();
  vertex(x - 5 + 200, y - 25);
  bezierVertex(x - 15 + 200, y - 80, x + 44 + 200, y - 4, x - 20 + 200, y - 25);
  endShape();
  pop();

  //Head
  ellipse(x + 100, y, 190, 90);
  circle(x + 100, y - 40, 160, 160);
  push();
  fill(228, 207, 191);
  noStroke();
  circle(x + 100, y - 40, 130, 130);
  ellipse(x + 100, y, 170, 80);
  pop();

  //Eyes
  fill(0);
  noStroke();
  circle(x + 60, y - 35, 20);
  circle(x + 140, y - 35, 20);
  fill(255);
  circle(x + 55, y - 38, 5);
  circle(x + 137, y - 38, 5);

  //Nose
  fill(119, 74, 40);
  triangle(x + 100, y, x + 80, y - 10, x + 120, y - 10);

  //Mouth
  strokeWeight(3);
  stroke(119, 74, 40);
  line(x + 100, y, x + 100, y + 15);
  noFill();
  arc(x + 100, y + 20, 40, 10, PI, 0);
  push();

  //Plaster
  push();
  translate(x + 40, y);
  rotate(0.9);
  fill(255, 255, 255);
  noStroke();
  ellipse(0, 0, 20, 50);
  fill(255, 229, 204);
  rect(-10, -7, 20, 20);
  pop();

  //Bandage
  fill(255, 255, 255);
  noStroke();
  //bandage first layer
  arc(x + 100, y - 50, 160, 142, PI, 0);

  //Cut
  stroke(255, 153, 153);
  strokeWeight(3);
  line(x + 160, y, x + 125, y + 12);
}

function bandage(x, y) {
  //Plaster
  push();
  translate(x + 40, y);
  rotate(0.9);
  fill(255, 255, 255);
  noStroke();
  ellipse(0, 0, 20, 50);
  fill(255, 229, 204);
  rect(-10, -7, 20, 20);
  pop();

  //Bandage
  fill(255, 255, 255);
  noStroke();
  //bandage first layer
  arc(x + 100, y - 50, 160, 142, PI, 0);

  //Cut
  stroke(255, 153, 153);
  strokeWeight(3);
  line(x + 160, y, x + 125, y + 12);
}

function monkeyHappy(x, y) {
  //Tail
  push();
  noFill();
  stroke(168, 111, 67);
  strokeWeight(12);
  beginShape();
  vertex(x + 176, y + 188);
  bezierVertex(x + 351, y + 102, x + 137, y, x + 273, y - 110);
  endShape();
  pop();

  //Left arm
  push();
  strokeWeight(20);
  stroke(168, 111, 67);
  beginShape();
  vertex(x + 44, y + 38);
  bezierVertex(x - 42, y + 116, x + 22, y + 169, x + 48, y + 167);
  endShape();
  pop();
  stroke(119, 74, 40);
  strokeWeight(2);
  push();
  translate(x + 19, y + 106);
  rotate(0.1);
  ellipse(0, 0, 15, 50);
  pop();
  push();
  fill(168, 111, 67);
  strokeWeight(2);
  stroke(119, 74, 40);
  translate(x + 19, y + 106);
  rotate(0.8);
  ellipse(+30, -50, 140, 190);
  pop();

  //Right arm
  push();
  strokeWeight(20);
  stroke(168, 111, 67);
  beginShape();
  vertex(x - 44 + 200, y + 38);
  bezierVertex(
    x + 42 + 200,
    y + 116,
    x - 22 + 200,
    y + 169,
    x - 48 + 200,
    y + 167
  );
  endShape();
  pop();
  push();
  translate(x - 19, y + 106);
  rotate(-0.1);
  ellipse(200, 21, 15, 50);
  pop();
  push();
  fill(168, 111, 67);
  strokeWeight(2);
  stroke(119, 74, 40);
  translate(x + 140, y + 148);
  rotate(-0.8);
  ellipse(+30, -50, 140, 190);
  pop();

  //Left leg
  fill(168, 111, 67);
  strokeWeight(2);
  stroke(119, 74, 40);
  push();
  translate(x + 110, y + 300);
  rotate(0.3);
  ellipse(-70, -30, 45, 90);
  pop();
  push();
  fill(228, 207, 191);
  translate(x + 40, y + 294);
  rotate();
  arc(0, 0, 60, 40, PI, 0, CHORD);
  pop();

  //Right leg
  fill(168, 111, 67);
  strokeWeight(2);
  stroke(119, 74, 40);
  push();
  translate(x - 110, y + 300);
  rotate(-0.3);
  ellipse(+260, +20, 45, 90);
  pop();
  push();
  fill(228, 207, 191);
  translate(x - 90, y + 294);
  rotate();
  arc(0 + 250, 0, 60, 40, PI, 0, CHORD);
  pop();

  //Body
  ellipse(x + 100, y + 130, 170, 250);

  //Belly
  push();
  noStroke();
  fill(228, 207, 191);
  ellipse(x + 100, y + 145, 130, 190);
  pop();

  //Ears
  push();
  fill(228, 207, 191);
  circle(x + 10, y - 30, 70, 70);
  circle(x + 190, y - 30, 70, 70);
  noFill();
  beginShape();
  vertex(x + 5, y - 25);
  bezierVertex(x + 15, y - 80, x - 44, y - 4, x + 20, y - 25);
  endShape();
  pop();
  push();
  noFill();
  beginShape();
  vertex(x + 5, y - 25);
  bezierVertex(x + 15, y - 80, x - 44, y - 4, x + 20, y - 25);
  endShape();
  beginShape();
  vertex(x - 5 + 200, y - 25);
  bezierVertex(x - 15 + 200, y - 80, x + 44 + 200, y - 4, x - 20 + 200, y - 25);
  endShape();
  pop();

  //Head
  ellipse(x + 100, y, 190, 90);
  circle(x + 100, y - 40, 160, 160);
  push();
  fill(228, 207, 191);
  noStroke();
  circle(x + 100, y - 40, 130, 130);
  ellipse(x + 100, y, 170, 80);
  pop();

  //Eyes
  push();
  noFill();
  stroke(119, 74, 40);
  strokeWeight(5);
  arc(x + 60, y - 30, 20, 20, PI, 0);
  arc(x + 140, y - 30, 20, 20, PI, 0);
  pop();

  //Nose
  fill(119, 74, 40);
  triangle(x + 100, y, x + 80, y - 10, x + 120, y - 10);

  //Mouth
  push();
  fill(226, 152, 141);
  strokeWeight(2);
  stroke(119, 74, 40);
  line(x + 100, y, x + 100, y + 10);
  arc(x + 100, y + 10, 40, 20, 0, PI, CHORD);
  pop();

  //Cheeks
  push();
  fill(245, 180, 170);
  noStroke();
  ellipse(x + 45, y - 10, 40, 15);
  ellipse(x + 155, y - 10, 40, 15);
  pop();
}

function draw() {
  //The starting screen
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();

    //Monkey falling
    if (monkeyY >= 1210) {
      if (velocityY <= 5) {
        state = "won";
        monkeyState = "happy";
      } else if (velocityY > 5) {
        state = "lost";
        monkeyState = "sad";
      }
    }

    //Gravity logic monkey
    monkeyY = monkeyY + velocityY;
    velocityY = velocityY + acceleration;

    //Space key - controls the acceleration
    if (keyIsDown(32) === true) {
      acceleration = -1;
    } else {
      acceleration = 0.5;
    } //The different screens
  } else if (state === "won") {
    wonScreen();
  } else if (state === "lost") {
    lostScreen();
  } else if (state === "replay") {
    replayScreen();
  }
}

//Function for "start the game button"
function mouseClicked() {
  if (state === "start") {
    if (mouseX > 204 && mouseX < 496 && mouseY > 230 && mouseY < 417) {
      state = "game";
    }
  } else if (state === "won") {
    resetGame(); //reset the game
    state = "start";
  } else if (state === "lost") {
    replayScreen(); // starts a new version of the game
    state = "game";
  }
}
