grassArr = [];
xotakerArr = [];
gishatichArr = [];
kerparArr = [];
stexcoxArr = [];
Kerpar1init = 0;
Xotakerinit = 0;


var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static("./"));
app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);


io.on('connection', function (socket){

});

var Grass = require("./grass.js");
var Xotaker = require("./xotaker.js");
var Gishatich = require("./gishatich.js");
var Kerpar = require("./kerpar.js");
var Stexcox = require("./stexcox.js");

function getMatrix(w, h){
    var matrix = [];
    for(var y = 0; y < h; y++){
        matrix[y] = [];
        for(var x = 0; x < w;x++){
            var r= Math.floor(Math.random()*100);
            if(r < 20) r = 0;
            else if(r < 65) r = 1;
            else if(r < 90) r = 2;
            else if(r < 100) r = 3;
            matrix[y][x] = r;
        }
    }
    return matrix;
}
var w = 30;
var h = 30;

matrix = getMatrix(w, h);
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y)
            grassArr.push(gr)
        }
        else if (matrix[y][x] == 2) {
            var xt = new Xotaker(x, y)
            xotakerArr.push(xt)
        }
        else if (matrix[y][x] == 3) {
            var gi = new Gishatich(x, y)
            gishatichArr.push(gi)
        }
        else if (matrix[y][x] == 4) {
            var ke = new Kerpar(x, y)
            kerparArr.push(ke)
        }
        else if (matrix[y][x] == 5) {
            var st = new Stexcox(x, y)
            stexcoxArr.push(st)
        }
    }
}


function drawServerayin() {

    for (var i in grassArr) {
        grassArr[i].mult()
    }


    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat()
        gishatichArr[i].move()
        gishatichArr[i].mult()
        gishatichArr[i].die()
    }
    if(Weather = "dzmer")
    for (var i in gishatichArr) {
        gishatichArr[i].eat()
        gishatichArr[i].move()
        gishatichArr[i].mult()
        gishatichArr[i].die()
    }
    for (var i in kerparArr) {
        kerparArr[i].eat()
        kerparArr[i].move()
        kerparArr[i].mult()
        kerparArr[i].die()
    }
    for (var i in stexcoxArr) {
        stexcoxArr[i].eat()
        stexcoxArr[i].move()
        stexcoxArr[i].mult()
        stexcoxArr[i].die()
    }
    // console.log(matrix);
    io.sockets.emit('matrix', matrix)
}

Weather = "garun";
Weatherinit = 0;

function changeWeather(){
    Weatherinit++
    if(Weatherinit == 5){
        Weatherinit = 1;

    }

    console.log(Weatherinit);
    if(Weatherinit == 1){
        Weather = "garun";
    }
    else if(Weatherinit == 2){
        Weather = "amar";
    }
    else if(Weatherinit == 3){
        Weather = "ashun";
    }
    else if(Weatherinit == 4){
        Weather = "dzmer";
    }


    io.sockets.emit("dzmer", Weather);
}

setInterval(drawServerayin, 2000);

setInterval(changeWeather, 4000);


statistics = {"smthg":[]};


setInterval(function(){
    statistics.smthg.push({
        "Kerpar1_Born": Kerpar1init,
        "Xotaker_Born": Xotakerinit,
    })

fs.writeFile("statistics.json", JSON.stringify(statistics),function(err) {
    if (err) throw err;
})
},13000);


