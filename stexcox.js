var LivingCreature = require("./liv.creature");
module.exports = class Stexcox  extends LivingCreature{
    constructor(x, y) {
        super(x, y);
        this.energy = 1;
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    chooseCell(character) {
        this.getNewDirections()
        return super.chooseCell(character);
    }

    mult() {
        var emptyArr = this.chooseCell(0);
        var num = Math.floor(Math.random() * emptyArr.length)
        var empty = emptyArr[num];
        
        if (empty && this.energy > 12) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            var st = new Stexcox(newX, newY)
            stexcoxArr.push(st)
        }
    }

    move() {
        var emptyArr = this.chooseCell(0);
        var num = Math.floor(Math.random() * emptyArr.length)
        var empty = emptyArr[num];

        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
    }
    eat() {
        var foodArr = this.chooseCell(0);
        var num = Math.floor(Math.random() * foodArr.length)
        var food = foodArr[num];
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0

            for (var i in kerparArr) {
                if (kerparArr[i].x == newX && kerparArr[i].y == newY) {
                    kerparArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 2
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in stexcoxArr) {
                if (stexcoxArr[i].x == this.x && stexcoxArr[i].y == this.y) {
                    stexcoxArr.splice(i, 1)
                }
            }
        }
    }
}