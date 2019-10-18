let ui;
const bgColor = 100;

function setup() {
  const minDim = min(windowWidth, windowHeight);
  createCanvas(minDim, minDim - 4);
  ui = new UI();
  background(bgColor);
}
function windowResized() {
  const minDim = min(windowWidth, windowHeight);
  createCanvas(minDim, minDim - 4);
  background(bgColor);
}
function draw() {
  background(bgColor);
  const uiSelect = ui.mouseCheck()
  if (uiSelect) {
    ui.mouseDraw();
  }
}
function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}
function average(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length
}













class UI {
  constructor() {
    this.mouseCounter = -1;
    this.cCenter = createVector(0);
    this.mouseAccept = 15;
    this.r = 10;
  }
  mouseDraw() {
    push();
    ellipseMode(RADIUS);
    colorMode(HSB, 1);
    const percent = clamp(this.mouseCounter / this.mouseAccept, 0, 1);
    const zeroAngle = -HALF_PI;
    stroke(0);
    fill(0, 1, 1, .5);
    arc(this.cCenter.x, this.cCenter.y, this.r, this.r, zeroAngle + (percent * TWO_PI), zeroAngle);
    stroke(.3, 1, map(percent, 0, 1, 0, .5));
    fill(.3, 1, map(percent, 0, 1, .5, 1), .5);
    // print(this.mouseCounter / this.mouseAccept);
    arc(this.cCenter.x, this.cCenter.y, this.r, this.r, zeroAngle, zeroAngle + (percent * TWO_PI));
    pop();
  }
  mouseCheck() {
    if (mouseIsPressed) {
      this.mouseCounter++;
      if (this.mouseCounter == 1) {
        this.cCenter.set(mouseX, mouseY);
      }
      else if (this.mouseCounter > this.mouseAccept) {
        this.mouseCounter = this.mouseAccept;
      }
      return true;
    }
    else {
      this.mouseCounter = 0;
      return false;
    }
  }
}