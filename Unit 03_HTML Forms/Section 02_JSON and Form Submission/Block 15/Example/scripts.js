let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

ctx.fillRect(50, 150, 200, 100); // House body
ctx.beginPath();
ctx.moveTo(50, 150);
ctx.lineTo(150, 50);
ctx.lineTo(250, 150);
ctx.closePath();
ctx.stroke();
 