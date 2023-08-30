var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 50, 50);

ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.strokeRect(30, 30, 50, 50);