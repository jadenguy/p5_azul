const RED = 'r'
const YELLOW = 'y'
const BLUE = 'b'
const BLACK = 'k'
const WHITE = 'w'

class Tile {
    constructor(colorIndex) {
        this.colorIndex = colorIndex;
    }
    toString() {
        let ret;
        switch (this.colorIndex) {
            case 0:
                ret = RED;
                break;
            case 1:
                ret = YELLOW;
                break;
            case 2:
                ret = BLUE;
                break;
            case 3:
                ret = BLACK;
                break;
            case 4:
                ret = WHITE;
                break;
            default:
                break;
        }
        return ret;
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