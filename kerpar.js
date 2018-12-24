var LivingCreature = require("./liv.creature");
module.exports = class Kerpar extends LivingCreature{
    constructor(x, y) {
        super(x,y);
        this.energy = 3;

     
    }

    getNewDirections() {
        this.directions = [
            [this.x - 2, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2]
        ]
    }
  
    chooseCell(character) {
        this.getNewDirections();
        return super.chooseCell(character);
    }
 

    mult() {
        var emptyArr = this.chooseCell(0);
        var num = Math.floor(Math.random() * emptyArr.length)
        var empty = emptyArr[num];
        
        if (empty && this.energy > 10) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            var kr = new Kerpar(newX, newY)
            kerparArr.push(kr)
        }
    }

    move() {
        var emptyArr = this.chooseCell(0);
        var num = Math.floor(Math.random() * emptyArr.length)
        var empty = emptyArr[num];
        
        this.energy--;
        if (empty) {
            Kerpar1init++ 
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
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
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            for (var i in gishatichArr) {
                if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                    gishatichArr.splice(i, 1)
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
            for (var i in kerparArr) {
                if (kerparArr[i].x == this.x && kerparArr[i].y == this.y) {
                    kerparArr.splice(i, 1)
                }
            }
        }
    }
}