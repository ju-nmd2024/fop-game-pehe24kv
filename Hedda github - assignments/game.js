//Help monkey to the bananas game
//pehe24kv NMD24

let monkeyX = 1300;
let monkeyY = -1300;
let speed = 20;
let state = "start";

//Game logic variable
let velocityY = 0.1;
let acceleration = 0.2;

//Start screen for game
function startScreen() {
  backgroundGame();
  button();
  //Text
  fill(0, 102, 204);
  noStroke();
  push();
  textSize(50);
  text("MONKEY FALL", 275, -300, [100, 100]);
  pop();
  push();
  textSize(30);
  text("HELP THE MONKEY TO THE BANANAS", 150, -240, [100, 100]);
  pop();
}

//Game screen
function gameScreen() {
  backgroundGame();
  monkey(monkeyX, monkeyY);
}
//Lost screen
function lostResult() {
  background(199, 233, 255);
  //Re-play button
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
  text("RE-PLAY", 245, 15, [100, 100]);
}

//Won screen
function wonResult() {
  background(229, 204, 255);
  //Re-play button
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
  text("RE-PLAY", 245, 15, [100, 100]);
}

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

function button() {
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
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
    if ((monkeyY = 1210)) {
      monkeyY = monkeyY + speed;
    }

    //Gravity logic
    monkeyY = monkeyY + velocityY;
    velocityY = velocityY + acceleration;

    if (keyIsDown(32)) {
      velocityY = velocityY - 0.1;
    }
  }
}

function mouseClicked() {
  if (mouseX > 204 && mouseX < 494 && mouseY > 231 && mouseY < 417) {
    console.log("Starting the game");
    state = "game";
  }
}