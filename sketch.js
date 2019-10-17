let mouseCounter = -1;
let mouseCircle;
const mouseAccept = 15;
const r = 10;
function setup() {
  const minDim = min(windowWidth, windowHeight);
  createCanvas(minDim, minDim - 4);
  mouseCircle = createVector(0);
  ellipseMode(RADIUS);
  background(220);
  colorMode(HSB, 1);
}
function windowResized() {
  const minDim = min(windowWidth, windowHeight);
  createCanvas(minDim, minDim - 4);
  background(220);
}
function draw() {
  background(220);
  if (mouseIsPressed) {
    mouseCounter++;
    if (mouseCounter == 0) {
      mouseCircle.set(mouseX, mouseY);
    } else if (mouseCounter > mouseAccept) {
      mouseCounter = mouseAccept;
    }
  }
  else {
    mouseCounter = -1;
  }
  const percent = clamp(mouseCounter / mouseAccept, 0, 1);
  const zeroAngle = -HALF_PI;
  stroke(color(.3, 1, map(percent, 0, 1, 0, .5), .5));
  fill(color(.3, 1, map(percent, 0, 1, .5, 1), .5));
  if (mouseCounter > 0) {
    print(mouseCounter / mouseAccept);
    arc(mouseCircle.x, mouseCircle.y, r, r, zeroAngle, zeroAngle + (percent * TWO_PI));
  }
}
function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}
function average(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length
}