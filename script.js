var side = 10;
var w = 30;
var h = 30;
var socket = io();
weather = "garun";
function setup(){
    frameRate(1000);
    createCanvas(w*side, h*side);
    background('#acacac');
}

function drawMatrix(matrix) {
    console.log(weather);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                
                if(weather == "dzmer" || weather == "ashun"){
                    fill("white");
                }
                else if(weather == "garun" || weather == "amar"){
                    fill("green");
                }
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("purple");
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            
            rect(x * side, y * side, side, side)

        }
    }

}
socket.on('matrix', drawMatrix);
socket.on("dzmer", function(w){
    weather = w;
});

