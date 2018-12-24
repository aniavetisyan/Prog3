var LivingCreature = require("./liv.creature");
module.exports = class Grass extends LivingCreature{
    mult() {
        var emptyArr = this.chooseCell(0);
        var num = Math.floor(Math.random() * emptyArr.length)
        var empty = emptyArr[num];
        this.multiply++
        if (empty && this.multiply >= 4) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1;
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
    }
}

