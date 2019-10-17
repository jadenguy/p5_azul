let mouseCounter = -1;
let mouseCircle;
const mouseAccept = 15;
const bgColor = 100;
const r = 10;
function setup() {
  const minDim = min(windowWidth, windowHeight);
  createCanvas(minDim, minDim - 4);
  mouseCircle = createVector(0);
  background(bgColor);
}
function windowResized() {
  const minDim = min(windowWidth, windowHeight);
  createCanvas(minDim, minDim - 4);
  background(bgColor);
}
function draw() {
  background(bgColor);
  if (mouseCheck()) {
    mouseDraw();
  }
}
function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}
function average(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length
}
function mouseDraw() {
  push();
  ellipseMode(RADIUS);
  colorMode(HSB, 1);
  const percent = clamp(mouseCounter / mouseAccept, 0, 1);
  const zeroAngle = -HALF_PI;
  stroke(0);
  fill(0, 1, 1, .5);
  circle(mouseCircle.x, mouseCircle.y, r);
  stroke(color(.3, 1, map(percent, 0, 1, 0, .5)));
  fill(color(.3, 1, map(percent, 0, 1, .5, 1)));
  print(mouseCounter / mouseAccept);
  arc(mouseCircle.x, mouseCircle.y, r, r, zeroAngle, zeroAngle + (percent * TWO_PI));
  pop();
}
function mouseCheck() {
  if (mouseIsPressed) {
    mouseCounter++;
    if (mouseCounter == 1) {
      mouseCircle.set(mouseX, mouseY);
    }
    else if (mouseCounter > mouseAccept) {
      mouseCounter = mouseAccept;
    }
    return true;
  }
  else {
    mouseCounter = 0;
    return false;
  }
}