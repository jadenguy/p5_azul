class InputChecker {
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
        arc(this.cCenter.x, this.cCenter.y, this.r, this.r, zeroAngle, zeroAngle + (percent * TWO_PI));
        pop();
    }
    mouseCheck() {
        if (mouseIsPressed) {
            this.mouseCounter++;
            if (this.mouseCounter == 1) {
                this.cCenter.set(mouseX, mouseY);
            }
            else if (this.mouseCounter >= this.mouseAccept) {
                this.mouseCounter = this.mouseAccept;
                this.done = true;
            }
            return true;
        }
        else {
            this.mouseCounter = 0;
            this.done = false;
            return false;
        }
    }
    Update() { return this.mouseCheck(); }
    Draw() { this.mouseDraw(); }
}