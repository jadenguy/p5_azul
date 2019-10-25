let input;
let bag;
const bgColor = 200;

function setup() {
  const minDim = min(windowWidth, windowHeight);
  createCanvas(minDim, minDim - 4);
  input = new InputChecker();
  bag = new Bag();
  background(bgColor);

}
function windowResized() {
  const minDim = min(windowWidth, windowHeight);
  createCanvas(minDim, minDim - 4);
  background(bgColor);
}
function draw() {
  background(bgColor);
  const isInputted = input.Update()
  if (isInputted) {
    input.Draw();
  }
}
function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}
function average(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length
}