const RED = 'r'
const YELLOW = 'y'
const BLUE = 'b'
const BLACK = 'k'
const WHITE = 'w'

class Tile {
    constructor(colorIndex) {
        this.colorIndex = colorIndex;
    }
}
class Bag {
    constructor() {
        this.contents = [];
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 20; j++) {
                this.contents.push(new Tile(i));
            }
        }
    }
}